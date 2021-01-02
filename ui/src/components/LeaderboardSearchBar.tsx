import React, { FC } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { mainColour, subColour } from "../styles/palette";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      backgroundColor: "#010A13",
      "&:hover": {
        backgroundColor: "010A13",
      },
      border: `1px solid ${mainColour.yellow}`,
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: 800,
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: subColour.yellow,
    },
    inputInput: {
      paddingLeft: 20,
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      transition: theme.transitions.create("width"),
      width: "100%",
      // [theme.breakpoints.up("md")]: {
      //   width: "20ch",
      // },
    },
  })
);

export default function LeaderboardSearchBar() {
  const classes = useStyles();

  return (
    <div className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon style={{ color: `${mainColour.yellow}` }} />
      </div>
      <InputBase
        fullWidth={false}
        placeholder="Search Summoners"
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        inputProps={{ "aria-label": "search" }}
      />
    </div>
  );
}
