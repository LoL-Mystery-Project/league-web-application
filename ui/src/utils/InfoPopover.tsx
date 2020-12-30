import React, { FC, useState, useEffect } from "react";
import {
  Popover,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { ImageAsset } from "../components/ImageAsset";
import { LinkMapObject } from "./TextColourizer";
import { mainColour } from "../styles/palette";
import { MapType } from "../components/SummonersRiftMap";

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
      fontHeight: 15,
      color: mainColour.white,
      position: "absolute",
      zIndex: 10,
      marginTop: 215,
      marginLeft: 40,
      marginRight: 20,
    },
    descriptionText: {
      fontSize: 16,
      fontWeight: 500,
      color: mainColour.grey,
      position: "absolute",
      zIndex: 10,
      marginTop: 285,
      marginLeft: 40,
      marginRight: 20,
    },
    subtitleText: {
      fontFamily: "Friz Quadrata",
      fontSize: 15,
      fontWeight: 400,
      fontHeight: 15,
      color: mainColour.grey,
      position: "absolute",
      zIndex: 10,
      marginTop: 255,
      marginLeft: 40,
      marginRight: 20,
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
        description: "",
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
          width={25}
          height={25}
          style={{
            position: "absolute",
            zIndex: 999,
            marginLeft: 375,
            marginTop: 223,
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
            marginLeft: 20,
            height: 200,
            width: 398,
            border: `1px solid ${mainColour.yellow}`,
          }}
        />
        <ImageAsset alt="frameInfoCardComponent.svg" />
      </Popover>
    </div>
  );
};
