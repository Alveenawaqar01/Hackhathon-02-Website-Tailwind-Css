import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        {/* Brand Name */}
        <h2 className="text-2xl font-bold ">Classic Bags Collection</h2>
        <p className='py-2'>Your go to place for the best quality bags designed for style and Durability</p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://facebook.com" className="text-white hover:text-blue-500">
            <FaFacebook className="text-2xl" />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-pink-500">
            <FaInstagram className="text-2xl" />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-blue-300">
            <FaTwitter className="text-2xl" />
          </a>
          <a href="https://linkedin.com" className="text-white hover:text-amber-300">
            <FaLinkedin className="text-2xl" />
          </a>
        </div>
        
        {/* Copyright */}
        <p className="text-sm"> Copy Right Classic Bags All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
