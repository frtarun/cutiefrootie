/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

/**
 * Defines the available pages for navigation within the app.
 */
export type Page = 'home' | 'showcase' | 'about' | 'contact' | 'blog' | 'support' | 'tutorials';

/**
 * Interface defining the structure of a showcase project object.
 */
export interface ShowcaseProject {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
}

/**
 * Interface defining the structure of a tutorial video object.
 */
export interface TutorialVideo {
  id: string;
  title: string;
  videoUrl: string;
  description: string;
}