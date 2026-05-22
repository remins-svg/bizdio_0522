import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';
import CommitmentBanner from './CommitmentBanner';
import * as Accordion from '@radix-ui/react-accordion';
import { ArrowLeft, MessageCircle, ChevronDown } from 'lucide-react';

const faqData = [
  {
    id: "01",
    q: "홈페이지 제작 견적은 어떤 기준으로 산정되나요?",
    a: "홈페이지 제작 견적은 페이지 수, 디자인 퀄리티, 기능 복잡도(회원가입, 결제, 예약 시스템 등), 그리고 반응형 웹 적용 여부에 따라 결정됩니다. 비즈디오는 투명한 견적 산출을 위해 항목별 상세 내역을 제공합니다."
  },
  {
    id: "02",
    q: "홈페이지 제작 기간은 얼마나 소요되나요?",
    a: "일반적인 기업 홍보형 홈페이지의 경우 기획부터 디자인, 개발까지 약 2~4주가 소요됩니다. 기능이 복잡한 맞춤형 플랫폼의 경우 범위에 따라 2개월 이상의 기간이 필요할 수 있습니다."
  },
  {
    id: "03",
    q: "기본형과 고급형의 퀄리티 차이가 있나요?",
    a: "기본적인 디자인 퀄리티는 모두 최상의 수준을 유지합니다. 다만, 고급형의 경우 독창적인 인터랙션, 맞춤형 그래픽 자산 제작, 복합적인 애니메이션 효과 및 세밀한 UX 설계가 추가되어 브랜드의 가치를 높이는 데 더 집중합니다."
  },
  {
    id: "04",
    q: "레퍼런스/예시대로 제작이 가능한가요?",
    a: "네, 가능합니다. 원하시는 스타일의 레퍼런스를 전달해 주시면 해당 사이트의 장점을 분석하여 고객님의 브랜드 색깔에 맞춰 더 업그레이드된 형태로 제작해 드립니다."
  },
  {
    id: "05",
    q: "홈페이지 기획서 없이도 제작이 가능한가요?",
    a: "가능합니다. 구체적인 기획서가 없으시더라도 비즈디오의 전문 기획자가 인터뷰를 통해 비즈니스의 핵심 가치를 도출하고, 사용자 경험을 고려한 최적의 구조를 제안해 드립니다."
  },
  {
    id: "06",
    q: "디자인이 마음에 안들면 어떡하나요?",
    a: "비즈디오는 본격적인 작업 전 무드보드와 메인 시안을 통해 디자인 방향성을 먼저 확인합니다. 고객님 만족하실 때까지 단계별 피드백 반영 및 수정을 진행하며, 브랜드 아이덴티티에 맞는 최선의 결과물을 약속드립니다."
  },
  {
    id: "07",
    q: "디자인 or 개발만 따로 진행 가능한가요?",
    a: "네, 필요하신 부분만 선택하여 진행 가능합니다. 이미 디자인 시안이 있으신 경우 개발만 진행하거나, 기획과 디자인 작업만 필요하신 경우에도 유연하게 프로젝트를 수주합니다."
  },
  {
    id: "08",
    q: "추가기능 개발이 가능한가요?",
    a: "네, API 연동, 맞춤형 관리자 페이지, 특수한 알고리즘 적용 등 고객님이 필요로 하시는 모든 커스텀 기능 개발이 가능합니다. 전문 개발팀이 비즈니스 요구사항에 맞는 솔루션을 제공합니다."
  },
  {
    id: "09",
    q: "개발 플랫폼은 무엇을 사용하나요?",
    a: "프로젝트의 특성에 따라 React, Next.js, TypeScript와 같은 최신 웹 프레임워크를 사용하거나, 관리의 용이성을 위해 워드프레스, 아임웹 등의 CMS를 활용하기도 합니다. 고객님의 상황에 가장 적합한 플랫폼을 추천해 드립니다."
  }
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO 
        title="FAQ" 
        description="비즈디오에 대해 궁금하신 점들을 확인하세요. 홈페이지 제작 견적, 기간, 프로세스 등 자주 묻는 질문들."
        canonical="/faq"
      />
      <Navbar />
      
      {/* Header Section */}
      <div className="relative h-[400px] flex items-center px-6 overflow-hidden bg-black">
        <img 
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2070&auto=format&fit=crop"
          alt="FAQ Header Background" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="max-w-7xl mx-auto w-full relative z-10 pt-16 text-center md:text-left">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span>메인으로</span>
          </Link>
          <span className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2 block">FAQ</span>
          <h1 className="text-5xl font-bold text-white mb-4">자주 묻는 질문</h1>
        </div>
      </div>

      <CommitmentBanner />

      {/* Accordion Content */}
      <div className="max-w-7xl mx-auto py-32 px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-6xl font-bold text-black tracking-tight">FAQ</h2>
          </div>
          
          <div className="lg:w-2/3">
            <Accordion.Root type="single" collapsible className="space-y-0 border-t border-black">
              {faqData.map((faq, i) => (
                <Accordion.Item key={faq.id} value={`item-${i}`} className="border-b border-gray-200 overflow-hidden">
                  <Accordion.Header>
                    <Accordion.Trigger className="w-full py-8 flex items-center text-left group hover:bg-gray-50 transition-colors px-6">
                      <span className="text-xs font-bold text-gray-400 w-12">{faq.id}</span>
                      <span className="flex-1 text-lg font-medium text-gray-800">{faq.q}</span>
                      <ChevronDown className="w-5 h-5 text-gray-400 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="px-6 pb-8 text-gray-600 leading-relaxed overflow-hidden data-[state=open]:animate-slide-down">
                    <div>
                      {faq.a}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </div>
      </div>

      {/* Floating Chat Button */}
      <button className="fixed bottom-8 right-8 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform">
        <MessageCircle className="w-8 h-8 text-black fill-black" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">New</span>
      </button>
      <Footer />
    </div>
  );
};

export default FAQPage;
