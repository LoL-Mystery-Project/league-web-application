import React, { useState } from "react";
import { ImageAsset } from "./ImageAsset";

import SoulSelectionToggle from "../components/SoulSelectionToggle";
import newMapData from "../assets/newMapData.json";

import "./mapData.css";
import { InfoPopover } from "../utils/InfoPopover";
export interface MapType {
  id: string;
  alt: string;
  className: string;
  width: string;
  height: string;
  banner: string;
  subTitle: string;
}

export default function SummonersRiftMap() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [hoveredObject, setHoveredObject] = useState<MapType>({
    id: "",
    alt: "",
    className: "",
    width: "",
    height: "",
    banner: "",
    subTitle: "",
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
        {newMapData.map((mapDatum) => {
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
        <ImageAsset
          alt="cloudMap.svg"
          height="100%"
          width="100%"
          style={{ marginTop: 5 }}
        />
      </div>
      {showInfoCard && (
        <InfoPopover
          open={open}
          anchorEl={anchorEl}
          handlePopoverClose={handlePopoverClose}
          mapDatum={hoveredObject}
        />
      )}
    </>
  );
}
