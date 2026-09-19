import { useState, useEffect, useCallback } from 'react';
import LandingPage from './pages/LandingPage';
import CaseStudyPage from './pages/CaseStudyPage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import SplashScreen from './components/SplashScreen';

type Page = 'landing' | 'casestudy' | 'about' | 'products';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [page, setPage] = useState<Page>('landing');
  const handleSplashComplete = useCallback(() => setShowSplash(false), []);

  const navigate = (p: string) => {
    setPage(p as Page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {page === 'casestudy' ? <CaseStudyPage onNavigate={navigate} /> :
       page === 'about' ? <AboutPage onNavigate={navigate} /> :
       page === 'products' ? <ProductsPage onNavigate={navigate} /> :
       <LandingPage onNavigate={navigate} />}
    </>
  );
}
