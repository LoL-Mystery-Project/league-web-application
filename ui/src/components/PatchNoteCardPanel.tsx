import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { mainColour } from "../styles/palette";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import patchNotesLineSeparator from "../assets/assetPanel/patchNotesLineSeparator.svg";

// TODO: display all patch notes
// TODO: modify display of details, which is an array of strings
// TODO: add bullet before first patch detail

const Wrapper = styled.div`
  .patchNotePanel {
    color: ${mainColour.white};
  }

  .versionNumber {
    color: ${mainColour.yellow};
    font-size: 24px;
    font-weight: bold;
  }

  .patchInfo {
    font-size: 16px;
  }
`;

interface PatchNoteCardPanelDetails {
  helloObject: string;
}

interface PatchNoteCardPanelProps {
    PatchNoteCardPanelProps: Array<PatchNoteCardPanelDetails>;
}

export const PatchNoteCardPanel: FC<PatchNoteCardPanelProps> = ({ PatchNoteCardPanelProps }) => {

  const [patchData, setPatchData] = useState<any>({});

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:5000/monsters");
        const json = await response.json();
        const monster = json.find((elem: any) => elem.name === "Baron Nashor");
        setPatchData(monster.patchHistory);
      } catch {
        // do nothing, API call failed.
      }
    })();
  }, []);

  useEffect(() => {
    if (patchData) {
      console.log(patchData);
    }
  }, [patchData]);

  return (
    <Wrapper>
    {[0, 1, 2, 3, 4, 5].map((index: number) => (
    <Grid container className="patchNotePanel" spacing={1} style={{ display: "flex", flexDirection: "column" }}>
      {/* LINE SEPARATOR AND VERSION NUMBER */}
      <Grid item style={{marginLeft: 22}}>
      <img
          src={patchNotesLineSeparator}
          alt="patchNotesLineSeparator"
          />
        <Typography className="versionNumber" >{patchData[index]?.release}</Typography>
      </Grid>
      {/* PATCH HEADER AND INFO */}
      <Grid item style={{marginLeft: 40}}>
        <Grid container spacing={2} >
          <Grid item >
          <Typography className="patchInfo" >{patchData[index]?.details}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
))}
    </Wrapper>
  );
};
