import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import HowItWorks from "@/components/how-it-works"
import ForWhoSection from "@/components/for-who-section"
import StatsSection from "@/components/stats-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <FeatureSection />
      <ForWhoSection />
      <StatsSection />
      <Footer />
    </main>
  )
}

