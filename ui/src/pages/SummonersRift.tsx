import React, { FC, useEffect, useState } from "react";

import SummonerSearchBar from "../components/SummonerSearchBar";
import SummonersRiftMap from "../components/SummonersRiftMap";
import SoulSelectionToggle from "../components/SoulSelectionToggle";

import baronIcon from "../assets/assetPanel/baronnashor.svg";

import lineSeparator from "../assets/assetPanel/lineSeparator.svg";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/ButtonGroup";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { mainColour, glowColour } from "../styles/palette";
import {InfoDrawer} from '../components/InfoDrawer';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      backgroundColor: "black", // TODO: change this later
    },
    headerText: {
      color: mainColour.yellow,
      fontFamily: "Friz Quadrata",
      fontSize: 20,
    },

    assetText: {
      color: mainColour.white,
      fontFamily: "Friz Quadrata",
      fontSize: 14,
    },

    drawerStyle: {
      zIndex: 9999,
      color: mainColour.white,
    }


  })
);

interface SummonersRiftProps {}

const ICON_SIZE = 30;

export const SummonersRift: FC<SummonersRiftProps> = ({}) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [showInfoDrawer, setInfoDrawer] = useState(false);

  const handleToggleInfoDrawer = () => {
    console.log("works" + {showInfoDrawer});
    setInfoDrawer(!showInfoDrawer);
  }

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    updateWindowDimensions();
  }, []);

  const updateWindowDimensions = () => {
    setWindowHeight(window.innerHeight - 85);
  };

  const classes = useStyles();
  return (
    <>
    
    <InfoDrawer showInfoDrawer={showInfoDrawer} handleClose={handleToggleInfoDrawer}/>
    
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
          >
            <SummonerSearchBar />
            <Typography className={classes.headerText}>
              Neutral Monsters
            </Typography>
            <img src={lineSeparator} alt="line" />
            <Grid
              container
              style={{ display: "flex", flexDirection: "row", margin: 5 }}
            >
              {/* COLUMN 1 */}
              <Grid item xs={6}>
                {[1, 1, 1, 1, 1, 1, 1, 1].map(() => (
                  <Button 
                  onClick = {() => {
                    handleToggleInfoDrawer()
                  }}
                  ><div style={{ display: "flex", flexDirection: "row" }}>
                    <img
                      className=""
                      src={baronIcon}
                      height={ICON_SIZE}
                      style={{ paddingRight: 5 }}
                      alt="baronIcon"
                    />{" "}
                    <Typography className={classes.assetText}>
                      Baron Nashor
                    </Typography>
                  </div></Button>
                ))}
              </Grid>
              {/* COLUMN 2 */}
              <Grid item xs={6}>
                {[1, 1, 1, 1, 1, 1].map(() => (
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img
                      className=""
                      src={baronIcon}
                      height={ICON_SIZE}
                      style={{ paddingRight: 5 }}
                      alt="baronIcon"
                    />{" "}
                    <Typography className={classes.assetText}>
                      Baron Nashor
                    </Typography>
                  </div>
                ))}
              </Grid>
            </Grid>
            <Typography className={classes.headerText}>Minions</Typography>
            <img src={lineSeparator} alt="line" />
            <Grid container style={{ display: "flex", flexDirection: "row" }}>
              {/* COLUMN 1 */}
              <Grid item xs={6}>
                {[1, 1].map(() => (
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img
                      className=""
                      src={baronIcon}
                      height={ICON_SIZE}
                      style={{ paddingRight: 5 }}
                      alt="baronIcon"
                    />{" "}
                    <Typography className={classes.assetText}>
                      Baron Nashor
                    </Typography>
                  </div>
                ))}
              </Grid>
              {/* COLUMN 2 */}
              <Grid item xs={6}>
                {[1, 1].map(() => (
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <img
                      className=""
                      src={baronIcon}
                      height={ICON_SIZE}
                      style={{ paddingRight: 5 }}
                      alt="baronIcon"
                    />{" "}
                    <Typography className={classes.assetText}>
                      Baron Nashor
                    </Typography>
                  </div>
                ))}
              </Grid>
            </Grid>
            <Grid container style={{ display: "flex", flexDirection: "row" }}>
              <Grid container style={{ display: "flex", flexDirection: "row" }}>
                {/* COLUMN 1 */}
                <Grid item xs={6}>
                  <Typography className={classes.headerText}>
                    Jungle Plants
                  </Typography>
                  <img src={lineSeparator} alt="line" />
                  {[1, 1].map(() => (
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <img
                        className=""
                        src={baronIcon}
                        height={ICON_SIZE}
                        style={{ paddingRight: 5 }}
                        alt="baronIcon"
                      />{" "}
                      <Typography className={classes.assetText}>
                        Baron Nashor
                      </Typography>
                    </div>
                  ))}
                </Grid>
                {/* COLUMN 2 */}
                <Grid item xs={6}>
                  <Typography className={classes.headerText}>
                    Buildings
                  </Typography>
                  <img src={lineSeparator} alt="line" />
                  {[1, 1].map(() => (
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <img
                        className=""
                        src={baronIcon}
                        height={ICON_SIZE}
                        style={{ paddingRight: 5 }}
                        alt="baronIcon"
                      />{" "}
                      <Typography className={classes.assetText}>
                        Baron Nashor
                      </Typography>
                    </div>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Paper>
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
