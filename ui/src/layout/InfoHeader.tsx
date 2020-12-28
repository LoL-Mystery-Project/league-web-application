import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";
import { ImageAsset } from "../components/ImageAsset";
import { infoSectionConstants } from "../styles/dimension";
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

  .effectsDescription {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    padding-top: 10px;
    padding-left: 10px;
    color: #808080;
  }

  .titleStyle {
    font-family: Friz Quadrata;
    padding-top: 20px;
    padding-bottom: 10px;
    font-size: 30px;
    color: ${mainColour.yellow};
  }

  .subheaderStyle {
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    padding-bottom: ${infoSectionConstants.paddingLeft}px;
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
        <Typography className={isSubheader ? "subheaderStyle" : "titleStyle"}>
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
