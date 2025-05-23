
import { FireworkIcon } from '../components/FireworkIcon';

export default function HowToOrderPage() {
  const steps = [
    "Make AND MARK your choices (You will need to take a picture of your order with choices marked when finished)",
    "Add them up (BE ACCURATE! YOUR ORDER WILL NOT BE CREDITED!!!)",
    "Use one of the QR codes here to pay for your order",
    "E-mail screenshot of PAYMENT receipt AND order form picture, to: support@itsFixedLtd.com",
    "Receive pickup instructions and direct phone number to support",
    "Pickup your items within sixty minutes to ensure your choices don't get substituted.",
    "WE APOLOGIZE BUT THERE ARE ABSOLUTELY NO REFUNDS"
  ];
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#d12229] mb-2">How to Order</h1>
        <p className="text-gray-600">Follow these steps to complete your order</p>
      </div>
      
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0 bg-[#ffcc00] rounded-full p-2 mr-4">
                <span className="flex items-center justify-center h-6 w-6 text-red-600 font-bold">
                  {index + 1}
                </span>
              </div>
              <div>
                <p className="text-lg text-gray-800">{step}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-center text-[#d12229] mb-6">Payment Methods</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4">Chime</h3>
            <img 
              src="/lovable-uploads/b34e93de-8b7f-467a-b8f7-a3e5de67744b.png" 
              alt="Chime QR Code" 
              className="h-48 w-48 mx-auto mb-4" 
            />
            <p className="text-gray-700">Scan with your Chime app</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-4">CashApp</h3>
            <img 
              src="/lovable-uploads/9ecf198c-2d2f-456c-8d1b-149202f7735e.png" 
              alt="CashApp QR Code" 
              className="h-48 w-48 mx-auto mb-4" 
            />
            <p className="text-gray-700">Scan with your CashApp</p>
          </div>
        </div>
      </div>
      
      <div className="mt-16 max-w-3xl mx-auto p-6 bg-red-100 border-l-4 border-red-500 rounded-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-lg font-medium text-red-800">Important Note</h3>
            <div className="mt-2 text-red-700">
              <p>WE APOLOGIZE BUT THERE ARE ABSOLUTELY NO REFUNDS</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <FireworkIcon className="h-12 w-12 mx-auto text-[#d12229] mb-4" />
        <p className="text-gray-600 italic">Thank you for shopping with us!</p>
      </div>
    </div>
  );
}
