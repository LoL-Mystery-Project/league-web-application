import React, { FC, useEffect } from "react";
import cloud from "../assets/map/cloudFocused.svg";
import ocean from "../assets/map/oceanFocused.svg";
import infernal from "../assets/map/infernalFocused.svg";
import mountain from "../assets/map/mountainFocused.svg";

import cloudUnselected from "../assets/map/cloud.svg";
import oceanUnselected from "../assets/map/ocean.svg";
import infernalUnselected from "../assets/map/infernal.svg";
import mountainUnselected from "../assets/map/mountain.svg";

import CheckboxFilled from "../assets/map/checkbox.svg";
import CheckboxBorder from "../assets/map/checkboxborder.svg";
import Grid from "@material-ui/core/Grid/Grid";
import { Typography } from "@material-ui/core";
import styled from "styled-components";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/types";
import { setSelectedDrag } from "../redux/actions/dragonActions";
import { mainColour, subColour } from "../styles/palette";

const Wrapper = styled.div`
  .soulIconHover:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .toggleButtonStyles {
    color: ${mainColour.yellow};
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
    display: flex;
    align-items: center;
  }

  .check-rotate {
    transform: rotate(45deg);
  }
`;

const dragHeight = 40;
const dragWidth = 40;

export default function SoulSelectionToggle() {
  const dispatch = useDispatch();
  const dragState = useSelector((state: RootState) => state.dragon);
  const { selectedDragon } = dragState;

  const handleClick = (dragType: string) => {
    dispatch(setSelectedDrag(dragType));
  };

  return (
    <Wrapper>
      <Grid container justify="center" spacing={1} style={{ padding: 2 }}>
        <Grid item xs={6}>
          <Button onClick={() => handleClick("cloud")}>
            <img
              className="soulIconHover"
              src={selectedDragon === "cloud" ? cloud : cloudUnselected}
              height={dragHeight}
              width={dragWidth}
              alt="cloud"
            />
          </Button>
          <Button onClick={() => handleClick("ocean")}>
            <img
              className="soulIconHover"
              src={selectedDragon === "ocean" ? ocean : oceanUnselected}
              height={dragHeight}
              width={dragWidth}
              alt="ocean"
            />
          </Button>
          <Button onClick={() => handleClick("infernal")}>
            <img
              className="soulIconHover"
              src={
                selectedDragon === "infernal" ? infernal : infernalUnselected
              }
              height={dragHeight}
              width={dragWidth}
              alt="infernal"
            />
          </Button>
          <Button onClick={() => handleClick("mountain")}>
            <img
              className="soulIconHover"
              src={
                selectedDragon === "mountain" ? mountain : mountainUnselected
              }
              height={dragHeight}
              width={dragWidth}
              alt="mountain"
            />
          </Button>
        </Grid>
        <Grid item xs={3}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Checkbox
              style={{ width: 10, height: 10 }}
              icon={<img src={CheckboxBorder} alt="bordered" />}
              checkedIcon={<img src={CheckboxFilled} alt="not-bordered" />}
            />
            <Typography className={"toggleButtonStyles"}>
              Show neutral monsters
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Checkbox
              style={{ width: 10, height: 10 }}
              icon={<img src={CheckboxBorder} alt="bordered" />}
              checkedIcon={<img src={CheckboxFilled} alt="not-bordered" />}
            />
            <Typography className={"toggleButtonStyles"}>
              Show jungle plants{" "}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Checkbox
              style={{ width: 10, height: 10 }}
              icon={<img src={CheckboxBorder} alt="bordered" />}
              checkedIcon={<img src={CheckboxFilled} alt="not-bordered" />}
            />
            <Typography className={"toggleButtonStyles"}>
              Show buildings
            </Typography>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Checkbox
              style={{ width: 10, height: 10 }}
              icon={<img src={CheckboxBorder} alt="bordered" />}
              checkedIcon={<img src={CheckboxFilled} alt="not-bordered" />}
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
