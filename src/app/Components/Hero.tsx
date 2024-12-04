import Image from 'next/image';

const Heropage = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row justify-center items-center p-6">
      {/* Left Section (Text Content) */}
      <div className="text-center md:text-left md:w-1/2 space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-4 ml-1">
          NEW 
        </h1>
        
        {/* Gap between headings */}
        <h2 className="text-5xl md:text-6xl font-extrabold text-black mb-4 ml-1">
         COLLECTION 
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-gray-600 mb-6 px-4">
          Explore our newest collection of classic bags carefully curated to combine style durability and functionality Perfect for every occasion these bags are designed to elevate your everyday look while keeping your essentials organized Dont miss out on this exclusive release
        </p>
        
        {/* Shop Now Button */}
        <button className="bg-black text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800 transition duration-300 mt-8 md:mt-12 flex justify-center items-center ml-3">
          Shop Now
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <Image
          src="/bag.png" // Replace with your image path
          alt="Classic Bags Collection"
          width={350}
          height={350}
        
        />
      </div>
    </div>
  );
};

export default Heropage;
