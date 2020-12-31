import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/ReduxTypes";
import { ImageAsset } from "./ImageAsset";

// mini nav / tab thing

export const SplashArtCardPanel: FC = () => {
  const { selectedMonster } = useSelector((state: RootState) => state.monsters);

  return (
    <div>
      {selectedMonster?.splashArt.map((image) => (
        <ImageAsset alt={image} />
      ))}
    </div>
  );
};
