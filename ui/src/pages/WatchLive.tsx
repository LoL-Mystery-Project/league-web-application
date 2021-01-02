// import React, { FC } from "react";

// interface WatchLiveProps {}

// export const WatchLive: FC<WatchLiveProps> = ({}) => {
//   return <h1>Watch Live</h1>;
// };

import React, { FC, useEffect, useState } from "react";
import DonateInfoBox from "../components/DonateInfoBox";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/ButtonGroup";
import Paper from "@material-ui/core/Paper";
import { mainColour } from "../styles/palette";
import { useWindowDimensions } from "../components/hooks/useWindowDimensions";
import { ImageAsset } from "../components/ImageAsset";
import { HeaderComponent } from "../components/HeaderComponent";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      width: "100%",
      overflowY: "hidden",
      overflowX: "hidden",
    },
    paper: {
      background: "transparent", // TODO: change this later
    },
    paper2: {
      background: "transparent", // TODO: change this later
    },
    paper3: {
      background: "transparent", // TODO: change this later
    },
    paper4: {
      background: mainColour.blue, // TODO: change this later
    },
    headerText: {
      color: mainColour.yellow,
      fontFamily: "Friz Quadrata",
      fontSize: 20,
    },

    assetText: {
      color: mainColour.white,
      fontFamily: "Friz Quadrata",
      fontSize: 16,
    },

    drawerStyle: {
      color: mainColour.white,
    },

    listItem: {
      "&:hover": {
        cursor: "pointer",
      },
    },

    headerBackground: {
      background: `radial-gradient(
        44.47% 50% at 50% 50%,
        rgba(2, 13, 23, 0.25) 0%,
        #010a13 100%
      ),
      url("https://league-icons.s3-us-west-2.amazonaws.com/watchLiveBG.jpg")`,
      backgroundSize: "100% 800px",
      backgroundRepeat: "no-repeat",
    },
  })
);

interface WatchLiveProps {}

export const WatchLive: FC<WatchLiveProps> = ({}) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const windowDimensions = useWindowDimensions();
  const classes = useStyles();

  useEffect(() => {
    setWindowWidth(windowDimensions.width);
    setWindowHeight(windowDimensions.height - 85);
  }, [windowDimensions]);

  return (
    <div
      className={classes.headerBackground}
      style={{
        width: windowWidth,
      }}
    >
      <Grid
        container
        className={classes.root}
        justify="center"
        direction="column"
        spacing={1}
        style={{ paddingTop: 10 }}
      >
        <Grid item>
          <Paper
            className={classes.paper2}
            style={{
              width: windowWidth,
              height: 400,
            }}
          >
            <HeaderComponent />
          </Paper>{" "}
        </Grid>
        <Grid item>
          <Grid
            container
            className={classes.root}
            justify="center"
            direction="row"
            spacing={1}
            style={{ paddingTop: 5, height: 4840, width: windowWidth }}
          >
            <Grid item xs={9}>
              <Paper
                className={classes.paper3}
                style={{
                  height: "100%",
                }}
              >
                bye world
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper
                className={classes.paper4}
                style={{
                  height: "100%",
                }}
              ></Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
