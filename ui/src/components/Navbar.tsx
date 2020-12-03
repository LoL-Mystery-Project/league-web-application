import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { isEmpty } from "lodash";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import background from "../assets/navbar/background.svg";

import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { PageState, RootState } from "../redux/types";
import { setCurrentPage } from "../redux/actions/pageActions";

// https://css-tricks.com/snippets/css/a-guide-to-flexbox/
const Wrapper = styled.div`
  .navBarButton {
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 34px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #808080;
    padding: 15px 15px;
  }

  .navBarButton:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .selectedPage {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .parentNavBarContainer {
    display: inline-flex;
    flex-direction: row;
    justify-content: space-evenly;
    flex-shrink: 3;
  }
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const pages = [
  ["/explore", "Explore"],
  ["/watchlive", "Watch Live"],
  ["/tierlist", "Tier List"],
  ["/summonersrift", "Summoner's Rift"],
  ["/champions", "Champions"],
  ["/items", "Items"],
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
        <AppBar
          position="static"
          style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
          }}
          color="transparent"
        >
          <Toolbar>
            {/* TODO: make this the LoL icon */}
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <div className="parentNavBarContainer">
              {pages.map((page, index) => {
                return (
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
                );
              })}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    </Wrapper>
  );
}
