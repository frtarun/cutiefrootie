/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useEffect } from 'react';
import { GithubIcon, SpinnerIcon } from '../components/icons';
import { TutorialVideo } from '../types';
import { fetchTutorialVideos } from '../api';

export const TutorialsPage: React.FC = () => {
  const [videos, setVideos] = useState<TutorialVideo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchTutorialVideos()
      .then(data => {
        setVideos(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <header className="text-center mb-12">
        <h1 className="font-display text-4xl font-extrabold text-slate-800">Tutorials & Guides</h1>
        <p className="mt-4 text-lg text-slate-600">Learn how to use and customize these magical projects.</p>
      </header>
      
      <main className="space-y-12">
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <SpinnerIcon className="w-12 h-12 text-pink-500" />
          </div>
        ) : (
          videos.map((video) => (
            <div key={video.id} className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-slate-200/80 overflow-hidden">
               <div className="aspect-w-16 aspect-h-9 bg-slate-200 rounded-lg overflow-hidden mb-6">
                <video
                  key={video.id}
                  className="w-full h-full object-cover"
                  src={video.videoUrl}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={video.title}
                />
              </div>
              <h2 className="font-display text-2xl font-bold text-slate-800">{video.title}</h2>
              <p className="mt-2 text-slate-600">{video.description}</p>
            </div>
          ))
        )}

        <div className="text-center bg-pink-50 p-8 rounded-lg">
            <GithubIcon className="w-10 h-10 text-pink-400 mx-auto mb-4" />
            <h3 className="font-display text-xl font-bold text-slate-800">Ready to Start?</h3>
            <p className="mt-2 text-slate-600">All projects are open-source. Head over to GitHub to clone the repository and begin your magical journey!</p>
            <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-2 font-semibold text-white bg-pink-500 rounded-lg shadow-sm hover:bg-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Go to GitHub
            </a>
        </div>
      </main>
    </div>
  );
};