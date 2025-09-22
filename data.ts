/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { ShowcaseProject, TutorialVideo } from './types';

/** Base URL for static files. */
const staticFilesUrl =
  'https://www.gstatic.com/aistudio/starter-apps/veo3-gallery/';

export const showcaseProjects: ShowcaseProject[] = [
  {
    id: '1',
    title: 'Varsha’s Magical Birthday Website',
    description: 'A whimsical, interactive birthday site with animations and personalized messages.',
    imageUrl: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
    tags: ['Birthday', 'Playful'],
  },
  {
    id: '2',
    title: 'Our Anniversary Storybook',
    description: 'A digital storybook that recounts a couple\'s journey with beautiful illustrations and notes.',
    imageUrl: 'https://images.unsplash.com/photo-1494774152422-bcf3c88536b1?auto=format&fit=crop&w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
    tags: ['Anniversary', 'Personalized'],
  },
  {
    id: '3',
    title: 'Paws & Play Mini-Game',
    description: 'A cute and simple mini-game where you take care of a virtual pet.',
    imageUrl: 'https://images.unsplash.com/photo-1583337130417-234604081635?auto=format&fit=crop&w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
    tags: ['Game', 'Playful'],
  },
  {
    id: '4',
    title: 'Interactive Wedding Invitation',
    description: 'A modern and magical wedding invitation website with RSVP functionality.',
    imageUrl: 'https://images.unsplash.com/photo-1560962916-8c4604a37344?auto=format&fit=crop&w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
    tags: ['Personalized'],
  },
];

export const tutorialVideos: TutorialVideo[] = [
  {
    id: '1',
    title: 'How to Clone and Run the Project from GitHub',
    description: 'A step-by-step guide to get you started. This video walks you through cloning the repository, installing dependencies, and launching the website on your local machine. Perfect for beginners who want to use these magical templates!',
    videoUrl: staticFilesUrl + 'Video_Game_Trailer_Sci_Fi_Urban_Chasemp4.mp4',
  },
  {
    id: '2',
    title: 'Customizing Your Magical Website',
    description: 'Learn how to personalize your new website. This tutorial covers changing text, swapping out images, and modifying the color scheme to make the project truly your own. Unleash your creativity!',
    videoUrl: staticFilesUrl + 'Characters_intense_talking.mp4',
  }
];