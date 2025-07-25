import { Project } from '../types/project';

export const projects: Project[] = [
  {
  "id": "korosuke",
  "title": "Korosuke - Security-Preserving Retrieval Framework",
  "description": "Korosuke is a research-backed framework built to tackle the growing need for secure and efficient knowledge retrieval in enterprise and organizational environments. The core problem it solves is enabling semantic search while preserving strict access control over sensitive information.\n\nBuilt using Python, Korosuke introduces a unique method for creating hierarchical security-aware embeddings. These embeddings are capable of enforcing access policies directly within the vector space, ensuring that users only retrieve information they are authorized to access—even during complex semantic queries.\n\nWhat sets Korosuke apart is its adaptive re-ranking mechanism, which intelligently adjusts search results based on a novel utility function that balances relevance with information confidentiality. This ensures that sensitive but irrelevant results are filtered out without sacrificing the accuracy or depth of the search.\n\nThe framework is especially useful for enterprise knowledge systems, secure document repositories, and regulated industries where access compliance and intelligent retrieval go hand in hand.\n\nKorosuke was awarded a Gold Medal for its innovation and research excellence, and its underlying techniques are grounded in advanced information retrieval, access control theory, and applied machine learning. The framework not only contributes academically but also offers practical tools for building secure, intelligent enterprise search systems.",
  "githubLink": "https://github.com/sushilpandeyy/korosuke",
  "image": "/photo/Korosuke.png",
  "tags": [
    "Python",
    "Information Retrieval",
    "Semantic Search",
    "Access Control",
    "Security Embeddings",
    "Enterprise AI",
    "Research Framework",
    "Machine Learning",
    "Privacy-Preserving Systems"
  ]
},
  {
  "id": "nyxapi",
  "title": "NyxAPI - Mock API Generator",
  "description": "Creating a mock API generator is a game-changer for modern software development, significantly accelerating the entire process. At its core, this tool allows developers to build a simulated API that mimics the behavior of a real, production API. Instead of returning live data, it provides predefined, static, or dynamically generated fake data in a structured format like JSON. The primary benefit is the decoupling of frontend and backend development. Frontend developers no longer need to wait for the backend team to build and deploy endpoints. They can start building user interfaces, testing data handling, and refining the user experience immediately by pointing their application to the mock API. This parallel workflow eliminates bottlenecks and drastically shortens the development lifecycle.\n\nThe functionality of a powerful mock API generator goes beyond simply returning static data. We built our tool to be highly flexible, allowing developers to define custom endpoints, specify HTTP methods (GET, POST, PUT, DELETE), and craft the exact JSON response structure they need. A key feature is the real-time endpoint builder, which enables the dynamic creation and modification of API routes without server restarts. To make the simulated data more realistic, the tool can integrate libraries that generate plausible fake data, such as names, addresses, or company details. Furthermore, it allows for the simulation of various API responses, including different HTTP status codes (e.g., 200 OK, 404 Not Found, 501 Server Error) and network conditions like latency, enabling developers to build and test robust error-handling and loading states in their applications.\n\nThe technical architecture of such a tool typically involves a user-friendly frontend, often built with a library like React, which communicates with a powerful backend server. For our implementation, a Python-based server provides the speed and flexibility needed to handle dynamic route generation and serve responses efficiently. All user-defined API schemas, route configurations, and even collaborative access controls are stored and managed in a structured PostgreSQL database. Ultimately, a mock API generator is more than just a developer utility; it's a critical piece of infrastructure that fosters agility. It empowers teams to work independently, enables comprehensive and isolated testing, and leads to the faster creation of more reliable and resilient software.",
  "githubLink": "https://github.com/sushilpandeyy/nyxapi",
  "video": "/video/nyxapu.mp4",
  "tags": [
    "React",
    "Python",
    "PostgreSQL",
    "API Development",
    "Real-time",
    "Developer Tools"
  ]
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
  "id": "qliq",
  "title": "QliQ - Web3 Advertising Network",
  "description": "In the current Web2 landscape, digital advertising is dominated by centralized giants like Google AdSense and AdWords. These platforms operate as opaque intermediaries, collecting vast amounts of personal user data through invasive tracking methods to serve targeted ads. This model raises significant privacy concerns and creates a system where the central authority holds all the power, taking a substantial cut of the revenue from both advertisers and publishers. The lack of transparency and an imbalanced distribution of value make this model fundamentally misaligned with the user-centric ethos of the modern internet.\n\nQliQ was built to challenge this paradigm by creating a transparent, efficient, and equitable advertising ecosystem on the blockchain. As a Web3 ad network, its core mission is to eliminate the need for centralized intermediaries and invasive data tracking. Instead of monitoring user browsing history, QliQ leverages on-chain data in a privacy-preserving way. The platform uses the metadata of NFTs (Non-Fungible Tokens) held in a user's connected crypto wallet to understand their interests. This allows for effective ad targeting without ever accessing personal, off-chain information, thus returning control and privacy back to the user.\n\nThe QliQ ecosystem is powered by a robust Web3 technology stack designed for decentralization and transparency. The backbone of the network is a set of Solidity smart contracts, managed and deployed via ThirdWeb, which govern the entire lifecycle of an ad campaign in a trustless manner. All ad creatives are hosted on the InterPlanetary File System (IPFS), ensuring they are distributed and censorship-resistant. The user-facing platform, built with React and Tailwind CSS, provides an intuitive interface for advertisers and publishers, while a lightweight Express.js server facilitates communication between the frontend and the decentralized components.",
  "githubLink": "https://github.com/sushilpandeyy/qliq",
  "video": "/video/unfold.mp4",
  "tags": [
    "React",
    "Solidity",
    "Web3",
    "NFT",
    "IPFS",
    "Blockchain",
    "Tailwind CSS"
  ]
},
{
  "id": "sampatti",
  "title": "Sampatti - Secure Asset & Nominee Management",
  "description": "In many families, the critical details of all financial and physical assets are managed by a single person. This creates a dangerous single point of failure. If that individual becomes incapacitated or passes away unexpectedly, their loved ones are left in a state of confusion and distress, unaware of the full extent of the assets, their locations, or how to access them. This lack of information can lead to unclaimed insurance policies, lost investments, and immense administrative hardship during an already difficult time.\n\nSampatti directly addresses this critical issue by providing a centralized and highly secure digital vault for all of a user's asset information. It is a platform designed to ensure a family's financial continuity and peace of mind. Users can securely catalogue every type of asset—from bank accounts, insurance policies, and real estate documents to stocks, mutual funds, and digital holdings—all in one consolidated dashboard. This provides a single, comprehensive source of truth for an individual's entire financial portfolio.\n\nThe platform's most vital feature is its robust nominee management system. A user can designate one or more trusted family members as nominees. These nominees can then be granted access to the asset information under specific, verifiable emergency conditions. The system is built with security as its highest priority, employing end-to-end encryption to protect sensitive data. Sampatti acts as a digital safety net, ensuring that a user's hard-earned assets are always accessible to their designated loved ones, preventing assets from being lost and providing clear guidance when it is needed most.",
  "githubLink": "https://github.com/sushilpandeyy/Sampatti",
  "image": "/photo/sampatti.png",
  "tags": [
    "Next.js",
    "Go",
    "TypeScript",
    "Tailwind CSS",
    "PostgreSQL"
  ]
},
{
  "id": "ihhplayer",
  "title": "IHHPlayer - MERN Stack Music Player",
  "description": "IHHPlayer is a web-based music streaming application developed with a modern MERN stack, designed to showcase a full-featured audio playback experience. The project serves as a practical implementation of contemporary web development technologies, focusing on a clean user interface and efficient state management for a seamless user experience.\n\nCurrently, the application supports essential music playback features, including play, pause, next track, and the ability to navigate through a playlist. It's an excellent starting point for developers looking to understand the fundamentals of building a streaming service. It is in an active development phase where the client and server components have been built separately and are ready for integration, offering a unique opportunity to work on connecting a frontend interface with a backend API.\n\nThe technical architecture consists of a responsive frontend built with React and styled using Tailwind CSS. For state management, it leverages Zustand, a minimalistic and powerful library, to handle application-wide states like playback status and playlists. The backend is a standard Node.js and Express.js server, designed to eventually manage user data, audio tracks, and playlists with a MongoDB database.",
  "githubLink": 'https://github.com/sushilpandeyy/IHHPlayer',
  "image": "/photo/ihh.webp",
  "tags": [
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "AWS S3",
    "Zustand",
    "Tailwind CSS"
  ]
}
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
}