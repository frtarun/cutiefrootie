/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import { showcaseProjects, tutorialVideos } from './data';
import { ShowcaseProject, TutorialVideo } from './types';

/**
 * Simulates fetching showcase projects from a backend API.
 * @returns A promise that resolves with an array of showcase projects.
 */
export const fetchShowcaseProjects = (): Promise<ShowcaseProject[]> => {
  return new Promise(resolve => {
    // Simulate network delay
    setTimeout(() => {
      resolve(showcaseProjects);
    }, 800);
  });
};

/**
 * Simulates fetching tutorial videos from a backend API.
 * @returns A promise that resolves with an array of tutorial videos.
 */
export const fetchTutorialVideos = (): Promise<TutorialVideo[]> => {
  return new Promise(resolve => {
    // Simulate network delay
    setTimeout(() => {
      resolve(tutorialVideos);
    }, 800);
  });
};
