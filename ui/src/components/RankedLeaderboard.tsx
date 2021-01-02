import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import {
  createStyles,
  makeStyles,
  Theme,
  withStyles,
} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Typography from "@material-ui/core/Typography";
import { mainColour } from "../styles/palette";
import { ImageAsset } from "./ImageAsset";
import { infoCardTabsConstants } from "../styles/dimension";
import { useWindowDimensions } from "./hooks/useWindowDimensions";
import { RootState } from "../redux/ReduxTypes";
import { useSelector } from "react-redux";
import { RegionSelector } from "./RegionSelector";
import { Grid, Paper } from "@material-ui/core";
import { RankSelector } from "./RankSelector";

const Wrapper = styled.div`
  .soulIconHover:hover {
    color: ${mainColour.white};
    background-color: rgba(255, 255, 255, 0.1);
  }
  .searchContainer {
    background-color: "transparent";
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      width: "100%",
      overflowY: "hidden",
      overflowX: "hidden",
    },
  })
);

export const RankedLeaderboard: FC = () => {
  const classes = useStyles();
  return (
    <Wrapper>
      <Grid container direction="column">
        <Grid>
          {/* Two selectors and arrow with show graph */}
          <Grid container direction="row" className="searchContainer">
            <Grid item xs={2}>
              <RegionSelector />
            </Grid>
            <Grid item xs={8}>
              <RankSelector />
            </Grid>
            <Grid xs={2} item }>
              <ImageAsset alt="showGraphIcon.svg" />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          {/* 1165 x 150 */}
          <Paper
            style={{
              background: "green",
              height: "150px",
              width: "100%",
            }}
          ></Paper>
        </Grid>
        <Grid item>
          {/* Leaderboard rank table */}
          <Paper
            style={{
              background: "brown",
              height: "400px",
              width: "100%",
            }}
          ></Paper>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
