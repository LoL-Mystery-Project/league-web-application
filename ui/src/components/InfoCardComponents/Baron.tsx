import React, { FC, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { mainColour } from "../../styles/palette";
import styled from "styled-components";
import { ImageAsset } from "../ImageAsset";
import { MonsterDetails } from "../MonsterDetails";

export const MonsterWrapper = styled.div`
  .infoHeaderText {
    font-family: Friz Quadrata;
    font-size: 30px;
    color: ${mainColour.yellow};
  }

  .infoText {
    font-size: 16px;
    color: ${mainColour.white};
  }

  .greyText {
    font-family: Friz Quadrata;
    font-size: 16px;
    color: ${mainColour.grey};
  }

  .overViewSubTextStyling {
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    display: flex;
    align-items: center;

    /* yellow/main */
    color: #b67f15;
  }
  .effectsDescription {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;

    /* grey/main */
    color: #808080;
  }
  .effectsSubHeaderStyle {
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    display: flex;
    align-items: center;

    /* purple/main */
    color: ${mainColour.purple};
  }

  .abilitiesSubHeaderStyle {
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    display: flex;
    align-items: center;

    /* purple/main */
    color: ${mainColour.white};
  }

  .textColorStylingOrange {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: ${mainColour.orange};
  }
  .textColorStylingBlue {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: ${mainColour.blue};
  }
  .textColorStylingYellow {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: ${mainColour.yellow};
  }
  .textColorStylingPurple {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: ${mainColour.purple};
  }

  .textColorStylingGreen {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: ${mainColour.green};
  }

  .textColorStylingWhite {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: ${mainColour.white};
  }

  .bottomBorder {
    border-bottom: 2px solid transparent;
    border-image-source: url("https://league-icons.s3-us-west-2.amazonaws.com/patchNotesLineSeparator.svg");
    border-image-repeat: initial;
    border-image-slice: 1;
    margin-bottom: 15px;
  }

  .leftBorder {
    position: absolute;
  }

  .bountyStyles {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 34px;
    white-space: nowrap;
  }

  .listStyles {
    margin-left: -20px;
  }

  .effectsStyles {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

interface BaronProps {}

export const Baron: FC<BaronProps> = ({}) => {
  const [baronData, setBaronData] = useState<any>({});

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:5000/monsters");
        const json = await response.json();
        const baron = json.find((elem: any) => elem.name === "Baron Nashor");
        setBaronData(baron);
      } catch {
        // do nothing, API call failed.
      }
    })();
  }, []);

  useEffect(() => {
    if (baronData) {
      console.log(baronData);
    }
  }, [baronData]);

  return (
    <MonsterWrapper>
      <Grid container style={{ display: "flex", flexDirection: "column" }}>
        {/* OVERVIEW: BOUNTY, STATISTICS, SPAWN */}
        <Grid item>
          <MonsterDetails />
        </Grid>
        {/* EFFECTS: HEADER AND INFO */}
        <Grid>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* EFFECTS HEADER */}
            <Typography className="infoHeaderText">Effects</Typography>
            <Typography
              className="effectsDescription"
              style={{ marginLeft: 25 }}
            >
              When killed, grants slayer and their living teammates:
            </Typography>
          </div>
          {/* EFFECTS INFO */}
          <Grid
            container
            spacing={1}
            style={{ display: "flex", flexDirection: "column" }}
            className="bottomBorder"
          >
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="handofbaron.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="effectsSubHeaderStyle">
                    Hand of Baron
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        Gives
                        <span className="textColorStylingOrange">
                          {" "}
                          12 - 48 (based on minutes) attack damage{" "}
                        </span>
                        and{" "}
                        <span className="textColorStylingBlue">
                          20 - 80 (based on minutes) ability power
                        </span>{" "}
                        determined   by the time the{" "}
                        <span className="textColorStylingYellow">Baron</span> is
                        slain.
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="empoweredrecall.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="effectsSubHeaderStyle">
                    Empowered Recall
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        After{" "}
                        <span className="textColorStylingBlue">
                          0.5s cast time
                        </span>
                        , channel for{" "}
                        <span className="textColorStylingBlue">4s</span> to
                        blink to their team’s fountain if not interrupted.
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="unknown.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="effectsSubHeaderStyle">
                    Aura - Empowered Minions
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        Nearby allied minions gain: Slow Resist,{" "}
                        <span className="textColorStylingBlue">
                          75% damage reduction
                        </span>
                        from area of effect and damage over time   abilities and
                        attacks (except for Super Minions),{" "}
                        <span className="textColorStylingPurple">
                          bonus movement speed
                        </span>{" "}
                        equal to{" "}
                        <span className="textColorStylingPurple">
                          90% averaged movement speed
                        </span>{" "}
                        of all nearby champions, capped at{" "}
                        <span className="textColorStylingPurple">500</span>.{" "}
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
          </Grid>
        </Grid>
        {/* ABILITIES */}
        <Grid>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* ABILITES HEADER */}
            <Typography className="infoHeaderText">Abilites</Typography>
            <Typography
              className="effectsDescription"
              style={{ marginLeft: 25 }}
            ></Typography>
          </div>
          {/* ABILITIES INFO */}
          <Grid>
            <Typography>
              Basic Attacks Baron will attack the unit closest to him
            </Typography>
          </Grid>
          <Grid
            container
            spacing={1}
            style={{ display: "flex", flexDirection: "column" }}
            className="bottomBorder"
          >
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="unknown.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="abilitiesSubHeaderStyle">
                    Melee Attack
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        If the target is in front of
                        <span className="textColorStylingPurple">
                          {" "}
                          Baron Nashor{" "}
                        </span>
                        within about melee range, he occasionally uses a Melee
                        attack instead of a Ranged attack, dealing{" "}
                        <span className="textColorStylingOrange">
                          100% AD physical damage
                        </span>{" "}
                        to the target and{" "}
                        <span className="textColorStylingOrange">
                          50% AD physical damage
                        </span>{" "}
                        to nearby units.
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="unknown.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="abilitiesSubHeaderStyle">
                    Ranged Attack
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        If the target is in front of
                        <span className="textColorStylingPurple">
                          {" "}
                          Baron Nashor{" "}
                        </span>
                        , he deals{" "}
                        <span className="textColorStylingOrange">
                          100% AD physical damage
                        </span>{" "}
                        to the target and applies two stack of Voracious
                        Corrosion{" "}
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="unknown.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="abilitiesSubHeaderStyle">
                    Single-target Rear Attack
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        If the target is behind
                        <span className="textColorStylingPurple">
                          {" "}
                          Baron Nashor{" "}
                        </span>
                        , he erects a spike that deals{" "}
                        <span className="textColorStylingOrange">
                          100% AD physical damage
                        </span>{" "}
                        to the target.{" "}
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MonsterWrapper>
  );
};
