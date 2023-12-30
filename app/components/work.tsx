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
        <div className="flex justify-around mt-20">
          <Card className="w-2/5 bg-gradient-to-b from-neutral-800 from-5% via-neutral-600 to-neutral-800 to-90% rounded-xl">
            <CardContent>
              <Typography className="!font-bold text-2xl poppins-font text-white">
                Publicis Sapient
              </Typography>
              <Typography color="textSecondary" className="text-white">
                This is a simple card for other views.
              </Typography>
            </CardContent>
          </Card>
          <Card className="w-2/5 bg-gradient-to-b from-neutral-400 via-white to-neutral-400 rounded-xl">
            <CardContent>
              <div className="flex items-center justify-center">
                <Typography className="!font-bold w-2/3 text-2xl poppins-font text-black  text-center">
                  Publicis Sapient
                </Typography>
                <Typography className="text-black !font-bold text-lg poppins-font text-center">
                  Digital Business Transformation And Consulting
                </Typography>
              </div>
              <Typography className="text-black">
                This is a simple card for other views.
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default WorkCards;
