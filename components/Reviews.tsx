const reviews = [
  {
    author: 'Marie Delaere',
    text: `L'Écrin Funéraire c'est comme ça que je m'en suis servi pour écrire un éloge. J'avais quelques éléments, quelques consignes, et l'IA a permis de donner de la fluidité là je suis assez sèche dans mes formules. Ça m'a ouvert à de nouvelles façons d'écrire auxquelles je ne pensais pas. Comme on peut s'inspirer de livres qu'on lirait. Ce sont juste des tournures qui s'ajoutent à notre gamme. Et puis j'ai revu parce qu'elle n'avait pas tout respecté. Ce n'est pas la laisser faire à notre place. C'est l'utiliser comme on utilise un crayon ou un papier. C'est un outil.`,
  },
  {
    author: 'Ludovic FAVRAY',
    text: `Bonjour Jean-Michel j'espère que tu va bien ?\nJuste pour t'informer que je me suis lancé sur une cérémonie civile au créma de Lorient.\nLe grand exercice face à 150 personnes durant 45 min, avec des moments d'improvisation.\nJ'ai suivi t'es conseils avec une préparation qui colle à l'image du défunt.\nUn retour famille au top.\nMerci pour t'es précieux conseils.`,
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
    <section className="section-reviews" id="retours">
      <div className="container">
        <div className="reviews-head">
          <h2 className="section-title">Retour d&apos;Expérience</h2>
          <div className="gold-bar"></div>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.author} className="review-card">
              <p className="review-author">{review.author}</p>
              <p className="review-text" style={{ whiteSpace: 'pre-line' }}>
                {review.text}
              </p>
            </div>
          ))}
        </div>

        <div className="bandeau-cta">
          <a href="#participer">Rejoignez la communauté des maîtres de cérémonie.</a>
        </div>
      </div>
    </section>
  )
}
