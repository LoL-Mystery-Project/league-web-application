import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { InfoCardPanel } from "./InfoCardPanel";
import { PatchNoteCardPanel } from "./PatchNoteCardPanel";
import { SplashArtCardPanel } from "./SplashArtCardPanel";

import Typography from "@material-ui/core/Typography";
import { mainColour } from "../styles/palette";
import { MonsterObject } from "../pages/SummonersRift";
import { ImageAsset } from "./ImageAsset";

const StyledTabs = withStyles({
  root: {
    color: mainColour.white,
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

// interface InfoCardTabsDetails {
//   helloObject: string;
// }

export const InfoCardTabs: FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Wrapper>
      <StyledTabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary" // underline
        // className="bottomBorder"
        // textColor="secondary" // this changes the selected text colour
        // variant="fullWidth"
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
      <div style={{ marginTop: -12 }}>
        <ImageAsset alt="line.svg" />
      </div>
      {value === 0 && (
        <div>
          <InfoCardPanel />
        </div>
      )}
      {value === 1 && (
        <div>
          <PatchNoteCardPanel />
        </div>
      )}
      {value === 2 && (
        <div style={{ paddingTop: 20 }}>
          <SplashArtCardPanel />
        </div>
      )}
    </Wrapper>
  );
};
