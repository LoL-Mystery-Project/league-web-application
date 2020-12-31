import React, { FC } from "react";
import { MonsterType } from "../../monster-layout/MonsterTypes";
import { ImageAsset } from "../../utils/ImageAsset";

interface SplashArtCardPanelProps {
  selectedMonster: MonsterType;
}

export const SplashArtCardPanel: FC<SplashArtCardPanelProps> = ({
  selectedMonster,
}) => {
  return (
    <div>
      {selectedMonster.splashArt.map((image) => (
        <ImageAsset alt={image} style={{ margin: 10 }} />
      ))}
    </div>
  );
};
