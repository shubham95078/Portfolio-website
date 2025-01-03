import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import FoodWebsite from "../assets/projects/Food-Website.png";
import QuizApp from "../assets/projects/Quiz-app.png";
import portfolio_img from "../assets/projects/Portfolio.png";

export const HERO_CONTENT = `Hi, I’m Shani Dev Kashyap, a passionate front-end developer dedicated to building responsive, user-friendly, and visually engaging web applications. With a solid foundation in HTML, CSS, JavaScript, and frameworks like React.js and Tailwind CSS, I enjoy turning creative ideas into functional and interactive user interfaces.I also enjoy exploring advanced tools like ShadCN to ensure seamless component integration and have recently worked with Redux Toolkit for effective state management in React applications.`;

export const ABOUT_TEXT = `I am a dedicated and versatile frontend developer with a passion for creating efficient and user-friendly web applications. With experience in technologies like React, Tailwind CSS, JavaScript, and ShadCN, I focus on building responsive and interactive interfaces that enhance user experiences. My journey in web development started with a deep curiosity for design and functionality, and it has grown into a career where I constantly strive to learn and tackle new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Beyond coding, I love exploring emerging technologies, refining my skills, and contributing to meaningful projects.`;

export const EXPERIENCES = [
  {
    year: "June 2024 - Nov 2024",
    role: "Software Engineering Intern",
    company: "MyTribe",
    description: `Contributed to the design and development of responsive and interactive components for the company's website. Utilized frontend technologies like React, Tailwind CSS, and ShadCN to build reusable UI components. Collaborated with team members in a fast-paced startup environment to enhance user experience and interface consis-
tency`,
    technologies: ["Tailwind CSS", "React.js", "Next.js", "ShadCN-UI"],
  },
  // {
  //   year: "2022 - 2023",
  //   role: "Frontend Developer",
  //   company: "Adobe",
  //   description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
  //   technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  // },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "Food Website",
    image: FoodWebsite,
    description:
      "Dynamic Restaurant Menu with detailed dish descriptions, prices, and discounts. Intuitive UI/UX ensures seamless navigation and quick access to features. Users can rate and review dishes, fostering community feedback and enriching the overall dining experience."
,
    technologies: ["HTML", "CSS", "React", "Redux.js", "Tailwind CSS"],
  },
  {
    title: "Quiz-App",
    image: QuizApp,
    description:
      "Engaging UI with dynamic questions, secure email/password login, and randomized quizzes on diverse topics ensure an immersive, replayable, and user-friendly experience",
    technologies: ["HTML", "CSS", "React.js", "Firebase", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    image: portfolio_img,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  // },
];

export const CONTACT = {
  address: "Sant Tukaram Nagar , Pimpri , Pune ",
};
