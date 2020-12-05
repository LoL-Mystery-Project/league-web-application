import React, { FC, useEffect, useState } from "react";
import SummonerSearchBar from "../components/SummonerSearchBar";
import SummonersRiftMap from "../components/SummonersRiftMap";
import SoulSelectionToggle from "../components/SoulSelectionToggle";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      backgroundColor: "black", // TODO: change this later
    },
  })
);

interface SummonersRiftProps {}

export const SummonersRift: FC<SummonersRiftProps> = ({}) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    updateWindowDimensions();
  }, []);

  const updateWindowDimensions = () => {
    setWindowHeight(window.innerHeight - 85);
    setWindowWidth(window.innerWidth / 2 - 10);
  };

  const classes = useStyles();
  return (
    <>
      <Grid
        container
        className={classes.root}
        justify="center"
        spacing={1}
        style={{ padding: 10 }}
      >
        {/* MAP */}
        <Grid item xs={6}>
          <Paper
            className={classes.paper}
            style={{
              height: windowHeight,
            }}
          >
            <SoulSelectionToggle />
          </Paper>
        </Grid>
        {/* MONSTER LIST */}
        <Grid item xs={3}>
          <Paper
            className={classes.paper}
            style={{
              height: windowHeight,
            }}
          />
        </Grid>
        {/* BIG ANNOYING AD */}
        <Grid item xs={3}>
          <Paper
            className={classes.paper}
            style={{
              height: windowHeight,
            }}
          />
        </Grid>
      </Grid>
    </>
  );
};
