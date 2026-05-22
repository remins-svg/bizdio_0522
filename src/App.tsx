/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ColumnPage from './components/ColumnPage';
import ProductPage from './components/ProductPage';
import FAQPage from './components/FAQPage';
import AboutPage from './components/AboutPage';
import PortfolioPage from './components/PortfolioPage';
import PortfolioDetailPage from './components/PortfolioDetailPage';
import ScrollToTop from './components/ScrollToTop';

import { HelmetProvider } from 'react-helmet-async';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/columns" element={<ColumnPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<PortfolioDetailPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
