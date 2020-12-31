import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { PatchNoteCardPanel } from "./PatchNoteCardPanel";

import Typography from "@material-ui/core/Typography";
import { mainColour } from "../../styles/palette";
import { ImageAsset } from "../../utils/ImageAsset";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/ReduxTypes";
import { ModularMonsterCard } from "../../monster-layout/ModularMonsterCard";
import { SplashArtCardPanel } from "./SplashArtCardPanel";
import { InfoCardPanel } from "./InfoCardPanel";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const StyledTabs = withStyles({
  root: {
    color: mainColour.white,
    marginTop: 8, // TODO: confirm that this is correct
    marginLeft: -5, // added this so that information tabs align vertically with monster icon
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
    color: #ffffff;
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

  .bottomBorder {
    border-bottom: 2px solid transparent;
    border-image-source: url("https://league-icons.s3-us-west-2.amazonaws.com/line.svg");
    border-image-repeat: initial;
    border-image-slice: 1;
    margin-bottom: 10px;
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
// mini nav / tab thing

export const InfoCardTabs: FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const { height } = useWindowDimensions();
  const { selectedMonster } = useSelector((state: RootState) => state.monsters);

  useEffect(() => {
    setWindowHeight(height - 230);
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
        {/* https://material-ui.com/api/tabs/ */}

        <Tab
          disableRipple
          label={
            <Typography className={classes.tabText}>Information</Typography>
          }
          disabled={false}
        />
        <Tab
          disableRipple
          label={
            <Typography className={classes.tabText}>Patch Notes</Typography>
          }
          disabled={false}
        />
        <Tab
          disableRipple
          label={
            <Typography className={classes.tabText}>Splash Art</Typography>
          }
          disabled={false}
        />
      </StyledTabs>
      {/* added marginLeft so that line aligns with information tabs */}
      {selectedMonster && (
        <div
          style={{
            overflowY: "scroll",
            overflowX: "hidden",
            height: windowHeight,
          }}
        >
          <div style={{ marginTop: -11, marginLeft: 18 }}>
            <ImageAsset alt="line.svg" />
          </div>
          {value === 0 && <InfoCardPanel selectedMonster={selectedMonster} />}
          {value === 1 && <PatchNoteCardPanel selectedMonster={selectedMonster} />}
          {value === 2 && <SplashArtCardPanel selectedMonster={selectedMonster} />}
        </div>
      )}
    </Wrapper>
  );
};
