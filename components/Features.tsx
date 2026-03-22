import Image from 'next/image'

export default function Features() {
  return (
    <section className="bg-white px-20 py-32" id="fonctionnalites">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-center font-light text-[48px] text-[#080d1e] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          Notre Promesse
        </h2>
        <p className="text-center text-[18px] text-[#6b7280] font-light leading-[1.7] mb-16" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
          Application digitale conçue par un <strong style={{ fontWeight: 700 }}>professionnel du funéraire</strong> avec des <strong style={{ fontWeight: 700 }}>professionnels du funéraire</strong>, pour des <strong style={{ fontWeight: 700 }}>professionnels du funéraire</strong>.
        </p>

        {/* 3 cartes */}
        <div className="flex gap-0 items-stretch mb-16">
          {/* Carte 1 */}
          <div className="flex-1 backdrop-blur-sm bg-[rgba(255,255,255,0.7)] border border-[rgba(212,175,55,0.2)] px-12 py-14 relative shadow-[0px_10px_30px_-10px_rgba(11,21,51,0.1)]">
            <div className="mb-8">
              <Image src="/assets/icons/icon-collect.png" alt="Collecte" width={27} height={27} />
            </div>
            <h3
              className="font-bold text-[24px] text-[#080d1e] mb-4"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Avant la cérémonie :<br />Collecter les informations
            </h3>
            <ul className="space-y-0">
              {[
                'Vous recevez la famille pour un entretien',
                'Vous contactez la famille par téléphone',
                'Vous envoyez un formulaire à la famille.',
              ].map((item) => (
                <li key={item} className="text-[14px] font-light leading-[1.9]">
                  <span className="text-[#d4af37]">— </span>
                  <span className="text-[#6b7280]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Carte 2 */}
          <div className="w-[394px] backdrop-blur-sm bg-[rgba(255,255,255,0.7)] border border-[rgba(212,175,55,0.2)] px-12 py-14 relative shadow-[0px_10px_30px_-10px_rgba(11,21,51,0.1)]">
            <div className="mb-8">
              <Image src="/assets/icons/icon-prep.png" alt="Préparation" width={27} height={27} />
            </div>
            <h3
              className="font-bold text-[24px] text-[#080d1e] mb-2"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Préparation
            </h3>
            <p className="text-[#6b7280] text-[14px] font-light leading-[1.625] mb-3">
              L&apos;application génère automatiquement en<br />fonction des informations collectées :
            </p>
            <ul className="space-y-0">
              {[
                'Des textes de cérémonie.',
                'Une trame de cérémonie.',
                'Des idées de poèmes, musiques, textes, citations.',
                'Des diaporamas en fonction des photos et de la musique choisie par la famille.',
                'Vous avez toujours la maîtrise de votre cérémonie funéraire.',
              ].map((item) => (
                <li key={item} className="text-[14px] font-light leading-[1.9]">
                  <span className="text-[#d4af37]">— </span>
                  <span className="text-[#6b7280]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Carte 3 */}
          <div className="flex-1 backdrop-blur-sm bg-[rgba(255,255,255,0.7)] border border-[rgba(212,175,55,0.2)] px-12 py-14 relative shadow-[0px_10px_30px_-10px_rgba(11,21,51,0.1)]">
            <div className="mb-8">
              <Image src="/assets/icons/icon-supports.png" alt="Supports" width={27} height={27} />
            </div>
            <h3
              className="font-bold text-[24px] text-[#080d1e] mb-2"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              Supports personnalisés
            </h3>
            <p className="text-[#6b7280] text-[14px] font-light leading-[1.625] mb-3">
              Vous créez en 1 clic :
            </p>
            <ul className="space-y-0">
              {[
                'Des cartes famille.',
                'Des cartes hommage.',
                'Un livret hommage.',
                'Un registre personnalisé.',
              ].map((item) => (
                <li key={item} className="text-[14px] font-light leading-[1.9]">
                  <span className="text-[#d4af37]">— </span>
                  <span className="text-[#6b7280]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bandeau CTA */}
        <div className="border-t border-b border-[rgba(212,175,55,0.2)] py-5 flex items-center justify-center">
          <a
            href="#participer"
            className="text-[#080d1e] text-xs font-semibold tracking-[2.4px] uppercase"
          >
            Participer à la création de l&apos;application ou Rejoindre les bêta-testeurs
          </a>
        </div>
      </div>
    </section>
  )
}
