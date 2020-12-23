import React, { FC, useEffect, useState } from "react";

import SummonerSearchBar from "../components/SummonerSearchBar";
import SummonersRiftMap from "../components/SummonersRiftMap";

import baronIcon from "../assets/assetPanel/baronnashor.svg";

import lineSeparator from "../assets/assetPanel/lineSeparator.svg";
import lineSeparatorShort from "../assets/assetPanel/lineSeparatorShort.svg";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/ButtonGroup";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { mainColour, glowColour } from "../styles/palette";
import { InfoDrawer, InfoDrawerProps } from "../components/InfoDrawer";
import DonateInfoBox from "../components/DonateInfoBox";
import { useDispatch, useSelector } from "react-redux";
import { MonsterType, RootState } from "../redux/types";
import { setSelectedMonster } from "../redux/actions/monsterActions";
import { ImageAsset } from "../components/ImageAsset";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      background: "transparent", // TODO: change this later
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
      "&:hover": {
        cursor: "pointer",
      },
    },
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
  const dispatch = useDispatch();
  const [windowHeight, setWindowHeight] = useState(0);
  const [showInfoDrawer, setInfoDrawer] = useState(false);
  const { allMonsters } = useSelector((state: RootState) => state.monsters);
  const [asset, setAsset] = useState<MonsterType | undefined>(undefined);

  const handleToggleInfoDrawer = (monster: MonsterType) => {
    setInfoDrawer(!showInfoDrawer);
    setAsset(monster);
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
            <SummonersRiftMap />
          </Paper>
        </Grid>

        {!showInfoDrawer ? (
          <Grid item xs={7}>
            <Grid container spacing={1}>
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
                      {allMonsters?.map((elem: MonsterType) => (
                        <Button
                          onClick={() => {
                            handleToggleInfoDrawer(elem);
                            dispatch(setSelectedMonster(elem.name));
                          }}
                        >
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                            className={classes.listItem}
                          >
                            <ImageAsset
                              className=""
                              height={ICON_SIZE}
                              width={ICON_SIZE}
                              style={{ paddingRight: 5 }}
                              alt={elem.icon}
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
                  <Typography className={classes.headerText}>
                    Minions
                  </Typography>
                  <img src={lineSeparator} alt="line" />
                  <Grid
                    container
                    style={{ display: "flex", flexDirection: "row" }}
                  >
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
                  <Grid
                    container
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <Grid
                      container
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      {/* COLUMN 1 */}
                      <Grid item xs={6}>
                        <Typography className={classes.headerText}>
                          Jungle Plants
                        </Typography>
                        <img src={lineSeparatorShort} alt="lineShort" />
                        {[1, 1].map(() => (
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
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
                        <img src={lineSeparatorShort} alt="lineShort" />
                        {[1, 1].map(() => (
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
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
                <DonateInfoBox />
              </Grid>
            </Grid>
          </Grid>
        ) : (
          <Grid
            item
            xs={7}
            style={{
              background: `transparent`,
            }}
          >
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
