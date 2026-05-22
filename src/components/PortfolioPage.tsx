import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';
import CommitmentBanner from './CommitmentBanner';
import { ArrowLeft, MessageCircle, ChevronRight, ExternalLink } from 'lucide-react';

export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  description: string;
  thumbnail: string;
  images: string[];
  client: string;
  date: string;
}

export const portfolioData: PortfolioItem[] = [
  {
    id: '1',
    category: 'Brand Blog',
    title: '프리미엄 세차장 브랜드 블로그 디자인',
    description: '고급스러운 이미지와 전문적인 정보를 결합하여 신뢰도를 높인 세차장 공식 블로그입니다.',
    thumbnail: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop'
    ],
    client: '와이카 디테일링',
    date: '2024.03'
  },
  {
    id: '2',
    category: 'Smart Place',
    title: '강남 성형외과 플레이스 최적화',
    description: '지역 기반 키워드 분석을 통해 상위 노출 및 예약률을 극대화한 스마트 플레이스 사례입니다.',
    thumbnail: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop'
    ],
    client: 'ㅇㅇ성형외과',
    date: '2024.02'
  },
  {
    id: '3',
    category: 'Website',
    title: '스타트업 기업용 랜딩페이지 제작',
    description: '전환율 중심의 직관적인 UI/UX가 적용된 기업 홍보용 웹사이트입니다.',
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
    ],
    client: '넥스트링크',
    date: '2024.01'
  },
  {
    id: '4',
    category: 'Logo/Design',
    title: '유기농 카페 브랜드 아이덴티티 구축',
    description: '자연 친화적인 이미지를 형상화한 로고 및 브랜딩 패키지 디자인입니다.',
    thumbnail: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop'
    ],
    client: '그린리프',
    date: '2023.12'
  },
  {
    id: '5',
    category: 'Promotion',
    title: '계절 맞춤형 SNS 광고 캠페인',
    description: '타겟 고객층의 시선을 사로잡는 비주얼과 카피로 구성된 인스타그램 프로모션입니다.',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop'
    ],
    client: '패션빌리지',
    date: '2023.11'
  },
  {
    id: '6',
    category: 'Brand Blog',
    title: '법률 사무소 전문 지식형 블로그',
    description: '어려운 법률 지식을 쉽게 전달하여 잠재 고객의 문의를 유도하는 블로그입니다.',
    thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop'
    ],
    client: '김앤박 법률사무소',
    date: '2023.10'
  }
];

const categories = ['전체', 'Brand Blog', 'Smart Place', 'Website', 'Logo/Design', 'Promotion'];

const PortfolioPage = () => {
  const [activeCategory, setActiveCategory] = useState('전체');

  const filteredPortfolio = activeCategory === '전체' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO 
        title="포트폴리오" 
        description="비즈디오의 성공 사례를 확인하세요. 브랜드 블로그, 스마트 플레이스 최적화, 웹사이트 제작 성과들."
        canonical="/portfolio"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "포트폴리오 | 비즈디오(BizDio)",
          "description": "비즈디오의 성공 사례를 확인하세요.",
          "publisher": {
            "@type": "Organization",
            "name": "비즈디오"
          },
          "mainEntity": {
            "@type": "ItemList",
            "itemListElement": portfolioData.map((item, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CreativeWork",
                "name": item.title,
                "description": item.description,
                "image": item.thumbnail,
                "url": `https://bizdio.co.kr/portfolio/${item.id}`,
                "author": {
                  "@type": "Organization",
                  "name": "비즈디오"
                }
              }
            }))
          }
        }}
      />
      <Navbar />
      
      {/* Header Section */}
      <div className="relative h-[400px] flex items-center px-6 overflow-hidden bg-black">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
          alt="Portfolio Header Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-40 shadow-inner"
        />
        <div className="max-w-7xl mx-auto w-full relative z-10 pt-16">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>메인으로</span>
          </Link>
          <span className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2 block">PORTFOLIO</span>
          <h1 className="text-5xl font-bold text-white mb-4">포트폴리오</h1>
        </div>
      </div>

      <CommitmentBanner />

      {/* Portfolio Content */}
      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 text-left">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-black tracking-tight">Work Archives</h2>
            <p className="text-gray-500">비즈디오의 손끝에서 탄생한 성공적인 프로젝트들을 확인하세요.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm font-bold text-gray-400">
            {categories.map((cat) => (
              <span
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`pb-2 px-1 cursor-pointer transition-colors ${
                  activeCategory === cat 
                  ? 'text-black border-b-2 border-black' 
                  : 'hover:text-black border-b-2 border-transparent hover:border-gray-200'
                }`}
              >
                {cat === '전체' ? '전체보기' : cat}
              </span>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPortfolio.map((item) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <Link to={`/portfolio/${item.id}`} className="block overflow-hidden rounded-xl bg-gray-100">
                  <header className="relative aspect-[4/3] overflow-hidden">
                    <img 
                      src={item.thumbnail} 
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white text-black px-6 py-2 rounded-full font-bold text-sm transform translate-y-4 group-hover:translate-y-0 transition-transform">
                        자세히 보기
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-[10px] font-bold text-black rounded uppercase tracking-wider">
                        {item.category}
                      </span>
                    </div>
                  </header>
                  <div className="py-6 px-2">
                    <h3 className="text-lg font-bold text-black mb-2 group-hover:text-blue-600 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-1">
                      {item.client} | {item.date}
                    </p>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Footer />

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform">
        <MessageCircle className="w-8 h-8 text-black fill-black" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">New</span>
      </button>
    </div>
  );
};

export default PortfolioPage;
