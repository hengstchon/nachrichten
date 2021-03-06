import React from "react";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination, PaginationItem } from "@material-ui/lab";

const useStyles = makeStyles({
  root: {
    paddingTop: "1rem",
    paddingBottom: "2rem"
  }
});

export default ({ currentPage, totalPage, cat }) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" className={classes.root}>
      <Pagination
        count={totalPage}
        page={currentPage}
        color="primary"
        renderItem={item => (
          <PaginationItem
            component={Link}
            to={`/${cat}?page=${item.page}`}
            {...item}
          />
        )}
      />
    </Grid>
  );
};
