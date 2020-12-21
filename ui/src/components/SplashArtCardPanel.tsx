import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { MonsterObject } from "../pages/SummonersRift";
import { mainColour, subColour } from "../styles/palette";

const Wrapper = styled.div`
  .soulIconHover:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .toggleButtonStyles {
    color: ${mainColour.yellow};
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
    display: flex;
    align-items: center;
  }

  .check-rotate {
    transform: rotate(45deg);
  }
`;

// mini nav / tab thing

interface SplashArtCardPanelProps {
  SplashArtCardPanelProps: MonsterObject;
}

export const SplashArtCardPanel: FC<SplashArtCardPanelProps> = ({
  SplashArtCardPanelProps,
}) => {
  //const classes = useStyles();
  const { name, hp, imageIcon } = SplashArtCardPanelProps;

  return (
    <div>
      <p>
        `This is SplashArt panel where we have a bunch of text $
        {SplashArtCardPanelProps.name}`{" "}
      </p>
    </div>
  );
};
