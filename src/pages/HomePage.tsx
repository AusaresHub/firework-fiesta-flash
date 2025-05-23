
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { HeroSection } from '../components/HeroSection';
import { FourthOfJulyDivider } from '../components/FourthOfJulyDivider';
import { FireworkIcon } from '../components/FireworkIcon';
import { products } from '../data/products';

export default function HomePage() {
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      <HeroSection />

      <div className="container mx-auto px-4 py-12">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#d12229] mb-2">Featured Products</h2>
          <p className="text-gray-600">Explore our selection of premium fireworks</p>
          <FourthOfJulyDivider />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            to="/products"
            className="inline-flex items-center gap-2 bg-[#ffcc00] text-red-600 font-bold py-3 px-8 rounded-full hover:bg-[#e6b800] transition duration-300"
          >
            <span>View All Products</span>
            <FireworkIcon />
          </Link>
        </motion.div>
      </div>
      
      <motion.section 
        className="py-16 bg-gradient-to-r from-blue-600 via-red-500 to-[#ffcc00]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Left QR Code - CashApp */}
            <motion.div 
              className="md:w-1/4 mb-8 md:mb-0"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-bold text-[#d12229] mb-3">CashApp</h3>
                <img 
                  src="/lovable-uploads/9ecf198c-2d2f-456c-8d1b-149202f7735e.png" 
                  alt="CashApp QR Code" 
                  className="h-32 w-32 mx-auto mb-2" 
                />
                <p className="text-sm font-medium text-gray-700">Scan for CashApp</p>
              </div>
            </motion.div>
            
            {/* Center Content - How to Order */}
            <motion.div 
              className="md:w-2/4 text-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Order?</h2>
              <p className="text-white text-lg mb-6">Follow our simple ordering process to get your fireworks in time for celebration.</p>
              <Link 
                to="/how-to-order"
                className="inline-block bg-white text-red-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition duration-300"
              >
                How to Order
              </Link>
            </motion.div>
            
            {/* Right QR Code - Chime */}
            <motion.div 
              className="md:w-1/4 mt-8 md:mt-0"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-white p-4 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-bold text-[#d12229] mb-3">Chime</h3>
                <img 
                  src="/lovable-uploads/b34e93de-8b7f-467a-b8f7-a3e5de67744b.png" 
                  alt="Chime QR Code" 
                  className="h-32 w-32 mx-auto mb-2" 
                />
                <p className="text-sm font-medium text-gray-700">Scan for Chime</p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
