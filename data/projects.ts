import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'cloudops-dashboard',
    title: "CloudOps Dashboard",
    description: "A comprehensive cloud infrastructure monitoring and management platform built with React and Node.js. Features real-time metrics, automated scaling recommendations, and multi-cloud support for AWS, Azure, and GCP. The dashboard provides intuitive visualizations for resource utilization, cost optimization, and performance monitoring, helping teams manage their cloud infrastructure efficiently.",
    liveLink: "<https://cloudops-dashboard.vercel.app/>",
    githubLink: "<https://github.com/sushilpandet/cloudops-dashboard>",
    image: '/images/cloudops-dashboard.png',
    video: "/videos/cloudops-demo.mp4",
    tags: [
      "React",
      "Node.js",
      "TypeScript",
      "AWS",
      "Docker",
      "Kubernetes",
      "Chart.js",
      "Tailwind CSS"
    ],
  },
  {
    id: 'ecommerce-platform',
    title: "Modern E-commerce Platform",
    description: "A full-stack e-commerce solution with advanced features including inventory management, payment processing, and analytics. Built with Next.js and PostgreSQL, it supports multi-vendor capabilities, real-time notifications, and seamless mobile experience. The platform integrates with Stripe for payments and implements robust security measures for user data protection.",
    liveLink: "<https://ecommerce-platform-sp.vercel.app/>",
    githubLink: "<https://github.com/sushilpandet/ecommerce-platform>",
    image: '/images/ecommerce-platform.png',
    tags: [
      "Next.js",
      "PostgreSQL",
      "Prisma",
      "TypeScript",
      "Stripe",
      "Redis",
      "Tailwind CSS"
    ],
  },
  {
    id: 'chat-application',
    title: "Real-time Chat Application",
    description: "A feature-rich chat application with real-time messaging, file sharing, and video calling capabilities. Built using Socket.io for real-time communication, MongoDB for data persistence, and React for the frontend. Supports group chats, message encryption, and user presence indicators, providing a seamless communication experience.",
    liveLink: "<https://chat-app-sp.vercel.app/>",
    githubLink: "<https://github.com/sushilpandet/chat-application>",
    image: '/images/chat-app.png',
    tags: [
      "React",
      "Socket.io",
      "MongoDB",
      "Express.js",
      "WebRTC",
      "JWT",
      "Material-UI"
    ],
  },
  {
    id: 'analytics-dashboard',
    title: "Business Analytics Dashboard",
    description: "An advanced analytics platform that transforms raw business data into actionable insights. Features interactive charts, predictive analytics, and customizable reporting. Built with React and Python backend, it integrates with various data sources and provides real-time data visualization, helping businesses make data-driven decisions.",
    liveLink: "<https://analytics-dashboard-sp.vercel.app/>",
    githubLink: "<https://github.com/sushilpandet/analytics-dashboard>",
    image: '/images/analytics-dashboard.png',
    tags: [
      "React",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "D3.js",
      "Pandas",
      "Docker"
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
