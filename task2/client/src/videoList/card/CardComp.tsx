import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { VideoDetails } from "../../interfaces/videoInterface";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "./card.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 6,
    cursor: "pointer",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 151,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export const CardComp = (props: VideoDetails): JSX.Element => {
  const classes = useStyles();
  return (
    <Card className={classes.root} onClick={props.onClick}>
      <CardMedia
        className={"thumbnail-size"}
        component={"img"}
        image={props.thumbnail}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="subtitle2">{props.title}</Typography>
          <Typography variant="caption" color="textSecondary">
            {props.channelTitle}
          </Typography>
        </CardContent>
        <div className={classes.controls}></div>
      </div>
    </Card>
  );
};
