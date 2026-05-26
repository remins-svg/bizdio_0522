import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEO from "./SEO";
import CommitmentBanner from "./CommitmentBanner";
import { ArrowLeft, MessageCircle } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <SEO
        title="About Us"
        description="우리는 디자인 그 이상의 가치를 만듭니다. 우주에서 가장 빛나는 당신의 비즈니스를 위한 하이엔드 시스템, 비즈디오를 소개합니다."
        canonical="/about"
      />
      <Navbar />

      {/* Header Section */}
      <div className="relative h-[400px] flex items-center px-6 overflow-hidden bg-black">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="About Us Header Background"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="max-w-7xl mx-auto w-full relative z-10 pt-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>메인으로</span>
          </Link>
          <span className="text-sm font-bold tracking-widest text-gray-400 uppercase mb-2 block">
            ABOUT
          </span>
          <h1 className="text-5xl font-bold text-white mb-4">회사소개</h1>
        </div>
      </div>

      <CommitmentBanner />

      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-24 px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4 text-left">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-black tracking-tight">
              Who We Are
            </h2>
            <p className="text-gray-500">
              우리는 디자인 그 이상의 가치를 만듭니다. 우주에서 가장 빛나는
              당신의 비즈니스를 위한 하이엔드 시스템.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=2070&auto=format&fit=crop"
                alt="Business Essence"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8 text-neutral-600 leading-relaxed">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-black">
                비즈디오의 시작은 한{" "}
                <span className="text-blue-600">세차장</span>에서
                비롯되었습니다.
              </h3>
            </div>

            <p>
              3년 전, 가장 친한 친구가 세차장을 창업하면서 온라인 마케팅의
              중요성을 누구보다 잘 이해하고 있었습니다. 네이버 스마트스토어,
              블로그, 인스타그램을 활용하는 법도 익숙했지만, 오프라인 사업장에서
              어떤 광고가 가장 효과적일지에 대한 고민이 있었습니다.
            </p>

            <p>
              그 결과,{" "}
              <span className="font-bold text-black">
                스마트 플레이스 마케팅
              </span>
              이 적합하다는 결론을 내렸고, 실제로 실행에 옮겼습니다.
            </p>

            <p>
              오프라인 사업장은 온라인 마케팅보다{" "}
              <span className="font-bold text-black italic">
                단골 고객 확보
              </span>
              가 무엇보다 중요합니다. 경쟁 업체들이 마케팅에 소극적인 상황에서,
              우리는 스마트 플레이스를 적극 활용했고, 그 결과 창업 2년 만에 확장
              공사까지 진행할 수 있었습니다.
            </p>

            <p>
              이 경험을 계기로, 친구의 사업을 돕는 차원을 넘어{" "}
              <span className="font-bold text-black">
                스마트 플레이스 마케팅
              </span>
              을 전문적으로 연구하고 실행하기 시작했습니다. 그렇게 탄생한
              비즈디오는 지금까지{" "}
              <span className="font-bold text-black italic">
                100곳이 넘는 다양한 업종의 사업장
              </span>
              이 최적의 노출을 통해 성장할 수 있도록 도왔습니다.
            </p>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black">
                동네 맛집, 병·의원, 헬스장부터 대형 프랜차이즈까지.
              </h3>
              <p>
                비즈디오는 단순한 광고 대행사가 아닙니다.{" "}
                <span className="font-bold text-black">
                  고객과 함께 성장하는 마케팅 파트너
                </span>
                입니다. 전화 영업 한 번 없이, 오직 성과로 신뢰를 쌓아왔고, 그
                결과 계약 연장률 90%라는 놀라운 성과를 만들어냈습니다.
              </p>
            </div>

            <p>
              비즈디오는 오늘도 '진짜 효과가 있는 마케팅'을 고민하며, 고객의
              성장을 위해 한 걸음 더 나아갑니다.
            </p>

            <div className="pt-8 text-right">
              <p className="font-bold text-black">
                비즈디오 대표 <span className="text-lg">김대호</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <button className="fixed bottom-8 right-8 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-2xl z-50 hover:scale-110 transition-transform">
        <MessageCircle className="w-8 h-8 text-black fill-black" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">
          New
        </span>
      </button>
      <Footer />
    </div>
  );
};

export default AboutPage;
