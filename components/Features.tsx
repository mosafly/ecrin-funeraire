export default function Features() {
  return (
    <section className="section-features" id="fonctionnalites">
      <div className="features-wrap">
        <h2 className="features-title">Fonctionnalités</h2>

        <div className="feat-grid-top">
          <div className="feat-card">
            <div className="feat-icon">
              <img src="/assets/icons/icon-collect.svg" alt="" />
            </div>
            <h3 className="feat-name">Avant la cérémonie : collecter les informations</h3>
            <ul className="feat-list">
              <li>Vous recevez la famille pour un entretien.</li>
              <li>Vous contactez la famille par téléphone.</li>
              <li>Vous envoyez un formulaire à la famille.</li>
            </ul>
          </div>

          <div className="feat-card">
            <div className="feat-icon">
              <img src="/assets/icons/icon-prep.svg" alt="" />
            </div>
            <h3 className="feat-name">Préparation</h3>
            <p className="feat-desc">L&apos;application génère automatiquement en fonction des informations collectées :</p>
            <ul className="feat-list">
              <li>Des textes de cérémonie.</li>
              <li>Une trame de cérémonie.</li>
              <li>Des idées de poèmes, musiques, textes, citations.</li>
              <li>Des diaporamas en fonction des photos et de la musique choisie par la famille.</li>
            </ul>
          </div>

          <div className="feat-card">
            <div className="feat-icon">
              <img src="/assets/icons/icon-supports.svg" alt="" />
            </div>
            <h3 className="feat-name">Supports</h3>
            <p className="feat-desc">Vous créez en 1 clic :</p>
            <ul className="feat-list">
              <li>Des cartes famille.</li>
              <li>Des cartes hommage.</li>
              <li>Un livret hommage.</li>
              <li>Un registre personnalisé.</li>
              <li>Des cartes de remerciement.</li>
            </ul>
          </div>
        </div>

        <div className="bandeau-cta">
          <a href="#participer">Participer à la création de l&apos;application</a>
        </div>
      </div>
    </section>
  )
}
