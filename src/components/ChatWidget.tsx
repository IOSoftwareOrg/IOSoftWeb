"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { sendGTMEvent } from "@next/third-parties/google";
import type { Locale } from "@/lib/i18n";

type ChatMessage = { role: "user" | "assistant"; content: string };

const t = {
  fr: {
    title: "IO Software",
    subtitle: "Assistant IA",
    openLabel: "Ouvrir le chat",
    closeLabel: "Fermer le chat",
    greeting: "Bonjour, dites-moi ce dont vous avez besoin et je vous oriente vers le bon interlocuteur chez IO Software.",
    placeholder: "Écrivez votre message…",
    send: "Envoyer",
    gdprPrefix: "En discutant ici, vos échanges peuvent être transmis à IO Software pour traiter votre demande. ",
    gdprLink: "Politique de confidentialité",
    errorGeneric: "Une erreur est survenue. Vous pouvez réessayer ou utiliser le formulaire de contact.",
    rateLimited: "Trop de messages. Merci de patienter quelques minutes.",
  },
  en: {
    title: "IO Software",
    subtitle: "AI Assistant",
    openLabel: "Open chat",
    closeLabel: "Close chat",
    greeting: "Hello, tell me what you need, and I'll point you to the right person at IO Software.",
    placeholder: "Type your message…",
    send: "Send",
    gdprPrefix: "By chatting here, your messages may be shared with IO Software to process your request. ",
    gdprLink: "Privacy policy",
    errorGeneric: "Something went wrong. You can try again or use the contact form.",
    rateLimited: "Too many messages. Please wait a few minutes.",
  },
};

export default function ChatWidget({ lang = "fr" }: { lang?: Locale }) {
  const d = t[lang];
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [pending, setPending] = useState(false);
  const qualifiedRef = useRef(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, pending]);

  useEffect(() => {
    if (open && !pending) {
      inputRef.current?.focus();
    }
  }, [open, pending]);

  function handleOpen() {
    setOpen(true);
    sendGTMEvent({ event: "chat_opened", lang });
  }

  function handleClose() {
    setOpen(false);
    const messageCount = messages.filter((m) => m.role === "user").length;
    if (messageCount > 0 && !qualifiedRef.current) {
      sendGTMEvent({ event: "chat_abandoned", lang, message_count: messageCount });
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || pending) return;

    const nextMessages = [...messages, { role: "user", content: text } as ChatMessage];
    const messageCount = nextMessages.filter((m) => m.role === "user").length;
    setMessages(nextMessages);
    setInput("");
    setPending(true);
    sendGTMEvent({ event: "chat_message_sent", lang, message_count: messageCount });

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages, lang, qualified: qualifiedRef.current }),
      });

      if (!res.ok) {
        const message = res.status === 429 ? d.rateLimited : d.errorGeneric;
        setMessages((prev) => [...prev, { role: "assistant", content: message }]);
        return;
      }

      const data = await res.json();
      setMessages((prev) => [...prev, { role: "assistant", content: data.reply || d.errorGeneric }]);

      if (data.qualified && !qualifiedRef.current) {
        qualifiedRef.current = true;
        sendGTMEvent({ event: "chat_qualified", lang, message_count: messageCount });
      }
    } catch (err) {
      console.error("Chat widget error:", err);
      setMessages((prev) => [...prev, { role: "assistant", content: d.errorGeneric }]);
    } finally {
      setPending(false);
    }
  }

  const displayMessages: ChatMessage[] = messages.length === 0 ? [{ role: "assistant", content: d.greeting }] : messages;

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-[90] w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[70vh] bg-white rounded-lg shadow-2xl border border-[#e2e8f0] flex flex-col overflow-hidden">
          <div className="bg-[#1e3a5f] text-white px-4 py-3 flex items-center justify-between shrink-0">
            <div>
              <p className="font-semibold text-sm leading-tight">{d.title}</p>
              <p className="text-xs text-[#c9a84c]">{d.subtitle}</p>
            </div>
            <button onClick={handleClose} aria-label={d.closeLabel} className="text-white/80 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {displayMessages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <p
                  className={`max-w-[80%] rounded-lg px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === "user" ? "bg-[#1e3a5f] text-white" : "bg-[#f1f5f9] text-[#0f172a]"
                  }`}
                >
                  {m.content}
                </p>
              </div>
            ))}
            {pending && (
              <div className="flex justify-start">
                <p className="bg-[#f1f5f9] text-[#64748b] rounded-lg px-3 py-2 text-sm">…</p>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-[#e2e8f0] p-3 shrink-0">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={d.placeholder}
                disabled={pending}
                className="flex-1 border border-[#e2e8f0] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1e3a5f]/30 focus:border-[#1e3a5f] disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={pending || !input.trim()}
                className="bg-[#1e3a5f] hover:bg-[#2d5a8e] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold px-3 py-2 rounded-lg transition-colors"
              >
                {d.send}
              </button>
            </div>
            <p className="text-[10px] text-[#94a3b8] mt-2 leading-snug">
              {d.gdprPrefix}
              <Link href={`/${lang}/politique-de-confidentialite`} className="underline hover:text-[#64748b]">
                {d.gdprLink}
              </Link>
            </p>
          </form>
        </div>
      )}

      <button
        onClick={open ? handleClose : handleOpen}
        aria-label={open ? d.closeLabel : d.openLabel}
        className="fixed bottom-6 right-6 z-[90] w-14 h-14 rounded-full bg-white hover:bg-[#f1f5f9] shadow-lg border-2 border-[#1e3a5f] flex items-center justify-center text-[#1e3a5f] transition-colors"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        )}
      </button>
    </>
  );
}
