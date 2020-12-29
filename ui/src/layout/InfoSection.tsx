import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";
import { ImageAsset } from "../components/ImageAsset";
import { mainColour } from "../styles/palette";
import { ColouredList } from "./ColouredList";
import { InfoSectionItem } from "./layoutTypes";
import { Grid } from "@material-ui/core";
import { infoSectionConstants } from "../styles/dimension";

interface InfoSectionProps {
  item: InfoSectionItem;
}

const InfoSectionStyles = styled.div`
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
  }

  .spanWithIcon {
    margin-top: 20px;
  }

  .spanWithoutIcon {
    margin-top: -5px;
  }

  .divWithIcon {
  }
`;

const ICON_SIZE = 30;

export const InfoSection: FC<InfoSectionProps> = ({ item }) => {
  return (
    <InfoSectionStyles>
      <div className={`effectsStyles ${item.icon && "divWithIcon"}`}>
        <span className={item.icon ? "spanWithIcon" : "spanWithoutIcon"}>
          <Grid
            container
            style={{
              display: "flex",
              flexDirection: "row",
              paddingLeft: infoSectionConstants.paddingLeft,
              alignItems: "center",
            }}
          >
            {item.icon && (
              <Grid>
                {item.icon && (
                  <ImageAsset
                    alt={item.icon}
                    width={ICON_SIZE}
                    height={ICON_SIZE}
                  />
                )}
              </Grid>
            )}

            <Grid item>
              <Typography
                className="abilitiesSubHeaderStyle"
                style={{
                  color: item.titleColour,
                  marginLeft: 20,
                }}
              >
                {item.title}
              </Typography>
            </Grid>
          </Grid>
        </span>
      </div>

      <div style={{ marginLeft: item.icon ? 90 : 34}}>
        {/* <ul> tag with colourize text */}
        <ColouredList listItems={item.effects} />
      </div>
    </InfoSectionStyles>
  );
};
