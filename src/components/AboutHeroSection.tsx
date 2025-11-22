import { motion } from "framer-motion";

export default function AboutHeroSection() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-30">
        <img
          src="https://images.unsplash.com/photo-1655313719493-16ebe4906441?q=80&w=1742&auto=format&fit=crop"
          alt="Healthcare background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-slate-900/60 via-slate-900/85 to-slate-900/95"></div>

      {/* Cyan Glow Overlay */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-cyan-400/20 via-cyan-300/10 to-cyan-500/5 mix-blend-overlay"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        {[...Array(18)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.15, 0.5, 0.15],
              scale: [0.8, 1.1, 0.8],
              y: [0, -40],
            }}
            transition={{
              duration: 5 + Math.random() * 6,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-cyan-300/40 rounded-full blur-[2px]"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Center Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="
          max-w-3xl px-6 py-10 text-center
          bg-white/10 backdrop-blur-md
          border border-cyan-300/30 rounded-3xl
          shadow-[0_8px_32px_rgba(0,0,0,0.25)]
        "
      >
        <h1
          className="
          text-4xl md:text-6xl 
          font-extrabold text-white 
          drop-shadow-lg tracking-tight
        "
        >
          About Us
        </h1>

        <p
          className="
          mt-4 text-lg md:text-xl 
          text-cyan-100 leading-relaxed max-w-2xl mx-auto
        "
        >
          Discover our mission, values, and unwavering commitment to delivering
          exceptional healthcare solutions.
        </p>
      </motion.div>
    </section>
  );
}
