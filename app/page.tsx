import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Reviews from '@/components/Reviews'
import WaitlistSection from '@/components/WaitlistSection'
import Footer from '@/components/Footer'

export const revalidate = 60

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <Hero />
        <Features />
        <Reviews />
        <WaitlistSection />
      </main>
      <Footer />
    </>
  )
}
