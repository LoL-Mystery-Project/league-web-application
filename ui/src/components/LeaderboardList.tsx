import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Card, Paper } from "@material-ui/core";
import styled from "styled-components";
import { ImageAsset } from "./ImageAsset";

import { mainColour } from "../styles/palette";
import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/ReduxTypes";
import { LeaderboardTabs } from "./LeaderboardTabs";
import { RegionRankSelector } from "./RegionRankSelector";

const Wrapper = styled.div``;

const useStyles = makeStyles({});

export interface LeaderboardListComponentProps {}
export const LeaderboardListComponent: FC<LeaderboardListComponentProps> = ({}) => {
  const classes = useStyles();

  return (
    <Wrapper>
      <div style={{ position: "relative" }}>
        <Grid container style={{ display: "flex", flexDirection: "column" }}>
          <Grid
            item
            xs={12}
            style={{
              backgroundColor: "transparent",
            }}
          >
            <LeaderboardTabs />
          </Grid>
          <Grid item>
            <RegionRankSelector />
            <Paper style={{ background: "blue", height: "60px" }}>
              All Regions All Ranks
            </Paper>
          </Grid>
          <Grid item>
            <Paper style={{ background: "green", height: "2000px" }}>
              Leaderboard List
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Wrapper>
  );
};
