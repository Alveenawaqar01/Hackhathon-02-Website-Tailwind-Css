import React from 'react'
import Image from 'next/image'

const Sale = () => {
  return (
    <div className="bg-black min-h-screen">
      <header className="bg-white text-blue-950 text-center py-8">
        <h1 className="text-4xl font-extrabold">Classic Bags Collection - Limited Time Sale!</h1>
      </header>

      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Bag 1 */}
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <Image 
              src="/sale1.jpg" 
              alt="Classic Leather Handbag"
              width={300} 
              height={300} 
              className="rounded-lg object-cover"
            />
            <h3 className="text-2xl font-extrabold mt-4">Black Elegant</h3>
            <div className="text-lg font-semibold text-blue-950 mt-2">$129.99</div>
            <a href="#" className="block text-center mt-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-800 transition duration-300">Buy Now</a>
          </div>

          {/* Bag 2 */}
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <Image 
              src="/sale2.jpg" 
              alt="Vintage Messenger Bag" 
              width={300} 
              height={300} 
              className="rounded-lg object-cover"
            />
            <h3 className="text-2xl font-extrabold mt-4">Stylish Beige </h3>
            <div className="text-lg font-semibold text-blue-950 mt-2">$99.99</div>
            <a href="#" className="block text-center mt-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-800 transition duration-300">Buy Now</a>
          </div>

          {/* Bag 3 */}
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <Image 
              src="/sale3.jpg" 
              alt="Chic Tote Bag" 
              width={300} 
              height={300} 
              className="rounded-lg object-cover"
            />
            <h3 className="text-2xl font-extrabold mt-4"> luxurious Perfect </h3>
            <div className="text-lg font-semibold text-blue-950 mt-2">$149.99</div>
            <a href="#" className="block text-center mt-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-800 transition duration-300">Buy Now</a>
          </div>

          {/* Bag 4 */}
          <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <Image 
              src="/sale-4.JPG" 
              alt="Designer Shoulder Bag" 
              width={300} 
              height={300} 
              className="rounded-lg object-cover"
            />
            <h3 className="text-2xl font-extrabold mt-4">Olive Green</h3>
            <div className="text-lg font-semibold text-blue-950 mt-2">$199.99</div>
            <a href="#" className="block text-center mt-4 py-2 bg-blue-950 text-white rounded-lg hover:bg-blue-800 transition duration-300">Buy Now</a>
          </div>

        </div>
      </main>
    </div>
  )
}

export default Sale
