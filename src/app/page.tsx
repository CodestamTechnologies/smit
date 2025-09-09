import Navbar from "@/components/global/Navbar"
import HeroSection from "@/components/Landing/HeroSection"
import GamesSection from "@/components/Landing/GamesSection"
import PromotionsSection from "@/components/Landing/PromotionsSection"
import Footer from "@/components/global/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <GamesSection />
      <PromotionsSection />
      <Footer />
    </main>
  )
}