import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Instagram, Youtube } from 'lucide-react';

const Footer = () => (
  <footer className="py-20 px-6 bg-black text-white border-t border-white/10 font-sans">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
      <div className="space-y-6">
        <span className="text-2xl font-bold tracking-tighter">BizDio</span>
        <p className="text-sm text-gray-500 leading-relaxed">
          우리는 디자인 그 이상의 가치를 만듭니다. <br />
          우주에서 가장 빛나는 당신의 비즈니스를 위한 하이엔드 시스템.
        </p>
      </div>
      <div className="space-y-4">
        <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400">Quick Links</h4>
        <ul className="space-y-2 text-sm text-gray-500">
          <li><Link to="/about" className="hover:text-white transition-colors">About us</Link></li>
          <li><Link to="/products" className="hover:text-white transition-colors">상품소개</Link></li>
          <li><Link to="/columns" className="hover:text-white transition-colors">전문가 칼럼</Link></li>
          <li><Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
          <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
          <li>
            <a 
              href="https://tally.so/r/RGB8Rv" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              제작문의
            </a>
          </li>
        </ul>
      </div>
      <div className="space-y-4">
        <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400">Legal</h4>
        <ul className="space-y-2 text-sm text-gray-500">
          <li><a href="#" className="hover:text-white transition-colors">이용약관</a></li>
          <li><a href="#" className="hover:text-white transition-colors">개인정보처리방침</a></li>
        </ul>
      </div>
      <div className="flex gap-4">
        <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
          <Globe className="w-5 h-5" />
        </a>
        <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
          <Instagram className="w-5 h-5" />
        </a>
        <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all">
          <Youtube className="w-5 h-5" />
        </a>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
      <p>© 2026 BizDio. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
