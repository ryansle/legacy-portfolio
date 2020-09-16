import React from "react";

// Components
import {
  Grid,
  Typography,
  Divider,
} from "@material-ui/core";

// Utilities
import { makeStyles } from "@material-ui/core/styles";

const SkillTable = ({ title, children }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={classes.skillTable}
      justify="flex-start"
    >
      <Grid container>
        <Typography variant="h4">
          {title}
        </Typography>
        <Divider className={classes.divider}/>

        {children}

      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(() => ({
  skillTable: {
    boxShadow: "0px 0px 6px 1px #555",
    padding: "20px 3% 30px 3%",
    marginBottom: 50,
  },
  divider: {
    width: "100%",
    height: 3,
    marginTop: 15,
    marginBottom: 15,
  },
}));

export default SkillTable;