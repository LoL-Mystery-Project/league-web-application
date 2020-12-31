import React, { useState } from "react";
import Grid from "@material-ui/core/Grid/Grid";
import { IconButton, Typography } from "@material-ui/core";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { DragonOptions, RootState } from "../redux/ReduxTypes";
import {
  setSelectedDrag,
  setDragOptions,
} from "../redux/actions/dragonActions";
import { mainColour } from "../styles/palette";
import { ImageAsset } from "../utils/ImageAsset";

const Wrapper = styled.div`
  .dragIcon {
    cursor: pointer;
    margin: 5px;
  }

  .mapIcon {
    width: 40px;
    margin-left: -45px;
    margin-top: 57px;
    position: absolute;
  }

  .toggleButtonStyles {
    color: ${mainColour.yellow};
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
    display: flex;
    white-space: nowrap;
    align-items: center;
  }

  .check-rotate {
    transform: rotate(45deg);
  }
`;

const dragHeight = 50;
const dragWidth = 50;

export default function SoulSelectionToggle() {
  const [hoverDrag, setHoverDrag] = useState("");
  const dispatch = useDispatch();
  const dragState = useSelector((state: RootState) => state.dragon);
  const { selectedDragon, dragOptions } = dragState;

  const updateSelectedDrag = (dragType: string) => {
    dispatch(setSelectedDrag(dragType));
  };

  const handleToggleCheckBox = (type: String) => {
    if (type === "neutralMonster") {
      dispatch(
        setDragOptions({
          ...dragOptions,
          showNeutralMonsters: !dragOptions.showNeutralMonsters,
        })
      );
    }
    if (type === "jungle") {
      dispatch(
        setDragOptions({
          ...dragOptions,
          showJunglePlants: !dragOptions.showJunglePlants,
        })
      );
    }
    if (type === "building") {
      dispatch(
        setDragOptions({
          ...dragOptions,
          showBuildings: !dragOptions.showBuildings,
        })
      );
    }
    if (type === "brush") {
      dispatch(
        setDragOptions({
          ...dragOptions,
          showBrushes: !dragOptions.showBrushes,
        })
      );
    }
  };

  return (
    <Wrapper>
      <Grid container style={{ padding: 2 }}>
        <Grid item xs={5} style={{ display: "flex", paddingLeft: 10 }}>
          <span
            onClick={() => updateSelectedDrag("cloud")}
            onMouseEnter={() => setHoverDrag("cloud")}
            onMouseLeave={() => setHoverDrag("")}
            className="dragIcon"
          >
            <ImageAsset
              height={dragHeight}
              width={dragWidth}
              alt={
                selectedDragon === "cloud" || hoverDrag === "cloud"
                  ? "cloudFocused.svg"
                  : "cloud.svg"
              }
            />
            {selectedDragon === "cloud" && (
              <ImageAsset className="mapIcon" alt="mapindicator.svg" />
            )}
          </span>

          <span
            onClick={() => updateSelectedDrag("ocean")}
            onMouseEnter={() => setHoverDrag("ocean")}
            onMouseLeave={() => setHoverDrag("")}
            className="dragIcon"
          >
            <ImageAsset
              className="soulIconHover"
              height={dragHeight}
              width={dragWidth}
              alt={
                selectedDragon === "ocean" || hoverDrag === "ocean"
                  ? "oceanFocused.svg"
                  : "ocean.svg"
              }
            />
            {selectedDragon === "ocean" && (
              <ImageAsset className="mapIcon" alt="mapindicator.svg" />
            )}
          </span>

          <span
            onClick={() => updateSelectedDrag("infernal")}
            onMouseEnter={() => setHoverDrag("infernal")}
            onMouseLeave={() => setHoverDrag("")}
            className="dragIcon"
          >
            <ImageAsset
              className="soulIconHover"
              height={dragHeight}
              width={dragWidth}
              alt={
                selectedDragon === "infernal" || hoverDrag === "infernal"
                  ? "infernalFocused.svg"
                  : "infernal.svg"
              }
            />
            {selectedDragon === "infernal" && (
              <ImageAsset className="mapIcon" alt="mapindicator.svg" />
            )}
          </span>
          <span
            onClick={() => updateSelectedDrag("mountain")}
            onMouseEnter={() => setHoverDrag("mountain")}
            onMouseLeave={() => setHoverDrag("")}
            className="dragIcon"
          >
            <ImageAsset
              className="soulIconHover"
              height={dragHeight}
              width={dragWidth}
              alt={
                selectedDragon === "mountain" || hoverDrag === "mountain"
                  ? "mountainFocused.svg"
                  : "mountain.svg"
              }
            />
            {selectedDragon === "mountain" && (
              <ImageAsset className="mapIcon" alt="mapindicator.svg" />
            )}
          </span>
        </Grid>
        <Grid item xs={4}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Checkbox
              style={{ width: 10, height: 10 }}
              checkedIcon={<ImageAsset alt="checkboxborder.svg" />}
              icon={<ImageAsset alt="checkbox.svg" />}
              onChange={() => handleToggleCheckBox("neutralMonster")}
            />
            <Typography className={"toggleButtonStyles"}>
              Show neutral monsters
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Checkbox
              style={{ width: 10, height: 10 }}
              checkedIcon={<ImageAsset alt="checkboxborder.svg" />}
              icon={<ImageAsset alt="checkbox.svg" />}
              onChange={() => handleToggleCheckBox("jungle")}
            />
            <Typography className={"toggleButtonStyles"}>
              Show jungle plants{" "}
            </Typography>
          </div>
        </Grid>
        {/* TODO: set paddingLeft to 55 later */}
        <Grid
          item
          xs={2}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "right",
            paddingLeft: 20,
          }}
        >
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Checkbox
              style={{ width: 10, height: 10 }}
              checkedIcon={<ImageAsset alt="checkboxborder.svg" />}
              icon={<ImageAsset alt="checkbox.svg" />}
              onChange={() => handleToggleCheckBox("building")}
            />
            <Typography className={"toggleButtonStyles"}>
              Show buildings
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Checkbox
              style={{ width: 10, height: 10 }}
              checkedIcon={<ImageAsset alt="checkboxborder.svg" />}
              icon={<ImageAsset alt="checkbox.svg" />}
              onChange={() => handleToggleCheckBox("brush")}
            />
            <Typography className={"toggleButtonStyles"}>
              Show brushes
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
