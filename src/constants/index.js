import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  gimasys,
  icomm,
  megazone,
  flexibble,
  threads,
  nextjs,
  oracle
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FrontEnd Developer",
    icon: web,
  },
  {
    title: "BackEnd Developer",
    icon: mobile,
  },
  {
    title: "DevOps",
    icon: backend,
  },
  {
    title: "Databse Tuning and Monitoring",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "iCOMM Media & Tech, Jsc",
    icon: icomm,
    iconBg: "#383E56",
    date: "Jan 2020 - April 2020",
    points: [
      "Developing an AI model to classify text documentation.",
      "Giving name and brand for all element in training subset.",
      "Build and testing model after training process.",
      "Find solution or new algorithm to increase model correctness.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Gimasys Co., Ltd",
    icon: gimasys,
    iconBg: "#E6DEDD",
    date: "April 2020 - Feb 2022",
    points: [
      "Developing and maintaining AML system for VPBank.",
      "Establishing a detailed program specification through discussion with Business/System Analysist even Business team.",
      "Design, development, and deployment Solutions - Strong AML coding.",
      "Doing unit test and make the release note document.",
      "Making deploy package to implement into other environment (test, pilot, production) and check list to deployment.",
      "Tuning, smoothing system (tuning SQL Query, tuning in database OS level).",
      "Writing detailed technical specification documentation.",
      "Writing the document for the operation of the program by operators.",
      "Updating, repairing, modifying and developing existing development.",
      "Providing the knowledge to make the best solution of the business development.",
      "Investigate and troubleshoot for issues, incidents and problems of application as level 3 support.",
      "Study the technical updates and make the change or do upgrading release in Development area.",
      "Do Other duties as assigned by the team leaders, IT PM, manager and director.",
      "Monitoring and fixing when system run into trouble.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Megazone Digital",
    icon: megazone,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Present",
    points: [
      "Developing and maintaining PMK IQOS Ecommerce website.",
      "Project main Front-end Developer.",
      "Deploy and operate product system.",
      "Making deploy package to implement into other environment (test, pilot, production) and check list to deployment.",
      "Updating, repairing, modifying and developing existing development.",
      "Providing the knowledge to make the best solution of the business development.",
      "Investigate and troubleshooting for issues, incidents and problems of application as level 3 support.",
      "Study the technical updates and make the change or do upgrading release in Development area.",
      "Do Other duties as assigned by the team leaders, IT PM, manager and director.",
      "Monitoring and fixing when system run into trouble.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Flexibble",
    description:
      "Flexibble is the world's leading community for creatives to share, grow and get hired.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
    ],
    image: flexibble,
    source_code_link: "https://github.com/dongnt123/grafbase_flexibble/",
    demo_link: "https://grafbase-flexibble-o0asf4fq1-dongnt123.vercel.app/?category=Frontend",
  },
  {
    name: "Threads",
    description:
      "Share the most exciting thing with us and communicate with people all around the world.",
    tags: [
      {
        name: "next",
        color: "blue-text-gradient",
      },
      {
        name: "mogodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: threads,
    source_code_link: "https://github.com/dongnt123/threads",
    demo_link: "https://threads-delta-two.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };