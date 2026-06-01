import pizza1 from "../images/5.webp";
import pizza2 from "../images/6.webp";
import bookWelt from "../images/book_welt.webp";
import bookWelt1 from "../images/book_welt2.webp";
import bookWelt2 from "../images/bookWelt.webp";
import bookWelt3 from "../images/3.webp";
import bookWelt4 from "../images/4.webp";
import creaskale from "../images/creaskale.webp";
import repairThumb from "../images/repair1.webp";
import repair1 from "../images/repair1.webp";
import repair2 from "../images/repair2.webp";

export const projects = [
  {
    name: "GetDPizza",
    categories: "Front End",
    githubLink: "https://github.com/oussama3422/GetDPizza",
    description:
      "PizzaPortal is a web application that allows users to order pizza online. The project is built using React, React Router v6.4, Tailwind CSS for styling, Local Storage for user login, Redux Toolkit for state management, and Framer Motion for small animations.",
    websiteLink: "https://get-d-pizza.vercel.app/",
    toolsAndTechnologies: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Local Storage",
      "Redux Toolkit",
      "Framer Motion",
    ],
    image: pizza1,
    images: [pizza1, pizza2],
  },
  {
    name: "BookWelt",
    categories: "Full Stack Development",
    githubLink: "https://github.com/oussama3422/Book-welt",
    description:
      "Book Welt is an admin dashboard designed for efficient management of booking data and statistical analysis through clean and intuitive charts.",
    websiteLink: "https://bookwelt.vercel.app/",
    toolsAndTechnologies: ["React", "Styled Components", "Recharts"],
    image: bookWelt,
    images: [bookWelt1, bookWelt2, bookWelt3, bookWelt4],
  },
  {
    name: "Creaskale",
    categories: "Mobile Development",
    githubLink: null,
    description: "Creaskale is an innovative mobile solution.",
    websiteLink: null,
    toolsAndTechnologies: ["Flutter", "Dart", "Bloc", "Firebase"],
    image: creaskale,
    images: [],
  },
  {
    name: "RepairCar",
    categories: "Mobile Development (Front End)",
    githubLink: "",
    description:
      "RepairCar is an app currently under development, with the front-end mobile version successfully completed.",
    websiteLink: "Coming soon",
    toolsAndTechnologies: ["Flutter", "Dart", "Bloc", "Firebase"],
    image: repairThumb,
    images: [repair1, repair2],
  },
];
