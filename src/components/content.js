import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from '@material-ui/core/Typography';

const random = "https://source.unsplash.com/random";

const useStyles = makeStyles (() => ({
    container: {
        width: "1200px",
    },
    topicSection: {
      display: "flex",
      alignItems: "center",
      padding: "0.8rem",
    },
    topics: {
      backgroundColor: "blue",
      padding: "0.2rem",
      position: "fixed",
      width: "200px",
      color: "white",
      display: "flex",
      flexDirection: "column",
    },
    square: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#F57B51",
      height: "2rem",
      width: "2rem",
      marginRight: "1rem",
      borderRadius: "0.2rem",
    },
    text: {
      height: "0.2",
      width: "0.2",
      color: "white",
      fontWeight: "bold",
      fontSize: "1.2rem",
    },
    topic: {
      color: "#c4c4c4",
    },
    questions: {
      backgroundColor: "green",
      padding: "0.5rem",
      marginLeft: "200px",
      height: "2000px",
      color: "white",
    },
    improve: {
      backgroundColor: "yellow",
      padding: "0.5rem",
    },
}))

const topics = [
  "Business", 
  "Technology",
  "Science",
  "Music",
  "History",
  "Travel",
  "Food",
  "Politics",
  "Crafts",
  "Space",
  "Code"
]

const Content = () => {
    const classes = useStyles();

    return (
      <Grid container className={classes.container}>
        <Grid item xs={2} className={classes.topics}>
          {topics.map((x) => {
            return (
              <div className={classes.topicSection}>
                <div className={classes.square}><p className={classes.text}>{x.split("")[0]}</p></div>
                <Typography 
                  variant="h6" 
                  component="h6"
                  className={classes.topic}
                >
                  {x}
                </Typography>
              </div>
            )
          })}
        </Grid>
        <Grid item xs={7} className={classes.questions}>Questions</Grid>
        <Grid item xs={3} className={classes.improve}>Improve</Grid>
      </Grid>
    )
}

export default Content;