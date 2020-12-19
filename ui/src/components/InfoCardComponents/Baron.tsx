import React, { FC, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { mainColour } from "../../styles/palette";
import styled from "styled-components";
import images from "../../assets/images.json";

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

  .customStylingHandOfBaron {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: ${mainColour.orange};
  }
  .customStylingHandOfBaron2 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: ${mainColour.blue};
  }
  .customStylingHandOfBaron3 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: ${mainColour.yellow};
  }
  .customStylingHandOfBaron4 {
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
                  {" "}
                  <Typography className="greyText"> Gold </Typography>
                </Grid>
                <Grid item>
                  {" "}
                  <Typography className="greyText"> EXP </Typography>
                </Grid>
                <Grid item>
                  {" "}
                  <Typography className="greyText"> CS </Typography>
                </Grid>
              </Grid>
              <Typography>{JSON.stringify(baronData?.bounty)}</Typography>
            </Grid>
            <Grid item xs={6} style={{ backgroundColor: "blue" }}>
              <Typography className="overViewSubTextStyling">
                Statistics
              </Typography>
              <Grid
                container
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Grid item>
                  {" "}
                  <Grid
                    container
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <Grid item xs={3}>
                      {" "}
                      <Typography> HP </Typography>{" "}
                    </Grid>
                    <Grid item xs={3}>
                      {" "}
                      <Typography> ATK </Typography>{" "}
                    </Grid>
                    <Grid item xs={3}>
                      {" "}
                      <Typography> DEF </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  {" "}
                  <Typography> REGEN </Typography>
                </Grid>
                <Grid item>
                  {" "}
                  <Typography> MOVE </Typography>
                </Grid>
              </Grid>
              <Typography>{JSON.stringify(baronData?.stats)}</Typography>
            </Grid>
            <Grid
              item
              xs={3}
              style={{ backgroundColor: mainColour.testBigContainer }}
            >
              <Typography className="overViewSubTextStyling">Spawn</Typography>
              <Typography className="greyText">
                {JSON.stringify(baronData?.location)}
              </Typography>
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
                <span className="customStylingHandOfBaron">
                  {" "}
                  12 - 48 (based on minutes) attack damage{" "}
                </span>
                and{" "}
                <span className="customStylingHandOfBaron2">
                  20 - 80 (based on minutes) ability power
                </span>{" "}
                determined   by the time the{" "}
                <span className="customStylingHandOfBaron3">Baron</span> is
                slain.
              </Typography>
            </Grid>
            <Grid item>
              <Typography className="effectsSubHeaderStyle">
                Empowered Recall
              </Typography>
              <Typography>
                After{" "}
                <span className="customStylingHandOfBaron2">
                  0.5s cast time
                </span>
                , channel for{" "}
                <span className="customStylingHandOfBaron2">4s</span> to blink
                to their team’s fountain if not interrupted.
              </Typography>
            </Grid>
            <Grid item>
              <Typography className="effectsSubHeaderStyle">
                Aura - Empowered Minions
              </Typography>
              <Typography>
                Nearby allied minions gain: Slow Resist,{" "}
                <span className="customStylingHandOfBaron2">
                  75% damage reduction
                </span>
                from area of effect and damage over time   abilities and attacks
                (except for Super Minions),{" "}
                <span className="customStylingHandOfBaron4">
                  bonus movement speed
                </span>{" "}
                equal to{" "}
                <span className="customStylingHandOfBaron4">
                  90% averaged movement speed
                </span>{" "}
                of all nearby champions, capped at{" "}
                <span className="customStylingHandOfBaron4">500</span>.{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
