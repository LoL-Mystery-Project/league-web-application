import React, { FC, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { mainColour } from "../../styles/palette";
import styled from "styled-components";
import images from "../../assets/images.json";

import expIcon from "../../assets/assetPanel/icons/exp.svg";
import goldIcon from "../../assets/assetPanel/icons/gold.svg";
import csIcon from "../../assets/assetPanel/icons/cs.svg";

import heartIcon from "../../assets/assetPanel/icons/heart.svg";
import hpRegenIcon from "../../assets/assetPanel/icons/hpregeneration.svg";
import movementIcon from "../../assets/assetPanel/icons/movement.svg";

import physicalDmgIcon from "../../assets/assetPanel/icons/physicaldamage.svg";
import atkspdIcon from "../../assets/assetPanel/icons/attackspd.svg";
import rangeIcon from "../../assets/assetPanel/icons/range.svg";

import shieldOrangeIcon from "../../assets/assetPanel/icons/shield_orange.svg";
import shieldBlueIcon from "../../assets/assetPanel/icons/shield_blue.svg";

import handOfBaronIcon from "../../assets/assetPanel/icons/handofbaron.svg";
import empoweredRecallIcon from "../../assets/assetPanel/icons/empoweredrecall.svg";
import unknownIcon from "../../assets/assetPanel/icons/unknown.svg";

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
          <Typography className="infoHeaderText">Overview</Typography>
          <Typography className="infoText">
            <span className = 'textColorStylingPurple'>Baron Nashor</span> is the most powerful neutral monster on Summoner Rift.
            Grants living teammates <span className = 'textColorStylingPurple'>Hand of Baron</span>, <span className = 'textColorStylingPurple'>Empowered Recall</span>, and <span className = 'textColorStylingPurple'>Aura </span>
             when killed.
          </Typography>
          <Grid
            container
            spacing={1}
            style={{ display: "flex", flexDirection: "row" }}
          >
            {/* BOUNTY */}
            <Grid item xs={3}>
              <Typography className="overViewSubTextStyling">Bounty</Typography>
              <Grid
                container
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Grid item>
                  {/* Gold */}
                  <Grid
                    container
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <Grid item xs={3}>
                      {/* Gold word */}
                      <Typography className="greyText"> Gold </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      {/* Gold icon */}
                      <img src={goldIcon} alt="gold" />
                    </Grid>
                    <Grid item xs={6}>
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
                  <Grid
                    container
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <Grid item xs={3}>
                      {/* EXP word */}
                      <Typography className="greyText"> EXP </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      {/* EXP icon */}
                      <img src={expIcon} alt="xp" />
                    </Grid>
                    <Grid item xs={6}>
                      {/* EXP value */}
                      <Typography>
                        {" "}
                        {baronData?.bounty?.exp}{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  {/* CS */}
                  <Grid
                    container
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <Grid item xs={3}>
                      {/* CS word */}
                      <Typography className="greyText"> CS </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      {/* CS icon */}
                      <img src={csIcon} alt="cs" />
                    </Grid>
                    <Grid item xs={6}>
                      {/* CS value */}
                      <Typography>
                        {" "}
                        {baronData?.bounty?.cs}{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* STATISTICS */}
            <Grid item xs={6}>
              <Typography className="overViewSubTextStyling">
                Statistics
              </Typography>
              <Grid
                container
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Grid item>
                  {/* STAT COL 1 */}
                  <Grid
                    container
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <Grid item xs={4}>
                      {/* HP */}
                      <img src={heartIcon} alt="hp" />
                      <Typography> <span className = 'textColorStylingGreen'>{baronData?.stats?.health}</span> </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      {/* ATK */}
                      <img src={physicalDmgIcon} alt="atk" />
                      <Typography>
                        {" "}
                        <span className = 'textColorStylingOrange'> {baronData?.stats?.attackDamage}</span>{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      {/* DEF */}
                      <img src={shieldOrangeIcon} alt="def" />
                      <Typography><span className = 'textColorStylingOrange'> {baronData?.stats?.armor} </span></Typography>
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
                      <img src={hpRegenIcon} alt="regen" />
                      <Typography> <span className = 'textColorStylingGreen'>{baronData?.stats?.healthRegen}</span> </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      {/* ATK.SPD */}
                      <img src={atkspdIcon} alt="atkspd" />
                      <Typography> <span className = 'textColorStylingOrange'>{baronData?.stats?.attackSpeed} </span> </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      {/* MR */}
                      <img src={shieldBlueIcon} alt="mr" />
                      <Typography> <span className = 'textColorStylingBlue'>{baronData?.stats?.magicResist}</span> </Typography>
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
                      <img src={movementIcon} alt="movement" />
                      <Typography>
                        {" "}
                        <span className = 'textColorStylingPurple'>{baronData?.stats?.movSpeed}</span>{" "}
                      </Typography>{" "}
                    </Grid>
                    <Grid item xs={4}>
                      {/* RANGE */}
                      <img src={rangeIcon} alt="range" />
                      <Typography>
                        {" "}
                        <span className = 'textColorStylingWhite'>{(baronData?.stats?.range)}</span>{" "}
                      </Typography>{" "}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* SPAWN */}
            <Grid item xs={3}>
              <Typography className="overViewSubTextStyling">Spawn</Typography>
              <Grid
                container
                spacing={3}
                style={{ display: "flex", flexDirection: "row" }}
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
          >
            <Grid item>
                {/* <Grid container style={{ display: "flex", flexDirection: "column" }}>
                  <Grid item xs={1}>
                  <img src={handOfBaronIcon} alt="handofbaron" />
                  </Grid>
                    <Grid item xs={11}><Typography className="effectsSubHeaderStyle">
                Hand of Baron
              </Typography>
              <Typography>
                Gives
                <span className="textColorStyling">
                  {" "}
                  12 - 48 (based on minutes) attack damage{" "}
                </span>
                and{" "}
                <span className="textColorStylingBlue">
                  20 - 80 (based on minutes) ability power
                </span>{" "}
                determined   by the time the{" "}
                <span className="textColorStylingYellow">Baron</span> is slain.
              </Typography></Grid>
                </Grid> */}
              <img src={handOfBaronIcon} alt="handofbaron" />
              <Typography className="effectsSubHeaderStyle">
                Hand of Baron
              </Typography>
              <Typography>
                Gives
                <span className="textColorStyling">
                  {" "}
                  12 - 48 (based on minutes) attack damage{" "}
                </span>
                and{" "}
                <span className="textColorStylingBlue">
                  20 - 80 (based on minutes) ability power
                </span>{" "}
                determined   by the time the{" "}
                <span className="textColorStylingYellow">Baron</span> is slain.
              </Typography>
            </Grid>
            <Grid item>
              <img src={empoweredRecallIcon} alt="empoweredrecall" />
              <Typography className="effectsSubHeaderStyle">
                Empowered Recall
              </Typography>
              <Typography>
                After{" "}
                <span className="textColorStylingBlue">0.5s cast time</span>,
                channel for <span className="textColorStylingBlue">4s</span> to
                blink to their team’s fountain if not interrupted.
              </Typography>
            </Grid>
            <Grid item>
              <img src={unknownIcon} alt="unknown" />
              <Typography className="effectsSubHeaderStyle">
                Aura - Empowered Minions
              </Typography>
              <Typography>
                Nearby allied minions gain: Slow Resist,{" "}
                <span className="textColorStylingBlue">
                  75% damage reduction
                </span>
                from area of effect and damage over time   abilities and attacks
                (except for Super Minions),{" "}
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
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
