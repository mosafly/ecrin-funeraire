import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative bg-[#080d1e] px-20 py-24 overflow-hidden">
      {/* Deco */}
      <div className="absolute top-0 left-0 w-[271px] h-[271px] opacity-5 pointer-events-none">
        <Image src="/assets/deco/deco-footer.png" alt="" width={271} height={271} />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-12 flex items-center justify-between">
        {/* Brand */}
        <div className="flex flex-col gap-6 w-[373px]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
              <Image src="/assets/logo/ecrin-logo.png" alt="L'Écrin Funéraire" width={40} height={40} />
            </div>
            <span
              className="text-[20px] text-white tracking-[2px] uppercase"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              L&apos;Écrin Funéraire
            </span>
          </div>
          <p className="text-[#6b7280] text-[10px] font-light tracking-[1px] uppercase">
            © 2024 L&apos;Écrin Funéraire. L&apos;élégance du dernier hommage.
          </p>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-12">
          {[
            { label: 'Accueil', href: '#' },
            { label: 'Fonctionnalités', href: '#fonctionnalites' },
            { label: "Retour d'Expérience", href: '#retour' },
            { label: 'Participer', href: '#participer' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#9ca3af] text-[10px] font-semibold tracking-[3px] uppercase"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
