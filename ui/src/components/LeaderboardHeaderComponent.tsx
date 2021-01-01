import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import { ImageAsset } from "./ImageAsset";
import { Container } from "@material-ui/core";

import LeaderboardSearchBar from "../components/LeaderboardSearchBar";

import { mainColour } from "../styles/palette";
import React from "react";

const Wrapper = styled.div`
  .imageBanner {
    position: "absolute";
    height: "100%";
  }

  .headerStyle {
    position: relative;
    padding-top: 120px;
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 55px;

    color: ${mainColour.white};
  }

  .parentContainer {
    // position: relative;
    text-align: center;
  }

  .searchBarPos {
    position: absolute;
    // top: 40%;
    // left: 28%;
  }
`;

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    minHeight: 800,
    maxWidth: 400,
    maxHeight: 800,
    backgroundColor: "#041722",
  },
  pos: {
    marginBottom: 12,
  },
  alignItemsAndJustifyContent: {
    paddingTop: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
});

export default function LeaderboardHeaderComponent() {
  const classes = useStyles();

  return (
    <Wrapper>
      <div style={{ position: "relative", zIndex: 1 }}>
        <ImageAsset alt="leaderboardsBG.svg" style={{ position: "absolute" }} />
        <div className="parentContainer" style={{ zIndex: 3 }}>
          <Typography className="headerStyle">LEADERBOARDS</Typography>
          <div className={classes.alignItemsAndJustifyContent}>
            <LeaderboardSearchBar />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
