"use client";

import { motion } from "framer-motion";
import { Star, ExternalLink, Smartphone, Monitor, Apple } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Game } from "../gameLink/gamelink";

export function GameCard({ game, index }: { game: Game; index: number }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="cursor-pointer group"
        >
          {/* Image Card */}
          <div className="aspect-square rounded-3xl relative overflow-hidden mb-4 
            bg-gradient-to-b from-gray-900/70 via-gray-800/50 to-gray-900/80 
            shadow-lg group-hover:shadow-2xl group-hover:shadow-red-600/40 
            transition-all duration-500">
            <img
              src={game.image}
              alt={game.name}
              className="w-full h-full object-cover rounded-3xl 
              group-hover:scale-110 transition-transform duration-500 ease-out"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            {/* Game title overlay on hover */}
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 
              transition-opacity duration-300">
              <h3 className="text-lg font-bold text-yellow-400 drop-shadow-lg">
                {game.name}
              </h3>
            </div>
          </div>

          {/* Details Below */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <h3 className="text-white font-bold text-base group-hover:text-yellow-400 transition-colors duration-300">
                {game.name}
              </h3>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current drop-shadow" />
                <span className="text-yellow-400 text-sm font-semibold">
                  {game.rating}
                </span>
              </div>
            </div>

            {game.tag && (
              <span className="text-xs px-3 py-1 bg-gradient-to-r from-red-600 to-red-700 
                text-white rounded-full font-semibold shadow-md tracking-wide">
                {game.tag}
              </span>
            )}
          </div>
        </motion.div>
      </DialogTrigger>

      {/* Dialog Content */}
      <DialogContent className="max-w-md p-0 border-0 bg-transparent overflow-hidden rounded-2xl shadow-2xl">
        {/* Background Image */}
        <div className="relative w-full h-[500px] rounded-2xl overflow-hidden">
          <img
            src={game.image}
            alt={game.name}
            className="w-full h-full object-cover scale-105"
          />

          {/* Gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

          {/* Content overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <div>
              {/* Title and Info */}
              <DialogHeader className="mb-3">
                <DialogTitle className="text-3xl font-extrabold text-white mb-3 drop-shadow-xl">
                  {game.name}
                </DialogTitle>
              </DialogHeader>

              {/* Rating & Tag */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1 bg-yellow-500/20 backdrop-blur-sm rounded-full px-3 py-1 shadow-inner">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-yellow-400 text-sm font-bold">
                    {game.rating}
                  </span>
                </div>
                {game.tag && (
                  <span className="text-xs px-3 py-1 bg-red-600/90 backdrop-blur-sm 
                    text-white rounded-full font-semibold shadow-lg">
                    {game.tag}
                  </span>
                )}
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                {game.link && (
                  <Button
                    asChild
                    className="bg-gradient-to-r from-blue-600 to-blue-700 
                    hover:from-blue-700 hover:to-blue-800 text-white shadow-lg 
                    font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <a href={game.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" /> Website
                    </a>
                  </Button>
                )}

                {game.android && (
                  <Button
                    asChild
                    className="bg-gradient-to-r from-green-600 to-green-700 
                    hover:from-green-700 hover:to-green-800 text-white shadow-lg 
                    font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <a href={game.android} target="_blank" rel="noopener noreferrer">
                      <Smartphone className="h-4 w-4 mr-2" /> Android
                    </a>
                  </Button>
                )}

                {game.ios && (
                  <Button
                    asChild
                    className="bg-gradient-to-r from-gray-700 to-gray-800 
                    hover:from-gray-800 hover:to-gray-900 text-white shadow-lg 
                    font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <a href={game.ios} target="_blank" rel="noopener noreferrer">
                      <Apple className="h-4 w-4 mr-2" /> iOS
                    </a>
                  </Button>
                )}

                {game.play && (
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-600 to-purple-700 
                    hover:from-purple-700 hover:to-purple-800 text-white shadow-lg 
                    font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <a href={game.play} target="_blank" rel="noopener noreferrer">
                      <Monitor className="h-4 w-4 mr-2" /> Play Online
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
