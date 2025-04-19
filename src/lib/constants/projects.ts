import { Project } from "../interfaces/projects";
export const pastProjects: Project[] = [
  {
    title: "International Activities Club Website 2.0",
    short: "Modern educational website",
    quote:
      "An immersive, student-focused platform that redefines how educational programs are showcased—fostering community, enriching engagement, and enabling deeper, more hands-on learning across diverse disciplines.",
    featured: true,
    description:
      "A complete redesign of the IAC website, transforming it into a vibrant and dynamic educational platform. It promotes immersive, hands-on learning experiences through engaging content and intuitive design, helping students explore various disciplines and foster a lifelong love for learning.",
    tags: [
      "Education",
      "Modern",
      "Dynamic",
      "Brand Awareness",
      "Brand Identity",
    ],
    tech: {
      languages: ["TypeScript"],
      frameworks: ["Next.js", "Tailwind CSS"],
      libraries: ["React"],
      technologies: ["Resend", "shadcn/ui"],
    },
    githubLink: "https://github.com/tmchuynh/iac_website_2.0",
  },
  {
    title: "FirstGalaxy Inc",
    short: "Real estate platform",
    quote:
      "A sleek and responsive real estate solution built to highlight premium properties with high-resolution imagery, dynamic search tools, and seamless virtual browsing to elevate the user’s home buying journey.",
    featured: false,
    description:
      "A professional real estate platform designed to showcase high-quality property listings, virtual tours, and advanced filtering capabilities. The user-focused interface streamlines the home buying process and provides a visually compelling experience for prospective buyers.",
    tags: ["Real Estate", "Data Filtering", "Dynamic"],
    tech: {
      languages: ["JavaScript", "HTML", "CSS"],
      frameworks: ["Bootstrap CSS"],
      libraries: ["jQuery"],
      technologies: ["Chart.js"],
    },
    githubLink: "https://github.com/tmchuynh/firstgalaxy",
  },
  {
    title: "Quiz Application",
    short: "Interactive quiz app",
    quote:
      "A gamified learning experience that combines academic challenges with social competition—offering subject-based quizzes, live leaderboards, and progress tracking to boost motivation and engagement.",
    featured: true,
    description:
      "A robust quiz platform built with Next.js that allows users to test their knowledge across multiple academic subjects. Features include authentication, user progress tracking, and a live leaderboard, making learning interactive and competitive.",
    tags: ["User Auth", "Progress Tracking", "Dynamic", "Data Filtering"],
    tech: {
      languages: ["TypeScript"],
      frameworks: ["Next.js"],
      libraries: ["React", "Sequelize", "Next-Auth"],
      technologies: ["MySQL", "localStorage", "Axios"],
    },
    githubLink: "https://github.com/tmchuynh/knowledge_knockout",
  },
  {
    title: "Bootstrap Icons",
    short: "Icon library tool",
    quote:
      "A fast, searchable icon library for developers and designers—offering scalable, responsive Bootstrap icons with instant copy functionality and a smooth, organized UI for efficient integration into any project.",
    featured: false,
    description:
      "A web-based icon management system offering a library of scalable, customizable Bootstrap icons. The app includes real-time search, organized categories, and instant copy functionality for seamless integration into design and development workflows.",
    tags: ["Mock Up", "Dynamic", "Data Filtering"],
    tech: {
      languages: ["HTML", "JavaScript", "CSS", "SCSS"],
      frameworks: ["Bootstrap CSS"],
      libraries: ["jQuery"],
    },
    liveLink: "https://tmchuynh.github.io/Bootstrap-Icon-Mock/",
    githubLink: "https://github.com/tmchuynh/Bootstrap-Icon-Mock",
  },
  {
    title: "Military Fitness Calculator",
    short: "Fitness score tool",
    quote:
      "An accessible and efficient fitness assessment tool that enables service members to track their APFT results and body fat metrics in real-time—supporting accurate evaluations and goal-setting.",
    featured: true,
    description:
      "A responsive fitness calculator tailored for military service members to track their Army Physical Fitness Test (APFT) scores and body fat compliance. It simplifies fitness tracking with intuitive forms, real-time feedback, and compliance metrics.",
    tags: ["Educational", "Dynamic"],
    tech: {
      languages: ["JavaScript", "HTML", "CSS"],
      frameworks: ["Materialize CSS"],
      libraries: ["jQuery"],
      technologies: ["vanilla-tilt.js", "Ajax"],
    },
    liveLink: "https://tmchuynh.github.io/Military-Fitness-Calculator/",
    githubLink: "https://github.com/tmchuynh/Military-Fitness-Calculator",
  },
  {
    title: "International Activities Club",
    short: "Extracurricular programs site",
    quote:
      "A refreshed digital presence that empowers parents and students to explore after-school programs with ease—promoting enrichment, exploration, and community building through a clean and approachable design.",
    featured: false,
    description:
      "A modern upgrade to a 20-year-old site, this platform highlights the IAC’s after-school programs through a fresh layout and accessible design. It showcases a wide range of extracurricular opportunities available to students in grades 1 through 12.",
    tags: ["Educational", "Dynamic"],
    tech: {
      languages: ["JavaScript", "HTML", "CSS"],
      frameworks: ["Bootstrap CSS"],
      technologies: ["Google Forms", "EmailJS"],
    },
    liveLink: "https://iacafterschools.com/",
  },
  {
    title: "Emoji Finder",
    short: "Emoji search tool",
    quote:
      "A user-friendly emoji exploration tool that delivers instant, real-time search results—making it simple and fun to discover, filter, and copy emojis with speed and precision.",
    featured: false,
    description:
      "A real-time emoji search tool designed for quick and easy browsing. Featuring categorized navigation, predictive text, and one-click copying, the app streamlines the process of finding the perfect emoji for any message or post.",
    tags: ["Fun", "Dynamic", "Data Filtering"],
    tech: {
      languages: ["JavaScript", "HTML", "CSS"],
      libraries: ["React"],
      technologies: ["jest-dom"],
    },
    githubLink: "https://github.com/tmchuynh/Emoji-Finder",
  },
  {
    title: "Chess",
    short: "Web chess game",
    quote:
      "A classic strategy game brought to life with AI-powered hints, smooth interactions, and responsive gameplay—designed to teach, entertain, and challenge players of all levels in a browser-friendly format.",
    featured: true,
    description:
      "An interactive chess game built for the web, featuring accurate move validation, responsive design, and AI-driven move suggestions. It offers both solo and competitive play, delivering a realistic and educational chess experience.",
    tags: ["Game", "Fun"],
    tech: {
      languages: ["JavaScript", "HTML", "CSS"],
      frameworks: ["Bootstrap CSS"],
      technologies: ["Chessboard.js", "Chess.js", "Node.js"],
    },
    liveLink: "https://tmchuynh.github.io/Chess-Game/",
    githubLink: "https://github.com/tmchuynh/Chess-Game",
  },
  {
    title: "Meta Tic Tac Toe",
    short: "Advanced Tic Tac Toe",
    quote:
      "An advanced evolution of Tic Tac Toe that layers strategy and unpredictability into every move—offering an engaging experience where each play affects the next, demanding foresight and adaptation.",
    featured: true,
    description:
      "A strategic reimagining of classic Tic Tac Toe with nine interconnected boards. Each move dictates the opponent’s next board, adding layers of complexity and requiring players to think several moves ahead in a dynamic, competitive environment.",
    tags: ["Game", "Fun"],
    tech: {
      languages: ["JavaScript", "HTML", "CSS"],
      frameworks: ["Bootstrap CSS"],
      technologies: ["React.js", "Node.js"],
    },
    liveLink: "https://tmchuynh.github.io/meta_tic_tac_toe/",
    githubLink: "https://github.com/tmchuynh/meta_tic_tac_toe",
  },
  {
    title: "Sudoku",
    short: "Playable Sudoku game",
    quote:
      "A sleek and intuitive Sudoku game that sharpens logical thinking with real-time error detection, multiple difficulty modes, and a responsive interface designed for uninterrupted puzzle-solving.",
    featured: true,
    description:
      "A browser-based Sudoku game offering multiple difficulty levels, real-time error detection, and a sleek, mobile-friendly layout. The experience is both intuitive and challenging, catering to casual players and puzzle enthusiasts alike.",
    tags: ["Game", "Fun"],
    tech: {
      languages: ["JavaScript", "HTML", "CSS"],
      frameworks: ["Bootstrap CSS"],
      technologies: ["Vanilla JavaScript", "DOM Manipulation"],
    },
    liveLink: "https://tmchuynh.github.io/sudoku/",
    githubLink: "https://github.com/tmchuynh/sudoku",
  },
];
