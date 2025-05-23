
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FireworkIcon } from '../components/FireworkIcon';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="inline-block text-red-600 mb-6"
        >
          <FireworkIcon className="h-16 w-16 mx-auto" />
        </motion.div>
        <h1 className="text-6xl font-bold text-[#d12229] mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Oops! This page has gone up in smoke.</p>
        <Link 
          to="/" 
          className="inline-block bg-[#ffcc00] text-red-600 font-bold py-3 px-8 rounded-full hover:bg-[#e6b800] transition duration-300"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
