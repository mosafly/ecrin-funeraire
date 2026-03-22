import Image from 'next/image'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[3px] bg-[rgba(255,255,255,0.7)] border-b border-[rgba(212,175,55,0.1)] px-20">
      <div className="max-w-[1280px] mx-auto h-24 flex items-center px-12">
        <a href="#" className="flex items-center gap-4 shrink-0">
          <div className="w-[72px] h-[72px] rounded-[10px] overflow-hidden flex-shrink-0">
            <Image
              src="/assets/logo/ecrin-logo.png"
              alt="L'Écrin Funéraire"
              width={72}
              height={72}
            />
          </div>
          <span
            className="text-[28px] text-[#080d1e] tracking-[2.4px] uppercase not-italic"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            L&apos;Écrin Funéraire
          </span>
        </a>
        <nav className="ml-auto flex items-center gap-12">
          {[
            { label: 'Accueil', href: '#' },
            { label: 'Fonctionnalités', href: '#fonctionnalites' },
            { label: "Retour d'Expérience", href: '#retour' },
            { label: 'Participer', href: '#participer' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#080d1e] text-xs font-semibold tracking-[2px] uppercase"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
