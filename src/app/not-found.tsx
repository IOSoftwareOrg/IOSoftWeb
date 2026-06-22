import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#1e3a5f] flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-[#c9a84c] font-mono text-6xl font-bold mb-4">404</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Page introuvable
        </h1>
        <p className="text-white/60 max-w-md mx-auto mb-10">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[#c9a84c] hover:bg-[#b8943d] text-white font-semibold px-6 py-3 rounded-md transition-colors text-sm"
          >
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="border border-white/30 hover:border-white text-white font-semibold px-6 py-3 rounded-md transition-colors text-sm"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
