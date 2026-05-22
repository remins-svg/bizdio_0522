import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About us', path: '/about' },
    { name: '상품소개', path: '/products' },
    { name: '전문가 칼럼', path: '/columns' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex-none lg:w-32">
          <Link to="/" className="text-xl font-bold tracking-tighter">BizDio</Link>
        </div>
        
        <div className="hidden md:flex flex-1 justify-center items-center gap-8 text-sm font-medium text-gray-600">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className="hover:text-black transition-colors">{link.name}</Link>
          ))}
          <a 
            href="https://tally.so/r/RGB8Rv" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-black transition-colors"
          >
            제작문의
          </a>
        </div>

        <div className="flex-none lg:w-32 flex justify-end gap-2">
          <button className="hidden md:block p-2 hover:bg-gray-100 rounded-full transition-colors">
            <User className="w-5 h-5" />
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors z-50"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-white border-b border-gray-100 shadow-xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg font-bold text-gray-900 border-b border-gray-50 pb-2"
                >
                  {link.name}
                </Link>
              ))}
              <a 
                href="https://tally.so/r/RGB8Rv" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-lg font-bold text-purple-600"
              >
                제작문의
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
