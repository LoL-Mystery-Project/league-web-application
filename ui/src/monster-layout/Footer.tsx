import { Grid, Tab, Tabs, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { ImageAsset } from "../components/ImageAsset";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { mainColour } from "../styles/palette";

const StyledTabs = withStyles({
  root: {
    color: mainColour.white,
  },
})(Tabs);

const useStyles = makeStyles({
  indicator: {
    color: mainColour.blue,
  },
  root: {
    color: mainColour.white,
    fontFamily: "Friz Quadrata",
  },
  footerText: {
    fontFamily: "Friz Quadrata",
    fontSize: 20,
    textTransform: "none",
  },
});

export const Footer: FC = () => {
  const classes = useStyles();

  return (
    <Grid>
      <Grid>
        <StyledTabs
          // value={value}
          // onChange={handleChange}
          indicatorColor="primary"
          centered
        >
          <Tab
            disableRipple
            label={
              <Typography className={classes.footerText}>Overview</Typography>
            }
          />
          <Tab
            disableRipple
            label={
              <Typography className={classes.footerText}>Effects</Typography>
            }
          />
          <Tab
            disableRipple
            label={
              <Typography className={classes.footerText}>Abilities</Typography>
            }
          />
          <Tab
            disableRipple
            label={
              <Typography className={classes.footerText}>Strategy</Typography>
            }
          />
          <Tab
            disableRipple
            label={
              <Typography className={classes.footerText}>Trivia</Typography>
            }
          />
        </StyledTabs>

        <Grid style={{ paddingTop: 30, textAlign: "center" }}>
          <ImageAsset alt="ender.svg" />
        </Grid>
      </Grid>
    </Grid>
  );
};
