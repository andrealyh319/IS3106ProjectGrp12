import React from "react";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function AverageRating(props) {
  const totalStars = 5;
  const avgStars = props.averageStars;

  return (
    <Box>
      {[...new Array(totalStars)].map((arr, index) => {
        return index < avgStars ? <StarIcon /> : <StarBorderIcon />;
      })}
    </Box>
  );
};

export default AverageRating;