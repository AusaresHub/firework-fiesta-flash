
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Product } from '../types/product';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.div
      className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative h-56 overflow-hidden bg-gray-200">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-[#d12229]">{product.name}</h3>
          <p className="text-sm text-gray-600 mt-1">{product.description}</p>
          <div className="mt-2 flex justify-between items-center">
            <span className="text-xl font-bold text-[#d12229]">${product.price}</span>
            <span className="text-xs px-2 py-1 bg-blue-500 text-white rounded-full">{product.category}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
