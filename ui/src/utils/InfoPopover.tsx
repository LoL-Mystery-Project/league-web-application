import React, { FC, useState, useEffect } from "react";
import {
  Popover,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { ImageAsset } from "./ImageAsset";
import { LinkMapObject } from "./TextColourizer";
import { mainColour } from "../styles/palette";
import { MapType } from "../components/SummonersRiftMap";
import { Box } from "@material-ui/core";

interface BaseInfoPopoverProps {
  open: boolean;
  anchorEl: Element | ((element: Element) => Element) | null | undefined;
  handlePopoverClose:
    | ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
    | undefined;
}

interface PropsWithLinkMap extends BaseInfoPopoverProps {
  popoverObject: LinkMapObject;
  mapDatum?: never;
}

interface PropsWithMapDatum extends BaseInfoPopoverProps {
  popoverObject?: never;
  mapDatum: MapType;
}

interface InfoPopoverObject {
  name: string;
  description: string;
  subtitle: string;
  image: string;
  icon: string;
}

type InfoPopoverProps = PropsWithLinkMap | PropsWithMapDatum;

enum PopoverDimensions {
  bannerHeight = 200,
  bannerWidth = 398,
  marginTop = 20,
  bannerMarginLeft = 20,
  textMarginLeft = 40,
  marginRight = 20,
  iconMarginLeft = 375,
  iconSize = 20,
  headerFontSize = 30,
  subtitleFontSize = 16,
  descriptionFontSize = 16,
  headerHeight = 30,
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popover: {
      pointerEvents: "none",
    },
    paper: {
      padding: theme.spacing(1),
      background: "transparent",
      boxShadow: "unset",
    },
    titleText: {
      fontFamily: "Friz Quadrata",
      fontSize: 30,
      color: mainColour.white,
      position: "absolute",
      zIndex: 10,
      marginTop: PopoverDimensions.bannerHeight + 8,
      marginLeft: PopoverDimensions.textMarginLeft,
      marginRight: PopoverDimensions.marginRight,
    },
    subtitleText: {
      fontFamily: "Friz Quadrata",
      fontSize: PopoverDimensions.subtitleFontSize,
      color: mainColour.grey,
      position: "absolute",
      zIndex: 1.0,
      marginTop: 244,
      marginLeft: PopoverDimensions.textMarginLeft,
      marginRight: PopoverDimensions.marginRight,
    },
    descriptionText: {
      fontSize: PopoverDimensions.descriptionFontSize,
      color: mainColour.grey,
      position: "absolute",
      lineHeight: 1.3,
      zIndex: 10,
      marginTop: 275,
      marginLeft: PopoverDimensions.textMarginLeft,
      marginRight: PopoverDimensions.marginRight,
    },
  })
);

export const InfoPopover: FC<InfoPopoverProps> = ({
  popoverObject,
  mapDatum,
  open,
  anchorEl,
  handlePopoverClose,
}) => {
  const [selectedObject, setSelectedObject] = useState<InfoPopoverObject>({
    name: "",
    description: "",
    subtitle: "",
    image: "",
    icon: "",
  });

  useEffect(() => {
    if (popoverObject) {
      setSelectedObject({
        name: popoverObject.name,
        description: popoverObject.description,
        subtitle: "Epic Monster",
        image: popoverObject.image,
        icon: "dragon.svg",
      });
      return;
    }

    if (mapDatum) {
      setSelectedObject({
        name: mapDatum.id,
        description: mapDatum.description,
        subtitle: mapDatum.subTitle,
        image: mapDatum.banner,
        icon: mapDatum.alt,
      });
    }
  }, [popoverObject, mapDatum]);

  const classes = useStyles();

  return (
    <div>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: -37,
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <ImageAsset
          alt={selectedObject.icon}
          width={PopoverDimensions.iconSize}
          height={PopoverDimensions.iconSize}
          style={{
            position: "absolute",
            zIndex: 999,
            marginLeft: PopoverDimensions.iconMarginLeft,
            marginTop:
              PopoverDimensions.bannerHeight + PopoverDimensions.marginTop,
          }}
        />
        <Typography className={classes.titleText}>
          {selectedObject.name}
        </Typography>
        <Typography className={classes.subtitleText}>
          {selectedObject.subtitle}
        </Typography>
        <Typography className={classes.descriptionText}>
          {selectedObject.description}
        </Typography>
        <ImageAsset
          alt={selectedObject.image ?? "unknown.svg"}
          style={{
            objectFit: "cover",
            position: "absolute",
            marginLeft: PopoverDimensions.bannerMarginLeft,
            height: PopoverDimensions.bannerHeight,
            width: PopoverDimensions.bannerWidth,
            border: `1px solid ${mainColour.yellow}`,
          }}
        />
        <ImageAsset alt="frameInfoCardComponent.svg" />
      </Popover>
    </div>
  );
};
