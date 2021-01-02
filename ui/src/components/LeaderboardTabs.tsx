import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Typography from "@material-ui/core/Typography";
import { mainColour } from "../styles/palette";
import { ImageAsset } from "./ImageAsset";
import { infoCardTabsConstants } from "../styles/dimension";
import { useWindowDimensions } from "./hooks/useWindowDimensions";
import { RootState } from "../redux/ReduxTypes";
import { useSelector } from "react-redux";
import { RankedLeaderboard } from "./RankedLeaderboard";

const StyledTabs = withStyles({
  root: {
    color: mainColour.white,
    marginTop: infoCardTabsConstants.marginTop,
    marginLeft: infoCardTabsConstants.marginLeft,
  },
  indicator: {
    height: 3,
    background: `radial-gradient(
      circle at bottom,
      white -50%,
      transparent 85%
    );`,
  },
})(Tabs);

const Wrapper = styled.div`
  .soulIconHover:hover {
    color: ${mainColour.white};
    background-color: rgba(255, 255, 255, 0.1);
  }

  .toggleButtonStyles {
    color: ${mainColour.yellow};
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
    display: flex;
    align-items: center;
  }

  .check-rotate {
    transform: rotate(45deg);
  }

  // added marginLeft so that line aligns with information tabs
  .infoCardTabLine {
    margin-top: ${infoCardTabsConstants.infoCardTabLineMarginTop}px;
    margin-left: ${infoCardTabsConstants.infoCardTabLineMarginLeft}px;
  }

  .splashArt {
    margin-top: ${infoCardTabsConstants.splashArtMarginTop}px;
    margin-left: ${infoCardTabsConstants.splashArtMarginLeft}px;
  }
`;

const useStyles = makeStyles({
  indicator: {
    color: mainColour.blue,
  },
  root: {
    color: mainColour.white,
    fontFamily: "Friz Quadrata",
  },
  tabText: {
    fontFamily: "Friz Quadrata",
    fontSize: 20,
    textTransform: "none",
  },
});

export const LeaderboardTabs: FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const { height } = useWindowDimensions();
  // const { selectedMonster } = useSelector((state: RootState) => state.monsters);

  useEffect(() => {
    setWindowHeight(height - 255);
  }, [height]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <StyledTabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary" // underline
      >
        <Tab
          disableRipple
          label={<Typography className={classes.tabText}>Ranked</Typography>}
          disabled={false}
        />
        <Tab
          disableRipple
          label={<Typography className={classes.tabText}>Mastery</Typography>}
          disabled={false}
        />
        <Tab
          disableRipple
          label={<Typography className={classes.tabText}>Level</Typography>}
          disabled={false}
        />
      </StyledTabs>
      <div className="infoCardTabLine">
        <ImageAsset alt="line.svg" />
      </div>

      {value === 0 && (
        <div>
          <RankedLeaderboard />
        </div>
      )}
      {value === 1 && <div>Mastery Leaderboard</div>}
      {value === 2 && <div>Level Leaderboard</div>}
    </Wrapper>
  );
};
