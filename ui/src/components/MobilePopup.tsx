import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import styled from "styled-components";
import { ImageAsset } from "./ImageAsset";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import { mainColour, subColour } from "../styles/palette";
import { FC } from "react";

const Wrapper = styled.div`
  @media screen and (min-width: 1300px) {
    .mobileContents {
      visibility: hidden;
      display: none;
    }
  }
`;

const useStyles = makeStyles({
  root: {
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
  },
});

interface MobilePopUpProps {
  showMobileHandler: Function;
}

export const MobilePopup: FC<MobilePopUpProps> = ({ showMobileHandler }) => {
  const classes = useStyles();

  return (
    <Wrapper>
      <Card
        className="mobileContents"
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          left: "0",
          top: "45%",
          width: "100%",
          zIndex: 10000,
        }}
      >
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Mobile view currently not available
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              This screen is still currently in development. It is not
              recommended on screens of smaller resolutions. Please view on
              larger resolution for better experience.
            </Typography>
          </CardContent>
        </CardActionArea>
        <Button
          size="small"
          color="secondary"
          onClick={() => showMobileHandler()}
        >
          Okay
        </Button>
      </Card>
    </Wrapper>
  );
};
