import React, { FC } from "react";
import styled from "styled-components";
import { mainColour } from "../styles/palette";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {
  PatchCategory,
  PatchCategoryTypes,
  PatchNote,
  PatchRelease,
} from "../monster-layout/MonsterTypes";
import { ImageAsset } from "./ImageAsset";
import { ColouredList } from "../layout/ColouredList";
import { patchNoteConstants } from "../styles/dimension";
import { TextColourizer } from "../utils/TextColourizer";

// TODO: modify display of details, which is an array of strings

const Wrapper = styled.div`
  .patchNotePanel {
    color: ${mainColour.white};
    display: flex;
  }

  .versionNumber {
    color: ${mainColour.yellow};
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    margin-top: ${patchNoteConstants.versionNumberMarginTop}px;
  }

  .abilityTitleStyles {
    text-decoration: underline;
    padding-right: 5px;
  }

  .singleLineAbility > * {
    cursor: text !important;
  }

  .lineStyle {
    margin-top: ${patchNoteConstants.lineMarginTop}px;
  }
`;

const patchCategoryColourMap: Record<
  PatchCategoryTypes,
  string
> = Object.freeze({
  "REMOVED:": mainColour.white,
  "NEW:": mainColour.white,
  "BUG FIX:": mainColour.white,
  "CHANGE:": mainColour.white,
  "BUFF:": mainColour.green,
  "NERF:": mainColour.red,
});

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
        <Grid container className="patchNotePanel">
          {/* Only display patch note if details array is not empty */}
          {patchRelease.data.length > 0 && (
            <Grid item style={{ marginLeft: patchNoteConstants.marginLeft }}>
              {/* LINE SEPARATOR AND VERSION NUMBER */}
              {/* If it is the first patch note, do not display line separator */}
              {index === 0 ? (
                <Typography className="versionNumber">
                  {patchRelease.release}
                </Typography>
              ) : (
                <Grid item className="lineStyle">
                  <ImageAsset alt="patchNotesLineSeparator.svg" />
                  <Typography className="versionNumber">
                    {patchRelease.release}
                  </Typography>
                </Grid>
              )}

              {/* PATCH INFO */}
              {patchRelease.data.map((patchCategory: PatchCategory) => {
                return (
                  <Grid
                    container
                    style={{
                      display: "flex",
                      marginLeft: patchNoteConstants.patchNoteListMarginLeft,
                      marginTop: patchNoteConstants.patchNoteListMarginTop,
                    }}
                  >
                    <Grid item xs={2} style={{ maxWidth: 100 }}>
                      <Typography
                        style={{
                          color: patchCategoryColourMap[patchCategory.type],
                        }}
                      >
                        {patchCategory.type}
                      </Typography>
                    </Grid>
                    <Grid item xs={10}>
                      {patchCategory.list.map((patchNote: PatchNote) => {
                        return (
                          <div>
                            {/** SCENARIO 1: Ability exists and length of changes == 1 (underline ability and show change on same line) */}
                            {patchNote.ability &&
                              patchNote.changes.length === 1 && (
                                <ul style={{ margin: 0, marginLeft: -20 }}>
                                  <li>
                                    <TextColourizer
                                      text={`${patchNote.ability} ${patchNote.changes[0].text}`}
                                      colourMap={patchNote.changes[0].colourMap}
                                      className="singleLineAbility"
                                      linkMap={{
                                        [patchNote.ability]: {
                                          url: "#",
                                          hasTooltip: false,
                                          tooltipData: {
                                            icon: "",
                                            name: "",
                                            description: "",
                                            image: "",
                                          },
                                        },
                                      }}
                                    />
                                  </li>
                                </ul>
                              )}
                            {/** SCENARIO 2: Ability exists and length of list > 1 (show changes in a sublist) */}
                            {patchNote.ability && patchNote.changes.length > 1 && (
                              <ul style={{ margin: 0, marginLeft: -20 }}>
                                <li>
                                  <div>
                                    <Typography className="abilityTitleStyles">
                                      {patchNote.ability}
                                    </Typography>
                                    <ColouredList
                                      listItems={patchNote.changes}
                                    />
                                  </div>
                                </li>
                              </ul>
                            )}
                            {/** SCENARIO 3: No ability exists: always show a coloured list */}
                            {!patchNote.ability && (
                              <ColouredList listItems={patchNote.changes} />
                            )}
                          </div>
                        );
                      })}
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          )}
        </Grid>
      ))}
    </Wrapper>
  );
};
