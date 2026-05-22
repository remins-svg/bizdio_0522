import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';
import CommitmentBanner from './CommitmentBanner';
import { portfolioData } from './PortfolioPage';
import { ArrowLeft, MessageCircle, Calendar, User, Tag, Share2 } from 'lucide-react';

const PortfolioDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = portfolioData.find(p => p.id === id);

  if (!item) {
    return (
      <div className="min-h-screen flex items-center justify-center font-sans">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">포트폴리오를 찾을 수 없습니다.</h1>
          <Link to="/portfolio" className="text-blue-600 hover:underline">목록으로 돌아가기</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO 
        title={item.title} 
        description={item.description}
        ogImage={item.thumbnail}
        canonical={`/portfolio/${item.id}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": item.title,
          "description": item.description,
          "image": item.images,
          "datePublished": item.date.replace(/\./g, '-'),
          "author": {
            "@type": "Organization",
            "name": "비즈디오"
          },
          "publisher": {
            "@type": "Organization",
            "name": "비즈디오",
            "logo": {
              "@type": "ImageObject",
              "url": "https://bizdio.co.kr/logo.png"
            }
          }
        }}
      />
      <Navbar />
      <CommitmentBanner />

      <main className="pt-24 pb-32">
        <article className="max-w-4xl mx-auto px-6">
          {/* Back Button */}
          <button 
            onClick={() => navigate('/portfolio')}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-black mb-12 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>목록으로</span>
          </button>

          {/* Header */}
          <header className="space-y-6 mb-16">
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-gray-100 text-[10px] font-bold text-gray-600 rounded uppercase tracking-wider">
                {item.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
              {item.title}
            </h1>
            
            <div className="flex flex-wrap gap-8 pt-4 border-t border-gray-100">
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <User className="w-4 h-4" />
                <span className="font-medium text-gray-700">Client:</span>
                <span>{item.client}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Calendar className="w-4 h-4" />
                <span className="font-medium text-gray-700">Date:</span>
                <time dateTime={item.date.replace(/\./g, '-')}>{item.date}</time>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Tag className="w-4 h-4" />
                <span className="font-medium text-gray-700">Category:</span>
                <span>{item.category}</span>
              </div>
            </div>
          </header>

          {/* Content Description */}
          <section className="prose prose-lg max-w-none text-gray-600 mb-20 leading-relaxed">
            <p className="text-xl">
              {item.description}
            </p>
            <p>
              비즈디오는 브랜드의 가치를 극대화하기 위해 다각도로 접근합니다. 
              단순히 예쁜 결과물을 만드는 것이 아니라, 비즈니스의 실질적인 성장과 직결될 수 있는 전략적 디자인을 지향합니다.
            </p>
          </section>

          {/* Images Grid */}
          <section className="space-y-12">
            {item.images.map((img, idx) => (
              <motion.figure
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="rounded-2xl overflow-hidden shadow-2xl bg-gray-50"
              >
                <img 
                  src={img} 
                  alt={`${item.title} capture ${idx + 1}`} 
                  className="w-full h-auto"
                />
              </motion.figure>
            ))}
          </section>

          {/* Bottom Actions */}
          <footer className="mt-24 pt-12 border-t border-gray-100 flex items-center justify-between">
            <button 
              onClick={() => navigate('/portfolio')}
              className="px-8 py-3 bg-gray-100 text-black rounded-lg font-bold hover:bg-gray-200 transition-all flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              목록으로
            </button>
            <div className="flex gap-4">
              <button className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-all" aria-label="Share">
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
              <a 
                href="https://tally.so/r/RGB8Rv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-black text-white rounded-lg font-bold hover:bg-neutral-800 transition-all text-center"
              >
                프로젝트 문의하기
              </a>
            </div>
          </footer>
        </article>
      </main>

      <Footer />

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform">
        <MessageCircle className="w-8 h-8 text-black fill-black" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">New</span>
      </button>
    </div>
  );
};

export default PortfolioDetailPage;
