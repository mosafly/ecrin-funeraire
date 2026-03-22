import Image from 'next/image'

export default function Header() {
  return (
    <header className="header-anim fixed top-0 left-0 right-0 z-50 backdrop-blur-[3px] bg-[rgba(255,255,255,0.7)] border-b border-[rgba(212,175,55,0.1)] px-4 md:px-8 lg:px-20">
      <div className="max-w-[1280px] mx-auto h-16 md:h-20 lg:h-24 flex items-center px-2 md:px-6 lg:px-12">
        <a href="#" className="flex items-center gap-3 md:gap-4 shrink-0">
          <div className="w-10 h-10 md:w-14 md:h-14 lg:w-[72px] lg:h-[72px] rounded-[6px] md:rounded-[8px] lg:rounded-[10px] overflow-hidden flex-shrink-0">
            <Image
              src="/assets/logo/ecrin-logo.png"
              alt="L'Écrin Funéraire"
              width={72}
              height={72}
              className="w-full h-full object-cover"
            />
          </div>
          <span
            className="text-[14px] sm:text-[17px] md:text-[22px] lg:text-[28px] text-[#080d1e] tracking-[0.5px] sm:tracking-[1px] md:tracking-[2px] lg:tracking-[2.4px] uppercase not-italic"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            L&apos;Écrin Funéraire
          </span>
        </a>
      </div>
    </header>
  )
}
