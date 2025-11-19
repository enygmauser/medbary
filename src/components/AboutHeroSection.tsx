import React from "react";
import { motion } from "framer-motion";

export default function AboutHeroSection() {
  return (
    <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <img
          src="https://images.unsplash.com/photo-1655313719493-16ebe4906441?q=80&w=1742&auto=format&fit=crop"
          alt="Healthcare background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark + Color Gradient Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900/70 via-slate-900/80 to-slate-900/90"></div>

      {/* Glassmorphic Title Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="backdrop-blur-sm bg-white/10 border border-white/20 px-8 py-6 rounded-2xl shadow-xl text-center"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-lg">
          About Us
        </h1>

        <p className="mt-3 text-slate-200 max-w-lg mx-auto text-lg">
          Learn more about our mission, values, and commitment to excellence.
        </p>
      </motion.div>
    </section>
  );
}
