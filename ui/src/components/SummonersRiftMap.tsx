import React, { useState } from "react";
import { ImageAsset } from "../utils/ImageAsset";

import SoulSelectionToggle from "../components/SoulSelectionToggle";
import newMapData from "../assets/newMapData.json";

import { RootState } from "../redux/ReduxTypes";
import { useDispatch, useSelector } from "react-redux";

import "./mapData.css";
import { InfoPopover } from "../utils/InfoPopover";
import { setSelectedMonster } from "../redux/actions/monsterActions";
import { setInfoDrawerBoolean } from "../redux/actions/pageActions";
export interface MapType {
  id: string;
  alt: string;
  className: string;
  width: string;
  height: string;
  banner: string;
  description: string;
  subTitle: string;
}

export default function SummonersRiftMap() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const dispatch = useDispatch();

  const dragState = useSelector((state: RootState) => state.dragon);

  const [hoveredObject, setHoveredObject] = useState<MapType>({
    id: "",
    alt: "",
    className: "",
    width: "",
    height: "",
    banner: "",
    description: "",
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

  const filterByType = (type: String) => {
    if (type === "monster") return dragState.dragOptions?.showNeutralMonsters;
    if (type === "building") return dragState.dragOptions?.showBuildings;
    if (type === "junglePlant") return dragState.dragOptions?.showJunglePlants;
    if (type === "brush") return dragState.dragOptions?.showBrushes;
    return false;
  };

  return (
    <>
      <SoulSelectionToggle />
      <div className="mapContainer">
        {newMapData
          .filter((mapDatum) => filterByType(mapDatum.objectType))
          .map((mapDatum) => {
            return (
              <ImageAsset
                alt={mapDatum.alt}
                className={mapDatum.className}
                width={mapDatum.width}
                height={mapDatum.height}
                onMouseEnter={(e) => handleShowInfoCard(mapDatum, e)}
                onMouseLeave={() => handleHideInfoCard(mapDatum)}
                onClick={() => {
                  dispatch(setSelectedMonster(mapDatum.id));
                  dispatch(setInfoDrawerBoolean(true));
                }}
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
