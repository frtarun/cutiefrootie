/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { HeartIcon } from '../components/icons';

export const SupportPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-200/80">
        <header className="text-center mb-10">
          <h1 className="font-display text-4xl font-extrabold text-slate-800">Support My Magical Work ✨</h1>
          <p className="mt-4 text-lg text-slate-600">If you enjoy my cute and whimsical websites, here are a few ways you can support me!</p>
        </header>
        
        <div className="space-y-6 text-slate-600 text-center">
            <p>
              All of my showcase projects are open-source and free for everyone to use. Your support helps me dedicate more time to creating new magical experiences, maintaining existing ones, and sharing my creative process with the community.
            </p>
            <p>
              Even a small contribution makes a huge difference and is deeply appreciated!
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 font-semibold text-white bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
              >
                <HeartIcon className="w-6 h-6" />
                Buy Me a Coffee
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 font-semibold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <HeartIcon className="w-6 h-6" />
                Become a Patron
              </a>
            </div>

            <p className="mt-8 text-sm text-slate-500">
              Thank you for being a part of this magical journey!
            </p>
        </div>
      </div>
    </div>
  );
};