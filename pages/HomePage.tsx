/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { Page } from '../types';
// Fix: Import GithubIcon to resolve reference error.
import { CakeIcon, GiftIcon, HeartIcon, SparklesIcon, GithubIcon } from '../components/icons';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const HighlightCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-white/50 p-6 rounded-xl text-center shadow-sm">
    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-pink-100 text-pink-500">
      {icon}
    </div>
    <h3 className="font-display text-lg font-bold text-slate-800">{title}</h3>
    <p className="mt-2 text-slate-600 text-sm">{children}</p>
  </div>
);

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-extrabold text-slate-800 leading-tight">
            Turning simple days into <span className="text-pink-500">magical moments</span> with cute websites ✨
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600">
            I build whimsical, innovative little websites to make people smile on their special days. Welcome to my gallery of happiness projects!
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button
              onClick={() => onNavigate('showcase')}
              className="px-8 py-3 font-semibold text-white bg-pink-500 rounded-lg shadow-md hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Explore Showcases
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-3 font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500"
            >
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-16 bg-white/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <HighlightCard icon={<CakeIcon className="w-6 h-6" />} title="Birthday & Anniversary">
              Celebrate your loved ones with a personalized site they'll never forget.
            </HighlightCard>
            <HighlightCard icon={<GiftIcon className="w-6 h-6" />} title="Playful Mini-Games">
              Add a dash of fun with interactive games and playful experiences.
            </HighlightCard>
            <HighlightCard icon={<HeartIcon className="w-6 h-6" />} title="Personalized Stories">
              Tell your unique story through a beautifully crafted digital journey.
            </HighlightCard>
          </div>
        </div>
      </section>
      
      {/* Why Choose Me Section */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-slate-800">Why a Magical Website?</h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="bg-white p-6 rounded-lg border border-slate-200/80">
                <SparklesIcon className="w-8 h-8 text-purple-500 mb-3" />
                <h3 className="font-display font-bold text-slate-800">Creative & Cute Designs</h3>
                <p className="text-slate-600 mt-2">Every site is crafted with love, focusing on playful aesthetics and delightful user interactions.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200/80">
                <GithubIcon className="w-8 h-8 text-green-500 mb-3" />
                <h3 className="font-display font-bold text-slate-800">Open-Source & Free</h3>
                <p className="text-slate-600 mt-2">All showcase projects are open-source. Feel free to use them, learn from them, and share them.</p>
              </div>
              <div className="bg-white p-6 rounded-lg border border-slate-200/80">
                <HeartIcon className="w-8 h-8 text-red-500 mb-3" />
                <h3 className="font-display font-bold text-slate-800">Customizable for You</h3>
                <p className="text-slate-600 mt-2">Need something special? I can tailor any design to perfectly fit your person, story, or event.</p>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};