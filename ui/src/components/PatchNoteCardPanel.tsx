import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { mainColour } from "../styles/palette";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import patchNotesLineSeparator from "../assets/assetPanel/patchNotesLineSeparator.svg";
import { MonsterObject } from "../pages/SummonersRift";

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

export interface PatchNote {
  release: string;
  details: Array<string>;
}

export const PatchNoteCardPanel: FC = () => {
  const [patchData, setPatchData] = useState<Array<PatchNote>>([]);

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

  return (
    <Wrapper>
      {patchData.map((patchNote: PatchNote) => (
        <Grid
          container
          className="patchNotePanel"
          spacing={1}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {/* LINE SEPARATOR AND VERSION NUMBER */}
          <Grid item style={{ marginLeft: 22 }}>
            <img src={patchNotesLineSeparator} alt="patchNotesLineSeparator" />
            <Typography className="versionNumber">
              {patchNote.release}
            </Typography>
          </Grid>
          {/* PATCH HEADER AND INFO */}
          <Grid item style={{ marginLeft: 40 }}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography className="patchInfo">
                  {patchNote.details}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Wrapper>
  );
};
