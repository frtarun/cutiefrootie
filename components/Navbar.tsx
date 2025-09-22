/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState } from 'react';
import { Page } from '../types';

interface NavbarProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  activePage: Page;
  onNavigate: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, activePage, onNavigate, children }) => (
  <button
    onClick={() => onNavigate(page)}
    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
      activePage === page
        ? 'bg-pink-100 text-pink-600'
        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
    }`}
    aria-current={activePage === page ? 'page' : undefined}
  >
    {children}
  </button>
);

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navClasses = 'bg-white/80';
  const logoClasses = 'text-pink-500 hover:text-pink-600';
  const mobileButtonClasses = 'bg-slate-100 text-slate-500 hover:bg-slate-200';
  const mobileMenuClasses = 'bg-white';

  return (
    <nav className={`${navClasses} backdrop-blur-md sticky top-0 z-40`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => onNavigate('home')} className={`flex-shrink-0 font-display font-bold text-2xl ${logoClasses} transition-colors`}>
              cutiefrootie ✨
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink page="home" activePage={activePage} onNavigate={onNavigate}>Home</NavLink>
              <NavLink page="showcase" activePage={activePage} onNavigate={onNavigate}>Showcase</NavLink>
              <NavLink page="tutorials" activePage={activePage} onNavigate={onNavigate}>Tutorials</NavLink>
              <NavLink page="about" activePage={activePage} onNavigate={onNavigate}>About</NavLink>
              <NavLink page="blog" activePage={activePage} onNavigate={onNavigate}>Blog</NavLink>
              <NavLink page="contact" activePage={activePage} onNavigate={onNavigate}>Contact</NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`${mobileButtonClasses} inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100 focus:ring-pink-500`}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className={`md:hidden ${mobileMenuClasses}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink page="home" activePage={activePage} onNavigate={onNavigate}>Home</NavLink>
            <NavLink page="showcase" activePage={activePage} onNavigate={onNavigate}>Showcase</NavLink>
            <NavLink page="tutorials" activePage={activePage} onNavigate={onNavigate}>Tutorials</NavLink>
            <NavLink page="about" activePage={activePage} onNavigate={onNavigate}>About</NavLink>
            <NavLink page="blog" activePage={activePage} onNavigate={onNavigate}>Blog</NavLink>
            <NavLink page="contact" activePage={activePage} onNavigate={onNavigate}>Contact</NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};