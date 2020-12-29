import React, { useState } from "react";
import Popover from "@material-ui/core/Popover";
import { ImageAsset } from "./ImageAsset";

import SoulSelectionToggle from "../components/SoulSelectionToggle";
import { InfoHoverCard } from "../components/InfoHoverCard";
import newMapData from "../assets/newMapData.json";

import { RootState } from "../redux/ReduxTypes";
import { useSelector } from "react-redux";

import "./mapData.css";
import { makeStyles, Theme, createStyles } from "@material-ui/core";
export interface MapType {
  id: string;
  alt: string;
  className: string;
  width: string;
  height: string;
  banner: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    popover: {
      pointerEvents: "none",
    },
    paper: {
      padding: theme.spacing(1),
    },
  })
);

export default function SummonersRiftMap() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const dragState = useSelector((state: RootState) => state.dragon);

  const [hoveredObject, setHoveredObject] = useState<MapType>({
    id: "",
    alt: "",
    className: "",
    width: "",
    height: "",
    banner: "",
  });
  const [showInfoCard, setShowInfoCard] = useState(false);
  const open = Boolean(anchorEl);

  const handlePopoverOpen = (
    event: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const handleShowInfoCard = (
    mapDatum: MapType,
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) => {
    setHoveredObject(mapDatum);
    setShowInfoCard(true);
    handlePopoverOpen(e);
  };
  const handleHideInfoCard = (mapDatum: MapType) => {
    setHoveredObject(mapDatum);
    setShowInfoCard(false);
    handlePopoverClose();
  };

  return (
    <>
      <SoulSelectionToggle />
      <div className="mapContainer">
        {newMapData
          .filter(
            (mapDatum) =>
              (mapDatum.objectType == "monster" &&
                dragState.dragOptions?.showNeutralMonsters) ||
              (mapDatum.objectType == "building" &&
                dragState.dragOptions?.showBuildings)
          )
          .map((mapDatum) => {
            return (
              <ImageAsset
                alt={mapDatum.alt}
                className={mapDatum.className}
                width={mapDatum.width}
                height={mapDatum.height}
                onMouseEnter={(e) => handleShowInfoCard(mapDatum, e)}
                onMouseLeave={() => handleHideInfoCard(mapDatum)}
              />
            );
          })}
        {/* Map */}
        {dragState.selectedDragon === "ocean" ? (
          <ImageAsset
            alt="cloudMap.svg"
            height="100%"
            width="100%"
            style={{ marginTop: 5 }}
          />
        ) : (
          <ImageAsset
            alt={`${dragState.selectedDragon}Map.svg`}
            height="100%"
            width="100%"
            style={{ marginTop: 5 }}
          />
        )}
      </div>

      {showInfoCard && (
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <InfoHoverCard mapDatum={hoveredObject} />{" "}
        </Popover>
      )}
    </>
  );
}
