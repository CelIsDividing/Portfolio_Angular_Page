import { Project } from '../models/project.model';

export const PROJECTS_DATA: Project[] = [
  {
    title: 'In Search Of Paradise',
    description: 'A retro-inspired top-down racing game featuring fast-paced arcade action through neon-lit city streets. Race against the clock while avoiding obstacles and collecting power-ups. Features multiple game modes including time trial, elimination, and free roam with a custom track editor.',
    screenshot: '/images/screenshots/In_Search_Of_Paradise/isop_2.png',
    screenshotAlt: 'In Search Of Paradise Screenshot',
    images: ['/images/screenshots/In_Search_Of_Paradise/isop_1.png', '/images/screenshots/In_Search_Of_Paradise/isop_2.png', '/images/screenshots/In_Search_Of_Paradise/isop_3.png'],
    technologies: ['GameMaker Studio 2', 'Aseprite'],
    downloadUrl: 'https://cellsdividing.itch.io/in-search-of-paradise/download/eyJpZCI6MzI2NTkxOSwiZXhwaXJlcyI6MTc1NjI5ODU3Nn0%3d.PsRttlZUaM42%2byXkUJVti%2bUNlt0%3d',
    githubUrl: 'https://github.com/CelIsDividing/In_Search_of_Paradise'
  },
  {
    title: 'Pip-Boy Simulator',
    description: 'A retro-futuristic Pip-Boy simulator replicating the iconic Fallout interface, built with Spring Boot for robust backend functionality. Features dynamic report generation using Jasper Reports, JSON-based data exchange for seamless frontend-backend communication, and MySQL for persistent data storage.',
    screenshot: '/images/screenshots/Pip_Boy_Simulator/pipboy.png',
    screenshotAlt: 'Pipboy Platform Screenshot',
    technologies: ['Java', 'Spring', 'JSP', 'HTML', 'CSS', 'JavaScript'],
    downloadUrl: '/downloads/pipboy.zip',
    githubUrl: 'https://github.com/CelIsDividing/pipboy_sim'
  },
  {
    title: 'Facebook Copycat',
    description: 'A full-stack social platform replica inspired by classic Facebook functionality, engineered with Spring Framework for enterprise-grade performance. Implements core social networking features including user profiles, friend connections, real-time messaging, and content sharing with a clean, responsive interface. Leverages Spring MVC for robust request handling, JSP for dynamic page rendering, and MySQL for scalable data persistence—demonstrating modern web development principles through a familiar social media paradigm.',
    screenshot: '/images/screenshots/Facebook_Copycat/fbcopy_2.png',
    screenshotAlt: 'Fb_copy Platform Screenshot',
    images: ['/images/screenshots/Facebook_Copycat/fbcopy.png', '/images/screenshots/Facebook_Copycat/fbcopy_2.png'],
    technologies: ['Java', 'Spring', 'JSP', 'HTML', 'CSS', 'JavaScript'],
    downloadUrl: '/downloads/Facebook_Copycat.zip',
    githubUrl: 'https://github.com/CelIsDividing/Facebook_copycat'
  },
  {
    title: 'FPGA Visualization Tool',
    description: 'I developed a comprehensive visualization framework that transforms raw FPGA implementation data into intuitive graphical representations. The system parses post-routing reports and timing analyses to generate interactive visualizations of signal pathways, clearly distinguishing between critical paths and regular interconnects with color-coded schemes. I implemented directional flow diagrams that trace signal propagation through LUTs, flip-flops, and routing switches, making timing constraints and potential bottlenecks immediately apparent. The tool also renders dynamic bounding boxes around related logic clusters, highlighting placement efficiency and resource utilization patterns. Most notably, it constructs and displays conflict graphs where competing signal routes for limited routing resources are represented as connected nodes, allowing me to quickly identify routing congestion hotspots and optimize resource allocation decisions. This visualization suite has proven invaluable for debugging complex timing issues and understanding the spatial characteristics of my FPGA designs.',
    screenshot: '/images/screenshots/FPGA_Visualization_Tool/FPGA_Visualizer.png',
    screenshotAlt: 'FPGA visualizer Screenshot',
    technologies: ['Python', 'HTML', 'CSS', 'JavaScript'],
    downloadUrl: '/downloads/FPGA_Visualizer-Tool.zip',
    githubUrl: 'https://github.com/CelIsDividing/FPGA_Visualizer'
  },
  {
    title: 'Music Genre Recognition Neural Network',
    description: 'I built a deep learning model that classifies music into genres using audio features extracted from spectrograms. The network employs convolutional layers to identify patterns in frequency-time representations of audio signals, achieving over 85% accuracy across 10 genre categories. I implemented data augmentation techniques and cross-validation to improve generalization and reduce overfitting. The model was trained on a dataset of 10,000 labeled tracks and deployed as a web application using Flask and TensorFlow.js for real-time genre prediction.',
    screenshot: '/images/screenshots/Music_Genre_Recognition_Neural_Network/MGR_NN.png',
    screenshotAlt: 'MGR Neural Network Screenshot',
    technologies: ['Python'],
    downloadUrl: '/downloads/Music-genre-recognitio.zip',
    githubUrl: 'https://github.com/CelIsDividing/Music-genre-recognition'
  },
  {
    title: 'Coffee Shop Management System',
    description: 'I developed a comprehensive coffee shop management system that streamlines operations, including inventory management, order processing, and customer relationship management. The system features a user-friendly interface and real-time data analytics to optimize business performance. It was built using Spring Boot with REST APIs, Docker containerization, and SQL database for scalable data storage.',
    screenshot: '/images/screenshots/Coffee_Shop_Management_System/coffee_shop.png',
    screenshotAlt: 'Coffee Shop Screenshot',
    technologies: ['Java', 'Spring Boot', 'REST API', 'Docker', 'SQL'],
    downloadUrl: '/downloads/Coffee_shop.zip',
    githubUrl: 'https://github.com/CelIsDividing/Online_shop_project'
  },
  {
    title: 'Tinder for horses',
    description: 'I developed a comprehensive horse matchmaking platform that streamlines the process of finding compatible horses for breeding or companionship. The platform features a user-friendly interface and real-time data analytics to optimize matchmaking performance. It was built using PHP, CSS, HTML, JavaScript, and SQL database for scalable data storage.',
    screenshot: '/images/screenshots/Tinder_for_Horses/horsle.png',
    screenshotAlt: 'Horsle Screenshot',
    technologies: ['PHP', 'CSS', 'HTML', 'JavaScript', 'SQL'],
    downloadUrl: '/downloads/Horsle.zip',
    githubUrl: 'https://github.com/CelIsDividing/Horsle'
  },
  {
    title: 'MAUI Graph Visualizer',
    description: 'I developed a comprehensive MAUI Graph Visualizer that allows users to create and visualize complex graphs and networks. The application features an intuitive interface and real-time rendering capabilities to enhance the user experience. It was built using C# and .NET MAUI for cross-platform compatibility.',
    screenshot: '/images/screenshots/MAUI_Graph_Visualizer/maui_screenshot_1.png', 
    screenshotAlt: 'MAUI Graph Visualizer Screenshot',
    images: ['/images/screenshots/MAUI_Graph_Visualizer/maui_screenshot_1.png', '/images/screenshots/MAUI_Graph_Visualizer/maui_screenshot_2.png'],
    technologies: ['C#', 'NET MAUI', 'Blazor'],
    downloadUrl: '/downloads/MauiBlazorCharts.zip',
    githubUrl: 'https://github.com/CelIsDividing/MAUI-Blazor-Charts'
  }
];
