import React from "react";
import Slider from "react-slick";
import {
  useMediaQuery,
  useTheme,
  Card,
  CardContent,
  Typography,
} from "@mui/material";

interface Course {
  number: string;
  title: string;
  description: string;
}

const Courses: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const coursesData: Course[] = [
    {
      number: "COMP 210",
      title: "Data Structures and Analysis",
      description:
        "Learned about the time and space complexity of different algorithms and how to analyze them. Implemented data structures such as linked lists, stacks, queues, trees, and graphs. Implemented algorithms such as sorting, searching, and graph traversal.",
    },
    {
      number: "COMP 116",
      title: "Introduction to Scientific Programming",
      description:
        "Covered topics such as data types, control flow, functions, and object-oriented programming. Learned to use Python libraries such as NumPy, and Matplotlib, Pandas, and more. Projects included analyzing CSV files to deconstruct DNA molecules and analyzing large data sets to find trends.",
    },
    {
      number: "COMP 126",
      title: "Practical Web Design and Development",
      description:
        "Made the most use out of vanilla HTML and CSS while learning about mobile first responsive design and accessibility. Covered the DOM, UI Design, Color Choice, Typography, Bootstrap, and more.",
    },
    {
      number: "COMP 211",
      title: "Systems Fundamentals",
      description:
        "Covered topics such as binary, hexadecimal, and assembly. Learned about the basics of computer architecture and how to use the C programming language to write assembly code. Learned about the basics of operating systems and how to use the C programming language to write a simple shell. Learned how to use VIM to write in C and to navigate the terminal using CLI commands.",
    },
    {
      number: "COMP 301",
      title: "Structure and Organize Your Own Code",
      description:
        "Covered topics such as version control, testing, and documentation. Learned how to use Git and GitHub to manage projects. Learned how to use JUnit to test code. Learned about different design patterns such as the singleton pattern, the factory pattern, the observer pattern, the MVC, and more. Learned how to efficiently write, structure, and organize Java code to meet industry standards.",
    },
    {
      number: "COMP 311",
      title: "Computer Organization",
      description:
        "Covered topics such as the CPU, memory, bus, cache, I/O, and more. Learned how to write in assembly, model logical circuitry using Logisim, and analyze the performance of different computer architectures using logic gates. Analyzed how computers do what they do at a low level.",
    },
    {
      number: "COMP 421",
      title: "Files and Databases",
      description:
        "Covered topics such as SQL, relational algebra, the cost and efficiency of dabatases, indexes, B+ trees, and more. Learned how to use SQL to create, read, update, and delete data from a database and the basics of database design. Learned the I/O costs and efficiency of different database designs.",
    },
    {
      number: "COMP 426",
      title: "Modern Web Programming",
      description:
        "Covered topics such as vim, bash, curl, npm, and more. Learned to use JavaScript and React to manipulate the DOM and create interactive web pages. Learned to use NodeJS to create a server, install dependencies, and to use APIs to fetch data from the web. Learned to use Git and GitHub to manage projects.",
    },
    {
      number: "COMP 455",
      title: "Models of Languages and Computation",
      description:
        "Covered topics such as regular expressions, context-free grammars, Turing machines, and more. Learned about state machine diagrams and how to both create and analyze them for different algorithms. Learned how to use regular expressions to search for patterns in text. Learned how to use context-free grammars to parse text.",
    },
    {
      number: "COMP 581",
      title: "Introduction to Robotics",
      description:
        "Covered topics such as kinematics, dynamics, sensors, graph searching, bug algorithms, history, and more. Learned how to develop controllers for robots using Webots in simulation and EV3 Lego Mindstorm robots in real world testing. Developed functional robots that could sense and navigate their environment using these tools and Python.",
    },
    {
      number: "COMP 590",
      title: "Programming Intelligent Physical Systems",
      description:
        "Covered topics such as controllers, solving state space models, transfer functions, stability analysis, discretized systems, actuator delays, Ackermann's, and more. Learned how to simulate the stability of a system using MATLAB and Simulink. Learned how to solve for the stability of a system and transform a state space model of a system using MATLAB.",
    },
    {
      number: "COMP 590",
      title: "Foundations of Software Engineering",
      description:
        "Spent a semester in an internship-like environment. Learned about proper project management, commit message standards, and how to work in a team. Covered a wide variety of SWE topics and worked on developing web applications using Javascript, Angular, Python, Flask, MySQL, and SQLAlchemy.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 9000,
    autoplay: true,
    arrows: false,
    pauseOnHover: true,
    draggable: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={isMobile ? "flex justify-center" : ""}>
      {isMobile ? (
        <Slider {...settings} className="w-[90vw]">
          {coursesData.map((course) => (
            <Card className="bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 rounded-lg">
              <CardContent>
                <Typography
                  variant="h5"
                  className="text-center mb-1 font-bold text-white"
                >
                  {course.number}
                </Typography>
                <Typography
                  variant="h6"
                  className="text-center mb-3 font-bold text-white"
                >
                  {course.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  className="text-center text-white"
                >
                  {course.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Slider>
      ) : (
        <>
          <div className="flex justify-around">
            <Slider
              {...settings}
              className="w-1/4 transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {coursesData.slice(0, 4).map((course) => (
                <Card className="bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 rounded-xl">
                  <CardContent>
                    <Typography
                      variant="h5"
                      className="text-center mb-1 font-bold text-white"
                    >
                      {course.number}
                    </Typography>
                    <Typography
                      variant="h6"
                      className="text-center mb-4 font-bold text-white"
                    >
                      {course.title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      className="text-center text-white"
                    >
                      {course.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Slider>
            <Slider
              {...settings}
              className="w-1/4 transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {coursesData.slice(4, 8).map((course) => (
                <Card className="bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 rounded-xl">
                  <CardContent>
                    <Typography
                      variant="h5"
                      className="text-center mb-1 font-bold text-white"
                    >
                      {course.number}
                    </Typography>
                    <Typography
                      variant="h6"
                      className="text-center mb-4 font-bold text-white"
                    >
                      {course.title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      className="text-center text-white"
                    >
                      {course.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Slider>
            <Slider
              {...settings}
              className="w-1/4 transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {coursesData.slice(8).map((course) => (
                <Card className="bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 rounded-xl">
                  <CardContent>
                    <Typography
                      variant="h5"
                      className="text-center mb-1 font-bold text-white"
                    >
                      {course.number}
                    </Typography>
                    <Typography
                      variant="h6"
                      className="text-center mb-4 font-bold text-white"
                    >
                      {course.title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      className="text-center text-white"
                    >
                      {course.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Slider>
          </div>
        </>
      )}
    </div>
  );
};

export default Courses;
