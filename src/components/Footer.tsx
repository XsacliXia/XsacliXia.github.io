import { Github, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-dota-darker py-8 md:py-12 border-t border-dota-purple/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 md:gap-8">
          <div className="col-span-2 sm:col-span-3 md:col-span-1">
            <h2 className="text-xl font-bold text-dota-purple mb-4">DOTA 2</h2>
          </div>
          {[...Array(5)].map((_, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-semibold text-white mb-2 md:mb-4">PRODUCT</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-dota-purple transition">Product</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-dota-purple transition">Product</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-dota-purple transition">Product</a></li>
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-8 md:mt-12 pt-6 md:pt-8 border-t border-dota-purple/20 gap-4">
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-dota-purple transition">
              <Instagram className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-dota-purple transition">
              <Facebook className="h-5 w-5 md:h-6 md:w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-dota-purple transition">
              <Github className="h-5 w-5 md:h-6 md:w-6" />
            </a>
          </div>
          <p className="text-xs md:text-sm text-gray-400">DESIGNED BY 2024-2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;