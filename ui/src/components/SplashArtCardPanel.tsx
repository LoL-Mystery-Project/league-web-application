import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { MonsterObject } from "../pages/SummonersRift";
import { RootState } from "../redux/ReduxTypes";
import { mainColour, subColour } from "../styles/palette";
import { ImageAsset } from "./ImageAsset";

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

export const SplashArtCardPanel: FC = () => {
  const { selectedMonster } = useSelector((state: RootState) => state.monsters);

  return (
    <div>
      {selectedMonster?.splashArt.map((image) => (
        <ImageAsset alt={image} style={{ margin: 10 }} />
      ))}
    </div>
  );
};
