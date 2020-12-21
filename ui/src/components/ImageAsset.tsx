import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/types";

interface ExtendedImageProps extends React.ComponentProps<"img"> {
  alt: string;
}

export type ImageAssetProps = Omit<ExtendedImageProps, "src">;

export const ImageAsset: FC<ImageAssetProps> = (props) => {
  const { imageMap } = useSelector((state: RootState) => state.images);
  const { alt } = props;
  return (
    <>{imageMap && alt && <img src={imageMap[alt]} {...props} alt={alt} />}</>
  );
};
