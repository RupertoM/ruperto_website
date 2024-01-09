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
          <Card className="w-2/5 bg-gradient-to-b from-neutral-400 via-white to-neutral-400 rounded-xl">
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
            </CardContent>
          </Card>
          <Card className="w-2/5 bg-gradient-to-b from-neutral-400 via-white to-neutral-400 rounded-xl">
            <CardContent>
              <Typography className="!font-bold text-xl special-font text-black text-center">
                Empowr Volleyball
              </Typography>
              <Typography className="text-black !font-bold text-base poppins-font text-center mt-2">
                Men's Youth Beach and Indoor Volleyball
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
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default WorkCards;
