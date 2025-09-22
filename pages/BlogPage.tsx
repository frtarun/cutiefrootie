/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

export const BlogPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-200/80">
        <header className="text-center mb-10">
            <h1 className="font-display text-4xl font-extrabold text-slate-800">Magical Stories & Behind-the-Scenes</h1>
            <p className="mt-4 text-lg text-slate-600">Come take a peek into how the magic is made!</p>
        </header>
        
        <div className="space-y-6 text-slate-600">
            <p>Welcome to my little corner of the internet where I'll be sharing stories, tutorials, and the inspiration behind my cute websites.</p>
            <p>This space is currently under construction, but soon you'll find:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
                <li><strong className="font-semibold text-slate-700">Project Spotlights:</strong> Deep dives into how I built specific showcase websites, including challenges and fun discoveries.</li>
                <li><strong className="font-semibold text-slate-700">Cute Code Snippets:</strong> Fun, shareable code for adding a little sparkle to your own projects.</li>
                <li><strong className="font-semibold text-slate-700">My Creative Process:</strong> From initial idea to final magical product, see how I bring these websites to life.</li>
                <li><strong className="font-semibold text-slate-700">Musings on Joyful Tech:</strong> My thoughts on why the web needs more playfulness and personality.</li>
            </ul>
            <p>Check back soon for the first post. Until then, stay magical! ✨</p>
        </div>
      </div>
    </div>
  );
};
