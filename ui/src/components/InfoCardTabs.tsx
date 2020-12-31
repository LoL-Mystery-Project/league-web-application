import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { InfoCardPanel } from "./InfoCardPanel";
import { PatchNoteCardPanel } from "./PatchNoteCardPanel";
import { SplashArtCardPanel } from "./SplashArtCardPanel";

import Typography from "@material-ui/core/Typography";
import { mainColour } from "../styles/palette";
import { ImageAsset } from "./ImageAsset";
import { infoCardTabsConstants } from "../styles/dimension";
import { useWindowDimensions } from "./hooks/useWindowDimensions";
import { RootState } from "../redux/ReduxTypes";
import { useSelector } from "react-redux";

const StyledTabs = withStyles({
  root: {
    color: mainColour.white,
    marginTop: infoCardTabsConstants.marginTop, // TODO: confirm that this is correct
    marginLeft: infoCardTabsConstants.marginLeft, // added this so that information tabs align vertically with monster icon
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
// mini nav / tab thing

// interface InfoCardTabsDetails {
//   helloObject: string;
// }

export const InfoCardTabs: FC = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const { height } = useWindowDimensions();
  const { selectedMonster } = useSelector((state: RootState) => state.monsters);

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
      {selectedMonster && (
        <>
          <div className="infoCardTabLine">
            <ImageAsset alt="line.svg" />
          </div>
          <div
            style={{
              overflowY: "scroll",
              overflowX: "hidden",
              height: windowHeight,
            }}
          >
            {value === 0 && (
              <div>
                <InfoCardPanel />
              </div>
            )}
            {value === 1 && (
              <div>
                <PatchNoteCardPanel patchNotes={selectedMonster.patchNotes} />
              </div>
            )}
            {value === 2 && (
              <div className="splashArt">
                <SplashArtCardPanel />
              </div>
            )}
          </div>
        </>
      )}
    </Wrapper>
  );
};
