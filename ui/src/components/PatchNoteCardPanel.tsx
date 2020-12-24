import React, { FC, useEffect, useState } from "react";
import styled from "styled-components";
import { mainColour } from "../styles/palette";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import patchNotesLineSeparator from "../assets/assetPanel/patchNotesLineSeparator.svg";

// TODO: modify display of details, which is an array of strings

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
    margin-left: -20px;
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
          style={{ display: "flex", flexDirection: "column", width: 940 }}
        >
          {/* Only display patch note if details array is not empty */}
          {patchNote.details.length > 0 ? (
            <Grid item style={{ marginLeft: 22 }}>
              {/* LINE SEPARATOR AND VERSION NUMBER */}
              {/* If it is the first patch note, do not display line separator */}
              {patchData.indexOf(patchNote) === 0 ? (
                <Typography
                  className="versionNumber"
                  style={{ paddingTop: 20, paddingBottom: 5 }}
                >
                  {patchNote.release}
                </Typography>
              ) : (
                <Grid item>
                  <img
                    style={{ paddingTop: 20, paddingBottom: 20 }}
                    src={patchNotesLineSeparator}
                    alt="patchNotesLineSeparator"
                  />
                  <Typography
                    className="versionNumber"
                    style={{ paddingBottom: 5 }}
                  >
                    {patchNote.release}
                  </Typography>
                </Grid>
              )}

              {/* PATCH INFO */}
              <Grid item style={{ marginLeft: 20 }}>
                <ul style={{ margin: 0 }}>
                  <li className="patchInfo">
                    <Typography>{patchNote.details}</Typography>
                  </li>
                </ul>
              </Grid>
            </Grid>
          ) : null}
        </Grid>
      ))}
    </Wrapper>
  );
};
