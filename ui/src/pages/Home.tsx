import React, { FC, useEffect, useState } from "react";
import { ComponentCatalogue } from "../utils/ComponentCatalogue";
import DonateInfoBox from "../components/DonateInfoBox";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/ButtonGroup";
import Paper from "@material-ui/core/Paper";
import { mainColour } from "../styles/palette";
import { useWindowDimensions } from "../components/hooks/useWindowDimensions";
import { ImageAsset } from "../components/ImageAsset";
import { HeaderComponent } from "../components/HeaderComponent";
import { Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: "100%",
      width: "100%",
      overflowY: "hidden",
      overflowX: "hidden",
    },
    paper: {
      background: "transparent", // TODO: change this later
    },
    paper2: {
      background: "transparent", // TODO: change this later
    },
    paper3: {
      background: "transparent", // TODO: change this later
    },
    paper4: {
      background: mainColour.blue, // TODO: change this later
    },
    headerText: {
      color: mainColour.yellow,
      fontFamily: "Friz Quadrata",
      fontSize: 20,
    },

    assetText: {
      color: mainColour.white,
      fontFamily: "Friz Quadrata",
      fontSize: 16,
    },

    drawerStyle: {
      color: mainColour.white,
    },

    listItem: {
      "&:hover": {
        cursor: "pointer",
      },
    },

    headerBackground: {
      background: `radial-gradient(
        44.47% 50% at 50% 50%,
        rgba(2, 13, 23, 0.25) 0%,
        #010a13 100%
      ),
      url("https://league-icons.s3-us-west-2.amazonaws.com/homeBG.png")`,
      backgroundSize: "100% 800px",
      backgroundRepeat: "no-repeat",
    },
  })
);

export const Home: FC = () => {
  const { height } = useWindowDimensions();

  return (
    <div style={{ overflowY: "scroll", overflowX: 'hidden', height: height - 60 }}>
      <h1>Home</h1>
      <ComponentCatalogue />
    </div>
  );
};
