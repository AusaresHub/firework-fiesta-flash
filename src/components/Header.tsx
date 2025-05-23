
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FireworkIcon } from './FireworkIcon';

export function Header() {
  return (
    <motion.header 
      className="bg-[#ffcc00] text-red-600 shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto py-4 px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <motion.div 
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <FireworkIcon className="h-8 w-8" />
            </motion.div>
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-blue-500"
              whileHover={{ scale: 1.05 }}
            >
              Firework Fiesta Flash
            </motion.span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-500 transition duration-300">Home</Link>
            <Link to="/products" className="hover:text-blue-500 transition duration-300">Products</Link>
            <Link to="/how-to-order" className="hover:text-blue-500 transition duration-300">How to Order</Link>
          </nav>
          <div className="md:hidden">
            <button className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
