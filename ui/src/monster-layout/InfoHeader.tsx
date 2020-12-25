import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";
import { ImageAsset } from "../components/ImageAsset";
import { mainColour } from "../styles/palette";

interface InfoHeaderProps extends React.ComponentProps<"div"> {
  title: string;
  subtitle?: string;
  isSubheader?: boolean;
}

const HeaderStyles = styled.div`
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .infoHeaderText {
    font-family: Friz Quadrata;
    padding-top: 20px;
    font-size: 30px;
    color: ${mainColour.yellow};
  }

  .effectsDescription {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #808080;
  }

  .abilitiesTitleStyle {
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    margin-left: 5px;
    padding-top: 10px;
    color: ${mainColour.yellow};
  }

  .closeArrow {
    z-index: 10000;
    display: flex;
    margin-top: -40px;
    padding-right: 20px;
    float: right;
  }

  .closeArrow:hover {
    cursor: pointer;
  }
`;

export const InfoHeader: FC<InfoHeaderProps> = (props) => {
  const { title, subtitle, isSubheader, ...divProps } = props;

  return (
    <HeaderStyles>
      <div {...divProps}>
        <Typography
          className={isSubheader ? "abilitiesTitleStyle" : "infoHeaderText"}
        >
          {title}
        </Typography>
        <Typography className="effectsDescription">{subtitle}</Typography>
      </div>
      {!isSubheader && (
        <div className="closeArrow">
          <ImageAsset alt="arrow.svg" />
        </div>
      )}
    </HeaderStyles>
  );
};
