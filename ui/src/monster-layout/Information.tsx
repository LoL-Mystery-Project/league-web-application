import { Grid, Typography } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";
import { ImageAsset } from "../components/ImageAsset";
import { InfoHeader } from "./InfoHeader";
import { ColouredList } from "./ColouredList";
import { MonsterCategory } from "./MonsterTypes";
import { mainColour } from "../styles/palette";

interface InformationProps {
  subcategories: Array<MonsterCategory>;
}

const InformationStyles = styled.div`
  .abilitiesSubHeaderStyle {
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    display: flex;
    align-items: center;
    color: ${mainColour.white};
  }

  .effectsStyles {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 5px;
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

export const Information: FC<InformationProps> = ({ subcategories }) => {
  return (
    <InformationStyles>
      <Grid
        container
        spacing={1}
        style={{ display: "flex", flexDirection: "column" }}
      >
        {subcategories.map((subcategory) => {
          return (
            <Grid item>
              {subcategory.title !== "noSubcategory" && (
                <InfoHeader isSubheader={true} title={subcategory.title} />
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
                          ability.icon ? "spanWithIcon" : "spanWithoutIcon"
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
                        {/* <ul> tag that will colourize text */}
                        <ColouredList listItems={ability.effects} />
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
    </InformationStyles>
  );
};
