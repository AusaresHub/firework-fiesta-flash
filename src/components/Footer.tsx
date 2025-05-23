
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FireworkIcon } from './FireworkIcon';

export function Footer() {
  return (
    <footer className="bg-[#ffcc00] text-red-600 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <FireworkIcon className="h-6 w-6" />
            <span className="font-bold text-lg">Firework Fiesta Flash</span>
          </div>
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <p>Payment Methods:</p>
              <div className="flex space-x-2 mt-2">
                <img src="/lovable-uploads/b34e93de-8b7f-467a-b8f7-a3e5de67744b.png" alt="Chime QR Code" className="h-12 w-12" />
                <img src="/lovable-uploads/9ecf198c-2d2f-456c-8d1b-149202f7735e.png" alt="CashApp QR Code" className="h-12 w-12" />
              </div>
            </div>
          </motion.div>
        </div>
        <div className="text-center mt-6 text-sm">
          <p>© 2025 Firework Fiesta Flash. All rights reserved.</p>
          <p className="mt-2">WARNING: Fireworks are dangerous. Use only as directed.</p>
          <div className="mt-4">
            <Link to="/privacy-policy" className="hover:underline transition duration-300">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
