import React, { FC, useEffect, useState } from "react";

import SummonerSearchBar from "../components/SummonerSearchBar";
import SummonersRiftMap from "../components/SummonersRiftMap";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/ButtonGroup";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { mainColour } from "../styles/palette";
import { InfoDrawer } from "../components/InfoDrawer";
import DonateInfoBox from "../components/DonateInfoBox";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/ReduxTypes";
import { setSelectedMonster } from "../redux/actions/monsterActions";
import { ImageAsset } from "../components/ImageAsset";
import { MonsterType } from "../monster-layout/MonsterTypes";
import { useWindowHeight } from "../components/hooks/useWindowHeight";

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
      // zIndex: 9999,
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

const ICON_SIZE = 40;

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
  const getWindowHeight = useWindowHeight();

  const handleToggleInfoDrawer = (monster: MonsterType) => {
    setInfoDrawer(!showInfoDrawer);
    setAsset(monster);
  };

  useEffect(() => {
    setWindowHeight(getWindowHeight - 85);
  }, [getWindowHeight]);

  const classes = useStyles();
  return (
    <div style={{ height: windowHeight }}>
      <Grid
        container
        className={classes.root}
        justify="center"
        spacing={1}
        style={{ paddingTop: 30 }}
      >
        {/* MAP */}
        <Grid item xs={5}>
          <Paper
            className={classes.paper}
            style={{
              height: windowHeight,
              // textAlign: "center",
            }}
          >
            <SummonersRiftMap />
          </Paper>
        </Grid>

        {!showInfoDrawer ? (
          <Grid>
            <Grid container style={{ paddingLeft: 60, overflowY: "scroll" }}>
              {/* MONSTER LIST */}
              <Grid item xs={7}>
                <Paper
                  className={classes.paper}
                  style={{
                    height: windowHeight,
                  }}
                >
                  <SummonerSearchBar />
                  <Typography
                    style={{ paddingTop: 30 }}
                    className={classes.headerText}
                  >
                    Neutral Monsters
                  </Typography>
                  <ImageAsset width={460} alt="lineSeparator.svg" />
                  <Grid
                    container
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      margin: 5,
                    }}
                  >
                    {/* NEUTRAL MONSTERS: COLUMN 1 */}
                    <Grid item xs={6}>
                      {allMonsters?.map((elem: MonsterType) => (
                        <div>
                          {allMonsters?.indexOf(elem) < 7 && (
                            <Grid
                              container
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignContent: "center",
                                paddingTop: 10,
                              }}
                            >
                              <Button
                                onClick={() => {
                                  handleToggleInfoDrawer(elem);
                                  dispatch(setSelectedMonster(elem.name));
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                  className={classes.listItem}
                                >
                                  <ImageAsset
                                    className=""
                                    height={ICON_SIZE}
                                    width={ICON_SIZE}
                                    style={{ paddingRight: 5 }}
                                    alt={elem.icon}
                                  />{" "}
                                  <p
                                    className={classes.assetText}
                                    style={{ paddingLeft: 10 }}
                                  >
                                    {elem.name}
                                  </p>
                                </div>
                              </Button>
                            </Grid>
                          )}
                        </div>
                      ))}
                    </Grid>
                    {/* NEUTRAL MONSTERS: COLUMN 2 */}
                    <Grid item xs={6}>
                      {allMonsters?.map((elem: MonsterType) => (
                        <div>
                          {allMonsters?.indexOf(elem) > 6 && (
                            <Grid
                              container
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignContent: "center",
                                paddingTop: 10,
                              }}
                            >
                              <Button
                                onClick={() => {
                                  handleToggleInfoDrawer(elem);
                                  dispatch(setSelectedMonster(elem.name));
                                }}
                              >
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                  className={classes.listItem}
                                >
                                  <ImageAsset
                                    className=""
                                    height={ICON_SIZE}
                                    width={ICON_SIZE}
                                    style={{ paddingRight: 5 }}
                                    alt={elem.icon}
                                  />{" "}
                                  <p
                                    className={classes.assetText}
                                    style={{ paddingLeft: 10 }}
                                  >
                                    {elem.name}
                                  </p>
                                </div>
                              </Button>
                            </Grid>
                          )}
                        </div>
                      ))}
                    </Grid>
                  </Grid>
                  <Typography
                    style={{ paddingTop: 20 }}
                    className={classes.headerText}
                  >
                    Minions
                  </Typography>
                  <ImageAsset width={460} alt="lineSeparator.svg" />
                  <Grid
                    container
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    {/* MINIONS: COLUMN 1 */}
                    <Grid item xs={6}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          paddingTop: 10,
                        }}
                      >
                        <ImageAsset
                          style={{ paddingRight: 5 }}
                          alt="superminion.svg"
                        />
                        <p
                          className={classes.assetText}
                          style={{ paddingLeft: 10 }}
                        >
                          Super Minions
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          paddingTop: 10,
                        }}
                      >
                        <ImageAsset
                          style={{ paddingRight: 5 }}
                          alt="meleeminion.svg"
                        />
                        <p
                          className={classes.assetText}
                          style={{ paddingLeft: 10 }}
                        >
                          Melee Minions
                        </p>
                      </div>
                      {/* {[1, 1].map(() => (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingTop: 10,
                          }}
                        >
                          <img
                            className=""
                            src={baronIcon}
                            height={ICON_SIZE}
                            style={{ paddingRight: 5 }}
                            alt="baronIcon"
                          />{" "}
                          <p
                            className={classes.assetText}
                            style={{ paddingLeft: 10 }}
                          >
                            Baron Nashor
                          </p>
                        </div>
                      ))} */}
                    </Grid>
                    {/* COLUMN 2 */}
                    <Grid item xs={6}>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          paddingTop: 10,
                        }}
                      >
                        <ImageAsset
                          style={{ paddingRight: 5 }}
                          alt="canonminion.svg"
                        />
                        <p
                          className={classes.assetText}
                          style={{ paddingLeft: 10 }}
                        >
                          Cannon Minions
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          paddingTop: 10,
                        }}
                      >
                        <ImageAsset
                          style={{ paddingRight: 5 }}
                          alt="casterminion.svg"
                        />
                        <p
                          className={classes.assetText}
                          style={{ paddingLeft: 10 }}
                        >
                          Caster Minions
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <Grid
                      container
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        paddingTop: 20,
                      }}
                    >
                      {/* JUNGLE PLANTS*/}
                      <Grid item xs={6}>
                        <Typography className={classes.headerText}>
                          Jungle Plants
                        </Typography>
                        <ImageAsset width={220} alt="lineSeparatorShort.svg" />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingTop: 10,
                          }}
                        >
                          <ImageAsset
                            style={{ paddingRight: 5 }}
                            alt="blastcone.svg"
                          />
                          <p
                            className={classes.assetText}
                            style={{ paddingLeft: 10 }}
                          >
                            Blast Cone
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingTop: 10,
                          }}
                        >
                          <ImageAsset
                            style={{ paddingRight: 5 }}
                            alt="honeyfruit.svg"
                          />
                          <p
                            className={classes.assetText}
                            style={{ paddingLeft: 10 }}
                          >
                            Honey Fruit
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingTop: 10,
                          }}
                        >
                          <ImageAsset
                            style={{ paddingRight: 5 }}
                            alt="scryersbloom.svg"
                          />
                          <p
                            className={classes.assetText}
                            style={{ paddingLeft: 10 }}
                          >
                            Scryer's Bloom
                          </p>
                        </div>
                      </Grid>
                      {/* BUILDINGS */}
                      <Grid item xs={6}>
                        <Typography className={classes.headerText}>
                          Buildings
                        </Typography>
                        <ImageAsset width={220} alt="lineSeparatorShort.svg" />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingTop: 10,
                          }}
                        >
                          <ImageAsset
                            style={{ paddingRight: 5 }}
                            alt="turret.svg"
                          />
                          <p
                            className={classes.assetText}
                            style={{ paddingLeft: 10 }}
                          >
                            Turrets
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingTop: 10,
                          }}
                        >
                          <ImageAsset
                            style={{ paddingRight: 5 }}
                            alt="inhibitor.svg"
                          />
                          <p
                            className={classes.assetText}
                            style={{ paddingLeft: 10 }}
                          >
                            Inhibitors
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingTop: 10,
                          }}
                        >
                          <ImageAsset
                            style={{ paddingRight: 5 }}
                            alt="nexus.svg"
                          />
                          <p
                            className={classes.assetText}
                            style={{ paddingLeft: 10 }}
                          >
                            Nexus
                          </p>
                        </div>
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
    </div>
  );
};
