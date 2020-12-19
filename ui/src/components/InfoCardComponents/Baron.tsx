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

  .versionNumber {
    color: ${mainColour.yellow};
    font-family: Roboto;
    font-size: 24px;
    font-weight: bold;
  }

  .infoHeaderText {
    font-family: Fritz Quadrata;
    font-size: 30px;
  }

  .patchInfoText {
    font-family: Roboto;
    font-size: 16px;
    color: ${mainColour.yellow};
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
        <Grid>
          <Typography className="patchInfoText">Overview</Typography>
          <Typography>
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
              xs={4}
              style={{ backgroundColor: mainColour.testBigContainer }}
            >
              <Typography className="overViewSubTextStyling">Bounty</Typography>

              <Typography>{JSON.stringify(baronData?.bounty)}</Typography>
            </Grid>
            <Grid item xs={4} style={{ backgroundColor: "blue" }}>
              <Typography className="overViewSubTextStyling">
                Statistics
              </Typography>
              <Typography>{JSON.stringify(baronData?.stats)}</Typography>
            </Grid>
            <Grid item xs={4} style={{ backgroundColor: "red" }}>
              <Typography className="overViewSubTextStyling">Spawn</Typography>
              <Typography>{JSON.stringify(baronData?.location)}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid>
          <Typography>Effects</Typography>
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
              <Typography>Hand of Baron</Typography>
              <Typography>
                Gives 12 - 48 (based on minutes) attack damage and 20 - 80
                (based on minutes) ability power determined   by the time the
                Baron is slain.
              </Typography>
            </Grid>
            <Grid item>
              <Typography>Empowered Recall</Typography>
              <Typography>
                After 0.5s cast time, channel for 4s to blink to their team’s
                fountain if not interrupted.
              </Typography>
            </Grid>
            <Grid item>
              <Typography>Aura - Empowered Minions</Typography>
              <Typography>
                Nearby allied minions gain: Slow Resist, 75% damage reduction
                from area of effect and damage over time   abilities and attacks
                (except for Super Minions), bonus movement speed equal to 90%
                averaged movement speed of all nearby champions, capped at 500.{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
