/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ShowcasePage } from './pages/ShowcasePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { SupportPage } from './pages/SupportPage';
import { TutorialsPage } from './pages/TutorialsPage';
import { Page } from './types';
import { HeartIcon, SparklesIcon, StarIcon } from './components/icons';


const renderPage = (page: Page, onNavigate: (page: Page) => void) => {
  switch (page) {
    case 'home':
      return <HomePage onNavigate={onNavigate} />;
    case 'showcase':
      return <ShowcasePage />;
    case 'about':
      return <AboutPage />;
    case 'blog':
      return <BlogPage />;
    case 'contact':
      return <ContactPage />;
    case 'support':
      return <SupportPage />;
    case 'tutorials':
      return <TutorialsPage />;
    default:
      return <HomePage onNavigate={onNavigate} />;
  }
}

/**
 * Main component for the Magical Portfolio app.
 * It manages the state for page navigation and renders the layout.
 */
export const App: React.FC = () => {
  const [activePage, setActivePage] = useState<Page>('home');

  const handleNavigate = (page: Page) => {
    setActivePage(page);
    window.scrollTo(0, 0);
  };
  
  return (
    <div className={`min-h-screen font-sans flex flex-col relative overflow-hidden bg-slate-50 text-slate-800`}>
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" aria-hidden="true">
        <StarIcon className="shape s1" />
        <HeartIcon className="shape s2" />
        <SparklesIcon className="shape s3" />
        <HeartIcon className="shape s4" />
        <StarIcon className="shape s5" />
        <SparklesIcon className="shape s1" style={{ left: '55%', animationDelay: '5s', animationDuration: '20s' }} />
        <HeartIcon className="shape s2" style={{ left: '85%', animationDelay: '1s', animationDuration: '15s' }} />
      </div>
      <Navbar activePage={activePage} onNavigate={handleNavigate} />
      <main className="flex-grow z-10">
        {renderPage(activePage, handleNavigate)}
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};