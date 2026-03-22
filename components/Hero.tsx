'use client'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-24" id="accueil">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/photos/hero-bg.jpg"
          alt="L'Écrin Funéraire"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(8,13,30,0.55) 0%, rgba(8,13,30,0.48) 40%, rgba(8,13,30,0.18) 75%, rgb(253,252,251) 100%)',
        }}
      />
      {/* Content */}
      <div className="relative z-10 max-w-[900px] w-full flex flex-col items-center text-center px-6 md:px-8">
        <h1
          className="hero-anim-1 font-['Cormorant_Garamond'] font-light text-[32px] sm:text-[44px] lg:text-[58px] leading-[1.15] text-white mb-6 md:mb-8"
          style={{
            textShadow:
              '0px 0px 60px rgba(8,13,30,0.55), 0px 2px 20px rgba(8,13,30,0.8)',
          }}
        >
          Créer une cérémonie funéraire personnalisée en quelques minutes
        </h1>
        <p
          className="hero-anim-2 text-[15px] md:text-[18px] leading-[1.7] text-[rgba(255,255,255,0.9)] italic mb-8 md:mb-10"
          style={{
            textShadow:
              '0px 0px 40px rgba(8,13,30,0.5), 0px 1px 12px rgba(8,13,30,0.75)',
            fontFamily: 'Georgia, serif',
          }}
        >
          Application pour maîtres de cérémonie et conseillers funéraires :{' '}
          <strong style={{ fontWeight: 700, fontStyle: 'italic' }}>Collectez</strong> les informations des familles,{' '}
          <strong style={{ fontWeight: 700, fontStyle: 'italic' }}>Générez</strong> vos textes, poèmes, musiques, citations, diaporamas,{' '}
          <strong style={{ fontWeight: 700, fontStyle: 'italic' }}>Créez</strong> vos supports personnalisés
        </p>
        <a
          href="#participer"
          className="hero-anim-3 cta-lift block text-center bg-white border border-[rgba(212,175,55,0.2)] px-6 py-4 md:px-12 md:py-5 text-[#080d1e] text-xs font-semibold tracking-[2.4px] uppercase leading-relaxed"
        >
          Participer à la création de l&apos;application ou Rejoindre les bêta-testeurs
        </a>
      </div>
    </section>
  )
}
