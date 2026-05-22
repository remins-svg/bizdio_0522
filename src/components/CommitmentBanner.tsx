import React from 'react';

const CommitmentBanner = () => {
  return (
    <div className="bg-gray-50 border-b border-gray-100 py-6 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
        <p className="text-sm font-bold text-gray-800 tracking-tight">
          비즈디오는 최상의 퀄리티 유지의 위해 홈페이지는 <span className="text-blue-600 font-extrabold uppercase">매 주 1건의 프로젝트만 수주합니다.</span>
        </p>
      </div>
    </div>
  );
};

export default CommitmentBanner;
