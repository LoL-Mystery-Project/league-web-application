import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import {InfoCardPanel} from './InfoCardPanel';
import {PatchNoteCardPanel} from './PatchNoteCardPanel';
import {SplashArtCardPanel} from './SplashArtCardPanel';

import Typography from '@material-ui/core/Typography';
import { mainColour, glowColour } from "../styles/palette";

const StyledTabs = withStyles({
  root: {
    color: mainColour.white,
  },
  indicator: {
    height: 2,
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

  .textSelected: {
    color: ${mainColour.red};
  }

  .textUnselected: {
    color: ${mainColour.grey};
  }
`;

const useStyles = makeStyles({
  indicator: {
    color: mainColour.blue
  },
  root: {
    color: mainColour.white,
    fontFamily: "Friz Quadrata",
  },
  tabText: {
    fontFamily: "Friz Quadrata",
    fontSize: 20,
    textTransform: "none",
  }
});
// mini nav / tab thing

// interface InfoCardTabsDetails {
//   helloObject: string;
// }

// interface InfoCardTabsProps {
//     infoCardTabsProps: Array<InfoCardTabsProps>;
// }

// const styles = (theme: any) => ({
//   indicator: {
//     backgroundColor: 'cornflowerBlue',
//   },
// })
    
export default function InfoCardTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };



  return (
    <Wrapper>
    <Paper style={{ backgroundColor: mainColour.bgBlack }}>
      <StyledTabs

        value={value}
        onChange={handleChange}
        indicatorColor="primary" // underline
        // textColor="secondary" // this changes the selected text colour
        // variant="fullWidth"
      >
        {/* https://material-ui.com/api/tabs/ */}
      
        <Tab disableRipple label={<Typography className={classes.tabText}>Information</Typography>} disabled={false}/>
        <Tab disableRipple label={<Typography className={classes.tabText}>Patch Notes</Typography>} disabled={false}/>
        <Tab disableRipple label={<Typography className={classes.tabText}>Splash Art</Typography>} disabled={false}/>
       
      </StyledTabs>
      {(value === 0) && <div>Show info <InfoCardPanel  InfoPanelProps={[{helloObject: 'hey there'}]}/></div>}
        {(value === 1) && <div>Show patch notes <PatchNoteCardPanel  PatchNoteCardPanelProps={[{helloObject: 'hey there'}]}/></div>}
        {(value === 2) && <div>Show splash art  <SplashArtCardPanel  SplashArtCardPanelProps={[{helloObject: 'hey there'}]}/></div>}
    </Paper>
    </Wrapper>
  );
}
