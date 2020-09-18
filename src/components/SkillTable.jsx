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
    border: "1px solid #9fa2b4",
    padding: "20px 3% 30px 3%",
    marginBottom: 50,
    boxShadow: "0 4px 8px 1px rgba(0, 0, 0, 0.2), 0 6px 20px 1px rgba(0, 0, 0, 0.19)",
  },
  divider: {
    width: "100%",
    height: 3,
    marginTop: 15,
    marginBottom: 15,
  },
}));

export default SkillTable;