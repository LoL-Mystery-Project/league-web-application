import React, { FC, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Card } from "@material-ui/core";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../redux/types";
import { ImageAsset } from "./ImageAsset";

import { mainColour, subColour } from "../styles/palette";

const Wrapper = styled.div`
  .containerDonateImage {
    position: relative;
    text-align: center;
  }

  .bottomLeft {
    position: absolute;
    bottom: 8px;
    left: 16px;
  }

  .donateText {
    position: absolute;
    top: 30px;
    left: 36px;
    font-family: Courier Prime;
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 34px;
    display: flex;
    text-align: left;
    color: ${mainColour.white};
  }

  .linkTextStyles {
    font-family: Roboto;
    font-style: normal;
    font-size: 16px;
    font-weight: normal;

    /* grey/sub */
    color: #5b5b5b;
  }

  .linkHeaderTextStyles {
    font-family: Roboto;
    font-style: normal;
    font-size: 20px;
    font-weight: bold;

    /* grey/sub */
    color: #5b5b5b;
  }
`;

const useStyles = makeStyles({
  root: {
    minWidth: 400,
    minHeight: 800,
    maxWidth: 400,
    maxHeight: 800,
    backgroundColor: "#041722",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function DonateInfoBox() {
  const classes = useStyles();

  return (
    <Wrapper>
      <Card
        className={classes.root}
        style={{ display: "flex", flexDirection: "column", margin: 5 }}
      >
        <div className="containerDonateImage">
          <Typography className="donateText">
            plz <br />
            donate
          </Typography>
          <ImageAsset alt="cat.svg" />
          <a href="/">
            <ImageAsset alt="donate.svg" className="bottomLeft" />
          </a>
        </div>

        <Grid
          container
          style={{ display: "flex", flexDirection: "row", margin: 5 }}
        >
          {/* COLUMN 1 */}
          <Grid item xs={6}>
            <Typography className="linkHeaderTextStyles">One HP</Typography>
            <Typography className="linkTextStyles">About Us</Typography>
            <Typography className="linkTextStyles">
              Advertise with Us
            </Typography>
            <Typography className="linkTextStyles">Terms of Service</Typography>
            <Typography className="linkTextStyles">Privacy Policy</Typography>
            <Typography className="linkTextStyles">FAQ</Typography>
          </Grid>
          {/* COLUMN 2 */}
          <Grid item xs={6}>
            <Typography className="linkHeaderTextStyles">Social</Typography>
            <Typography className="linkTextStyles">Instagram</Typography>
            <Typography className="linkTextStyles">Facebook</Typography>
            <Typography className="linkTextStyles">Discord</Typography>
            <Typography className="linkTextStyles">Twitter</Typography>
          </Grid>
        </Grid>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: 10,
          }}
        >
          <ImageAsset alt="compliance.svg" />
          <Typography className="linkTextStyles">
            Riot Games Compliant
          </Typography>
        </div>
      </Card>
    </Wrapper>
  );
}
