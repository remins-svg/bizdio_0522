import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';
import CommitmentBanner from './CommitmentBanner';

interface Column {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl?: string;
}

const ColumnPage = () => {
  const [columns] = useState<Column[]>([
    {
      id: '1',
      title: '스마트 플레이스, 왜 우리 가게만 순위가 낮을까?',
      excerpt: '단순한 정보 입력만으로는 부족합니다. 알고리즘이 좋아하는 데이터 구조와 사용자 반응도가 결합되어야 진짜 상위 노출이 시작됩니다.',
      author: '김대호 대표',
      date: '2024.05.10',
      category: '마케팅 전략',
      imageUrl: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: '2',
      title: '브랜드 블로그, 1일 1포스팅보다 중요한 것',
      excerpt: '의미 없는 양치기 포스팅은 오히려 브랜드 지수를 떨어뜨립니다. 잠재 고객의 결핍을 건드리는 단 하나의 퀄리티 높은 글이 필요한 이유.',
      author: '비즈디오 전략팀',
      date: '2024.05.08',
      category: '콘텐츠',
      imageUrl: 'https://images.unsplash.com/photo-1515378866547-2cb233b47f01?q=80&w=2070&auto=format&fit=crop'
    },
    {
      id: '3',
      title: '광고비 200% 아껴주는 매체 믹스 가이드',
      excerpt: '모든 SNS가 정답은 아닙니다. 우리 업종에 맞는 메인 매체와 서브 매체를 구분하는 법을 공개합니다.',
      author: '김대호 대표',
      date: '2024.05.05',
      category: '광고운용',
      imageUrl: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=2070&auto=format&fit=crop'
    }
  ]);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <SEO 
        title="전문가 칼럼" 
        description="브랜드 성장을 위한 비즈디오만의 실전 마케팅 노하우를 공유합니다. 마케팅 전략, 콘텐츠 기획, 브랜딩 인사이트."
        canonical="/columns"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "전문가 칼럼 | 비즈디오(BizDio)",
          "description": "브랜드 성장을 위한 비즈디오만의 실전 마케팅 노하우를 공유합니다.",
          "publisher": {
            "@type": "Organization",
            "name": "비즈디오",
            "logo": {
              "@type": "ImageObject",
              "url": "https://bizdio.co.kr/logo.png"
            }
          },
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": columns.map((col, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "BlogPosting",
                "headline": col.title,
                "description": col.excerpt,
                "image": col.imageUrl,
                "author": {
                  "@type": "Person",
                  "name": col.author
                },
                "datePublished": col.date.replace(/\./g, '-')
              }
            }))
          }
        }}
      />
      <Navbar />
      
      {/* Header Section - Subpage style */}
      <div className="relative h-[400px] flex items-center px-6 overflow-hidden bg-black">
        <img 
          src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2046&auto=format&fit=crop"
          alt="Column Header Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 shadow-inner"
        />
        <div className="max-w-7xl mx-auto w-full relative z-10 pt-16">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>메인으로</span>
          </Link>
          <span className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2 block">COLUMN</span>
          <h1 className="text-5xl font-bold text-white mb-4">전문가 칼럼</h1>
        </div>
      </div>

      <CommitmentBanner />

      {/* Column Content */}
      <div className="max-w-7xl mx-auto py-24 px-6 text-center">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 text-left">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-black tracking-tight">Insight & Strategy</h2>
            <p className="text-gray-500">브랜드 성장을 위한 비즈디오만의 실전 마케팅 노하우를 공유합니다.</p>
          </div>
          <div className="flex gap-4 text-sm font-bold text-gray-400">
            <span className="text-black border-b-2 border-black pb-2 px-1 cursor-pointer">전체보기</span>
            <span className="hover:text-black transition-colors pb-2 px-1 cursor-pointer">마케팅</span>
            <span className="hover:text-black transition-colors pb-2 px-1 cursor-pointer">기획</span>
            <span className="hover:text-black transition-colors pb-2 px-1 cursor-pointer">브랜딩</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left">
          {columns.map((column, i) => (
            <motion.article
              key={column.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <header>
                <div className="aspect-[16/10] bg-gray-100 rounded-2xl overflow-hidden mb-6 relative">
                  <img 
                    src={column.imageUrl}
                    alt={column.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold text-black rounded uppercase tracking-wider">
                      {column.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-400 font-medium mb-4">
                  <span className="flex items-center gap-1"><User className="w-3 h-3" /> {column.author}</span>
                  <time className="flex items-center gap-1" dateTime={column.date.replace(/\./g, '-')}><Calendar className="w-3 h-3" /> {column.date}</time>
                </div>
                <h3 className="text-xl font-bold text-black group-hover:text-blue-600 transition-colors leading-snug">
                  {column.title}
                </h3>
              </header>
              <div className="space-y-4 mt-4">
                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {column.excerpt}
                </p>
                <div className="pt-2 flex items-center text-xs font-bold text-black gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  자세히 보기 <ArrowLeft className="w-3 h-3 rotate-180" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ColumnPage;
