import { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: 'korosuke',
    title: "Korosuke - Security-Preserving Retrieval Framework",
    description: "A novel framework that reimagines security-preserving retrieval in enterprise systems, earning a Gold Medal for research innovation. Developed hierarchical security-aware embeddings that mathematically enforce access control during semantic search, implementing the solution in Python. Pioneered an adaptive re-ranking mechanism that optimizes the relevance-security tradeoff through a novel information utility function for enterprise knowledge systems.",
    githubLink: "https://github.com/sushilpandeyy/korosuke",
    image: '/images/korosuke.png',
    tags: [
      "Python",
      "Machine Learning",
      "Security",
      "Enterprise Systems",
      "Semantic Search",
      "Access Control",
      "Research"
    ],
  },
  {
    id: 'nyxapi',
    title: "NyxAPI - Mock API Generator",
    description: "A flexible tool that lets developers launch mock APIs instantly. Developed a real-time endpoint builder using React on the frontend and Python-based server on the backend, enabling dynamic API generation and updates. Structured the underlying PostgreSQL database to organize API schemas, route configurations, and collaborative access controls efficiently.",
    liveLink: "https://nyxapi.dev",
    githubLink: "https://github.com/sushilpandeyy/nyxapi",
    image: '/images/nyxapi.png',
    tags: [
      "React",
      "Python",
      "PostgreSQL",
      "API Development",
      "Real-time",
      "Backend",
      "Developer Tools"
    ],
  },
  {
    id: 'curlbaby',
    title: "cUrlBaby - CLI API Suite",
    description: "A lightweight Java-based terminal utility for API testing that replicates core Postman features through a command-line interface, following object-oriented patterns for modular architecture. Implemented comprehensive HTTP operation support (GET, POST, PUT, DELETE) with built-in timeout control, error handling, and a custom JSON parser to format API responses clearly in the console.",
    githubLink: "https://github.com/sushilpandeyy/curlbaby",
    image: '/images/curlbaby.png',
    tags: [
      "Java",
      "CLI",
      "HTTP",
      "API Testing",
      "JSON Parser",
      "Developer Tools",
      "Terminal"
    ],
  },
  {
    id: 'qliq',
    title: "QliQ - Web3 Advertising Network",
    description: "Built a decentralized ad ecosystem that uses NFT metadata to deliver targeted promotions, utilizing React, Tailwind CSS, and Express.js. Wrote smart contracts in Solidity and integrated with ThirdWeb; utilized IPFS for distributed content hosting. A revolutionary approach to digital advertising through blockchain technology.",
    githubLink: "https://github.com/sushilpandeyy/qliq",
    image: '/images/qliq.png',
    tags: [
      "React",
      "Solidity",
      "Web3",
      "NFT",
      "IPFS",
      "ThirdWeb",
      "Blockchain",
      "Tailwind CSS"
    ],
  },
  {
    id: 'flochealth',
    title: "FlocHealth - Healthcare & Insurance System",
    description: "A complete healthcare and insurance system built from scratch, developing both frontend and backend components using Python-based technologies. Engineered robust Python backend with Tornado framework, implementing disease prediction algorithms and personalized insurance policy recommendation engines. Deployed on AWS EC2 with Neo4J and MySQL databases, serving 10,000+ users.",
    image: '/images/flochealth.png',
    tags: [
      "Python",
      "Tornado",
      "AWS EC2",
      "Neo4J",
      "MySQL",
      "Healthcare",
      "Machine Learning",
      "Insurance"
    ],
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
}