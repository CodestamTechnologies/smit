"use client"

import { Flame, TrendingUp, Play, Star } from "lucide-react"
import { motion } from "framer-motion"
import { hotGames, TopGames } from "../gameLink/gamelink"
import { GameCard } from "./GameCard"




export default function GamesSection() {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-900/5 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Games */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center space-x-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-3 rounded-2xl glass-effect glow-red">
              <Flame className="h-10 w-10 text-red-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white text-glow">Top Games</h2>
            <div className="p-3 rounded-2xl glass-effect glow-red">
              <Flame className="h-10 w-10 text-red-500" />
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {TopGames.map((game, index) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Hot Games */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="flex items-center justify-center space-x-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="p-3 rounded-2xl glass-effect glow-gold">
              <TrendingUp className="h-10 w-10 text-yellow-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white text-glow">Hot Games</h2>
            <div className="p-3 rounded-2xl glass-effect glow-gold">
              <TrendingUp className="h-10 w-10 text-yellow-400" />
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {hotGames.map((game, index) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}