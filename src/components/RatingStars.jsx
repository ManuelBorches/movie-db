import React from "react";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const RatingStars = ({ ratingValue, handleRating }) => {
  return (
    <div>
      <Box component="fieldset" mb={2} borderColor="transparent">
        <Typography component="legend"></Typography>
        <Rating
          name="simple-controlled"
          value={ratingValue}
          onChange={(event, newValue) => {
            handleRating(newValue);
          }}
        />
      </Box>
    </div>
  );
};

export default RatingStars;
