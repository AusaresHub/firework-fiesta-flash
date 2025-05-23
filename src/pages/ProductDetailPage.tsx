import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FourthOfJulyDivider } from '../components/FourthOfJulyDivider';
import { products } from '../data/products';
import { FireworkIcon } from '../components/FireworkIcon';

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState(
    products.find((p) => p.id === id) || null
  );
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-red-600 mb-4">Product Not Found</h2>
        <p className="mb-6">Sorry, the product you are looking for doesn't exist.</p>
        <Link 
          to="/products"
          className="inline-block bg-[#ffcc00] text-red-600 font-bold py-2 px-6 rounded-full"
        >
          Back to Products
        </Link>
      </div>
    );
  }
  
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link to="/products" className="text-blue-500 hover:underline flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
          Back to Products
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={product.image}
            alt={product.name}
            className="max-w-full h-auto max-h-96 object-contain"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-3xl font-bold text-[#d12229] mb-2">{product.name}</h1>
          <span className="inline-block px-3 py-1 bg-blue-500 text-white text-sm rounded-full mb-4">
            {product.category}
          </span>
          <p className="text-gray-700 text-lg mb-6">{product.description}</p>
          
          <div className="flex items-center mb-8">
            <span className="text-3xl font-bold text-[#d12229]">${product.price}</span>
          </div>
          
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Quantity:</h3>
            <div className="flex items-center border border-gray-300 w-32 rounded-md">
              <input 
                type="text" 
                value="_____"
                readOnly
                className="w-full py-2 px-4 text-center" 
              />
            </div>
          </div>
          
          <Link 
            to="/how-to-order"
            className="inline-flex items-center gap-2 bg-[#ffcc00] text-red-600 font-bold py-3 px-8 rounded-full hover:bg-[#e6b800] transition duration-300"
          >
            <span>How to Order</span>
            <FireworkIcon />
          </Link>
        </motion.div>
      </div>
      
      <div className="mt-16">
        <FourthOfJulyDivider />
        
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-[#d12229]">Related Products</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {relatedProducts.map((relatedProduct, index) => (
            <motion.div
              key={relatedProduct.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-shadow hover:shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Link to={`/product/${relatedProduct.id}`}>
                <div className="h-48 overflow-hidden bg-gray-200">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#d12229]">{relatedProduct.name}</h3>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xl font-bold text-[#d12229]">${relatedProduct.price}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
