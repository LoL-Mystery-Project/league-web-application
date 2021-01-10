import React, { FC, useEffect, useState } from "react";
import { Theme, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu, { MenuProps } from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import { Grid, Typography } from "@material-ui/core";
import { ImageAsset } from "./ImageAsset";
import styled from "styled-components";
import { mainColour } from "../styles/palette";
import classes from "*.module.css";

const Wrapper = styled.div`
  .menuTextStyle {
    position: relative;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    text-transform: none;
    color: mainColour.yellow;
  }
`;

const StyledMenu = withStyles({
  paper: {
    background: "#010A13",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    // "&:focus": {
    //   backgroundColor: "blue",
    //   "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
    //     color: theme.palette.common.white,
    //   },
    position: "relative",
    color: mainColour.yellow,
    backgroundColor: "#010A13",
    "&:hover": {
      backgroundColor: "010A13",
    },
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "24px",
    lineHeight: "32px",
    textTransform: "none",
  },
}))(MenuItem);

const OutlineButton = withStyles((theme: Theme) => ({
  root: {
    color: mainColour.yellow,
    backgroundColor: "transparent",
    "&:hover": {
      backgroundColor: "",
    },
    border: "1px solid",
    paddingLeft: "20px",
    width: "200px",
  },
}))(Button);

export const RankSelector: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper>
      <Grid container style={{ display: "flex" }}>
        <Grid item style={{ paddingLeft: "20px" }}>
          <div>
            <OutlineButton
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="outlined"
              color="primary"
              onClick={handleClick}
            >
              <Typography className="menuTextStyle"> All Ranks </Typography>
              {/* placeholder until image is available */}
              <ImageAsset alt="arrow.svg" />
            </OutlineButton>
            <StyledMenu
              id="ranks"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem onClick={handleClose}>
                <ListItemIcon>
                  <DraftsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Challenger" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClose}>
                <ListItemIcon>
                  <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Master" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClose}>
                <ListItemIcon>
                  <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Diamond" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClose}>
                <ListItemIcon>
                  <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Platinum" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClose}>
                <ListItemIcon>
                  <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Gold" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClose}>
                <ListItemIcon>
                  <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Silver" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClose}>
                <ListItemIcon>
                  <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Bronze" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClose}>
                <ListItemIcon>
                  <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Iron" />
              </StyledMenuItem>
            </StyledMenu>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
