import React, { FC } from "react";
import styled from "styled-components";
import { mainColour } from "../styles/palette";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { PatchRelease } from "../monster-layout/MonsterTypes";
import { ImageAsset } from "./ImageAsset";

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

interface PatchNoteCardPanelProps {
  patchNotes: PatchRelease[] | undefined;
}

export const PatchNoteCardPanel: FC<PatchNoteCardPanelProps> = ({
  patchNotes,
}) => {
  if (!patchNotes) return <></>;

  return (
    <Wrapper>
      {patchNotes.map((patchRelease: PatchRelease, index: number) => (
        <Grid
          container
          className="patchNotePanel"
          style={{ display: "flex", flexDirection: "column", width: 940 }}
        >
          {/* Only display patch note if details array is not empty */}
          {patchRelease.data.length > 0 && (
            <Grid item style={{ marginLeft: 22 }}>
              {/* LINE SEPARATOR AND VERSION NUMBER */}
              {/* If it is the first patch note, do not display line separator */}
              {index === 0 ? (
                <Typography
                  className="versionNumber"
                  style={{ paddingTop: 20, paddingBottom: 5 }}
                >
                  {patchRelease.release}
                </Typography>
              ) : (
                <Grid item>
                  <ImageAsset alt="patchNotesLineSeparator" />
                  <Typography
                    className="versionNumber"
                    style={{ paddingBottom: 5 }}
                  >
                    {patchRelease.release}
                  </Typography>
                </Grid>
              )}

              {/* PATCH INFO */}
              <Grid item style={{ marginLeft: 20 }}>
                <ul style={{ margin: 0 }}>
                  <li className="patchInfo">
                    {/* <Typography>{patchRelease.details}</Typography> */}
                  </li>
                </ul>
              </Grid>
            </Grid>
          )}
        </Grid>
      ))}
    </Wrapper>
  );
};
