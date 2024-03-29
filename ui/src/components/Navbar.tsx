import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { isEmpty } from "lodash";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { PageState, RootState } from "../redux/ReduxTypes";
import { setCurrentPage } from "../redux/actions/pageActions";
import { mainColour } from "../styles/palette";
import { ImageAsset } from "./ImageAsset";
import { prodMode } from "../config/featureFlags";

// https://css-tricks.com/snippets/css/a-guide-to-flexbox/
const Wrapper = styled.div`
  .navBarButton {
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 34px;
    color: #808080;
    padding: 18px 15px;
  }

  .navBarButton:hover {
    color: #ffffff;
    background: radial-gradient(ellipse at bottom, white 10%, transparent 75%);
    background-position: center bottom;
    background-size: 75% 8%;
    background-repeat: no-repeat;
  }

  .siteName {
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    color: #b67f15;
    padding-left: 5px;
    padding-right: 10px;
  }

  .selectedPage {
    color: #ffffff;
    background: linear-gradient(
      rgba(255, 255, 255, 0.001),
      ${mainColour.white} 500%
    );
  }

  .selectedPage:hover {
    color: #ffffff;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.001),
        ${mainColour.white} 500%
      ),
      radial-gradient(ellipse at bottom, white 10%, transparent 75%) !important;
    background-position: center, center bottom;
    background-size: 100% 100%, 75% 8%;
    background-repeat: no-repeat, no-repeat;
  }

  .parentNavBarContainer {
    display: flex;
    flex-direction: row;
    text-align: center;
  }

  .appBarStyles {
    background-color: transparent;
    border-top: 2px solid ${mainColour.yellow};
    border-bottom: 1px solid ${mainColour.grey};
  }

  .arrowStyles {
    position: absolute;
    top: -1px;
    margin-left: -15px;
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      // marginRight: theme.spacing(2),
      marginLeft: 45,
    },
    title: {
      flexGrow: 1,
    },
  })
);

const pages = [
  // ["/home", "Home"],
  // ["/watchlive", "Watch Live"],
  // ["/leaderboards", "Leaderboards"],
  // ["/Stats", "Stats"],
  // ["/Guides", "Guides"],
  // ["/wiki", "Wiki"],
  ["/summonersrift", "Summoner's Rift"],
];

export default function MenuAppBar() {
  const dispatch = useDispatch();
  const pageState: PageState = useSelector((state: RootState) => state.page);
  const classes = useStyles();

  // set current page to "/" on initial page load
  useEffect(() => {
    if (isEmpty(pageState)) {
      dispatch(setCurrentPage(window.location.pathname));
    }
  }, [pageState, dispatch]);

  const handleClick = (page: Array<string>) => {
    dispatch(setCurrentPage(page[0]));
  };

  const isSelectedPage = (menuItem: string) =>
    pageState.currentPage === menuItem && "selectedPage";

  return (
    <Wrapper>
      <div className={classes.root}>
        <AppBar position="static" className="appBarStyles" color="transparent">
          <Toolbar>
            {/* TODO: make this the LoL icon */}
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <ImageAsset alt="websiteIcon.svg" style={{ height: 39 }} />
              <Typography className="siteName">OneHP</Typography>
            </IconButton>

            <div className="parentNavBarContainer">
              {pages.map((page, index) => {
                return (
                  <div>
                    {isSelectedPage(page[0]) && (
                      <ImageAsset
                        className="arrowStyles"
                        height={15}
                        alt="pointer.svg"
                      />
                    )}
                    <Link
                      to={page[0]}
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                      }}
                      key={index}
                      onClick={() => handleClick(page)}
                    >
                      <Typography
                        className={`navBarButton ${isSelectedPage(page[0])}`}
                      >
                        {page[1]}
                      </Typography>
                    </Link>
                  </div>
                );
              })}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </Wrapper>
  );
}
