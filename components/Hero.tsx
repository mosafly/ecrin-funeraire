export default function Hero() {
  return (
    <section className="hero" id="accueil">
      <div className="hero-bg">
        <img src="/assets/photos/photo-stock-01.jpg" alt="" />
      </div>
      <div className="hero-gradient"></div>

      <div className="hero-content">
        <h1 className="hero-title">
          Créer une cérémonie funéraire personnalisée en quelques minutes
        </h1>

        <p className="hero-subtitle">
          Application pour maîtres de cérémonie :<br />
          Collectez les informations des familles.<br />
          Générez vos textes, poèmes, musiques, citations, diaporamas.<br />
          Créez vos supports.
        </p>

        <div className="hero-bandeau">
          <span>Gagner du temps</span>
          <span className="hero-bandeau-sep">·</span>
          <span>Structurer la cérémonie</span>
          <span className="hero-bandeau-sep">·</span>
          <span>Produire les documents</span>
        </div>

        <div className="hero-cta">
          <a href="#participer" className="btn btn-white">
            Participer à la création de l&apos;application
          </a>
        </div>
      </div>
    </section>
  )
}
