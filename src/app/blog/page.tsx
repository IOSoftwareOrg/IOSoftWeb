import type { Metadata } from "next";
import Blog from "@/components/Blog";

export const metadata: Metadata = {
  title: "Blog — IO Software",
  description:
    "Articles et ressources sur la finance, la stratégie, le management, le lean et les systèmes d'information.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-[#1e3a5f] pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[#c9a84c] text-sm font-semibold uppercase tracking-widest">
            Ressources
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-3">
            Blog & Actualités
          </h1>
          <p className="text-white/70 mt-4 max-w-xl">
            Finance, stratégie, management, lean, droit, économie et informatique —
            les ressources de nos consultants pour les dirigeants.
          </p>
        </div>
      </section>
      <Blog hideHeader />
    </>
  );
}
