import type { StaticImageData } from "next/image";

import actuallyRemoteImg from "@/images/actually-remote-min.png";
import charmedImg from "@/images/charmed-min.png";
import dictionaryImg from "@/images/dictionary-min.png";
import discordStreamViewerImg from "@/images/discord-stream-viewer-min.png";
import jobScannerImg from "@/images/job-scanner-min.png";
import prehistoricLeapImg from "@/images/prehistoric-leap-min.png";
import simpleWeatherImg from "@/images/simple-weather-min.png";
import tagflowImg from "@/images/tagflow-min.png";
import worldClockImg from "@/images/world-clock-min.png";

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  image: StaticImageData;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: "actually-remote",
    title: "Actually Remote – AI Job Alert Bot",
    shortDescription:
      "Self-hosted job alert bot that scrapes 100+ companies, filters by location, and uses Gemini to score matches against your CV.",
    detailedDescription:
      "Actually Remote is a self-hosted job alert bot for tech professionals tired of 'remote' jobs that are really US-only. It scrapes career pages of 100+ curated companies daily, filters by job title and location, and uses Google Gemini to score matches against your CV, delivering a digest via email, Discord, or Telegram. A companion discovery agent uses Gemini with live Google Search grounding to autonomously find new companies worth tracking. Built with Python and GitHub Actions, it runs entirely on free tiers with zero infrastructure and is open source with automated PR validation for community contributions.",
    image: actuallyRemoteImg,
    githubUrl: "https://github.com/cslylla/actually-remote",
  },
  {
    id: "job-scanner",
    title: "Job Scanner – AI Job Analysis Chrome Extension",
    shortDescription:
      "Chrome extension that scans job postings for keywords and uses Gemini for AI-powered job-CV compatibility analysis.",
    detailedDescription:
      "A Chrome extension that accelerates job hunting by scanning postings for customizable keywords (remote work, tech stack, role type) and highlighting matches with color-coded categories. Integrated with Google's Gemini API, it provides instant AI-powered analysis of job-CV compatibility. Built with React and Manifest V3, featuring template management, local storage for privacy, and an intuitive floating UI that appears on any job posting page.",
    image: jobScannerImg,
    githubUrl: "https://github.com/cslylla/job-scanner-chrome-extension"
  },
  {
    id: "prehistoric-leap",
    title: "Prehistoric Leap – Web-Native Pygame",
    shortDescription:
      "Arcade survival game demonstrating Python-to-web transition via WebAssembly and automated CI/CD to GitHub Pages.",
    detailedDescription:
      "This arcade survival game demonstrates the transition of a local Python application to a web-based environment using WebAssembly (Wasm). By leveraging the Pygbag engine and GitHub Actions, the project features a fully automated CI/CD pipeline that compiles and deploys the game to GitHub Pages upon every push. It highlights skills in asynchronous programming, asset optimization for the web (OGG conversion), and modern deployment workflows, making a complex Python codebase accessible through any standard browser.",
    image: prehistoricLeapImg,
    liveUrl: "cslylla.github.io/prehistoric-leap/"
  },
  {
    id: "tagflow",
    title: "TagFlow - Note-Taking App with AI Summaries",
    shortDescription:
      "Full-stack note-taking app with tags, Prisma/PostgreSQL, Clerk auth, and optional AI summaries via SheCodes API.",
    detailedDescription:
      "TagFlow is a full-stack note-taking web application that allows users to create, edit, and organise notes using tags, sorting, and filtering. Built with Next.js and React, it uses Prisma with a PostgreSQL database for persistence and Clerk for secure authentication. The app also integrates an optional AI summary feature via the SheCodes AI API, demonstrating practical backend integration and thoughtful UX for handling the unsaved state.",
    image: tagflowImg,
    liveUrl: "https://tagflow-note.vercel.app/"
  },
  {
    id: "discord-stream-viewer",
    title: "Discord Stream Viewer (Full Stack Integration)",
    shortDescription:
      "Connects a Discord bot with a browser frontend to stream messages in real time with Python backend and streaming API.",
    detailedDescription:
      "This full-stack project connects a Discord bot with a browser-based frontend to stream messages in real time. A Python backend listens to Discord events, exposes a streaming API, and serves a minimal UI that displays both recent message history and live updates. The project emphasises backend integration, async communication, and deployment of a working end-to-end system.",
    image: discordStreamViewerImg,
    liveUrl: "https://discord-stream-viewer.onrender.com/"
  },
  {
    id: "charmed",
    title: "Charmed – AI-Powered Text Transformation Tool",
    shortDescription:
      "Client-side web app that integrates an external AI API to transform user text into stylistically altered output.",
    detailedDescription:
      "This project is a client-side web application that integrates an external AI API to transform user-provided text into stylistically altered output. It demonstrates API consumption, asynchronous request handling, and dynamic UI updates using vanilla JavaScript, HTML, and CSS. The app focuses on simplicity, responsiveness, and clear user feedback during longer-running API calls, while maintaining a polished, accessible interface suitable for both desktop and mobile use.",
    image: charmedImg,
    liveUrl: "https://elegant-melomakarona-72305b.netlify.app/"
  },
  {
    id: "dictionary",
    title: "Dictionary App with React",
    shortDescription:
      "Search for words to see meanings, phonetics, pictures, and pronunciation. Built with React, API integration, and dark mode.",
    detailedDescription:
      "With this web app you can search for almost any words and it will display the meanings, phonetics and pictures of that word. You can also listen to the pronunciation of the word. This app is built with React components and API integration, it is responsive and it is SEO friendly. It also has a dark mode button where you can change the background color of the app.",
    image: dictionaryImg,
    liveUrl: "https://adoring-colden-97a16c.netlify.app/"
  },
  {
    id: "simple-weather",
    title: "Simple Weather App with React",
    shortDescription:
      "Displays current weather and 5-day forecast with API integration, animated icons, and random quotes.",
    detailedDescription:
      "This web app will display the current weather conditions and a five-day forecast for each city you search for with API integration and animated weather icons with React components. You can also use the 'My location' button to show the weather and forecast for your location. It has improved responsiveness and it is SEO friendly. You also get a random quote whenever you load the page.",
    image: simpleWeatherImg,
    liveUrl: "https://vigorous-swartz-f1085f.netlify.app/"
  },
  {
    id: "world-clock",
    title: "World Clock App",
    shortDescription:
      "Explore current times and dates across global locations with intuitive interface and dark/light modes.",
    detailedDescription:
      "Discover the World Clock web application, where you can effortlessly explore the current times and dates across different global locations. The app offers an intuitive interface and dark and light modes and leverages JavaScript, HTML, CSS, and moment.js to ensure precise timekeeping.",
    image: worldClockImg,
    liveUrl: "https://astounding-boba-ba0f20.netlify.app/"
  },
];
