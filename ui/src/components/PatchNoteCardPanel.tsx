import React, { FC } from "react";
import styled from "styled-components";
import { mainColour } from "../styles/palette";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import patchNotesLineSeparator from "../assets/assetPanel/patchNotesLineSeparator.svg";
import { MonsterObject } from "../pages/SummonersRift";

const Wrapper = styled.div`
  .patchNotePanel {
    color: ${mainColour.white};
  }

  .versionNumber {
    color: ${mainColour.yellow};
    font-size: 24px;
    font-weight: bold;
  }

  .patchInfoHeading {
    font-size: 16px;
  }

  .patchInfoText {
    font-size: 16px;
  }
`;

// mini nav / tab thing

interface PatchNoteCardPanelProps {
  PatchNoteCardPanelProps: MonsterObject;
}

export const PatchNoteCardPanel: FC<PatchNoteCardPanelProps> = ({
  PatchNoteCardPanelProps,
}) => {
  return (
    <Wrapper>
      {[1, 1, 1, 1, 1].map(() => (
        <Grid
          container
          className="patchNotePanel"
          spacing={1}
          style={{ display: "flex", flexDirection: "column" }}
        >
          {/* LINE SEPARATOR AND VERSION NUMBER */}
          <Grid item style={{ marginLeft: 22 }}>
            <img src={patchNotesLineSeparator} alt="patchNotesLineSeparator" />
            <Typography className="versionNumber">V10.3</Typography>
          </Grid>
          {/* PATCH HEADER AND INFO */}
          <Grid item style={{ marginLeft: 30 }}>
            <Grid container spacing={2}>
              <Grid item>
                <Typography className="patchInfoHeading">BUG FIX</Typography>
              </Grid>
              <Grid item style={{ width: 740, height: 40 }}>
                <Typography className="patchInfoText">
                  - No longer damages or grants visions around himself for
                  players behind his pit that do not originally have vision on
                  him.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Wrapper>
  );
};
