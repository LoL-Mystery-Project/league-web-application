import React, { FC } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import map from "../assets/map/riftmap.png";
// interface SummonersRiftMap {}

// export const SummonersRiftMap: FC<SummonersRiftMapProps> = ({}) => {
//   return (
//     <>
//       <button>hi</button>
//     </>
//   );
// };

// helper functions and API calls
// useEffects

// backend:
// create Express
// create gmail
// set up MongoDB
// add Data Dragon json to MongoDB database :D

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
    <div>
      <img src="" /> Icon2 Icon3 Icon 4<div>Other Toggles</div>
    </div>
  );
}
