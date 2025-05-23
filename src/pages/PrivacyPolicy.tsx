
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FourthOfJulyDivider } from '../components/FourthOfJulyDivider';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-[#d12229] mb-2">Privacy Policy</h1>
        <p className="text-gray-600">Last Updated: May 23, 2025</p>
        <FourthOfJulyDivider />
      </motion.div>
      
      <motion.div 
        className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="prose prose-lg">
          <h2 className="text-2xl font-semibold text-[#d12229] mb-4">Introduction</h2>
          <p>
            Thank you for choosing Firework Fiesta Flash. We are committed to protecting your privacy and providing you with a safe experience when using our services.
            This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#d12229] mt-6 mb-4">Information We Collect</h2>
          <p>
            <strong>Personal Information:</strong> When you place an order or contact us, we may collect personal information such as your name, email address, phone number, and shipping address.
          </p>
          <p>
            <strong>Payment Information:</strong> We use third-party payment processors and do not store your complete payment information on our servers.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#d12229] mt-6 mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>To process and fulfill your orders</li>
            <li>To communicate with you about your order</li>
            <li>To improve our website and customer service</li>
            <li>To comply with legal obligations</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-[#d12229] mt-6 mb-4">Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#d12229] mt-6 mb-4">Security</h2>
          <p>
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
          </p>
          
          <h2 className="text-2xl font-semibold text-[#d12229] mt-6 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us through the methods provided on our How to Order page.
          </p>
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            to="/"
            className="inline-block bg-[#ffcc00] text-red-600 font-bold py-3 px-8 rounded-full hover:bg-[#e6b800] transition duration-300"
          >
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicy;
