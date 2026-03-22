const reviews = [
  {
    author: 'Marie Delaere',
    text: `L'Écrin Funéraire c'est comme ça que je m'en suis servi pour écrire un éloge. J'avais quelques éléments, quelques consignes, et l'IA a permis de donner de la fluidité là je suis assez sèche dans mes formules. Ça m'a ouvert à de nouvelles façons d'écrire auxquelles je ne pensais pas. Comme on peut s'inspirer de livres qu'on lirait. Ce sont juste des tournures qui s'ajoutent à notre gamme. Et puis j'ai revu parce qu'elle n'avait pas tout respecté. Ce n' est pas la laisser faire à notre place. C'est l'utiliser comme on utilise un crayon ou un papier. C'est un outil.`,
  },
  {
    author: 'Ludovic FAVRAY',
    text: `Bonjour Jean-Michel j'espère que tu va bien ? Juste pour t'informer que je me suis lancé sur une cérémonie civile au créma de Lorient. Le grand exercice face à 150 personnes durant 45 min, avec des moments d'improvisation. J'ai suivi t'es conseils avec une préparation qui colle à l'image du défunt. Un retour famille au top. Merci pour t'es précieux conseils.`,
  },
  {
    author: 'Nicolas Matz',
    text: `Bonjour, J'ai vu sur Facebook votre publication sur l'application pour les maître de cérémonie funéraire et j'en suis un. Defois j'ai du mal à personnaliser et trouver des mots pour un recueil. Donc je souhaiterais avoir plus d'informations sur votre application et si possible faire les visio-conférences comme vous le notifier sur votre publication. Cordialement N.MATZ`,
  },
  {
    author: 'Marianne Gueroult',
    text: `Bonjour Je viens de découvrir votre page et je vous en remercie. Je suis célébrante laïque en funérailles, indépendante, en Suisse. Votre projet de création d'une application digitale IA est intéressante et demande un grand travail et connaissances à ce sujet. J'avoue être intéressée et curieuse des possibilités de cet outil ! Si jamais je peux me joindre à votre prochaine réunion cela est avec plaisir. Je vous remercie 🙏`,
  },
]

export default function Reviews() {
  return (
    <section id="retour" className="bg-[#fdfcfb] px-4 md:px-20 py-16 md:py-32">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 md:gap-6 mb-10 md:mb-16">
          <h2
            className="font-light text-[34px] md:text-[50px] lg:text-[60px] text-[#080d1e] text-center leading-[1.1] md:leading-[1]"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Retour d&apos;Expérience par des professionnels du funéraire
          </h2>
          <div className="w-16 h-0.5 bg-[#d4af37]" />
        </div>

        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 mb-10 md:mb-16">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="card-lift backdrop-blur-sm bg-[rgba(255,255,255,0.7)] border border-[rgba(212,175,55,0.2)] p-6 md:p-12 shadow-[0px_10px_30px_-10px_rgba(11,21,51,0.1)]"
            >
              <p
                className="font-semibold text-[14px] text-[#080d1e] mb-2"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {review.author}
              </p>
              <p
                className="text-[16px] text-[#6b7280] leading-[1.8]"
                style={{ fontFamily: 'Georgia, serif', fontWeight: 700, fontStyle: 'italic' }}
              >
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bandeau CTA */}
        <div className="border-t border-b border-[rgba(212,175,55,0.2)] py-5 flex items-center justify-center">
          <a
            href="#participer"
            className="link-arrow text-center text-[#080d1e] text-xs font-semibold tracking-[2.4px] uppercase transition-colors duration-200 hover:text-[#d4af37] leading-relaxed px-4"
          >
            Participer à la création de l&apos;application ou Rejoindre les bêta-testeurs
          </a>
        </div>
      </div>
    </section>
  )
}
