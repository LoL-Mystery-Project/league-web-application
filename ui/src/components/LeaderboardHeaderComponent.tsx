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
    //width: auto;
    height: "100%";
  }

  .headerStyle {
    position: absolute;
    top: 30%;
    left: 38%;
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 60px;
    line-height: 55px;

    color: ${mainColour.white};
  }

  .parentContainer {
    position: relative;
    text-align: center;
  }

  .searchBarPos {
    position: absolute;
    top: 40%;
    left: 28%;
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function LeaderboardHeaderComponent() {
  const classes = useStyles();

  return (
    <Wrapper>
      <div className="parentContainer">
        <Container fixed>
          <Typography className="headerStyle">LEADERBOARDS</Typography>
          <div className="searchBarPos">
            <LeaderboardSearchBar />
          </div>
        </Container>
        <div className="imageBanner">
          <ImageAsset
            alt="leaderboardsBG.svg"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </Wrapper>
  );
}
