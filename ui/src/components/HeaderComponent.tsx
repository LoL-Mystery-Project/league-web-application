import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import { ImageAsset } from "./ImageAsset";
import { Container } from "@material-ui/core";

import LeaderboardSearchBar from "./LeaderboardSearchBar";

import { mainColour } from "../styles/palette";
import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/ReduxTypes";

const Wrapper = styled.div`
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

export interface HeaderComponentProps {}
export const HeaderComponent: FC<HeaderComponentProps> = ({}) => {
  const classes = useStyles();
  const currentRoute = window.location.pathname;
  let page = "";
  const checkPage = () => {
    if (currentRoute == "/leaderboards") {
      page = "LEADERBOARDS";
    } else if (currentRoute == "/watchlive") {
      page = "WATCH LIVE";
    } else if (currentRoute == "/home") {
      page = "LIVE STATS, GUIDES, WIKI AND EVERYTHING";
    }
  };
  checkPage();
  return (
    <Wrapper>
      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="parentContainer" style={{ zIndex: 3 }}>
          <Typography className="headerStyle">{page}</Typography>
          <div className={classes.alignItemsAndJustifyContent}>
            {page == "LEADERBOARDS" ? (
              <LeaderboardSearchBar />
            ) : (
              <div>"Other Search Bar"</div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
