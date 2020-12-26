import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";
import { ImageAsset } from "../components/ImageAsset";
import { mainColour } from "../styles/palette";
import { ColouredList } from "./ColouredList";
import { InfoSectionItem } from "./layoutTypes";

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

export const InfoSection: FC<InfoSectionProps> = ({ item }) => {
  return (
    <InfoSectionStyles>
      <div className={`effectsStyles ${item.icon && "divWithIcon"}`}>
        {item.icon && (
          <ImageAsset alt={item.icon} height={ICON_SIZE} width={ICON_SIZE} />
        )}
        <span className={item.icon ? "spanWithIcon" : "spanWithoutIcon"}>
          <Typography
            className="abilitiesSubHeaderStyle"
            style={{ color: item.titleColour }}
          >
            {item.title}
          </Typography>
          {/* <ul> tag with colourize text */}
          <ColouredList listItems={item.effects} />
        </span>
      </div>
    </InfoSectionStyles>
  );
};
