import { motion } from 'framer-motion';
export function HeroSection() {
  return <motion.div className="relative bg-gradient-to-r from-blue-600 via-red-500 to-[#ffcc00] py-16 md:py-24" initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.8
  }}>
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({
        length: 20
      }).map((_, i) => <motion.div key={i} className="absolute" initial={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        scale: 0
      }} animate={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        scale: [0, 1, 0],
        opacity: [0, 1, 0]
      }} transition={{
        duration: 2 + Math.random() * 3,
        repeat: Infinity,
        repeatDelay: Math.random() * 3,
        ease: "easeInOut"
      }}>
            <div className={`h-1 w-1 rounded-full bg-white shadow-lg shadow-white`}></div>
          </motion.div>)}
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg" initial={{
          y: -50,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>2025 Fireworks Sale !!!</motion.h1>
          
          <motion.p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto" initial={{
          y: 50,
          opacity: 0
        }} animate={{
          y: 0,
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.4
        }}>Light up the sky with premium selected fireworks</motion.p>
          
          <motion.div initial={{
          scale: 0.8,
          opacity: 0
        }} animate={{
          scale: 1,
          opacity: 1
        }} transition={{
          duration: 0.5,
          delay: 0.6
        }}>
            <motion.button whileHover={{
            scale: 1.05
          }} whileTap={{
            scale: 0.95
          }} className="bg-white text-red-600 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300">
              <a href="/products">Browse Products</a>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>;
}