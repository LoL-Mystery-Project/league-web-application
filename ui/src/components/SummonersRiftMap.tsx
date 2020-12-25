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

  .dragonPosition {
    position: absolute;
    top: 68%;
    left: 65%;
  }

  .redKrugPosition {
    position: absolute;
    top: 15.5%;
    left: 42.2%;
  }

  .blueKrugPosition {
    position: absolute;
    top: 81.8%;
    left: 56.6%;
  }

  .redRaptorPosition {
    position: absolute;
    top: 33.8%;
    left: 52.3%;
  }

  .blueRaptorPosition {
    position: absolute;
    top: 62.8%;
    left: 46.8%;
  }

  .topScuttlePos {
    position: absolute;
    top: 32%;
    left: 28%;
  }

  .botScuttlePos {
    position: absolute;
    top: 65%;
    left: 72%;
  }

  .redWolfPos {
    position: absolute;
    top: 42%;
    left: 73%;
  }

  .blueWolfPos {
    position: absolute;
    top: 54%;
    left: 24%;
  }

  .redNexusPos {
    position: absolute;
    top: 9%;
    right: 9%;
  }

  .blueNexusPos {
    position: absolute;
    bottom: 9%;
    left: 9%;
  }

  .redInhibPosTop {
    position: absolute;
    top: 7%;
    right: 25%;
  }

  .redInhibPosMid {
    position: absolute;
    top: 20%;
    right: 20%;
  }

  .redInhibPosBot {
    position: absolute;
    top: 25%;
    right: 7%;
  }

  .blueInhibPosTop {
    position: absolute;
    bottom: 7%;
    left: 25%;
  }

  .blueInhibPosMid {
    position: absolute;
    bottom: 20%;
    left: 20%;
  }

  .blueInhibPosBot {
    position: absolute;
    bottom: 25%;
    left: 7%;
  }

  .redOuterTurretTop {
    position: absolute;
    top: 6.5%;
    left: 29%;
  }

  .redOuterTurretBot {
    position: absolute;
    top: 70%;
    left: 92%;
  }

  .redNexusTurretTop {
    position: absolute;
    top: 13%;
    right: 16%;
  }
  .redNexusTurretBot {
    position: absolute;
    top: 16%;
    right: 13%;
  }

  .blueOuterTurretTop {
    position: absolute;
    bottom: 70%;
    right: 92%;
  }

  .blueOuterTurretBot {
    position: absolute;
    bottom: 6%;
    right: 29%;
  }

  .blueNexusTurretTop {
    position: absolute;
    bottom: 13%;
    left: 16%;
  }
  .blueNexusTurretBot {
    position: absolute;
    bottom: 16%;
    left: 13%;
  }

  .redSideBlueBuff {
    position: absolute;
    top: 51%;
    right: 23%;
  }

  .redSideRedBuff {
    position: absolute;
    top: 24.5%;
    right: 51%;
  }

  .blueSideBlueBuff {
    position: absolute;
    bottom: 51%;
    left: 23%;
  }

  .blueSideRedBuff {
    position: absolute;
    bottom: 24.5%;
    left: 51%;
  }

  .redSideGromp {
    position: absolute;
    top: 55.5%;
    right: 13%;
  }

  .blueSideGromp {
    position: absolute;
    bottom: 55.5%;
    left: 13%;
  }
`;

// interface mapElement {
//   imgName: String;
//   top: String;
//   left: String;
//   width: number;
//   height: number;
// }

export default function SummonersRiftMap() {
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
      <Wrapper>
        <div className="mapContainer">
          <ImageAsset
            alt="baron.svg"
            className="baronPosition"
            width="4%"
            height="4%"
          />
          <ImageAsset
            alt="dragon.svg"
            className="dragonPosition"
            width="4%"
            height="4%"
          />

          <ImageAsset
            alt="krug.svg"
            className="redKrugPosition"
            width="2.5%"
            height="2.5%"
          />

          <ImageAsset
            alt="krug.svg"
            className="blueKrugPosition"
            width="2.5%"
            height="2.5%"
          />

          <ImageAsset
            alt="raptor.svg"
            className="redRaptorPosition"
            width="2.5%"
            height="2.5%"
          />

          <ImageAsset
            alt="raptor.svg"
            className="blueRaptorPosition"
            width="2.5%"
            height="2.5%"
          />

          <ImageAsset
            alt="scuttlercrab.svg"
            className="topScuttlePos"
            width="3%"
            height="3%"
          />

          <ImageAsset
            alt="scuttlercrab.svg"
            className="botScuttlePos"
            width="3%"
            height="3%"
          />

          <ImageAsset
            alt="wolf.svg"
            className="redWolfPos"
            width="3%"
            height="3%"
          />

          <ImageAsset
            alt="wolf.svg"
            className="blueWolfPos"
            width="3%"
            height="3%"
          />

          <ImageAsset
            alt="rednexus.svg"
            className="redNexusPos"
            width="6%"
            height="6%"
          />

          <ImageAsset
            alt="bluenexus.svg"
            className="blueNexusPos"
            width="6%"
            height="6%"
          />

          <ImageAsset
            alt="redinhib.svg"
            className="redInhibPosTop"
            width="3.5%"
            height="3.5%"
          />

          <ImageAsset
            alt="redinhib.svg"
            className="redInhibPosMid"
            width="3.5%"
            height="3.5%"
          />

          <ImageAsset
            alt="redinhib.svg"
            className="redInhibPosBot"
            width="3.5%"
            height="3.5%"
          />

          <ImageAsset
            alt="blueinhib.svg"
            className="blueInhibPosTop"
            width="3.5%"
            height="3.5%"
          />

          <ImageAsset
            alt="blueinhib.svg"
            className="blueInhibPosMid"
            width="3.5%"
            height="3.5%"
          />

          <ImageAsset
            alt="blueinhib.svg"
            className="blueInhibPosBot"
            width="3.5%"
            height="3.5%"
          />

          <ImageAsset
            alt="redtower.svg"
            className="redOuterTurretTop"
            width="2%"
            height="2%"
          />

          <ImageAsset
            alt="redtower.svg"
            className="redOuterTurretBot"
            width="2%"
            height="2%"
          />

          <ImageAsset
            alt="redtower.svg"
            className="redNexusTurretTop"
            width="2%"
            height="2%"
          />

          <ImageAsset
            alt="redtower.svg"
            className="redNexusTurretBot"
            width="2%"
            height="2%"
          />

          <ImageAsset
            alt="bluetower.svg"
            className="blueOuterTurretTop"
            width="2%"
            height="2%"
          />

          <ImageAsset
            alt="bluetower.svg"
            className="blueOuterTurretBot"
            width="2%"
            height="2%"
          />
          <ImageAsset
            alt="bluetower.svg"
            className="blueNexusTurretTop"
            width="2%"
            height="2%"
          />

          <ImageAsset
            alt="bluetower.svg"
            className="blueNexusTurretBot"
            width="2%"
            height="2%"
          />
          <ImageAsset
            alt="bluesentinelIcon.svg"
            className="redSideBlueBuff"
            width="3%"
            height="3%"
          />

          <ImageAsset
            alt="bluesentinelIcon.svg"
            className="blueSideBlueBuff"
            width="3%"
            height="3%"
          />

          <ImageAsset
            alt="redbramblebackIcon.svg"
            className="redSideRedBuff"
            width="3%"
            height="3%"
          />

          <ImageAsset
            alt="redbramblebackIcon.svg"
            className="blueSideRedBuff"
            width="3%"
            height="3%"
          />

          <ImageAsset
            alt="grompIcon.svg"
            className="redSideGromp"
            width="2%"
            height="2%"
          />

          <ImageAsset
            alt="grompIcon.svg"
            className="blueSideGromp"
            width="2%"
            height="2%"
          />

          {/* Map */}
          <ImageAsset
            alt="map-cloud.svg"
            height="100%"
            width="100%"
            style={{ marginTop: 5 }}
          />
        </div>
      </Wrapper>
    </>
  );
}
