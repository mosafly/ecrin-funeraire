import WaitlistForm from './WaitlistForm'

export default function WaitlistSection() {
  return (
    <section className="section-participer" id="participer">
      <div className="participer-inner">
        <div className="participer-head">
          <h2 className="participer-title">Participez à la création de l&apos;application.</h2>
        </div>
        <WaitlistForm />
      </div>
    </section>
  )
}
