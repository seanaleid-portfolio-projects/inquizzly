import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles (() => ({
    container: {
        width: "1200px",
    },
    topics: {
      backgroundColor: "blue",
      padding: "0.5rem",
    },
    questions: {
      backgroundColor: "green",
      padding: "0.5rem",
    },
    improve: {
      backgroundColor: "yellow",
      padding: "0.5rem",
    },
}))

const Content = () => {
    const classes = useStyles();

    return (
      <Grid container className={classes.container}>
        <Grid item xs={2} className={classes.topics}>Topics</Grid>
        <Grid item xs={7} className={classes.questions}>Questions</Grid>
        <Grid item xs={3} className={classes.improve}>Improve</Grid>
      </Grid>
    )
}

export default Content;