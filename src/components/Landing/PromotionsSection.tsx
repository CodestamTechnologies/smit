"use client"

import { motion } from "framer-motion"

export default function PromotionsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-black text-white text-center mb-12 text-glow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Latest Offers
        </motion.h2>

        {/* Two Images Side by Side */}
        <div className="flex flex-col md:flex-row justify-center gap-15 ">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden group relative"
          >
            <img
              src="/images/bannerimage.jpg"
              alt="Offer 1"
              className="w-[300px] md:w-[450px] h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden group relative"
          >
            <img
              src="/images/bannerimage2.jpg"
              alt="Offer 2"
              className="w-[300px]  md:w-[450px] h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
