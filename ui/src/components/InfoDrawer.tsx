import React, { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { mainColour } from "../styles/palette";

import Fade from "@material-ui/core/Fade";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/ReduxTypes";
import { InfoCardTabs } from "./InfoCardTabs";
import { ImageAsset } from "./ImageAsset";
import { clearSelectedMonster } from "../redux/actions/monsterActions";
import { MonsterType } from "../monster-layout/MonsterTypes";
import { infoDrawerConstants } from "../styles/dimension";

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

  .InfoDrawerStyle {
    max-width: 100rem;
    box-shadow: $shadow-8dp;
    border: 0;
    height: 100%;
    z-index: 9990;
  }

  .monsterTitle {
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 28px;
    display: flex;
    align-items: center;
    margin-bottom: ${infoDrawerConstants.monsterTitleMarginBottom}px;
  }

  .monsterSubtitle {
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
    display: flex;
    align-items: center;
    color: ${mainColour.grey};
  }

  .monsterIcon {
    background-color: transparent;
    margin-right: ${infoDrawerConstants.monsterIconMarginRight}px;
  }
`;

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    // width: "auto",
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
  closeButton: {
    display: "flex",
    justifyContent: "flex-end",
    // right: infoDrawerConstants.closeButtonMarginRight, // Figma says 20. Decreased to 15 to align with close arrows
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
  const { selectedMonster } = useSelector((state: RootState) => state.monsters);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleCloseInfoDrawer = () => {
    handleClose(asset);
  };

  return (
    // <Drawer anchor="right" open={showInfoDrawer} onClose={() => handleClose(false)}>
    //   Hello
    // </Drawer>

    <Fade in={showInfoDrawer}>
      <Wrapper>
        <div style={{ marginLeft: infoDrawerConstants.marginLeft }}>
          <Grid container style={{ display: "flex", flexDirection: "column" }}>
            {/* ICON, MONSTER TITLE, MONSTER SUBTITLE, EXIT BUTTON */}
            {/* https://css-tricks.com/snippets/css/a-guide-to-flexbox/  flex-direction: column*/}
            <Grid item style={{ backgroundColor: "transparent" }}>
              <Grid
                container
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingLeft: infoDrawerConstants.marginLeft,
                  paddingRight: "20px",
                }}
              >
                {/* ICON */}
                <Grid className="monsterIcon">
                  <ImageAsset
                    height={60}
                    width={60}
                    alt={selectedMonster?.icon ?? ""}
                  />{" "}
                </Grid>
                {/* MONSTER TITLE AND SUBTITLE */}
                <Grid style={{ backgroundColor: "transparent" }}>
                  <Typography className="monsterTitle">
                    {selectedMonster?.name}
                  </Typography>
                  <Typography className="monsterSubtitle">
                    Epic Monster
                  </Typography>
                </Grid>
                {/* CLOSE BUTTON */}
                <div
                  className={classes.closeButton}
                  style={{ backgroundColor: "transparent", flexGrow: 1 }}
                >
                  <ImageAsset
                    height={30}
                    width={30}
                    alt="close.svg"
                    onClick={() => {
                      handleCloseInfoDrawer();
                      dispatch(clearSelectedMonster());
                    }}
                  />{" "}
                </div>
              </Grid>
            </Grid>
            {/* EVERYTHING ELSE */}
            <Grid
              item
              xs={12}
              style={{
                backgroundColor: "transparent",
              }}
            >
              <InfoCardTabs />
            </Grid>
          </Grid>
        </div>
      </Wrapper>
    </Fade>
  );
};
