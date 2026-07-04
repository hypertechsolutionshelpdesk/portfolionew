import {
    FaReact,
    FaHtml5,
    FaCss3,
    FaNodeJs,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";

import { BiLogoJavascript } from "react-icons/bi";
import { SiExpress, SiMongodb, SiMysql, SiNpm, SiWebpack } from "react-icons/si";
import { VscVscode, VscCommentUnresolved, VscTerminalPowershell, VscSymbolVariable } from "react-icons/vsc";
import { FaGitAlt, FaXTwitter, FaDribbble } from "react-icons/fa6";
import { MdGroups3, MdReportProblem, MdSyncProblem } from "react-icons/md";

import projectImg1 from "../assets/images/1.png";
import projectImg2 from "../assets/images/2.png";
import projectImg3 from "../assets/images/3.png";
import projectImg4 from "../assets/images/4.png";
import projectImg5 from "../assets/images/5.png";
import { FcCollaboration } from "react-icons/fc";
import { AiTwotoneReconciliation } from "react-icons/ai";


export const MENU_LINKS = [
    { id: "01", label: "Home", offset: -100, to: "hero" },
    { id: "02", label: "Skills", offset: -80, to: "skills" },
    { id: "03", label: "About Me", offset: -80, to: "about" },
    { id: "04", label: "Projects", offset: -80, to: "projects" },
    { id: "05", label: "Contact", offset: -80, to: "contact" },
];

export const STATS = [
    { id: "01", count: '04', label: "Years of \nExperience" },
    { id: "02", count: '06', label: "Certifications \nEarned" },
    { id: "03", count: '10+', label: "Projects \nCompleted" },
    { id: "04", count: '10+', label: "Happy \nClients" },
];

export const SKILL_TABS = [
    { id: '01', label: 'All', value: 'all' },
    { id: '02', label: 'Frontend', value: 'frontend' },
    { id: '03', label: 'Backend', value: 'backend' },
    { id: '04', label: 'Tools', value: 'tools' },
    { id: '05', label: 'Skills', value: 'skills' },
];

export const SKILLS = [
    {
        id: '01', icon: FaReact, skill: 'React JS', progress: 95, type: 'frontend', description: 'Experienced in building scalable, component-driven web applications using React.Js,  developing reusable UI components and responsive interfaces, implementing state management and React Hooks, and integrating APIs and third-party libraries to enhance application functionality.'
    },
    {
        id: '02', icon: FaHtml5, skill: 'HTML', progress: 99, type: 'frontend', description: 'Experienced in building well-structured and semantic web pages using HTML, creating accessible and responsive page layouts, structuring content for usability and SEO best practices, ensuring clean, maintainable markup for modern web applications to deliver engaging user interfaces.'
    },
    {
        id: '03', icon: FaCss3, skill: 'CSS', progress: 90, type: 'frontend', description: 'Skilled in creating visually appealing and responsive designs using CSS,  implementing layouts with Flexbox, Grid, and positioning techniques, ensuring cross-browser compatibility and accessibility standards, writing clean, maintainable, and scalable stylesheets to deliver seamless user interfaces.'
    },
    {
        id: '04', icon: BiLogoJavascript, skill: 'JS', progress: 90, type: 'frontend', description: 'Experienced in developing dynamic and interactive web applications using JavaScript, writing clean, modular, and maintainable code, managing application logic and DOM manipulation efficiently, working with APIs and asynchronous programming for seamless functionality.'
    },
    {
        id: '05', icon: FaNodeJs, skill: 'Node.Js', progress: 60, type: 'backend', description: 'Experienced in building scalable, high-performance backend applications using Node.js, developing RESTful APIs, server-side logic, real time data processing, integrating databases and third party services for robust functionality, and collaborating with frontend technologies to deliver fullstack solutions.'
    },
    {
        id: '06', icon: SiExpress, skill: 'Express.JS', progress: 60, type: 'backend', description: 'Experienced in building scalable backend applications with Express.js, developing RESTful APIs and handling server-side logic efficiently, implementing middleware and authentication systems, and integrating databases and third-party services for robust web applications.'
    },
    {
        id: '07', icon: SiMongodb, skill: 'MongoDB', progress: 60, type: 'backend', description: 'Skilled in designing and managing scalable MongoDB databases, developing efficient queries and indexes, ensuring data integrity, performance, schema design best practices, integrating MongoDB with backend applications and third-party services for high-performance web solutions.'
    },
    {
        id: '08', icon: SiMysql, skill: 'SQL', progress: 60, type: 'backend', description: 'knowledgeable in designing, managing relational databases with SQL, writing optimized queries, ensuring data integrity, normalization, implementing complex joins and transactions, integrating SQL databases with backend applications and third-party services to deliver robust web solutions.'
    },
    {
        id: '09', icon: FaGitAlt, skill: 'Git & GitHub', progress: 60, type: 'tools', description: 'Proficient in using Git for version control and GitHub for collaborative software development, including branching, merging, pull requests, and resolving conflicts. Skilled in maintaining clean commit histories, managing repositories, team collaboration and deliver reliable, high-quality code.'
    },
    {
        id: '10', icon: VscVscode, skill: 'Visual Studio Code', progress: 75, type: 'tools', description: 'Proficient in using VS Code for efficient software development and debugging. Skilled in customizing the IDE with extensions, themes, and settings to optimize productivity, collaborative development, live sharing, debugging, and seamless workflow with Git/GitHub to deliver high-quality, maintainable code.'
    },
    {
        id: '11', icon: SiWebpack, skill: 'Webpack', progress: 60, type: 'tools', description: 'Skilled in using Webpack to optimize and streamline web application development. Configuring loaders, plugins, and output settings to efficiently bundle JavaScript, CSS, and assets. Implementing code splitting, tree shaking, and caching strategies to enhance performance and reduce load times.'
    },
    {
        id: '12', icon: SiNpm, skill: 'NPM', progress: 60, type: 'tools', description: 'Skilled in using Webpack to optimize and streamline web application development. Configuring loaders, plugins, and output settings to efficiently bundle JavaScript, CSS, and assets. Implementing code splitting, tree shaking, and caching strategies to enhance performance and reduce load times.'
    },
    {
        id: '13', icon: VscSymbolVariable, skill: 'Problem-Solving', progress: 70, type: 'skills', description: 'Skilled in breaking down challenges into manageable components, applying logical reasoning, and leveraging both technical and creative approaches. Experienced in debugging code, optimizing algorithms, and troubleshooting system issues to ensure robust, high-quality outcomes.'
    },
    {
        id: '14', icon: FcCollaboration, skill: 'Collaboration', progress: 60, type: 'skills', description: 'Experienced in working effectively within cross-functional teams to deliver high-quality software solutions. Skilled in clear communication, knowledge sharing, and coordinating tasks to align with project goals. Using tools such as GitHub, VS Code Live Share, resolve conflicts, and ensure timely delivery.'
    },
    {
        id: '15', icon: AiTwotoneReconciliation, skill: 'Attention to Detail', progress: 80, type: 'skills', description: 'Highly attentive to detail, consistently ensuring accuracy, quality, and completeness in all aspects of work. Code reviews, documentation, and project deliverables to identify errors or areas for improvement. Proficient in using tools and processes that support thoroughness and precision.'
    },
    {
        id: '16', icon: AiTwotoneReconciliation, skill: 'Communication', progress: 80, type: 'skills', description: 'Skilled in clearly conveying complex ideas and information to diverse audiences, ensuring understanding and alignment. Documentation, presentations and reports that are concise, accurate, and impactful. Adept at active listening, facilitating discussions, and collaborating across teams to achieve shared goals.'
    },
];

export const ABOUT_ME = {
    content: `I’m a passionate Web Developer focused on building fast, scalable, and user-friendly applications. I specialize in backend development with Node.js and Express, working with both SQL and MongoDB databases. I enjoy turning ideas into reliable digital solutions and continuously improving my skills to write clean, efficient, and maintainable code.
    
    \nI'm a creative frontend developer based in Nigeria, passionate about creating seamless web experiences and easy accessibility for all users. My focus is on crafting intuitive, responsive, user-friendly interfaces that empowers users and drives meaningful brand growth. I'm comfortable in my ability in adapting to new technologies, as well as to collaborate with cross-functional teams. I'm always looking for new challenges to take on.`,

    socialLinks: [
        { id: '01', label: 'Linkedin', icon: FaLinkedin, link: "https://www.linkedin.com/in/fifelola-olamide-idowu-7466a4119/" },
        { id: '02', label: 'Twitter', icon: FaXTwitter, link: "https://www.twitter.com/hidycoal" },
        { id: '03', label: 'Facebook', icon: FaFacebook, link: "https://www.facebook.com/hidycoal" },
        { id: '04', label: 'Instagram', icon: FaInstagram, link: "https://www.instagram.com/hidycoal" },
        { id: '05', label: 'GitHub', icon: FaGithub, link: "https://github.com/hypertechsolutionshelpdesk" },
    ],

    email: 'hidycoal@gmail.com',
    phone: '+2348069505596',
    website: 'http://www.hidycoal.vercel.app',

};

export const PROJECTS = [
    {
        id: 1,
        title: 'Hamzony Studio - A Creative Photography Website',
        image: projectImg1,
        tags: [],
        demoUrl: 'https://hamzonystudios.vercel.app/',
    },
    {
        id: 2,
        title: 'Ile Wa - A Real Estate Website',
        image: projectImg2,
        tags: [],
        demoUrl: 'https://ilewa-realty-eight.vercel.app/',
    },
    {
        id: 3,
        title: 'Food Delivery App',
        image: projectImg3,
        tags: [],
        demoUrl: 'https://fooddelfrontend.surge.sh/',
    },
    {
        id: 4,
        title: 'Web Developer Portfolio',
        image: projectImg4,
        tags: [],
        demoUrl: 'https://hidycoalv1.vercel.app/',
    },
    {
        id: 5,
        title: 'English Dictionary',
        image: projectImg5,
        tags: [],
        demoUrl: 'https://dictionary-nx90.onrender.com/',
    },
    // {
    //     id: 6,
    //     title: 'project6',
    //     image: projectImg3,
    //     tags: ['React', 'Express.JS', 'MongoDB', 'Node.JS'],
    // },
]


