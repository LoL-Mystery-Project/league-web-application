import { Grid, Typography } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";
import mountainDrake from "../assets/infoCardData/mountainDrake.json";
import { ImageAsset } from "../components/ImageAsset";
import { mainColour } from "../styles/palette";
import { TextColourizer } from "../utils/TextColourizer";
import { InfoHeader } from "./InfoHeader";
import { MonsterType } from "./MonsterTypes";

const MonsterCardStyles = styled.div`
  .effectsStyles {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 15px;
    margin-right: 15px;
  }

  .abilitiesSubHeaderStyle {
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    display: flex;
    align-items: center;

    /* purple/main */
    color: ${mainColour.white};
  }

  .listStyles {
    margin-left: -20px;
  }
`;

export const MonsterCard: FC = () => {
  const selectedMonster: MonsterType = mountainDrake;

  return (
    <MonsterCardStyles>
      <Grid container style={{ display: "flex", flexDirection: "column" }}>
        {selectedMonster.informationText!.map((section) => {
          return (
            <>
              <Grid item>
                <InfoHeader title={section.title} subtitle={section.subtitle} />
              </Grid>
              <Grid
                container
                spacing={1}
                style={{ display: "flex", flexDirection: "column" }}
              >
                {section.subcategories.map((subcategory) => {
                  return (
                    <Grid item>
                      {subcategory.title !== "noSubcategory" && (
                        <InfoHeader
                          isSubheader={true}
                          title={subcategory.title}
                        />
                      )}
                      {subcategory.data.map((ability) => {
                        return (
                          <Grid item>
                            <div className="effectsStyles">
                              {ability.icon && (
                                <ImageAsset alt={ability.icon} />
                              )}
                              <span
                                style={{
                                  paddingLeft: 20,
                                  paddingTop: ability.icon && 20,
                                }}
                              >
                                <Typography
                                  className="abilitiesSubHeaderStyle"
                                  style={
                                    ability.titleColour
                                      ? {
                                          color: ability.titleColour,
                                        }
                                      : {}
                                  }
                                >
                                  {ability.title}
                                </Typography>
                                <ul style={{ marginTop: 5 }}>
                                  {ability.effects.map((effect) => {
                                    return (
                                      <li className="listStyles">
                                        <TextColourizer
                                          text={effect.text}
                                          colourMap={effect.colourMap}
                                        />
                                      </li>
                                    );
                                  })}
                                </ul>
                              </span>
                            </div>
                          </Grid>
                        );
                      })}
                    </Grid>
                  );
                })}
              </Grid>
            </>
          );
        })}
      </Grid>
    </MonsterCardStyles>
  );
};
