import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { Typography, Link } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  date: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    color: "#ccc"
  }
}));

export default ({ index, item }) => {
  dayjs.extend(relativeTime);
  const { title, link, isoDate, contentSnippet } = item;

  const classes = useStyles();

  return (
    <div>
      <Typography variant="h6">
        <Link href={link} target="_blank">
          {index + 1}. {title}
        </Link>
      </Typography>

      <Typography variant="body2" className={classes.date}>
        {dayjs(isoDate).fromNow()}
      </Typography>

      <Typography variant="body1">{contentSnippet}</Typography>
    </div>
  );
};
