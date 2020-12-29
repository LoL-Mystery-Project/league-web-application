import { Grid, Tab, Tabs, Typography } from "@material-ui/core";
import React, { FC } from "react";
import { ImageAsset } from "../components/ImageAsset";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { mainColour } from "../styles/palette";

interface FooterProps extends React.ComponentProps<"div"> {}

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

export const Footer: FC<FooterProps> = ({ ...divProps }) => {
  const classes = useStyles();

  return (
    <div style={{ marginTop: 10 }} {...divProps}>
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

        {/* Figma shows that marginTop should be 55 from tab text */}
        <Grid style={{ marginTop: 30, textAlign: "center" }}>
          <ImageAsset alt="ender.svg" />
        </Grid>
      </Grid>
    </div>
  );
};
