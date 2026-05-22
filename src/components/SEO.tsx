import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonical?: string;
  jsonLd?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  canonical,
  jsonLd,
}) => {
  const siteTitle = '비즈디오(BizDio)';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = '우주에서 가장 빛나는 당신의 비즈니스를 위한 하이엔드 시스템. 브랜드 블로그 디자인, 스마트 플레이스 최적화, 웹사이트 제작 전문가.';
  const siteDescription = description || defaultDescription;
  const siteUrl = 'https://bizdio.co.kr';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={siteDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={siteDescription} />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={siteDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* JSON-LD Schema */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
