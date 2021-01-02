import React, { FC, useEffect, useState } from "react";
import { withStyles } from "@material-ui/core/styles";
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
    font-size: 24px;
    line-height: 32px;
    text-transform: none;

    color: ${mainColour.yellow};
  }

  .buttonStyle {
    border: "2px solid ${mainColour.yellow}";
  }
`;

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
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

export const RegionRankSelector: FC = () => {
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
            <Button
              aria-controls="customized-menu"
              aria-haspopup="true"
              variant="contained"
              onClick={handleClick}
            >
              <Typography className="menuTextStyle"> All Regions </Typography>
              {/* placeholder until image is available */}
              <ImageAsset alt="arrow.svg" />
            </Button>
            <StyledMenu
              id="region"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <StyledMenuItem onClick={handleClose}>
                <ListItemIcon>
                  <SendIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="All Regions" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClose}>
                <ListItemIcon>
                  <DraftsIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="North America" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClose}>
                <ListItemIcon>
                  <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Europe" />
              </StyledMenuItem>
              <StyledMenuItem onClick={handleClose}>
                <ListItemIcon>
                  <InboxIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary="Korea" />
              </StyledMenuItem>
            </StyledMenu>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
