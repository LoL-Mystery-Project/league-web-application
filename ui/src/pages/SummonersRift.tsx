import React, { FC, useEffect, useState } from "react";

import SummonerSearchBar from "../components/SummonerSearchBar";
import SummonersRiftMap from "../components/SummonersRiftMap";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/ButtonGroup";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { mainColour, subColour } from "../styles/palette";
import { InfoDrawer } from "../components/InfoDrawer";
import DonateInfoBox from "../components/DonateInfoBox";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/ReduxTypes";
import { setSelectedMonster } from "../redux/actions/monsterActions";
import { ImageAsset } from "../components/ImageAsset";
import { MonsterType } from "../monster-layout/MonsterTypes";
import { useWindowDimensions } from "../components/hooks/useWindowDimensions";
import { setInfoDrawerBoolean } from "../redux/actions/pageActions";
import { SummonersRiftConstants } from "../styles/dimension";
import styled from "styled-components";

const Wrapper = styled.div`
  .headerText {
    color: ${mainColour.yellow};
    font-family: "Friz Quadrata";
    font-size: 20px;
    line-height: 18px;
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // height: "100%",
      // width: "100%",
      overflowY: "hidden",
      overflowX: "hidden",
    },

    paper: {
      background: "transparent",
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
  const { allMonsters } = useSelector((state: RootState) => state.monsters);
  const { showInfoDrawer } = useSelector((state: RootState) => state.page);
  const [asset, setAsset] = useState<MonsterType | undefined>(undefined);
  const windowDimensions = useWindowDimensions();

  const handleCloseInfoDrawer = () => {
    dispatch(setInfoDrawerBoolean(false));
  };

  useEffect(() => {
    setWindowHeight(windowDimensions.height - 85);
  }, [windowDimensions]);

  const classes = useStyles();
  return (
    <Wrapper>
      <div style={{ maxHeight: windowHeight, margin: SummonersRiftConstants.marginTop }}>
        <Grid
          container
          className={classes.root}
          justify="center"
          // spacing={1}
          // style={{ margin: SummonersRiftConstants.marginTop }}
        >
          {/* MAP */}
          <Grid item xs={5}>
            <SummonersRiftMap />
          </Grid>
          {!showInfoDrawer ? (
            <Grid item xs={7} style={{ maxWidth: "55%" }}>
              <Grid
                container
                justify="flex-end"
                style={{
                  // marginLeft: SummonersRiftConstants.marginLeft,
                  overflowY: "scroll",
                  flexBasis: "unset",
                  height: windowHeight - 30,
                }}
              >
                {/* MONSTER LIST */}
                <Grid item xs={7} style={{ maxWidth: "50%" }}>
                  <SummonerSearchBar />
                  <Typography
                    style={{
                      marginTop:
                        SummonersRiftConstants.neutralMonstersHeaderMarginTop,
                    }}
                    className="headerText"
                  >
                    Neutral Monsters
                  </Typography>
                  <ImageAsset width={460} alt="lineSeparator.svg" />
                  <Grid
                    container
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: SummonersRiftConstants.listMarginTop,
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
                                marginTop:
                                  SummonersRiftConstants.iconAndTextMarginTop,
                              }}
                            >
                              <Button
                                onClick={() => {
                                  // handleToggleInfoDrawer(elem);
                                  dispatch(setSelectedMonster(elem.name));
                                  dispatch(setInfoDrawerBoolean(true));
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
                                    alt={elem.icon}
                                  />{" "}
                                  <p
                                    className={classes.assetText}
                                    style={{
                                      marginLeft:
                                        SummonersRiftConstants.iconMarginLeft,
                                    }}
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
                                marginTop:
                                  SummonersRiftConstants.iconAndTextMarginTop,
                              }}
                            >
                              <Button
                                onClick={() => {
                                  // handleToggleInfoDrawer(elem);
                                  dispatch(setSelectedMonster(elem.name));
                                  dispatch(setInfoDrawerBoolean(true));
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
                                    alt={elem.icon}
                                  />{" "}
                                  <p
                                    className={classes.assetText}
                                    style={{
                                      marginLeft:
                                        SummonersRiftConstants.iconMarginLeft,
                                    }}
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
                    style={{
                      marginTop:
                        SummonersRiftConstants.neutralMonstersHeaderMarginTop,
                    }}
                    className="headerText"
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
                          marginTop: SummonersRiftConstants.listMarginTop,
                        }}
                      >
                        <ImageAsset alt="superminion.svg" />
                        <p
                          className={classes.assetText}
                          style={{
                            marginLeft: SummonersRiftConstants.iconMarginLeft,
                          }}
                        >
                          Super Minions
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        <ImageAsset alt="meleeminion.svg" />
                        <p
                          className={classes.assetText}
                          style={{
                            marginLeft: SummonersRiftConstants.iconMarginLeft,
                          }}
                        >
                          Melee Minions
                        </p>
                      </div>
                      {/* {[1, 1].map(() => (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: 10,
                          }}
                        >
                          <img
                            className=""
                            src={baronIcon}
                            height={ICON_SIZE}
                            style={{ marginRight: 5 }}
                            alt="baronIcon"
                          />{" "}
                          <p
                            className={classes.assetText}
                            style={{ marginLeft: 10 }}
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
                          marginTop: SummonersRiftConstants.listMarginTop,
                        }}
                      >
                        <ImageAsset alt="canonminion.svg" />
                        <p
                          className={classes.assetText}
                          style={{
                            marginLeft: SummonersRiftConstants.iconMarginLeft,
                          }}
                        >
                          Cannon Minions
                        </p>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          marginTop:
                            SummonersRiftConstants.iconAndTextMarginTop,
                        }}
                      >
                        <ImageAsset alt="casterminion.svg" />
                        <p
                          className={classes.assetText}
                          style={{
                            marginLeft: SummonersRiftConstants.iconMarginLeft,
                          }}
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
                        marginTop:
                          SummonersRiftConstants.neutralMonstersHeaderMarginTop,
                      }}
                    >
                      {/* JUNGLE PLANTS*/}
                      <Grid item xs={6}>
                        <Typography className="headerText">
                          Jungle Plants
                        </Typography>
                        <ImageAsset width={220} alt="lineSeparatorShort.svg" />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: SummonersRiftConstants.listMarginTop,
                          }}
                        >
                          <ImageAsset alt="blastcone.svg" />
                          <p
                            className={classes.assetText}
                            style={{
                              marginLeft: SummonersRiftConstants.iconMarginLeft,
                            }}
                          >
                            Blast Cone
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <ImageAsset alt="honeyfruit.svg" />
                          <p
                            className={classes.assetText}
                            style={{
                              marginLeft: SummonersRiftConstants.iconMarginLeft,
                            }}
                          >
                            Honey Fruit
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <ImageAsset alt="scryersbloom.svg" />
                          <p
                            className={classes.assetText}
                            style={{
                              marginLeft: SummonersRiftConstants.iconMarginLeft,
                            }}
                          >
                            Scryer's Bloom
                          </p>
                        </div>
                      </Grid>
                      {/* BUILDINGS */}
                      <Grid item xs={6}>
                        <Typography className="headerText">
                          Buildings
                        </Typography>
                        <ImageAsset width={220} alt="lineSeparatorShort.svg" />
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: SummonersRiftConstants.listMarginTop,
                          }}
                        >
                          <ImageAsset alt="turret.svg" />
                          <p
                            className={classes.assetText}
                            style={{
                              marginLeft: SummonersRiftConstants.iconMarginLeft,
                            }}
                          >
                            Turrets
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <ImageAsset alt="inhibitor.svg" />
                          <p
                            className={classes.assetText}
                            style={{
                              marginLeft: SummonersRiftConstants.iconMarginLeft,
                            }}
                          >
                            Inhibitors
                          </p>
                        </div>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                          }}
                        >
                          <ImageAsset alt="nexus.svg" />
                          <p
                            className={classes.assetText}
                            style={{
                              marginLeft: SummonersRiftConstants.iconMarginLeft,
                            }}
                          >
                            Nexus
                          </p>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                {/* BIG ANNOYING AD */}
                <Grid item xs={5} style={{ backgroundColor: subColour.navy }}>
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
                maxWidth: '55%'
              }}
            >
              <InfoDrawer
                showInfoDrawer={showInfoDrawer}
                handleClose={handleCloseInfoDrawer}
                asset={asset}
              />
            </Grid>
          )}
        </Grid>
      </div>
    </Wrapper>
  );
};
