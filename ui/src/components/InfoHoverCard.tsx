/* eslint-disable no-fallthrough */
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { mainColour } from "../styles/palette";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { ImageAsset } from "./ImageAsset";
import { TextColourizer } from "../utils/TextColourizer";
import { RootState } from "../redux/ReduxTypes";
import { MonsterType } from "../monster-layout/MonsterTypes";
import { MapType } from "./SummonersRiftMap";

const Wrapper = styled.div`
  .text {
    background-color: transparent;
    color: ${mainColour.white};
  }
`;

const ICON_SIZE = 20;

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: mainColour.black,
  },
  media: {
    height: 140,
  },
});

interface InfoHoverCardProps {
  mapDatum: MapType;
}

export const InfoHoverCard: FC<InfoHoverCardProps> = ({ mapDatum }) => {
  const [monsterDetails, setMonsterDetails] = useState<any>({});
  const { allMonsters } = useSelector((state: RootState) => state.monsters);
  //https://stackoverflow.com/questions/32125708/how-can-i-access-a-hover-state-in-reactjs
  const classes = useStyles();

  useEffect(() => {
    setMonsterDetails(
      allMonsters?.find((monster) => monster.name === mapDatum.id) || {}
    );
  }, [mapDatum, allMonsters]);

  return (
    <Wrapper>
      <Card className={classes.root}>
        <CardActionArea>
          <ImageAsset alt="baronCard.svg" />
          <CardContent>
            <Grid container style={{ display: "flex", flexDirection: "row" }}>
              <Grid item>
                <Typography
                  variant="h5"
                  component="h2"
                  style={{
                    color: mainColour.white,
                    fontSize: 30,
                    fontFamily: "Friz Quadrata",
                  }}
                >
                  {mapDatum.id}
                </Typography>
              </Grid>
              <Grid item style={{ paddingLeft: 40 }}>
                <ImageAsset alt={mapDatum.alt} width={ICON_SIZE} height={ICON_SIZE}/>
              </Grid>
            </Grid>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              style={{
                color: mainColour.grey,
                fontFamily: "Friz Quadrata",
                fontSize: 16,
              }}
            >
              Epic Monster
            </Typography>
            <Typography style={{ color: mainColour.grey, fontSize: 16 }}>
              Baron Nashor is the most powerful neutral monster in Summoner’s
              Rift. Killing it grants living teammates Hand of Baron, Empowered
              Recall, and Aura - Empowered Allied Minions.
            </Typography>
            {/* <TextColourizer
              text={monsterDetails.overview && monsterDetails.overview[0].text}
              colourMap={
                monsterDetails.overview && monsterDetails.overview[0].colourMap
              }
            /> */}
            {/* Baron Nashor is the most powerful neutral monster in Summoner’s
              Rift. Killing it grants living teammates Hand of Baron, Empowered
              Recall, and Aura - Empowered Allied Minions. */}
          </CardContent>
        </CardActionArea>
      </Card>
    </Wrapper>
  );
};
