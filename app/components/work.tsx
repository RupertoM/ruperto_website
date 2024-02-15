import React from "react";
import {
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const WorkCards: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      {isMobile ? (
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2">
              Mobile View
            </Typography>
            <Typography color="textSecondary">
              This is a simple card for mobile view.
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <div className="flex justify-around mt-12">
          {/* <Card className="w-2/5 bg-gradient-to-b from-neutral-800 from-5% via-neutral-600 to-neutral-800 to-90% rounded-xl"> */}
          <Card className="w-2/5 bg-gradient-to-tl from-neutral-400 via-white to-neutral-400 rounded-xl">
            <CardContent>
              <Typography className="!font-bold text-xl special-font text-black text-center">
                Publicis Sapient
              </Typography>
              <Typography className="text-black !font-bold text-base poppins-font text-center mt-2">
                Digital Business Transformation And Consulting
              </Typography>
              <div className="mt-3 flex">
                <Typography className="text-black w-1/2 text-center !font-bold special-font text-sm">
                  June 2023 - August 2023
                </Typography>
                <Typography className="text-black w-1/2 text-center !font-bold special-font text-sm">
                  Atlanta, Georgia
                </Typography>
              </div>
              <Typography className="text-black text-center mt-2 !font-bold special-font text-sm">
                Software Engineering Intern
              </Typography>
              <Typography className="text-black text-justify mt-6 !font-bold special-font text-sm mr-2 ml-2">
                As a software engineering intern, I was responsible for
                developing and maintaining both the front-end and back-end of
                the client&rsquo;s website. Using technologies such as React,
                JavaScript, Java, and Spring Boot, I worked with a team of
                developers to create a responsive and user-friendly ad marketing
                platform with AI integration. I also collaborated with the
                design team to implement the client&rsquo;s vision. I was
                responsible for writing clean, maintainable, and efficient code
                while also ensuring the successful deployment of the web
                application. This involved taking care of the CI/CD pipeline and
                working with Docker and Kubernetes Engine.
              </Typography>
            </CardContent>
          </Card>
          <Card className="w-2/5 bg-gradient-to-tl from-neutral-400 via-white to-neutral-400 rounded-xl">
            <CardContent>
              <Typography className="!font-bold text-xl special-font text-black text-center">
                Empowr Volleyball
              </Typography>
              <Typography className="text-black !font-bold text-base poppins-font text-center mt-2">
                Men&rsquo;s Youth Beach and Indoor Volleyball
              </Typography>
              <div className="mt-3 flex">
                <Typography className="text-black w-1/2 text-center !font-bold special-font text-sm">
                  November 2023 - Present
                </Typography>
                <Typography className="text-black w-1/2 text-center !font-bold special-font text-sm">
                  Cary, North Carolina
                </Typography>
              </div>
              <Typography className="text-black text-center mt-2 !font-bold special-font text-sm">
                18s South Head Coach
              </Typography>
              <Typography className="text-black text-justify mt-6 !font-bold special-font text-sm mr-2 ml-2">
                As a head coach, I am responsible for the development of the
                young players. I help them individually and as a collective.
                Throughout the season, I analyze what the team as a whole
                struggles with, while also paying attention to which individual
                players are in need of guidance. I then take this information
                and coordinate drills for practice, while also working
                individually with players to help them improve in their
                respective positions. Lastly, I am responsible for making
                last-minute adjustments on tournament days, setting up lineups
                and giving players necessary advice during games to ensure
                victory and success for the team.
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default WorkCards;
