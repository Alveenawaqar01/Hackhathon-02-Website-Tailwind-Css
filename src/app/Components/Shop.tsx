import React from 'react'


import Image from 'next/image';


const Shop = () => {
  // Sample product images (Replace these with your actual image paths or URLs)
  const productImages = [
    '/Bag-01.jpg', // Replace with your product image URLs
    '/Bag-02.jpg',
    '/Bag-03.jpg',
    '/bag-04.jpg',
    '/Bag-05.jpg',
    '/Bag-06.jpg',
  ];

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Shop Title */}
      <h1 className="text-4xl font-extrabold text-center text-blue-950 mb-8 hover:text-blue-800">
        Our Bags Collection 
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {productImages.map((src, index) => (
          <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
            <Image
              src={src}
              alt={`Product ${index + 1}`}
              width={300} 
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-slate-500 opacity-0 group-hover:opacity-50 transition-all duration-300"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-xl font-bold">View Product</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop

