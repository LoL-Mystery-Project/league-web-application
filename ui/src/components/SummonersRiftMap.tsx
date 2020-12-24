import React, { FC } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { ImageAsset } from "./ImageAsset";

import SoulSelectionToggle from "../components/SoulSelectionToggle";

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

export default function SummonersRiftMap() {
  const classes = useStyles();

  return (
    // div col1
    // put into a div / row
    // The selection thingy with the cloud drakes <separate component>
    // the toggles <separate component>

    // the map below
    <>
      <SoulSelectionToggle />
      <div className="Map">
        <ImageAsset alt="fullmap.svg" height="100%" width="100%" style={{ marginTop: 5 }} />;
      </div>
    </>
  );
}
