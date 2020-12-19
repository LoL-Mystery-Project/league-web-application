import React, { FC, useEffect } from "react";
import styled from "styled-components";
import { mainColour, subColour } from "../styles/palette";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import patchNotesLineSeparator from "../assets/assetPanel/patchNotesLineSeparator.svg";

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

interface PatchNoteCardPanelDetails {
  helloObject: string;
}

interface PatchNoteCardPanelProps {
    PatchNoteCardPanelProps: Array<PatchNoteCardPanelDetails>;
}

export const PatchNoteCardPanel: FC<PatchNoteCardPanelProps> = ({ PatchNoteCardPanelProps }) => {
  //const classes = useStyles();

  return (
    <Wrapper>
    {[1, 1, 1, 1, 1].map(() => (
    <Grid container className="patchNotePanel" spacing={1} style={{ display: "flex", flexDirection: "column" }}>
      {/* LINE SEPARATOR AND VERSION NUMBER */}
      <Grid item style={{marginLeft: 22}}>
      <img
          src={patchNotesLineSeparator}
          alt="patchNotesLineSeparator"
          />
        <Typography className="versionNumber" >V10.3</Typography>
      </Grid>
      {/* PATCH HEADER AND INFO */}
      <Grid item style={{marginLeft: 30}}>
        <Grid container spacing={2}>
          <Grid item>
          <Typography className="patchInfoHeading" >BUG FIX</Typography>
          </Grid>
          <Grid item style={{width: 400}}>
          <Typography className="patchInfoText" >- No longer damages or grants visions around himself for players behind his pit that do not originally have vision on him.</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
    ))}
    </Wrapper>
  );
};