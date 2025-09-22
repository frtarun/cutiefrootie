/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';
import { ShowcaseProject } from '../types';
import { ExternalLinkIcon, GithubIcon } from './icons';

interface ProjectCardProps {
  project: ShowcaseProject;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-slate-200/80">
      <div className="relative">
        <img
          className="w-full h-48 object-cover"
          src={project.imageUrl}
          alt={project.title}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map(tag => (
            <span key={tag} className="inline-block bg-pink-100 text-pink-700 text-xs font-semibold px-2.5 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <h3 className="font-display font-bold text-xl text-slate-800 truncate" title={project.title}>
          {project.title}
        </h3>
        <p className="text-slate-600 mt-2 text-sm h-10">{project.description}</p>
        <div className="mt-4 flex items-center space-x-3">
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-pink-500 rounded-lg shadow-sm hover:bg-pink-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500">
            <ExternalLinkIcon className="w-4 h-4" />
            Live Demo
          </a>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500">
            <GithubIcon className="w-4 h-4" />
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
