import React, { FC, useState } from "react";
import { ImageAsset } from "./ImageAsset";

import SoulSelectionToggle from "../components/SoulSelectionToggle";
import { InfoHoverCard } from "../components/InfoHoverCard";
import newMapData from "../assets/newMapData.json";

import "./mapData.css";

// interface mapElement {
//   imgName: String;
//   top: String;
//   left: String;
//   width: number;
//   height: number;
// }

export interface MapType {
  id: string;
  alt: string;
  className: string;
  width: string;
  height: string;
  banner: string;
}

export default function SummonersRiftMap() {
  const [hoveredObject, setHoveredObject] = useState<MapType>({
    id: "",
    alt: "",
    className: "",
    width: "",
    height: "",
    banner: "",
  });
  const [showInfoCard, setShowInfoCard] = useState(false);

  const handleShowInfoCard = (mapDatum: MapType) => {
    setHoveredObject(mapDatum);
    setShowInfoCard(true);
  };
  const handleHideInfoCard = (mapDatum: MapType) => {
    setHoveredObject(mapDatum);
    setShowInfoCard(false);
  };
  // const placeMapElements = (mapArray: mapElement[]) => {
  //   for (const a of mapArray) {
  //     a.
  //   }

  //   return (
  //     <ImageAsset alt={imgName} className={classPos} width={w} height={h} />
  //   );
  // };

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
              onMouseEnter={() => handleShowInfoCard(mapDatum)}
              onMouseLeave={() => handleHideInfoCard(mapDatum)}
            />
          );
        })}
        {/* Map */}
        <ImageAsset
          alt="map-cloud.svg"
          height="100%"
          width="100%"
          style={{ marginTop: 5 }}
        />
      </div>

      {showInfoCard && (
        <div className="cardContainer">
          <InfoHoverCard mapDatum={hoveredObject} />{" "}
        </div>
      )}
    </>
  );
}
