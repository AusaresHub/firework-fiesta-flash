
import { motion } from 'framer-motion';
import { FireworkIcon } from './FireworkIcon';

export function FourthOfJulyDivider() {
  return (
    <div className="py-8 relative overflow-hidden">
      <div className="flex items-center justify-center">
        <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent w-1/3"></div>
        
        <motion.div
          className="mx-4 text-red-600"
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <FireworkIcon className="h-8 w-8" />
        </motion.div>
        
        <div className="h-px bg-gradient-to-r from-blue-500 via-white to-transparent w-1/3"></div>
      </div>
      
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${(i + 1) * 20 - 10}%`,
              top: '50%'
            }}
            initial={{ y: 20, opacity: 0 }}
            animate={{ 
              y: [20, -10, 20],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              delay: i * 0.5,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
          </motion.div>
        ))}
        
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i + 5}
            className="absolute"
            style={{
              left: `${(i + 1) * 20 - 5}%`,
              top: '50%'
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ 
              y: [-20, 10, -20],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3.5,
              delay: i * 0.5 + 0.25,
              repeat: Infinity,
              repeatType: "loop"
            }}
          >
            <div className="h-2 w-2 rounded-full bg-red-500"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
