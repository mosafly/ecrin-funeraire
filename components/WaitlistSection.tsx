import WaitlistForm from './WaitlistForm'
import Image from 'next/image'

export default function WaitlistSection() {
  return (
    <section id="participer" className="relative bg-[#080d1e] px-48 py-32 overflow-hidden flex flex-col items-center">
      {/* Deco */}
      <div className="absolute top-0 bottom-0 right-0 left-1/2 opacity-10 pointer-events-none">
        <Image
          src="/assets/deco/deco-participer.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 w-[896px] px-12 flex flex-col gap-16 items-center">
        <h2
          className="font-light text-[60px] text-white text-center leading-tight"
          style={{ fontFamily: 'Cormorant Garamond, serif' }}
        >
          Participez à la création de<br />l&apos;application.
        </h2>

        {/* Form card */}
        <div className="w-full bg-[#fcfaf7] border-t-8 border-[#d4af37] rounded-sm shadow-lg">
          <div className="px-20 pt-16 pb-12">
            <h3
              className="text-[30px] text-[#080d1e] text-center mb-8"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Participer
            </h3>

            {/* Avantages */}
            <div className="border border-[#e5e7eb] p-8 mb-8">
              <p
                className="text-[22px] text-[#080d1e] mb-4"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                Avantages :
              </p>
              <ul>
                {[
                  "Construction des fonctionnalités de l'application.",
                  'Proposition tarifaire.',
                  'Accès aux visioconférences privées.',
                  'Bêta testeur.',
                ].map((item) => (
                  <li key={item} className="text-[15px] font-light leading-[1.9]">
                    <span className="text-[#d4af37]">— </span>
                    <span className="text-[#6b7280]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p
              className="text-[18px] text-[#080d1e] mb-3"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Mon adresse mail :
            </p>

            <WaitlistForm />

            {/* RGPD */}
            <div className="border-t border-[#f3f4f6] pt-6 mt-6 text-center">
              <p className="text-[#9ca3af] text-[12px] font-bold mb-1">Confidentialité (RGPD)</p>
              <p className="text-[#9ca3af] text-[12px] font-normal">
                Vos données : utilisées uniquement pour l&apos;Écrin Funéraire. Modifiables ou supprimables à tout moment.
              </p>
            </div>

            {/* Contact */}
            <div className="text-center mt-6">
              <p className="text-[#9ca3af] text-[13px]">
                Pour toutes informations complémentaires, contactez Jean-Michel REY
              </p>
              <a href="mailto:jmrey@formafuneraire.com" className="text-[#d4af37] text-[13px]">
                jmrey@formafuneraire.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
