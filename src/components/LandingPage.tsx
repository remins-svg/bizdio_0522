import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, User, ArrowRight, Check, X, Plus, Globe, Instagram, Youtube, Sparkles, Eye, TrendingUp } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import * as Accordion from '@radix-ui/react-accordion';

import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// --- Components ---

import Navbar from './Navbar';
import Footer from './Footer';
import SEO from './SEO';

const Hero = () => (
  <section className="relative h-[900px] flex items-center px-6 overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1549298222-1c31e8915347?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Hero Background" 
        className="w-full h-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>

    <div className="max-w-7xl mx-auto w-full relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <h1 className="text-3xl lg:text-4xl font-pretendard font-bold leading-tight mb-6 text-white">
          당신의 본질이 <br className="md:hidden" /> 가장 우아하게 빛나도록, <br />
          <span className="text-gold">[비즈디오]</span>가 설계합니다.
        </h1>
        <p className="text-sm md:text-base text-white/90 mb-8 max-w-2xl leading-relaxed font-medium">
          비즈디오는 당신의 브랜드가 가진 고유한 분위기를 포착하고 시각화합니다. <br />
          정보를 넘어, 스스로를 증명하는 매력으로서의 홈페이지. <br />
          홈페이지는 정보를 전달하는 곳이 아니라, 스스로를 광고하는 '자체 매체'여야 합니다.
        </p>
        <div className="flex gap-4">
          <Link 
            to="/about"
            className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl text-sm"
          >
            About us
          </Link>
          <Link 
            to="/portfolio"
            className="px-8 py-3 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-black transition-all text-sm"
          >
            Portfolio
          </Link>
        </div>
      </motion.div>
    </div>
  </section>
);

const Architecting = () => (
  <section id="about" className="py-32 px-6 bg-white text-center">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-4xl lg:text-6xl font-sans font-bold tracking-tight">
          ARCHITECTING <br />
          THE PRESENCE.
        </h2>
        <div className="w-12 h-px bg-black mx-auto" />
        <p className="text-lg text-gray-600 leading-relaxed">
          실력이 있어도 그것이 <span className="font-bold text-black">시각적으로 증명되지 않으면</span> 시장에서는 그저 수많은 선택지 중 하나에 머물 뿐입니다. "비즈디오"는 당신이 매번 스스로를 증명해야 하는 수고를 덜고, 고객이 먼저 당신의 가치를 알아보게 만드는 '신뢰의 거점'을 설계합니다.
        </p>
      </motion.div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      title: "Clarity of Identity",
      subtitle: "(정체성의 명료화)",
      desc: "흩어진 실력을 하나의 관점으로 엮어냅니다. 단순한 페이지 나열이 아닙니다. 당신이 가진 본질적인 강점을 포착하여, 고객의 뇌리에 깊게 각인될 수 있는 명확한 브랜드 서사를 구축합니다.",
      icon: Sparkles
    },
    {
      title: "Visual Proof",
      subtitle: "(시각적 증명)",
      desc: "보는 것만으로 실력을 짐작하게 합니다. 백 마디 말보다 강력한 것은 정교하게 설계된 한 장의 페이지입니다. 특정 단위로 조율된 디자인과 일관된 무드(Mood)를 통해 당신의 전문성을 시각적으로 즉각 증명합니다.",
      icon: Eye
    },
    {
      title: "Systematic Growth",
      subtitle: "(시스템에 의한 성장)",
      desc: "홈페이지가 스스로 일하게 만듭니다. 비즈디오가 만든 사이트는 당신의 가치를 전파하는 독보적인 매체가 됩니다. 한 번의 구축으로 지속적인 신뢰를 생산하고, 비즈니스가 브랜드로 성장하는 탄탄한 기반이 됩니다.",
      icon: TrendingUp
    }
  ];

  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="text-center space-y-6 group"
          >
            <div className="w-16 h-16 mx-auto mb-8 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-gold/50 group-hover:bg-white/10 transition-all duration-500">
              <f.icon className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-2xl font-sans font-bold">
              {f.title} <br />
              <span className="text-sm font-sans text-gray-400 font-normal">{f.subtitle}</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
              {f.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const TheGap = () => (
  <section className="py-32 px-6 bg-white">
    <div className="max-w-7xl mx-auto text-center mb-20">
      <span className="text-xs font-bold tracking-widest text-gray-400 uppercase mb-4 block">Difference</span>
      <h2 className="text-5xl font-sans font-bold mb-6">THE GAP.</h2>
      <p className="text-gray-500 italic mb-8">(홈페이지가 있느냐 없느냐의 차이)</p>
      <p className="text-lg text-gray-700">
        비즈디오는 당신의 실력이 시장에서 <br className="md:hidden" /> <span className="font-bold text-black">"제값"</span>을 받게 하는 <br />
        가장 우아한 도구를 설계합니다.
      </p>
    </div>

    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
      {/* Without Website */}
      <div className="p-10 rounded-3xl border border-gray-100 bg-gray-50/50 space-y-8">
        <div className="flex items-center gap-3 text-gray-400">
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
            <X className="w-5 h-5" />
          </div>
          <span className="font-bold uppercase tracking-tighter">Without Website</span>
        </div>
        <ul className="space-y-6">
          {[
            { title: "증명의 피로감", desc: "매번 직접 실력을 설명하고 설득해야 하는 번거로움" },
            { title: "휘발되는 전문성", desc: "좋은 작업들이 흩어져 브랜드 자산이 되지 못함" },
            { title: "가격 경쟁의 늪", desc: "비교 대상이 많아 단가 경쟁에 내몰리는 구조" },
            { title: "정적인 명함", desc: "단순 연락처 전달에 그쳐 확장성이 불가능한 상태" }
          ].map((item, i) => (
            <li key={i} className="flex gap-4 opacity-50">
              <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center shrink-0 mt-1">
                <X className="w-3 h-3" />
              </div>
              <div>
                <h4 className="font-bold text-sm">{item.title}</h4>
                <p className="text-xs text-gray-500">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* With BizDio */}
      <div className="p-10 rounded-3xl border-2 border-purple-100 bg-white shadow-xl shadow-purple-50 space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-16 -mt-16 blur-3xl opacity-50" />
        <div className="flex items-center gap-3 text-purple-600">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shadow-sm">
            <Check className="w-5 h-5" />
          </div>
          <span className="font-bold uppercase tracking-tighter">With BizDio</span>
        </div>
        <ul className="space-y-6">
          {[
            { title: "무언의 설득력", desc: "접속하는 순간 실력에 대한 의구심을 확신으로 바꿈" },
            { title: "축적되는 자산", desc: "모든 활동이 아카이빙되어 브랜드 자산으로 축적" },
            { title: "가치 중심의 계약", desc: "고객이 먼저 함께하고 싶어 하는 파트너로 포지셔닝" },
            { title: "자체 광고 매체", desc: "24시간 나를 대신해 가치를 증명하고 영업하는 시스템" }
          ].map((item, i) => (
            <li key={i} className="flex gap-4">
              <div className="w-5 h-5 rounded-full bg-yellow-400 flex items-center justify-center shrink-0 mt-1">
                <Check className="w-3 h-3 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm">{item.title}</h4>
                <p className="text-xs text-gray-600">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
        <a 
          href="https://tally.so/r/RGB8Rv" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-all text-center"
        >
          상담 신청하기
        </a>
      </div>
    </div>
  </section>
);

const Solutions = () => {
  const solutions = [
    {
      title: "Digital Platform Build",
      desc: "아이덴티티 홈페이지 제작, 특수 기능 개발",
      img: "https://picsum.photos/seed/web/600/400"
    },
    {
      title: "Visual Identity System",
      desc: "로고 디자인, 캐릭터 디자인",
      img: "https://picsum.photos/seed/design/600/400"
    },
    {
      title: "Strategy & Content Engine",
      desc: "브랜드 기획, SNS 세팅, 영상 제작, 사진 보정",
      img: "https://picsum.photos/seed/content/600/400"
    }
  ];

  return (
    <section id="portfolio" className="py-32 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-purple-600 font-bold text-sm mb-2 block">Archive</span>
          <h2 className="text-5xl font-sans font-bold">Portfolio</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video rounded-3xl overflow-hidden mb-6 shadow-lg">
                <img 
                  src={s.img} 
                  alt={s.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    {
      role: "기술적 해결사",
      name: "에이스*** 대표님",
      content: "뻔한 레이아웃이 싫어 고민하던 중 비즈디오를 만났습니다. 불가능할 것 같은 작업도 완벽히 구현해 주시는 걸 보고 감탄했습니다. 단순한 제작자가 아니라 시스템을 설계하는 파트너를 만난 기분입니다."
    },
    {
      role: "영상 및 콘텐츠",
      name: "**대학교 콘텐츠 기획 담당",
      content: "단순한 편집을 넘어 브랜드가 지향하는 방향을 정확히 파악해 고감도 홍보 영상을 제작해 주셨습니다. 프로젝트 내내 보여주신 세심한 디렉팅과 감각적인 컷 구성 덕분에 기대 이상의 결과물이 나왔습니다. 진심으로 감사드립니다."
    },
    {
      role: "지속 가능한 파트너십",
      name: "아이** 대표",
      content: "다른 곳에 의뢰했다가 조잡한 디자인 탓에 손해를 보고 서야 비즈디오의 가치를 뼈저리게 느꼈습니다. 아무리 바쁘셔도, 시간이 날 때마다 기다려서라도 맡기는 이유는 단 하나입니다. 어떤 상황에서도 만족스러운 결과를 내놓는 곳이기 때문입니다."
    },
    {
      role: "본질의 포착 및 신뢰",
      name: "헤드셰프 박**님",
      content: "제 브랜드의 본질이 무엇인지 스스로도 명확히 설명하기 막막했는데, 모호한 생각들을 단숨에 깔끔하고 선명한 디자인으로 구현해 주셨습니다. 제가 말하지 못한 부분까지 정확히 읽어낸 결과물을 보았을 때 '이게 바로 나다'라는 확신이 들었습니다."
    }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-purple-600 font-bold text-sm mb-2 block">고객 후기</span>
          <h2 className="text-5xl font-sans font-bold">Client Reviews</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="space-y-4">
              <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">{r.role}</div>
              <div className="font-bold text-sm">{r.name}</div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {r.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Journey = () => {
  const steps = [
    { id: "01", title: "교감의 시작 (Discovery)", desc: "브랜드의 숨겨진 이야기를 듣고, 결을 맞추는 첫 번째 대화입니다." },
    { id: "02", title: "여정의 설계 (Proposal)", desc: "가장 아름답고 효율적인 항해를 위한 최적의 지도를 그립니다." },
    { id: "03", title: "본질의 탐구 (Dive Deep)", desc: "브랜드의 핵심 색깔을 수집하여 디자인의 단단한 기반을 다집니다." },
    { id: "04", title: "감각의 구조화 (Architecture)", desc: "뼈대 위에 미학을 입히며 PC 화면 속의 아우라를 만들어냅니다." },
    { id: "05", title: "경험의 확장 (Expansion)", desc: "손끝에서 느껴지는 모바일 환경에서도 일관된 무드를 유지합니다." },
    { id: "06", title: "아우라의 완성 (The Unveiling)", desc: "마침내, 세상에 단 하나뿐인 당신만의 분위기를 공개합니다." }
  ];

  return (
    <section className="py-32 px-6 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-sans font-bold mb-4 uppercase tracking-tighter">The Journey <br /> To Allure.</h2>
          <p className="text-sm text-purple-600 font-medium">당신의 추상적인 아이디어가 구체적인 감각으로 탄생하기까지의 과정</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-1">
          {steps.map((step, i) => (
            <div key={i} className="group flex items-center justify-between py-6 border-b border-gray-200 hover:bg-white hover:px-6 transition-all duration-300 cursor-default">
              <div className="space-y-1">
                <h4 className="font-bold text-lg">{step.title}</h4>
                <p className="text-sm text-gray-500">{step.desc}</p>
              </div>
              <div className="text-2xl font-sans font-bold text-gray-300 group-hover:text-black transition-colors">{step.id}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Background Image Decor */}
      <div className="absolute top-1/2 -right-40 -translate-y-1/2 w-[600px] opacity-10 pointer-events-none">
        <img src="https://picsum.photos/seed/abstract/800/800" alt="decor" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "제작 기간은 보통 얼마나 걸리나요?", a: "프로젝트의 규모와 복잡도에 따라 다르지만, 평균적으로 4~8주 정도 소요됩니다." },
    { q: "기존에 운영하던 사이트 리뉴얼도 가능한가요?", a: "네, 가능합니다. 기존 브랜드의 자산을 유지하면서도 현대적인 감각으로 재해석해 드립니다." },
    { q: "결제 및 진행 방식이 궁금합니다.", a: "계약 시 착수금 50%, 완료 시 잔금 50% 방식으로 진행됩니다." },
    { q: "상담 비용은 따로 발생하나요?", a: "첫 상담은 무료로 진행되며, 프로젝트의 방향성을 함께 논의합니다." }
  ];

  return (
    <section className="py-32 px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase opacity-70 mb-2 block">Q&A</span>
          <h2 className="text-5xl font-sans font-bold mb-6">FREQUENTLY <br /> ASKED QUESTIONS</h2>
          <p className="opacity-80">커뮤니케이션의 시작은 명확함에서 비롯됩니다. 가장 자주 묻는 질문들을 모았습니다.</p>
        </div>
        
        <Accordion.Root type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <Accordion.Item key={i} value={`item-${i}`} className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20">
              <Accordion.Header>
                <Accordion.Trigger className="w-full px-8 py-6 flex items-center justify-between text-left font-bold hover:bg-white/5 transition-colors group">
                  {faq.q}
                  <Plus className="w-5 h-5 transition-transform group-data-[state=open]:rotate-45" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="px-8 pb-6 text-white/80 text-sm leading-relaxed animate-slide-down">
                {faq.a}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="relative py-40 px-6 text-center text-white overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://picsum.photos/seed/night/1920/1080" 
        alt="CTA bg" 
        className="w-full h-full object-cover brightness-50"
        referrerPolicy="no-referrer"
      />
    </div>
    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
      <div className="space-y-2">
        <span className="text-gold font-bold tracking-widest uppercase text-sm">Next Step</span>
        <h2 className="text-4xl lg:text-6xl font-pretendard font-bold leading-tight">
          당신의 브랜드가 가진 가장 매혹적인 순간을 <br />
          포착할 준비가 되셨나요?
        </h2>
        <p className="text-gray-300">비즈디오가 그 시작을 함께합니다.</p>
      </div>
      <a 
        href="https://tally.so/r/RGB8Rv" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block px-10 py-5 bg-white text-black rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl"
      >
        프로젝트 시작하기
      </a>
    </div>
  </section>
);

const LiveNotification = () => (
  <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl">
    <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-full p-3 pl-8 flex items-center justify-between shadow-2xl">
      <div className="flex items-center gap-4 overflow-hidden">
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest text-gray-400 whitespace-nowrap">Agent Live</span>
        </div>
        <div className="w-px h-5 bg-gray-200 shrink-0" />
        <p className="text-sm font-semibold text-gray-800 truncate">
          [실시간] 5분 전 '스타***'님 새 기획안 전달 완료
        </p>
      </div>
      <a 
        href="https://tally.so/r/RGB8Rv" 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-8 py-2.5 bg-purple-600 text-white text-sm font-bold rounded-full hover:bg-purple-700 transition-all shadow-lg shadow-purple-200/50 shrink-0 ml-4"
      >
        프로젝트 문의
      </a>
    </div>
  </div>
);

// --- Main App ---

export default function LandingPage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen selection:bg-gold selection:text-white">
      <SEO 
        title="홈" 
        description="비즈디오(BizDio) 공식 홈페이지. 하이엔드 시스템 브랜드 마케팅 전문가. 브랜드 블로그, 스마트 플레이스, 홈페이지 제작 및 광고 캠페인."
        canonical="/"
      />
      <Navbar />
      <main>
        <Hero />
        <Architecting />
        <Features />
        <TheGap />
        <Solutions />
        <Reviews />
        <Journey />
        <FAQ />
        
        {/* Order Limit Section */}
        <section className="py-20 px-6 bg-white text-center">
          <div className="max-w-2xl mx-auto space-y-6">
            <h3 className="text-3xl font-sans font-bold leading-tight">
              많이 작업하는것이 목적이 아닌, 품질에 최우선을 두기때문에 주문 수를 제한합니다.
            </h3>
            <p className="text-sm text-gray-500">
              고객님에게 최우선권을 관리 쉽고, 경제적으로 이득을 볼 수 있는 솔루션을 선정해서 제공해 드립니다.
            </p>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <LiveNotification />
    </div>
  );
}
