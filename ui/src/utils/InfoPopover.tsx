import React, { FC } from "react";
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

interface InfoPopoverProps {
  popoverObject?: LinkMapObject;
  open: boolean;
  anchorEl: Element | ((element: Element) => Element) | null | undefined;
  handlePopoverClose:
    | ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
    | undefined;
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
      color: mainColour.grey,
      position: "absolute",
      zIndex: 10,
      marginTop: 260,
      marginLeft: 40,
      marginRight: 20,
    },
  })
);

export const InfoPopover: FC<InfoPopoverProps> = ({
  popoverObject,
  open,
  anchorEl,
  handlePopoverClose,
}) => {
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
        <Typography className={classes.titleText}>
          {popoverObject?.name}
        </Typography>
        <Typography className={classes.descriptionText}>
          {popoverObject?.description}
        </Typography>
        <ImageAsset
          alt={popoverObject?.image ?? "unknown.svg"}
          style={{
            objectFit: 'cover',
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
