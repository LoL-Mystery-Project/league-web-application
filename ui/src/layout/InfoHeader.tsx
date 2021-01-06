import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import { useState } from "react";
import styled from "styled-components";
import { ImageAsset } from "../components/ImageAsset";
import { infoHeaderConstants, closeArrowConstants } from "../styles/dimension";
import { mainColour } from "../styles/palette";

interface InfoHeaderProps extends React.ComponentProps<"div"> {
  title: string;
  subtitle?: string;
  isSubheader?: boolean;
  handleArrowClick?: (title?: string) => void;
}

const HeaderStyles = styled.div`
  p {
    line-height: 28px;
  }
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
    margin-top: ${infoHeaderConstants.effectsDescriptionMarginTop}px;
    margin-left: ${infoHeaderConstants.effectsDescriptionMarginLeft}px;
    color: ${mainColour.grey};
  }

  .titleStyle {
    font-family: Friz Quadrata;
    margin-top: ${infoHeaderConstants.titleStyleMarginTop}px;
    margin-left: ${infoHeaderConstants.titleStyleMarginLeft}px;
    font-size: 30px;
    color: ${mainColour.yellow};
  }

  .subheaderStyle {
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    margin-left: ${infoHeaderConstants.subheaderStyleMarginLeft}px;
    margin-top: ${infoHeaderConstants.subheaderStyleMarginTop}px;
    color: ${mainColour.yellow};
  }

  .closeArrow {
    z-index: 10000;
    display: flex;
    margin-top: ${closeArrowConstants.marginTop}px;
    margin-right: ${closeArrowConstants.marginRight}px;
    float: right;
  }

  .arrow-up {
    transform: rotate(0deg);
    transition: transform 0.2s ease-in-out;
  }

  .arrow-down {
    transform: rotate(180deg);
    transition: transform 0.2s ease-in-out;
  }

  .closeArrow:hover {
    cursor: pointer;
  }
`;

export const InfoHeader: FC<InfoHeaderProps> = (props) => {
  const { title, subtitle, isSubheader, handleArrowClick, ...divProps } = props;
  const [isArrowOpen, setIsArrowOpen] = useState(false);

  return (
    <HeaderStyles>
      <div {...divProps}>
        <Typography className={isSubheader ? "subheaderStyle" : "titleStyle"}>
          {title}
        </Typography>
        <Typography className="effectsDescription">{subtitle}</Typography>
      </div>
      {!isSubheader && (
        <div
          className="closeArrow"
          onClick={() => setIsArrowOpen(!isArrowOpen)}
        >
          <ImageAsset
            alt="arrow.svg"
            className={isArrowOpen ? "arrow-down" : "arrow-up"}
            onClick={() => handleArrowClick && handleArrowClick(title)}
          />
        </div>
      )}
    </HeaderStyles>
  );
};
