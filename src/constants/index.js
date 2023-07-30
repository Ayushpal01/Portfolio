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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Competitive Programmer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Overall Fest Coordinator",
    company_name: "Celesta",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Celesta is the Annual Techno-Management festival of the Indian Institute of Technology Patna",
      "Responsible for planning and organizing various events and activities for the fest.",
      "Oversee a team of volunteers and sub-coordinators, delegating tasks and responsibilities to ensure effective teamwork.",
      "Working closely with the organizing committee to establish and manage the fest's budget. This involves estimating costs, seeking sponsorships and funding, and allocating resources efficiently to different events and activities.",
      "Collaborating with the marketing team to develop and implement strategies for promoting the fest.",
      "Assessing potential risks and develop contingency plans to mitigate them. ",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Infinito",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2022 - April 2023",
    points: [
      "Infinito is the Annual Sports festival of the Indian Institute of Technology Patna",
      "Developing and maintaining web applications using PHP and other related technologies.",
      "Worked closely with both front-end and backend team ensuring smooth working of the website.",
      "The website showcases information about the fest, the various events and also helps participants to register and generate unique id and login to their profile using their id.",
      
    ],
  },
  {
    title: "MPR Subcoordinator",
    company_name: "Celesta",
    icon: starbucks,
    iconBg: "#383E56",
    date: "August 2022 - May 2023",
    points: [
      "Celesta is the Annual Techno-Management festival of the Indian Institute of Technology Patna",
      "Responsible for managing all aspects of media relations for the fest. This includes coordinating with journalists, bloggers, and media outlets to generate publicity and coverage for the event.",
      "Developed and implemented strategic publicity campaigns to generate awareness and excitement about the fest. This involves utilizing various channels, including traditional media, social media platforms, email newsletters, and influencers, to reach the target audience and maximize attendance.",
      "Worked closely with the design team to develop a consistent visual identity and branding for the fest.",
      
    ],
  },
  // {
  //   title: "Full stack Developer",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
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
    name: "Infinito Website",
    description:
      "Website for the annual sports fest of IIT Patna-Infinito",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "MYSQL",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Ayushpal01/Infinito2020",
  },
  {
    name: "AI Tshirt Maker",
    description:
      "Web application that allows user to design a t-shirt model using logos and texture with ai integration",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Ayushpal01/tshirt-maker",
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
];

export { services, technologies, experiences, testimonials, projects };
