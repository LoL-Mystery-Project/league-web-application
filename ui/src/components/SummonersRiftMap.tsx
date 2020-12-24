import React, { FC } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { ImageAsset } from "./ImageAsset";
import styled from "styled-components";
import { mainColour } from "../styles/palette";

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

let globalHeight = 0;
let globalWidth = 0;

const Wrapper = styled.div`
  .mapContainer {
    position: relative;
    text-align: center;
  }

  .baronPosition {
    position: absolute;
    top: 27%;
    left: 31.7%;
  }
`;
export default function SummonersRiftMap() {
  return (
    // div col1
    // put into a div / row
    // The selection thingy with the cloud drakes <separate component>
    // the toggles <separate component>

    // the map below
    <>
      <SoulSelectionToggle />
      <Wrapper>
        <div className="mapContainer">
          <ImageAsset
            alt="baron.svg"
            className="baronPosition"
            width="4%"
            height="4%"
          />
          <ImageAsset
            alt="fullmap.svg"
            height="100%"
            width="100%"
            style={{ marginTop: 5 }}
          />
        </div>
      </Wrapper>
    </>
  );
}
