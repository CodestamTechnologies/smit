'use client'
import {  Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Twitch } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="glass-effect mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <motion.div
              className="flex items-center space-x-3 flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >

              <Image
                src={'/logo.png'}
                alt="logo image for tanya smit"
                height={120}
                width={120}
              />
            </motion.div>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              TANYA SMIT is your ultimate gaming hub.
              Explore next-gen titles, join tournaments, and connect with a global community of gamers.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Youtube className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
              <Twitch className="h-5 w-5 text-gray-400 hover:text-yellow-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Games</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Tournaments</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Leaderboard</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Game Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Rules & Fair Play</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400">support@mariskasmit.gg</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400">+1 (555) 987-6543</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-yellow-400" />
                <span className="text-gray-400">Global Gaming Community</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 MARISKA SMIT. All rights reserved. | Play Without Limits
            </div>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Esports Ready</span>
              <span>•</span>
              <span>Cross-Platform</span>
              <span>•</span>
              <span>Secure Gaming</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
