export interface Project {
  title: string;
  description: string;
  screenshot: string;
  screenshotAlt: string;
  images?: string[];
  technologies: string[];
  downloadUrl?: string;
  githubUrl?: string;
}
