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
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .infoHeaderText {
    font-family: Friz Quadrata;
    font-size: 30px;
    color: ${mainColour.yellow};
  }

  .effectsDescription {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;
    color: #808080;
  }

  .abilitiesTitleStyle {
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    display: flex;
    align-items: center;

    /* yellow/main */
    color: ${mainColour.yellow};
  }

  .closeArrow {
    position: absolute;
    right: 20px;
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
        <Typography className="effectsDescription" style={{ marginLeft: 25 }}>
          {subtitle}
        </Typography>
        {!isSubheader && <ImageAsset className="closeArrow" alt="arrow.svg" />}
      </div>
    </HeaderStyles>
  );
};
