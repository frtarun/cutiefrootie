/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-slate-200/80">
        {/* About Me Section */}
        <section>
          <h1 className="font-display text-4xl font-extrabold text-slate-800">About Me</h1>
          <p className="mt-6 text-xl text-slate-600">
            Hey, I’m <span className="font-bold text-pink-500">cutiefrootie</span> 👋, a developer who loves creating little pockets of happiness on the web.
          </p>
          <p className="mt-4 text-slate-600">
            I started this journey with a simple belief: websites don't have to be boring. They can be magical, playful, and deeply personal. I was tired of the same corporate templates and wanted to build things that sparked genuine joy. So, I began creating these small, interactive sites for friends' birthdays and anniversaries, and their smiles told me I was onto something special.
          </p>
          <div className="mt-6 bg-slate-50 p-4 rounded-lg">
            <h3 className="font-display font-bold text-slate-700">A few fun facts:</h3>
            <ul className="mt-2 list-disc list-inside text-slate-600 space-y-1">
              <li>I believe the best animations are the ones that feel like confetti.</li>
              <li>My code is powered by coffee and cute animal videos.</li>
              <li>My goal is to fight web-boringness, one magical site at a time!</li>
            </ul>
          </div>
        </section>

        <hr className="my-12 border-slate-200"/>

        {/* My Motivation Section */}
        <section>
          <h2 className="font-display text-3xl font-extrabold text-slate-800">My Motivation</h2>
          <blockquote className="mt-6 pl-4 border-l-4 border-pink-300">
            <p className="text-xl italic text-slate-700">"I want to see people smile when they open my sites."</p>
          </blockquote>
          <p className="mt-4 text-slate-600">
            This is my entire philosophy. In a digital world that can often feel cold and impersonal, I want to create things that foster connection and celebrate life's small, beautiful moments. A personalized website for a birthday or an anniversary isn't just code; it's a heartfelt gift, a digital keepsake that shows someone you care. It’s about using technology to amplify joy and strengthen human bonds.
          </p>
          <p className="mt-4 text-slate-600">
            Every project you see here is a step towards that mission. I hope they bring a smile to your face, too.
          </p>
        </section>
      </div>
    </div>
  );
};
