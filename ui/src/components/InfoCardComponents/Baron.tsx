import React, { FC, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { mainColour } from "../../styles/palette";
import styled from "styled-components";
import images from "../../assets/images.json";
import expIcon from '../../assets/assetPanel/icons/exp.svg';
import goldIcon from '../../assets/assetPanel/icons/gold.svg';

const Wrapper = styled.div`
  .patchNotePanel {
    color: ${mainColour.white};
  }

  .infoHeaderText {
    font-family: Fritz Quadrata;
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
            Baron Nashor is the most powerful neutral monster on Summoner Rift.
            Grants living teammates Hand of Baron,   Empowered Recall and Aura
            when killed.
          </Typography>
          <Grid
            container
            spacing={1}
            style={{ display: "flex", flexDirection: "row" }}
          >
              {/* BOUNTY */}
            <Grid
              item
              xs={3}
              style={{ backgroundColor: mainColour.testBigContainer }}
            >
              <Typography className="overViewSubTextStyling">Bounty</Typography>
              <Grid
                container
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Grid item>
                <Grid
                    container
                    style={{ display: "flex", flexDirection: "column" }}
                  ></Grid>
                  {/* Gold 1 */}
                  <Typography className="greyText">
                    Gold{" "}
                    <img
                      src={goldIcon}
                      alt="gold"
                      width={200 * 0.1}
                      height={154 * 0.1}
                    />{" "}
                    {(baronData?.bounty?.gold)}
                  </Typography>
                </Grid>
                <Grid item>
                  {/* EXP 1 */}
                  <Typography className="greyText">
                    {" "}
                    EXP <img src={expIcon} alt="xp" />{" "}
                    {(baronData?.bounty?.exp)}
                  </Typography>
                </Grid>
                <Grid item>
                  {/* CS */}
                  <Typography className="greyText">
                    {" "}
                    CS {(baronData?.bounty?.cs)}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            {/* STATISTICS */}
            <Grid item xs={6} style={{ backgroundColor: "blue" }}>
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
                    <Grid item xs={3}>
                      {/* HP */}
                      <Typography>
                        {" "}
                        {(baronData?.stats?.health)}{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      {/* ATK */}
                      <Typography>
                        {" "}
                        {(baronData?.stats?.attackDamage)}{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      {/* DEF */}
                      <Typography>
                        {" "}
                        {(baronData?.stats?.armor)}{" "}
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
                    <Grid item xs={3}>
                      {/* REGEN */}
                      <Typography>
                        {" "}
                        {(baronData?.stats?.healthRegen)}{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      {/* ATK.SPD */}
                      <Typography>
                        {" "}
                        {(baronData?.stats?.attackSpeed)}{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      {/* MR */}
                      <Typography>
                        {" "}
                        {(baronData?.stats?.magicResist)}{" "}
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
                    <Grid item xs={3}>
                      {/* SPEED */}
                      <Typography>
                        {" "}
                        {(baronData?.stats?.movSpeed)}{" "}
                      </Typography>{" "}
                    </Grid>
                    <Grid item xs={3}>
                      {/* RANGE */}
                      <Typography>
                        {" "}
                        {JSON.stringify(baronData?.stats?.range)}{" "}
                      </Typography>{" "}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            {/* SPAWN */}
            <Grid
              item
              xs={3}
              style={{ backgroundColor: mainColour.testBigContainer }}
            >
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
        <Grid>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Typography className="infoHeaderText">Effects</Typography>
            <Typography className="effectsDescription">
              When killed, grants slayer and their living teammates:
            </Typography>
          </div>
          <Grid
            container
            spacing={1}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Grid
              item
              style={{
                backgroundColor: mainColour.testMediumContainer,
              }}
            >
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
