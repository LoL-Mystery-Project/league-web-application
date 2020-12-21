import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/types";

interface ImageAssetProps {
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  styles?: React.CSSProperties | undefined;
}

export const ImageAsset: FC<ImageAssetProps> = ({
  alt,
  width = undefined,
  height = undefined,
  styles = {},
  className = "",
}) => {
  const { imageMap } = useSelector((state: RootState) => state.images);
  return (
    <>
      {imageMap && alt && (
        <img
          src={imageMap[alt]}
          alt={alt}
          width={width}
          height={height}
          style={styles}
          className={className}
        />
      )}
    </>
  );
};
