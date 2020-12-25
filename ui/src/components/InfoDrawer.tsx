import React, { FC, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { mainColour } from "../styles/palette";

import Paper from "@material-ui/core/Paper";
import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { MonsterObject } from "../pages/SummonersRift";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/ReduxTypes";
import { InfoCardTabs } from "./InfoCardTabs";
import { ImageAsset } from "./ImageAsset";
import { clearSelectedMonster } from "../redux/actions/monsterActions";
import { MonsterType } from "../monster-layout/MonsterTypes";

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
    max-width: 100rem;
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
    width: "auto",
  },
  drawerStyle: {
    zIndex: 9999,
    color: mainColour.white,
  },
  infoCard: {
    // width: 800,
    // height: 500,
    background: "transparent",
    color: mainColour.white,
  },
  monsterTitle: {
    color: mainColour.purple,
    fontFamily: "Friz Quadrata",
    fontSize: 30,
    marginTop: -10,
  },
  monsterSubtitle: {
    color: mainColour.grey,
    fontFamily: "Friz Quadrata",
    fontSize: 16,
  },
  closeButton: {
    position: "absolute",
    right: 20,
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export interface InfoDrawerProps {
  handleClose: Function;
  showInfoDrawer: boolean;
  asset: MonsterType | undefined;
}

export const InfoDrawer: FC<InfoDrawerProps> = ({
  handleClose,
  showInfoDrawer,
  asset,
}) => {
  const [windowHeight, setWindowHeight] = useState(0);
  const dispatch = useDispatch();
  const { selectedMonster } = useSelector((state: RootState) => state.monsters);
  const classes = useStyles();

  const handleCloseInfoDrawer = () => {
    handleClose(asset);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindowDimensions);
    updateWindowDimensions();
  }, []);

  const updateWindowDimensions = () => {
    setWindowHeight(window.innerHeight - 215);
  };

  return (
    // <Drawer anchor="right" open={showInfoDrawer} onClose={() => handleClose(false)}>
    //   Hello
    // </Drawer>

    <Fade in={showInfoDrawer}>
      <Grid container style={{ display: "flex", flexDirection: "column" }}>
        {/* ICON, MONSTER TITLE, MONSTER SUBTITLE, EXIT BUTTON */}
        {/* https://css-tricks.com/snippets/css/a-guide-to-flexbox/  flex-direction: column*/}
        {/* TODO: change marginLeft = 20 */}
        <Grid item style={{ backgroundColor: "transparent" }}>
          <Grid
            container
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 30,
              marginLeft: 10,
              marginBottom: -50,
            }}
          >
            {/* ICON */}
            <Grid style={{ backgroundColor: "transparent", marginRight: 5 }}>
              <ImageAsset
                height={60}
                width={60}
                style={{ paddingRight: 5 }}
                alt={selectedMonster?.icon ?? ""}
              />{" "}
            </Grid>
            {/* MONSTER TITLE AND SUBTITLE */}
            <Grid item xs={9} style={{ backgroundColor: "transparent" }}>
              <Typography className={classes.monsterTitle}>
                {selectedMonster?.name}
              </Typography>
              <Typography className={classes.monsterSubtitle}>
                Epic Monster
              </Typography>
            </Grid>
            {/* CLOSE BUTTON */}
            <Grid item style={{ backgroundColor: "transparent" }}>
              <ImageAsset
                className={classes.closeButton}
                height={30}
                width={30}
                alt="close.svg"
                onClick={() => {
                  handleCloseInfoDrawer();
                  dispatch(clearSelectedMonster());
                }}
              />{" "}
            </Grid>
          </Grid>
        </Grid>
        {/* EVERYTHING ELSE */}
        <div style={{ overflowY: "scroll", overflowX: 'hidden', height: windowHeight }}>
          <Grid item xs={12} style={{ backgroundColor: "transparent" }}>
            <InfoCardTabs />
          </Grid>
        </div>
      </Grid>
    </Fade>
  );
};
