import React, { FC, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { mainColour } from "../../styles/palette";
import styled from "styled-components";
import { ImageAsset } from "../ImageAsset";

const Wrapper = styled.div`
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

  .abilitiesTitleStyle {
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    display: flex;
    align-items: center;

    /* purple/main */
    color: ${mainColour.yellow};
  }

  .SubAbilitiesStyle {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
    white-space: nowrap;
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
    <Wrapper>
      <Grid container style={{ display: "flex", flexDirection: "column" }}>
        {/* OVERVIEW: BOUNTY, STATISTICS, SPAWN */}
        <Grid item>
          <div>
            <Typography className="infoHeaderText">Overview</Typography>
            <Typography className="infoText">
              <ul style={{ margin: 0 }}>
                <li>
                  <span className="textColorStylingPurple">Baron Nashor</span>{" "}
                  is the most powerful neutral monster on Summoner Rift. Grants
                  living teammates{" "}
                  <span className="textColorStylingPurple">Hand of Baron</span>,{" "}
                  <span className="textColorStylingPurple">
                    Empowered Recall
                  </span>
                  , and <span className="textColorStylingPurple">Aura </span>
                  when killed.
                </li>
              </ul>
            </Typography>
          </div>
          <Grid
            container
            spacing={1}
            style={{
              display: "flex",
              flexDirection: "row",
              paddingTop: 30,
              paddingBottom: 20,
            }}
            className="bottomBorder"
          >
            {/* BOUNTY */}
            <Grid item xs={3}>
              <Typography
                className="overViewSubTextStyling"
                style={{ paddingBottom: 10 }}
              >
                Bounty
              </Typography>
              <ImageAsset alt="line2.svg" className="leftBorder" />
              <Grid
                container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: 15,
                }}
              >
                <Grid item>
                  {/* Gold */}
                  <Grid container className="bountyStyles">
                    <Grid item xs={2}>
                      {/* Gold word */}
                      <Typography className="greyText"> Gold </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "center" }}>
                      {/* Gold icon */}
                      <ImageAsset alt="gold.svg" />
                    </Grid>
                    <Grid item xs={4}>
                      {/* Gold value */}
                      <Typography className="textColorStylingYellow">
                        {" "}
                        {baronData?.bounty?.gold}{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  {/* EXP 1 */}
                  <Grid container className="bountyStyles">
                    <Grid item xs={2}>
                      {/* EXP word */}
                      <Typography className="greyText"> EXP </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "center" }}>
                      {/* EXP icon */}
                      <ImageAsset alt="exp.svg" />
                    </Grid>
                    <Grid item xs={4}>
                      {/* EXP value */}
                      <Typography> {baronData?.bounty?.exp} </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  {/* CS */}
                  <Grid container className="bountyStyles">
                    <Grid item xs={2}>
                      {/* CS word */}
                      <Typography className="greyText"> CS </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "center" }}>
                      {/* CS icon */}
                      <ImageAsset alt="cs.svg" />
                    </Grid>
                    <Grid item xs={4}>
                      {/* CS value */}
                      <Typography> {baronData?.bounty?.cs} </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* STATISTICS */}
            <Grid item xs={6}>
              <Typography
                className="overViewSubTextStyling"
                style={{ paddingBottom: 10 }}
              >
                Statistics
              </Typography>
              <ImageAsset alt="line2.svg" className="leftBorder" />
              <Grid
                container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  paddingLeft: 15,
                }}
              >
                <Grid item>
                  {/* STAT COL 1 */}
                  <Grid
                    container
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <Grid item xs={4}>
                      {/* HP */}

                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {" "}
                        <ImageAsset alt="heart.svg" />
                        <span
                          className="textColorStylingGreen"
                          style={{ paddingLeft: 10 }}
                        >
                          {baronData?.stats?.health}
                        </span>{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      {/* ATK */}

                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <ImageAsset alt="physicaldamage.svg" />{" "}
                        <span
                          className="textColorStylingOrange"
                          style={{ paddingLeft: 10 }}
                        >
                          {" "}
                          {baronData?.stats?.attackDamage}
                        </span>{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      {/* DEF */}

                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <ImageAsset alt="shield_orange.svg" />
                        <span
                          className="textColorStylingOrange"
                          style={{ paddingLeft: 10 }}
                        >
                          {" "}
                          {baronData?.stats?.armor}{" "}
                        </span>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  {/* STAT COL 2 */}
                  <Grid
                    container
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <Grid item xs={4}>
                      {/* REGEN */}

                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <ImageAsset alt="hpregeneration.svg" />{" "}
                        <span
                          className="textColorStylingGreen"
                          style={{ paddingLeft: 10 }}
                        >
                          {baronData?.stats?.healthRegen}
                        </span>{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      {/* ATK.SPD */}

                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <ImageAsset alt="attackspd.svg" />{" "}
                        <span
                          className="textColorStylingOrange"
                          style={{ paddingLeft: 10 }}
                        >
                          {baronData?.stats?.attackSpeed}{" "}
                        </span>{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      {/* MR */}
                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <ImageAsset alt="shield_blue.svg" />{" "}
                        <span
                          className="textColorStylingBlue"
                          style={{ paddingLeft: 10 }}
                        >
                          {baronData?.stats?.magicResist}
                        </span>{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  {/* STAT COL 3 */}
                  <Grid
                    container
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <Grid item xs={4}>
                      {/* SPEED */}
                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <ImageAsset alt="movement.svg" />{" "}
                        <span
                          className="textColorStylingPurple"
                          style={{ paddingLeft: 10 }}
                        >
                          {baronData?.stats?.movSpeed}
                        </span>{" "}
                      </Typography>{" "}
                    </Grid>
                    <Grid item xs={4}>
                      {/* RANGE */}
                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <ImageAsset alt="range.svg" />{" "}
                        <span
                          className="textColorStylingWhite"
                          style={{ paddingLeft: 10 }}
                        >
                          {baronData?.stats?.range}
                        </span>{" "}
                      </Typography>{" "}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* SPAWN */}
            <Grid item xs={3}>
              <Typography
                className="overViewSubTextStyling"
                style={{ paddingBottom: 10 }}
              >
                Spawn
              </Typography>
              <ImageAsset alt="line2.svg" className="leftBorder" />
              <Grid
                container
                spacing={3}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingLeft: 15,
                }}
              >
                <Grid item>
                  {/* Spawn Header Text */}
                  <Grid
                    container
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <Grid item>
                      <Typography className="greyText">Initial</Typography>
                    </Grid>
                    <Grid item>
                      <Typography className="greyText">Respawn</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  {/* Spawn Info */}
                  <Grid
                    container
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    <Grid item>
                      <Typography>{baronData?.location?.initial}</Typography>
                    </Grid>
                    <Grid item>
                      <Typography>{baronData?.location?.respawn}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
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
          {/* ABILITES HEADER */}
          <Typography className="infoHeaderText">Abilites</Typography>
          {/* ABILITIES INFO - BASIC ATTACKS*/}
          <Grid>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
              }}
            >
              <Typography className="abilitiesTitleStyle">
                Basic Attacks
              </Typography>
              <Typography
                className="effectsDescription"
                style={{ marginLeft: 25 }}
              >
                Baron will attack the unit closest to him
              </Typography>
            </div>
          </Grid>
          <Grid
            container
            spacing={1}
            style={{ display: "flex", flexDirection: "column" }}
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

          {/* ABILITIES INFO - PASSIVES*/}
          <Grid>
            <div
              style={{
                marginTop: 15,
              }}
            >
              <Typography className="abilitiesTitleStyle">Passives</Typography>
            </div>
          </Grid>
          <Grid
            container
            spacing={1}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="unknown.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="abilitiesSubHeaderStyle">
                    Presence of the Baron
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        While Baron Nashor is alive, all obstructing Champion,
                        Pets and Wards that are on top of him are pushed to a
                        location in front of him. Baron Nashor is immune to
                        Ghost effects (ghosted units cannot pass through him).
                      </Typography>
                    </li>
                    <li className="listStyles">
                      <Typography>
                        Upon spawning, Baron Nashor knocks back all units that
                        are within his collision radius
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
                    Debuff Immunity
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        Immune to all forms of crowd control except stasis.
                        Additionally, Baron Nashor's stats cannot be reduced by
                        any means.
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
                    Baron's Gaze
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        Baron Nashor has 50% damage reduction from the unit that
                        it has most recently basic attacked for 8s, reduced to
                        4.5s after Baron Nashor is slain.
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
                    Voracious Corrosion
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        Reduces the target's armor and magic resistence by 0.5,
                        stacking up to 100 times for a total of 50 maximum
                        resistences reduction. Lasts for 8s, reduced to 4.5s
                        after Baron Nashor is slain.
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
                    Void Corruption
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        Basic attacks cause another burst of 60 (+ 20% AD) bonus
                        magic damage that can occur every 0.75s. This attack
                        targets the nearest champion with the lowest number of
                        Voracious Corrosion stacks, applying another stack.
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
