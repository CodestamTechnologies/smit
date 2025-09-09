"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Gift, Zap, Star, Sparkles, Crown, Diamond, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

const heroCards = [
  {
    id: 1,
    title: "Welcome Bonus",
    subtitle: "Get 200% Match Bonus",
    description: "Up to $5000 + 100 Free Spins",
    icon: "gift",
    image: "/images/ppp.png",
    gradient: "from-yellow-400 via-orange-500 to-red-600"
  },
  {
    id: 2,
    title: "Daily Jackpot",
    subtitle: "Win Big Every Day",
    description: "Progressive jackpot starting at $10,000",
    icon: "zap",
    image: "/images/ppp.png",
    gradient: "from-purple-400 via-pink-500 to-red-500"
  },
  {
    id: 3,
    title: "VIP Program",
    subtitle: "Exclusive Rewards",
    description: "Premium benefits and cashback",
    icon: "star",
    image: "/images/ppp.png",
    gradient: "from-blue-400 via-purple-500 to-pink-500"
  }
]

const topGames = [
  { id: 1, name: "Mega Fortune", tag: "Jackpot", image: "/images/pic (1).jpg", rating: 4.9 },
  { id: 2, name: "Blackjack Pro", tag: "Table", image: "/images/pic (2).jpg", rating: 4.8 },
  { id: 3, name: "Roulette Royal", tag: "Classic", image: "/images/pic (3).jpg", rating: 4.7 },
  { id: 4, name: "Poker Master", tag: "Cards", image: "/images/pic (4).jpg", rating: 4.9 },
  { id: 5, name: "Lucky Sevens", tag: "Slots", image: "/images/pic (1).webp", rating: 4.6 },
  { id: 6, name: "Baccarat Elite", tag: "VIP", image: "/images/pic (1).jpg", rating: 4.8 }
]

const IconComponent = ({ iconType }: { iconType: string }) => {
  switch (iconType) {
    case "gift":
      return <Gift className="h-8 w-8 text-yellow-400" />
    case "zap":
      return <Zap className="h-8 w-8 text-yellow-400" />
    case "star":
      return <Star className="h-8 w-8 text-yellow-400" />
    default:
      return <Gift className="h-8 w-8 text-yellow-400" />
  }
}

function GameCard({ game, index }: { game: typeof topGames[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="cursor-pointer group"
    >
      {/* Image Card */}
      <div className="aspect-square rounded-2xl card-hover relative overflow-hidden mb-3">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl z-20"></div>

        {/* Play button overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-30"
          whileHover={{ scale: 1.1 }}
        >
          <div className="glass-effect rounded-full p-4 glow-gold">
            <Play className="h-8 w-8 text-yellow-400 fill-current" />
          </div>
        </motion.div>

        <img
          src={game.image}
          alt={game.name}
          className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Details Below */}
      <div className="text-center">
        <h3 className="text-white font-bold text-sm group-hover:text-yellow-400 transition-colors duration-300 mb-2">
          {game.name}
        </h3>
        <span className="text-xs px-3 py-1 red-glow text-white rounded-full font-semibold">
          {game.tag}
        </span>
      </div>
    </motion.div>
  )
}

export default function HeroSection() {
  const [currentCard, setCurrentCard] = useState(0)

  const nextCard = () => {
    setCurrentCard((prev) => (prev + 1) % heroCards.length)
  }

  const prevCard = () => {
    setCurrentCard((prev) => (prev - 1 + heroCards.length) % heroCards.length)
  }

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(nextCard, 5000)
    return () => clearInterval(interval)
  }, [])

  const currentHeroCard = heroCards[currentCard]
  const nextHeroCard = heroCards[(currentCard + 1) % heroCards.length]

  return (
    <section className="pt-42 xl:pt-24 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/heroImg.jpg"  // <-- replace with your image path
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black"></div>
      </div>

      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-20 left-10 text-yellow-400/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Crown className="h-12 w-12" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 text-red-400/20"
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <Diamond className="h-8 w-8" />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10 mt-10">
        {/* Hero Cards Section */}
        <motion.div
          className="relative "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Cards Container with Peek */}
          <div className="relative flex items-center">
            {/* Main Card */}
            <div className="w-full max-w-4xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCard}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -300 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full"
                >
                  <div className={`glass-card rounded-3xl p-6 md:p-10 h-80 flex items-center justify-between relative overflow-hidden opacity-80`}>
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${currentHeroCard.gradient} opacity-10 rounded-3xl`}></div>

                    {/* Floating Sparkles */}
                    <motion.div
                      className="absolute top-6 right-6 text-yellow-400/30"
                      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Sparkles className="h-6 w-6" />
                    </motion.div>

                    {/* Content */}
                    <div className="flex-1 z-10">
                      <motion.div
                        className="flex items-center space-x-3 mb-4"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <div className="p-2 rounded-xl glass-effect glow-gold">
                          <IconComponent iconType={currentHeroCard.icon} />
                        </div>
                        <span className="text-yellow-400 font-bold text-lg text-glow">
                          {currentHeroCard.subtitle}
                        </span>
                      </motion.div>

                      <motion.h1
                        className="text-3xl md:text-5xl font-black text-white mb-4 text-glow"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        {currentHeroCard.title}
                      </motion.h1>

                      <motion.p
                        className="text-lg md:text-xl text-gray-200 mb-6 font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                      >
                        {currentHeroCard.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
                      >
                        <Button variant="gold" size="lg" className="text-lg px-8 py-4 font-black">
                          <Gift className="mr-2 h-5 w-5" />
                          Claim Now
                        </Button>
                      </motion.div>
                    </div>

                    {/* Image */}
                    <div className="hidden md:block ml-8">
                      <img
                        src={currentHeroCard.image}
                        alt={currentHeroCard.title}
                        className="w-90 h-90 object-contain opacity-65"
                      />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Peek Card */}
            <div className="hidden lg:block w-64 ml-4 opacity-60 hover:opacity-80 transition-opacity cursor-pointer" onClick={nextCard}>
              <div className="relative rounded-2xl h-80 overflow-hidden">
                {/* Background Image */}
                <img
                  src="/images/pp1.png"
                  alt="Bowser Background"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Gradient Overlay for text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Text Content at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <h3 className="text-white font-bold text-lg mb-2">{nextHeroCard.title}</h3>
                  <p className="text-gray-200 text-sm">{nextHeroCard.subtitle}</p>
                </div>
              </div>
            </div>
          </div>


        </motion.div>


      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, type: "spring", stiffness: 200 }}
        className="flex space-x-4 justify-center items-end mt-20"
      >
        {/* Play Button */}
        <Link href={'https://www.facebook.com/share/1Ge6NPQT2Q/'} target="_blank">
          <Button variant="gold" size="lg" className="text-lg px-8 py-4 font-black flex items-center gap-2">
            <Play className="h-5 w-5" />
            Play Now
          </Button>
        </Link>
        <Link href={'https://www.facebook.com/share/1Ge6NPQT2Q/'} target="_blank"> 
          <Button variant="glass" size="lg" className="text-lg px-8 py-4 font-black flex items-center gap-2">
            <Gift className="h-5 w-5 text-yellow-400" />
            Claim Bonus
          </Button>
        </Link>

        {/* Claim Button */}

      </motion.div>


    </section>
  )
}