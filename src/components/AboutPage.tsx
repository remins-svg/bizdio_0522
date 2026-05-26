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
                비즈디오의 시작은{" "}
                <span className="text-blue-600">본질에 대한 의문</span>에서
                비롯되었습니다.
              </h3>
            </div>

            <p>
              비즈디오의 시작은 본질에 대한 의문, 그리고 다른 분야에 대한
              호기심에서 비롯되었습니다. 오랫동안 디자인 현업에 몸담으며 잠시
              숨을 고르고 싶던 시기가 있었습니다. 새로운 돌파구를 찾기 위해
              블로그, 영상, 마케팅, 전자책, 유튜브, 인스타그램, 네이버 플레이스,
              그리고 AI에 이르기까지 세상에 존재하는 수많은 강의를 듣고 치열하게
              공부했습니다.
            </p>

            <p>
              더 쉽고 빠른 길을 찾고 싶어 이리저리 부딪히던 시간도 있었고, 당장
              뚜렷한 결과가 나지 않아 조급했던 적도 있습니다. 트렌드를 따라
              인스타그램 계정을 키워보기도 했습니다. 하지만 소위 '사람을 낚는'
              자극적인 방식과 부풀려진 마케팅은 제 가치관과 맞지 않았습니다.
              인공지능(AI)마저도 자극적인 카피를 제안할 때면, "이건 너무
              오버하는 것 아닌가, 사기 치는 것 같잖아?" 라며 거부감이 들곤
              했습니다.
            </p>

            <p>
              오버하지 않고 정직하게, 비즈니스의 본질을 전달하는 마케팅은
              불가능한 걸까 고민하며 애써 키운 계정을 한동안 방치하기도
              했습니다.
            </p>

            <p>
              전환점은 우연히 찾아왔습니다. 방치해 두었던 계정으로{" "}
              <span className="font-bold text-black">체험단</span>을 시작하게 된
              것입니다. 현장을 직접 다니며 비로소 깨달았습니다. 수많은 매장과
              비즈니스가 겉보기에는 화려할지 몰라도, 정작 매출로 이어지는
              본질적인 동선이나 마케팅의 기본 세팅이 잘못되어 있다는 사실을요.
            </p>

            <p>
              동시에 그동안 제가 치열하게 헤매며 쌓아온 디자인과 다방면의 마케팅
              지식들이 이분들에게{" "}
              <span className="font-bold text-black italic">
                진짜 필요한 정답
              </span>
              이었다는 것을 알게 되었습니다. 내가 먼저 깊이 고민하고 방황해
              보았기에, 잘못 세팅된 비즈니스를 바로잡고 진짜 가치를 찾아주는
              일에 누구보다 진심일 수 있었습니다.
            </p>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-black">
                자극적인 낚시 없이도, 본질이 튼튼하면 진짜 매출이 일어납니다.
              </h3>
              <p>
                그것이{" "}
                <span className="font-bold text-black">비즈디오(BizDio)</span>의
                시작입니다. 앞으로 비즈디오의 칼럼을 통해, 저와 비슷한 고민을
                하며 길을 찾고 계실 수 많은 대표님들께 편법이 아닌{" "}
                <span className="font-bold text-black">
                  '진짜 도움되는 본질적인 마케팅과 디자인 이야기'
                </span>
                를 하나씩 풀어가고자 합니다.
              </p>
            </div>

            <p>편법과 과장에 지친 여러분의 가장 든든한 파트너가 되겠습니다.</p>

            <div className="pt-8 text-right">
              <p className="font-bold text-black">
                비즈디오 대표 <span className="text-lg">임현진</span>
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
