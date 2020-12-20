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
import { InfoDrawer, InfoDrawerProps } from "../components/InfoDrawer";
import { useSelector } from "react-redux";
import { RootState } from "../redux/types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      background: glowColour.backGroundBlue, // TODO: change this later
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
    },

    listItem: {
      '&:hover': {
        cursor: 'pointer'
      }
    }
  })
);

interface SummonersRiftProps {}

const ICON_SIZE = 30;

export interface MonsterObject {
  name: string;
  hp: number;
  imageIcon: string;
}

export const SummonersRift: FC<SummonersRiftProps> = ({}) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [showInfoDrawer, setInfoDrawer] = useState(false);
  const { imageMap } = useSelector((state: RootState) => state.images);
  const [asset, setAsset] = useState<MonsterObject>({
    name: "",
    hp: 0,
    imageIcon: "",
  });

  const handleToggleInfoDrawer = (monster: MonsterObject) => {
    setInfoDrawer(!showInfoDrawer);
    handleAsset(monster);
  };

  const handleAsset = (asset: MonsterObject) => {
    setAsset(asset);
  };

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
      <Grid
        container
        className={classes.root}
        justify="center"
        spacing={1}
        style={{ padding: 10 }}
      >
        {/* MAP */}
        <Grid item xs={5}>
          <Paper
            className={classes.paper}
            style={{
              height: windowHeight,
            }}
          >
            <SoulSelectionToggle />
          </Paper>
        </Grid>

        {!showInfoDrawer ? (
          <Grid item xs={7}>
          <Grid container spacing={1} >
        {/* MONSTER LIST */}
        <Grid item xs={7}>
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
                {[
                  {
                    name: "Baron Nashor",
                    hp: 5,
                    imageIcon: imageMap && imageMap['baronnashor.svg'],
                  },
                  {
                    name: "Mountain Drake",
                    hp: 5,
                    imageIcon: imageMap && imageMap['mountaindrake.svg'],
                  },
                  {
                    name: "Baron Nashor 2",
                    hp: 5,
                    imageIcon:
                      "https://images-ext-1.discordapp.net/external/CMiyPfQ2hlPUJrL-_RZNtppxSIaBItvKHlvL06kcCVM/https/raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/summoner-backdrops/4570.jpg?width=648&height=442",
                  },
                  {
                    name: "Baron Nashor 3",
                    hp: 5,
                    imageIcon:
                      "https://pusheen.com/wp-content/uploads/2019/12/Catfe-Drink_v2-34.jpg",
                  },
                  {
                    name: "Baron Nashor 4",
                    hp: 5,
                    imageIcon:
                      "https://pusheen.com/wp-content/uploads/2019/12/Catfe-Drink_v2-34.jpg",
                  },
                  {
                    name: "Baron Nashor 5",
                    hp: 5,
                    imageIcon:
                      "https://pusheen.com/wp-content/uploads/2019/12/Catfe-Drink_v2-34.jpg",
                  },
                  {
                    name: "Baron Nashor 6",
                    hp: 5,
                    imageIcon:
                      "https://pusheen.com/wp-content/uploads/2019/12/Catfe-Drink_v2-34.jpg",
                  },
                  {
                    name: "Baron Nashor 7",
                    hp: 5,
                    imageIcon:
                      "https://pusheen.com/wp-content/uploads/2019/12/Catfe-Drink_v2-34.jpg",
                  },
                ].map((elem: MonsterObject) => (
                  <Button
                    onClick={() => {
                      handleToggleInfoDrawer(elem);
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "row" }} className={classes.listItem}>
                      <img
                        className=""
                        src={elem.imageIcon}
                        height={ICON_SIZE}
                        width={ICON_SIZE}
                        style={{ paddingRight: 5 }}
                        alt="baronIcon"
                      />{" "}
                      <Typography className={classes.assetText}>
                        {elem.name}
                      </Typography>
                    </div>
                  </Button>
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
        <Grid item xs={5}>
            <Paper
            className={classes.paper}
              style={{
                height: windowHeight,
              }}
            />
          </Grid>
          </Grid>
        </Grid>
        ) : (
          <Grid item xs={7} style={{ background: `linear-gradient(180deg, #010A13 0%, #041722 100%)` }}>
            <InfoDrawer
              showInfoDrawer={showInfoDrawer}
              handleClose={handleToggleInfoDrawer}
              asset={asset}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};
