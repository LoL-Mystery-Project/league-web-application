import React, { FC } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import map from "../assets/map/riftmap.png";
import cloud from "../assets/map/cloudFocused.svg";
import ocean from "../assets/map/oceanFocused.svg";
import infernal from "../assets/map/infernalFocused.svg";
import mountain from "../assets/map/mountainFocused.svg";
import checkbox from "../assets/map/checkbox.svg";
import checkboxborder from "../assets/map/checkboxborder.svg";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function SoulSelectionToggle() {
  const classes = useStyles();

  return (
    <>
      <div className="justify-content-end display-flex padding-right align-items">
        <img src={cloud} height="30" width="30" />
        <img src={ocean} height="30" width="30" />
        <img src={infernal} height="30" width="30" />
        <img src={mountain} height="30" width="30" />
        <div className="align-items">
          <img src={checkbox} height="10" width="10" />
          Show neutral monsters
          <img src={checkboxborder} height="10" width="10" />
          Show jungle plants <img src={checkboxborder} height="10" width="10" />
          Show buildings <img src={checkboxborder} height="10" width="10" />
          Show brushes
        </div>
      </div>
    </>
  );
}
