import React, {FC, useEffect} from 'react';
import clsx from 'clsx';

import {InfoCard} from './InfoCard';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import styled from "styled-components";
import { mainColour, subColour } from "../styles/palette";
import Paper from '@material-ui/core/Paper';
import Fade from '@material-ui/core/Fade';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { MonsterObject } from '../pages/SummonersRift';


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

  .InfoDrawerStyle {
	max-width: 30rem;
	box-shadow: $shadow-8dp;
	border: 0;
    height: 100%;
    z-index: 9990;
}
`;

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawerStyle: {
    zIndex: 9999,
    color: mainColour.white,
  },
  infoCard: {
    width: 500,
    height: 500,
    background: mainColour.black,
    color: mainColour.white,
  },
  monsterTitle: {
    color: mainColour.purple,
    fontFamily: "Friz Quadrata",
    fontSize: 30,
  },
  monsterSubtitle: {
    color: mainColour.grey,
    fontFamily: "Friz Quadrata",
    fontSize: 16,
  },
});

export interface InfoDrawerProps {
  handleClose: Function;
  showInfoDrawer: boolean;
  asset: MonsterObject;
}
  

export const InfoDrawer: FC<InfoDrawerProps> = ({handleClose, showInfoDrawer, asset}) => {
  const { name, hp, imageIcon } = asset;

  const classes = useStyles();

  const handleCloseInfoDrawer = () => {
    console.log("inside infodrawer");
    handleClose();
  }

  return (
    // <Drawer anchor="right" open={showInfoDrawer} onClose={() => handleClose(false)}>
    //   Hello
    // </Drawer>
     <Fade in={showInfoDrawer}>
     <Paper elevation={4} className={classes.infoCard} >
     <Grid container style={{ display: "flex", flexDirection: "column"}}>
       {/* ICON, MONSTER TITLE, MONSTER SUBTITLE, EXIT BUTTON */}
       {/* https://css-tricks.com/snippets/css/a-guide-to-flexbox/  flex-direction: column*/}
     <Grid item xs={12} style={{ backgroundColor: "lavender" }}>
     <img className=""
                      src={imageIcon}
                     
                      height={50}
                      width={50}
                      style={{ paddingRight: 5 }}
                      alt="whyyyyy"
                    />{" "}
        <Typography  className={classes.monsterTitle}>{name}</Typography>
        <Typography className={classes.monsterTitle}>
              Neutral Monsters
        </Typography>
        <Typography className={classes.monsterSubtitle}>
              Epic Monster
        </Typography>
     
      </Grid>
      {/* EVERYTHING ELSE */}
       <Grid item xs={12} style={{ backgroundColor: "pink" }}>
       <InfoCard infoCardProps={[{helloObject: 'hey there'}]}/>
       </Grid>
      </Grid>
     </Paper>
   </Fade>
  );
}
