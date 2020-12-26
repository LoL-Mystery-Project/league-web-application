import { Grid, Typography } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";
import { ImageAsset } from "../components/ImageAsset";
import { MonsterDetails } from "./MonsterDetails";
import { mainColour } from "../styles/palette";
import { TextColourizer } from "../utils/TextColourizer";
import { Footer } from "./Footer";
import { InfoHeader } from "./InfoHeader";
import { useSelector } from "react-redux";
import { RootState } from "../redux/ReduxTypes";

const MonsterCardStyles = styled.div`
  li {
    margin-right: 160px;
  }

  ul {
    margin-top: 5px;
    width: 100%;
  }

  .effectsStyles {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 5px;
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

  .spanWithIcon {
    margin-top: 20px;
    margin-left: 20px;
  }

  .spanWithoutIcon {
    padding-left: 20px;
    margin-top: -5px;
  }

  .divWithIcon {
    margin-left: 30px;
  }
`;

const ICON_SIZE = 35;

export const MonsterCard: FC = () => {
  const { selectedMonster } = useSelector((state: RootState) => state.monsters);

  return (
    <MonsterCardStyles>
      <MonsterDetails />
      <ImageAsset alt="line.svg" />
      <Grid container style={{ display: "flex", flexDirection: "column" }}>
        {selectedMonster?.informationText?.map((section) => {
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
                            <div
                              className={`effectsStyles ${
                                ability.icon && "divWithIcon"
                              }`}
                            >
                              {ability.icon && (
                                <ImageAsset
                                  alt={ability.icon}
                                  height={ICON_SIZE}
                                  width={ICON_SIZE}
                                />
                              )}
                              <span
                                className={
                                  ability.icon
                                    ? "spanWithIcon"
                                    : "spanWithoutIcon"
                                }
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
                                <ul>
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
                <Grid item>
                  <ImageAsset alt="line.svg" />
                </Grid>
              </Grid>
            </>
          );
        })}
      </Grid>
      <Footer />
    </MonsterCardStyles>
  );
};
