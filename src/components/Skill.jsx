import React from "react";

// Components
import {
  Grid,
  Typography,
  Slider,
} from "@material-ui/core";

// Utilities
import { withStyles, makeStyles } from "@material-ui/core/styles";

const Skill = ({ name, image, alt, level }) => {
  const classes = useStyles();

  return (
    <Grid 
      item 
      className={classes.skill}
    >
      <img 
        src={image} 
        alt={alt} 
        className={classes.media}
      />
      <Typography variant="h6">
        {name}
      </Typography>
      <SkillBar
        value={level} 
        valueLabelDisplay="auto"
        min={1}
        max={10}
        style={{
          height: "10px !important",
        }}
      />
    </Grid>
  );
};

const SkillBar = withStyles({
  root: {
    color: "#52af77",
    height: 8
  },
  thumb: {
    height: 16,
    width: 16,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -4,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% - 4px)"
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 8,
    borderRadius: 4
  },
  // mark: {
  //   backgroundColor: "#bfbfbf",
  //   height: 14,
  //   width: 1,
  //   marginTop: -3
  // }
})(Slider);

const useStyles = makeStyles(() => ({
  media: {
    height: 100,
    width: 100,
    padding: 5,
  },
  skill: {
    textAlign: "center",
    marginLeft: "3%",
    marginRight: "3%",
    marginBottom: 20,
  },
}));

export default Skill;