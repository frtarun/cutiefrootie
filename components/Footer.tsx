/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { Page } from '../types';
import { GithubIcon } from './icons';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const footerClasses = 'bg-slate-50 text-slate-500';
  const linkClasses = 'hover:text-pink-500';
  const githubLinkClasses = 'hover:text-slate-900';

  return (
    <footer className={`${footerClasses} z-10`}>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
        <p className="text-sm">&copy; {new Date().getFullYear()} cutiefrootie. Made with ❤️ and magic.</p>
        <div className="flex items-center space-x-6">
          <button
            onClick={() => onNavigate('support')}
            className={`text-sm font-medium ${linkClasses} transition-colors`}
          >
            Support My Work
          </button>
          <a href="#" className={`${githubLinkClasses} transition-colors`}>
            <span className="sr-only">GitHub</span>
            <GithubIcon className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};