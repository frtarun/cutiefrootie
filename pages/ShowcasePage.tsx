/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React, { useState, useMemo, useEffect } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { ShowcaseProject } from '../types';
import { fetchShowcaseProjects } from '../api';
import { SpinnerIcon } from '../components/icons';

const allTags = ['Birthday', 'Playful', 'Anniversary', 'Personalized', 'Game'];

export const ShowcasePage: React.FC = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [projects, setProjects] = useState<ShowcaseProject[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchShowcaseProjects()
      .then(data => {
        setProjects(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const filteredProjects = useMemo(() => {
    if (!activeTag) {
      return projects;
    }
    return projects.filter(project => project.tags.includes(activeTag));
  }, [activeTag, projects]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 animate-fade-in">
      <header className="text-center mb-12">
        <h1 className="font-display text-4xl font-extrabold text-slate-800">Showcase Gallery</h1>
        <p className="mt-4 text-lg text-slate-600">The heart of the startup site—a gallery of happiness projects.</p>
      </header>

      <div className="flex justify-center flex-wrap gap-2 mb-8">
        <button
          onClick={() => setActiveTag(null)}
          className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
            activeTag === null ? 'bg-pink-500 text-white' : 'bg-white text-slate-600 hover:bg-slate-100'
          }`}
        >
          All
        </button>
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
              activeTag === tag ? 'bg-pink-500 text-white' : 'bg-white text-slate-600 hover:bg-slate-100'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      <main>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <SpinnerIcon className="w-12 h-12 text-pink-500" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
};