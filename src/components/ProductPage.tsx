import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';
import CommitmentBanner from './CommitmentBanner';
import { ArrowLeft, MessageCircle, Monitor, Pencil, Layout, Instagram, Smartphone, Video, MapPin, Sparkles, User, GraduationCap } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const products = [
  {
    title: "홈페이지 제작",
    description: "브랜드의 가치를 담은 맞춤형 홈페이지 제작",
    category: "기획",
    color: "bg-blue-600",
    icon: <Monitor className="w-16 h-16 text-white" />
  },
  {
    title: "로고 제작",
    description: "브랜드 아이덴티티를 담은 독창적인 로고 디자인",
    category: "디자인",
    color: "bg-emerald-500",
    icon: <Pencil className="w-16 h-16 text-white" />
  },
  {
    title: "브랜드 블로그 운영대행",
    description: "전문적인 콘텐츠로 브랜드의 신뢰도와 가치를 높입니다",
    category: "마케팅",
    color: "bg-green-500",
    icon: <Layout className="w-16 h-16 text-white" />
  },
  {
    title: "인스타 운영 대행",
    description: "브랜드 감성을 담은 콘텐츠로 소통과 성장을 함께합니다",
    category: "마케팅",
    color: "bg-pink-500",
    icon: <Instagram className="w-16 h-16 text-white" />
  },
  {
    title: "숏폼 영상 기획 및 제작",
    description: "짧은 시간, 강력한 임팩트! 숏폼 영상으로 메시지를 효과적으로 전달합니다",
    category: "기획",
    color: "bg-purple-600",
    icon: <Smartphone className="w-16 h-16 text-white" />
  },
  {
    title: "플레이스 세팅",
    description: "매장/브랜드의 가치를 높이는 네이버 플레이스 최적화 세팅",
    category: "마케팅",
    color: "bg-orange-500",
    icon: <MapPin className="w-16 h-16 text-white" />
  },
  {
    title: "영상 제작",
    description: "브랜드 스토리를 담은 고퀄리티 영상 제작",
    category: "디자인",
    color: "bg-red-600",
    icon: <Video className="w-16 h-16 text-white" />
  },
  {
    title: "사진 리터칭",
    description: "전문적인 보정으로 사진의 완성도를 높입니다",
    category: "디자인",
    color: "bg-violet-500",
    icon: <Sparkles className="w-16 h-16 text-white" />
  },
  {
    title: "퍼스널브랜딩",
    description: "당신만의 강점을 발견하고 가치를 브랜드로 만듭니다",
    category: "기획",
    color: "bg-teal-500",
    icon: <User className="w-16 h-16 text-white" />
  },
  {
    title: "교육",
    description: "브랜드의 성장을 돕는 맞춤형 마케팅 실무 교육",
    category: "기획",
    color: "bg-slate-700",
    icon: <GraduationCap className="w-16 h-16 text-white" />
  }
];

const ProductPage = () => {
  const [activeCategory, setActiveCategory] = React.useState("전체상품");

  const filteredProducts = activeCategory === "전체상품" 
    ? products 
    : products.filter(p => p.category === activeCategory || p.title === "홈페이지 제작");

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO 
        title="상품소개" 
        description="비즈디오의 프리미엄 마케팅 상품을 소개합니다. 브랜드 블로그 디자인, 스마트 플레이스 최적화, 고퀄리티 웹사이트 제작."
        canonical="/products"
      />
      <Navbar />
      {/* Header Section */}
      <div className="relative h-[400px] flex items-center px-6 overflow-hidden bg-black">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
          alt="Header Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="max-w-7xl mx-auto w-full relative z-10 pt-16">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>메인으로</span>
          </Link>
          <span className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2 block">SERVICE</span>
          <h1 className="text-5xl font-bold text-white mb-4">상품소개</h1>
        </div>
      </div>

      <CommitmentBanner />

      {/* Grid Content */}
      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 text-left">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-black tracking-tight">Our Solutions</h2>
            <p className="text-gray-500">당신의 비즈니스를 위한 최적의 마케팅 상품을 제공합니다.</p>
          </div>
          <div className="flex gap-4 text-sm font-bold text-gray-400">
            {["전체상품", "마케팅", "기획", "디자인"].map(cat => (
              <span 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "pb-2 px-1 cursor-pointer transition-all",
                  activeCategory === cat ? "text-black border-b-2 border-black" : "hover:text-black"
                )}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p, i) => (
              <motion.div 
                key={p.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="bg-gray-50 rounded-2xl p-8 flex flex-col items-center text-center space-y-6 cursor-pointer group hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-medium">
                    {p.description}
                  </p>
                </div>
                <div className={cn(
                  "w-full aspect-square md:aspect-[4/3] rounded-xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-[1.02]",
                  p.color
                )}>
                  {p.icon}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Floating Chat Button (to match the image) */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform">
        <MessageCircle className="w-8 h-8 text-black fill-black" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">New</span>
      </button>
      <Footer />
    </div>
  );
};

export default ProductPage;
