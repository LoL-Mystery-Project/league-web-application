import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Card } from "@material-ui/core";
import styled from "styled-components";
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
    font-family: Courier Prime; // TODO: import Courier Prime font
    font-style: normal;
    font-weight: normal;
    font-size: 30px;
    line-height: 34px;
    display: flex;
    text-align: left;
    color: ${mainColour.white};
  }

  .linkContainer {
    display: flex;
    direction: row;
    justify-content: center;
    margin-top: 40px;
  }

  .linkTextStyles {
    font-style: normal;
    font-size: 16px;
    font-weight: normal;
    margin-top: 10px;
    color: ${subColour.grey};
  }

  .linkHeaderTextStyles {
    font-style: normal;
    font-size: 20px;
    font-weight: bold;
    color: ${subColour.grey};
  }

  .socialLinksContainer {
    margin-bottom: 34px;
    margin-left: 60px;
  }

  .compliantDiv {
    display: flex;
    direction: row;
    justify-content: center;
    margin-top: 50px;
  }

  .compliantText {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    margin-left: 10px;
    color: ${subColour.grey};
  }
`;

const useStyles = makeStyles({
  root: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
  },
});

export default function DonateInfoBox() {
  const classes = useStyles();

  return (
    <Wrapper>
      <Card
        className={classes.root}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <div>
          {/* <a href="/"> */}
            <ImageAsset alt="more_donation.svg" />
          {/* </a> */}
          {/* <Typography className="donateText">
            plz <br />
            donate
          </Typography>
          <ImageAsset alt="cat.svg" />
          <a href="/">
            <ImageAsset alt="donate.svg" className="bottomLeft" />
          </a> */}
        </div>

        <Grid container className="linkContainer">
          {/* COLUMN 1 */}
          <Grid>
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
          <Grid className="socialLinksContainer">
            <Typography className="linkHeaderTextStyles">Social</Typography>
            <Typography className="linkTextStyles">Instagram</Typography>
            <Typography className="linkTextStyles">Facebook</Typography>
            <Typography className="linkTextStyles">Discord</Typography>
            <Typography className="linkTextStyles">Twitter</Typography>
          </Grid>
        </Grid>
        {/* <div className="compliantDiv">
          <ImageAsset alt="compliance.svg" />
          <Typography className="compliantText">
            Riot Games Compliant
          </Typography>
        </div> */}
      </Card>
    </Wrapper>
  );
}
