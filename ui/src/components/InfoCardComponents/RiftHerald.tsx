import { Grid } from "@material-ui/core";
import React, { FC } from "react";
import { MonsterDetails } from "../MonsterDetails";
import { MonsterWrapper } from "./Baron";
import Typography from "@material-ui/core/Typography";
import { ImageAsset } from "../ImageAsset";
import { TextColourizer } from "../../utils/TextColourizer";
import { mainColour } from "../../styles/palette";

interface RiftHeraldProps {}

export const RiftHerald: FC<RiftHeraldProps> = ({}) => {
  return (
    <MonsterWrapper>
      <Grid container>
        <Grid item>
          <MonsterDetails />
        </Grid>

        {/* EFFECTS: LINE SEPARATOR, HEADER AND INFO */}
        <Grid>
          {/* EFFECTS LINE SEPARATOR */}
          <Grid item style={{ paddingTop: 10 }}>
            <ImageAsset alt="line.svg" />
          </Grid>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 20,
              paddingBottom: 20,
            }}
          >
            {/* EFFECTS HEADER */}
            <Typography className="infoHeaderText">Effects</Typography>
            <Typography
              className="effectsDescription"
              style={{ marginLeft: 25 }}
            >
              When killed, grants slayer and their living teammates:
            </Typography>
          </div>
          {/* EFFECTS INFO */}
          <Grid
            container
            spacing={1}
            style={{ display: "flex", flexDirection: "column" }}
          >
            {/* EFFECT ITEM: EYE OF THE HERALD */}
            <Grid item>
              <Grid
                container
                spacing={3}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingLeft: 20,
                }}
              >
                <Grid item>
                  <ImageAsset alt="eyeoftheherald.svg" />
                </Grid>
                <Grid item style={{ width: 770 }}>
                  <Typography className="effectsSubHeaderStyle">
                    Eye of the Herald
                  </Typography>
                  <div className="effectsStyles">
                    <ul style={{ marginTop: 5, marginLeft: -18 }}>
                      <li className="listStyles">
                        <TextColourizer
                          text="Passive - Glimpse of The Void: The holder of this buff has Empowered Recall. This passive is lost when The Eye is crushed or the duration ends."
                          colourMap={{
                            [mainColour.purple]: [
                              "Empowered Recall",
                              "The Eye",
                            ],
                          }}
                        />
                      </li>
                      <li className="listStyles">
                        <TextColourizer
                          text="Active - Herald's Call: Crushing The Eye of The Herald instigates a 1s channel to summon an allied Rift Herald that sieges enemy structures. This channel cannot be interrupted by any means. Herald's Call goes on a 3s cooldown if the holder of The Eye is in combat with non-minion units."
                          colourMap={{
                            [mainColour.purple]: [
                              "The Eye of The Herald",
                              "Rift Herald",
                            ],
                            [mainColour.blue]: ["1s channel", "3s cooldown"],
                          }}
                        />
                      </li>
                      <li className="listStyles">
                        <TextColourizer
                          text="Duration: 240s"
                          colourMap={{
                            [mainColour.blue]: ["240s"],
                          }}
                        />
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </Grid>

            {/* EFFECT ITEM: EMPOWERED RECALL */}
            <Grid item>
              <Grid
                container
                spacing={3}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  paddingLeft: 20,
                }}
              >
                <Grid item>
                  <ImageAsset alt="empoweredrecall.svg" />
                </Grid>
                <Grid item style={{ width: 770 }}>
                  <Typography className="effectsSubHeaderStyle">
                    Empowered Recall
                  </Typography>
                  <div className="effectsStyles">
                    <ul style={{ marginTop: 5, marginLeft: -18 }}>
                      <li className="listStyles">
                        <TextColourizer
                          text="After 0.5s cast time, channel for 4s to blink to their team’s fountain if not interrupted."
                          colourMap={{
                            [mainColour.blue]: ["0.5s cast time", "4s"],
                          }}
                        />
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MonsterWrapper>
  );
};
