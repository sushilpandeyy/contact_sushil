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
  "id": "curlbaby",
  "title": "cUrlBaby - Java-Based CLI API Suite",
  "description": "cUrlBaby is a lightweight command-line tool built in Java that enables developers to test APIs directly from the terminal. It was created to provide a fast and efficient alternative to GUI-based tools like Postman, especially in environments where developers prefer or are limited to the command line.\n\nThe tool supports core HTTP methods such as GET, POST, PUT, and DELETE. It includes customizable timeout settings and robust error handling to ensure reliability during API testing. One of its key features is a custom JSON parser that formats and displays API responses in a clean, readable structure within the terminal.\n\nDesigned with object-oriented principles, cUrlBaby offers a modular and maintainable codebase, making it easy to extend or customize for different use cases. It is ideal for backend developers, system administrators, and anyone working in server-side environments who needs a quick and dependable way to interact with APIs without leaving the terminal.\n\nWhether you're building, testing, or debugging APIs, cUrlBaby helps streamline the development workflow with clarity and speed. ['/photo/curlbaby1.png']",
  "githubLink": "https://github.com/sushilpandeyy/curlbaby",
  "video": "/video/curlbaby.mov",
  "tags": [
    "Java",
    "CLI",
    "HTTP",
    "API Testing",
    "JSON Parser",
    "Developer Tools",
    "Terminal"
  ]
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