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

        {/* ABILITIES */}
        <Grid>
          {/* ABILITIES LINE SEPARATOR */}
          <Grid item style={{ paddingTop: 10 }}>
            <ImageAsset alt="line.svg" />
          </Grid>

          {/* ABILITIES HEADER */}
          <Typography style={{ paddingTop: 20 }} className="infoHeaderText">
            Abilities
          </Typography>

          {/* ABILITIES SUBHEADER: BASIC ATTACKS */}
          <Typography
            style={{ paddingTop: 20, paddingBottom: 20 }}
            className="abilitiesTitleStyle"
          >
            Basic Attacks
          </Typography>

          {/* BASIC ATTACKS: MELEE ATTACK */}
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
                <ImageAsset alt="unknown.svg" />
              </Grid>
              <Grid item style={{ width: 770 }}>
                <Typography className="abilitiesSubHeaderStyle">
                  Melee Attack
                </Typography>
                <div className="effectsStyles">
                  <ul style={{ marginTop: 5, marginLeft: -18 }}>
                    <li className="listStyles">
                      <TextColourizer
                        text="Rift Herald’s basic attacks deal 4% of target’s current health as bonus physical damage."
                        colourMap={{
                          [mainColour.purple]: ["Rift Herald"],
                          [mainColour.green]: ["4% of target’s current health"],
                          [mainColour.orange]: ["bonus physical damage"],
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Grid>

          {/* ABILITIES SUBHEADER: PASSIVES */}
          <Typography
            style={{ paddingTop: 20, paddingBottom: 20 }}
            className="abilitiesTitleStyle"
          >
            Passives
          </Typography>

          {/* PASSIVES: MOUNTROUS TOUGHNESS */}
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
                <ImageAsset alt="unknown.svg" />
              </Grid>
              <Grid item style={{ width: 770 }}>
                <Typography className="abilitiesSubHeaderStyle">
                  Mountrous Toughness
                </Typography>
                <div className="effectsStyles">
                  <ul style={{ marginTop: 5, marginLeft: -18 }}>
                    <li className="listStyles">
                      <TextColourizer
                        text="Effects that deal damage based on Rift Herald's health and are not usually capped, are capped at 50 damage."
                        colourMap={{
                          [mainColour.purple]: ["Rift Herald"],
                          [mainColour.green]: ["health"],
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Grid>

          {/* PASSIVES: WARPED ARMOUR */}
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
                <ImageAsset alt="warpedarmor.svg" />
              </Grid>
              <Grid item style={{ width: 770 }}>
                <Typography className="abilitiesSubHeaderStyle">
                  Warped Armour
                </Typography>
                <div className="effectsStyles">
                  <ul style={{ marginTop: 5, marginLeft: -18 }}>
                    <li className="listStyles">
                      <TextColourizer
                        text="Rift Herald is immune to all disabling debuffs."
                        colourMap={{
                          [mainColour.purple]: ["Rift Herald"],
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Grid>

          {/* PASSIVES: THE EYE OF BARON */}
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
                <ImageAsset alt="theeyeofbaron.svg" />
              </Grid>
              <Grid item style={{ width: 770 }}>
                <Typography className="abilitiesSubHeaderStyle">
                  The Eye of Baron
                </Typography>
                <div className="effectsStyles">
                  <ul style={{ marginTop: 5, marginLeft: -18 }}>
                    <li className="listStyles">
                      <TextColourizer
                        text="Rift Herald has a vulnerable eye on her back, which makes champion basic attacks against it deal 12% of Rift Herald's maximum health as bonus true damage."
                        colourMap={{
                          // [mainColour.green]: ["12% of Rift Herald's maximum health"],
                          [mainColour.purple]: ["Rift Herald"],
                          [mainColour.orange]: ["bonus true damage"],
                        }}
                      />
                    </li>
                    <li className="listStyles">
                      <TextColourizer
                        text="When the eye is hit, it closes for 10s, reduced by 2.5s every time she is struck by a champion's basic attack."
                        colourMap={{
                          [mainColour.blue]: ["10s", "2.5s"],
                        }}
                      />
                    </li>
                    <li className="listStyles">
                      <TextColourizer
                        text="The eye doesn't open more than once every 3s or if the Rift Herald is below 15% maximum health."
                        colourMap={{
                          [mainColour.purple]: ["Rift Herald"],
                          [mainColour.green]: ["health"],
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Grid>

          {/* ABILITIES SUBHEADER: ACTIVES */}
          <Typography
            style={{ paddingTop: 20, paddingBottom: 20 }}
            className="abilitiesTitleStyle"
          >
            Actives
          </Typography>

          {/* ACTIVES: CHARGE */}
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
                <ImageAsset alt="unknown.svg" />
              </Grid>
              <Grid item style={{ width: 770 }}>
                <Typography className="abilitiesSubHeaderStyle">
                  Charge
                </Typography>
                <div className="effectsStyles">
                  <ul style={{ marginTop: 5, marginLeft: -18 }}>
                    <li className="listStyles">
                      <TextColourizer
                        text="At the start of the fight, Rift Herald winds up and charges forward, knocking aside enemies she passes through and damaging them for 200% AD physical damage."
                        colourMap={{
                          [mainColour.purple]: ["Rift Herald"],
                          [mainColour.orange]: ["200% AD physical damage"],
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Grid>

          {/* ACTIVES: SWIPE */}
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
                <ImageAsset alt="unknown.svg" />
              </Grid>
              <Grid item style={{ width: 770 }}>
                <Typography className="abilitiesSubHeaderStyle">
                  Swipe
                </Typography>
                <div className="effectsStyles">
                  <ul style={{ marginTop: 5, marginLeft: -18 }}>
                    <li className="listStyles">
                      <TextColourizer
                        text="At 65.75% and 32.75% of Rift Herald's maximum health, she winds up for an attack that deals 300% AD physical damage in a cone in front of her."
                        colourMap={{
                          [mainColour.green]: [
                            "65.75%",
                            "32.75% of Rift Herald's maximum health",
                          ],
                          [mainColour.orange]: ["300% AD physical damage"],
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
    </MonsterWrapper>
  );
};
