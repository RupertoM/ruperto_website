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
  title: string;
  description: string;
}

const Courses: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const coursesData: Course[] = [
    {
      title: "Course 1",
      description:
        "A long textual description for course 1. The lazy brown fox jumped over the fence. The quick brown fox jumped over the fence.",
    },
    {
      title: "Course 2",
      description:
        "A long textual description for course 2. The lazy brown fox jumped over the fence. The quick brown fox jumped over the fence.",
    },
    {
      title: "Course 3",
      description:
        "A long textual description for course 3. The lazy brown fox jumped over the fence. The quick brown fox jumped over the fence.",
    },
    {
      title: "Course 4",
      description:
        "A long textual description for course 4. The lazy brown fox jumped over the fence. The quick brown fox jumped over the fence.",
    },
    {
      title: "Course 5",
      description:
        "A long textual description for course 5. The lazy brown fox jumped over the fence. The quick brown fox jumped over the fence.",
    },
    {
      title: "Course 6",
      description:
        "A long textual description for course 6. The lazy brown fox jumped over the fence. The quick brown fox jumped over the fence.",
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
        <Slider {...settings} className="w-4/5">
          {coursesData.map((course) => (
            <Card className="bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 rounded-xl">
              <CardContent>
                <Typography
                  variant="h5"
                  className="text-center mb-2 font-bold"
                  style={{ color: "white" }}
                >
                  {course.title}
                </Typography>
                <Typography
                  color="text.secondary"
                  className="text-center"
                  style={{ color: "white" }}
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
              className="w-1/3 transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {coursesData.slice(0, 3).map((course) => (
                <Card className="bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 rounded-xl">
                  <CardContent>
                    <Typography
                      variant="h5"
                      className="text-center mb-2 font-bold"
                      style={{ color: "white" }}
                    >
                      {course.title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      className="text-center"
                      style={{ color: "white" }}
                    >
                      {course.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Slider>
            <Slider
              {...settings}
              className="w-1/3 transform hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              {coursesData.slice(3).map((course) => (
                <Card className="bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 rounded-xl">
                  <CardContent>
                    <Typography
                      variant="h5"
                      className="text-center mb-2 font-bold"
                      style={{ color: "white" }}
                    >
                      {course.title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      className="text-center"
                      style={{ color: "white" }}
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
