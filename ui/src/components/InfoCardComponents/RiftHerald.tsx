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

        {/* SUMMONED LINE SEPARATOR */}
        <Grid item style={{ paddingTop: 10 }}>
          <ImageAsset alt="line.svg" />
        </Grid>

        <Grid item>
          {/* SUMMONED HEADER */}
          <Typography style={{ paddingTop: 20 }} className="infoHeaderText">
            Summoned
          </Typography>

          {/* SUMMONED BULLET POINTS */}
          <ul style={{ width: 820 }}>
            <li className="listStyles">
              <TextColourizer
                text="The Eye of The Herald can be crushed to summon Rift Herald (with different stats, effects and abilities than pit Herald) that relentlessly pushes her way to the enemy Nexus."
                colourMap={{
                  [mainColour.purple]: ["The Eye of The Herald", "Rift Herald"],
                }}
              />
            </li>
            <br />
            <li className="listStyles">
              She heads to the closest lane and starts pushing it.
            </li>
            <br />
            <li className="listStyles">
              She focuses mainly on the closest minions and targetable
              structures.
            </li>
            <br />
            <li className="listStyles">
              She only targets champions if they attack her first.
            </li>
            <br />
            <li className="listStyles">
              <TextColourizer
                text="Her level is the average of the levels of the champions of both teams the moment The Eye is picked up."
                colourMap={{
                  [mainColour.purple]: ["The Eye"],
                }}
              />
            </li>
            <br />
            <li className="listStyles">
              The summoner receives full gold credit by her, including kills on
              minions or champions and destroyed turret plates.
            </li>
            <br />
          </ul>
        </Grid>

        <Grid item>
          {/* SUMMONED SUBHEADER: BASIC ATTACKS */}
          <Typography
            style={{ paddingTop: 20, paddingBottom: 20 }}
            className="abilitiesTitleStyle"
          >
            Basic Attacks
          </Typography>

          {/* BASIC ATTACKS: MELEE ATTACK */}
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
                      text="Her basic attacks deal 1.75% of Herald's current health as bonus physical damage."
                      colourMap={{
                        [mainColour.green]: [
                          "1.75% of Herald's current health",
                        ],
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
        <Grid item>
          <Typography
            style={{ paddingTop: 20, paddingBottom: 20 }}
            className="abilitiesTitleStyle"
          >
            Passives
          </Typography>

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
                        text="Every 3s, the eye on Rift Herald's back will open. Champion basic attacks against the eye deal 40% of Rift Herald's maximum health as bonus true damage."
                        colourMap={{
                          [mainColour.green]: [
                            "3s",
                            "40% of Rift Herald's maximum health",
                          ],
                          [mainColour.purple]: ["Rift Herald"],
                          [mainColour.orange]: ["bonus true damage"],
                        }}
                      />
                    </li>
                  </ul>
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          {/* SUMMONED SUBHEADER: ACTIVES */}
          <Typography
            style={{ paddingTop: 20, paddingBottom: 20 }}
            className="abilitiesTitleStyle"
          >
            Actives
          </Typography>

          {/* ACTIVES: LEAP ATTACK */}
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
                Leap Attack
              </Typography>
              <div className="effectsStyles">
                <ul style={{ marginTop: 5, marginLeft: -18 }}>
                  <li className="listStyles">
                    <TextColourizer
                      text="When Rift Herald approaches a targetable structure, she winds up for a few seconds and leaps into melee range, dealing 2000 − 2750 true damage to the structure, 200% AD physical damage to nearby champions and 66% of her current health as true damage to herself if she damaged the structure."
                      colourMap={{
                        [mainColour.purple]: ["Rift Herald"],
                        [mainColour.green]: ["66% of her current health"],
                        [mainColour.orange]: [
                          "2000 − 2750 true damage",
                          "200% AD physical damage",
                          "true damage",
                        ],
                      }}
                    />
                  </li>
                  <li className="listStyles">
                    <Typography>
                      She is displacement immune during the wind up and the
                      leap.
                    </Typography>
                  </li>
                  <li className="listStyles">
                    <TextColourizer
                      text="If the Rift Herald's current target dies while winding up, she will switch to charge toward the nearest target. If there is no nearby target, she will not cancel her charge."
                      colourMap={{
                        [mainColour.purple]: ["Rift Herald"],
                      }}
                    />
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>

          {/* ACTIVES: ENRAGE */}
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
                Enrage
              </Typography>
              <div className="effectsStyles">
                <ul style={{ marginTop: 5, marginLeft: -18 }}>
                  <li className="listStyles">
                    <TextColourizer
                      text="At 65.75% and 32.75% of Rift Herald's maximum health, she winds up for an attack that deals 200% AD physical damage in a cone in front of her."
                      colourMap={{
                        [mainColour.green]: [
                          "65.75%",
                          "32.75% of Rift Herald's maximum health",
                        ],
                        [mainColour.orange]: ["200% AD physical damage"],
                      }}
                    />
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>

          {/* ACTIVES: DUCHESS SMASH */}
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
                Duchess Smash
              </Typography>
              <div className="effectsStyles">
                <ul style={{ marginTop: 5, marginLeft: -18 }}>
                  <li className="listStyles">
                    <Typography>
                      She disables the Reinforced Armor of nearby enemy turrets.
                    </Typography>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Grid>

        {/* STRATEGY LINE SEPARATOR */}
        <Grid item style={{ paddingTop: 10 }}>
          <ImageAsset alt="line.svg" />
        </Grid>

        <Grid item>
          {/* STRATEGY HEADER */}
          <Typography style={{ paddingTop: 20 }} className="infoHeaderText">
            Strategy
          </Typography>

          {/* SUMMONED BULLET POINTS */}
          <ul style={{ width: 820 }}>
            <li className="listStyles">
              <TextColourizer
                text="The summoned Rift Herald has a hefty amount of health and damage and several skills focused on taking down towers. The leap deals the same amount of damage regardless of current health, enabling the Rift Herald to rapidly destroy multiple turrets if left unchallenged."
                colourMap={{
                  [mainColour.purple]: ["Rift Herald"],
                }}
              />
            </li>
            <br />
            <li className="listStyles">
              <TextColourizer
                text="Since a summoned Rift Herald prioritizes minions and structures, it is not possible to distract it from smashing   towers. The only way to stop the Rift Herald is to take it down."
                colourMap={{
                  [mainColour.purple]: ["Rift Herald"],
                }}
              />
            </li>
          </ul>
        </Grid>

        {/* TRIVIA LINE SEPARATOR */}
        <Grid item style={{ paddingTop: 10 }}>
          <ImageAsset alt="line.svg" />
        </Grid>

        <Grid item>
          {/* TRIVIA HEADER */}
          <Typography style={{ paddingTop: 20 }} className="infoHeaderText">
            Trivia
          </Typography>

          {/* TRIVIA BULLET POINTS */}
          <ul style={{ width: 820 }}>
            <li className="listStyles">
              <Typography>
                The Rift Herald was once a Rift Scuttler that has since mutated
                due to the Void energy emanating from Baron Nashor's pit.
              </Typography>
            </li>
            <br />
            <li className="listStyles">
              <Typography>
                In its neutral monster form, the Rift Herald will dance if a
                champion dances nearby. In its summoned form, she will dance she
                is still alive and is near a Nexus (either team) when it is
                destroyed.
              </Typography>
            </li>
            <br />
            <li className="listStyles">
              <Typography>
                The Rift Herald's charge attacks against towers or other
                structures can be blocked by Champions if they stand   between
                the Rift Herald and the attacked structure. This causes the
                charge attack to deal very little damage against the initial
                target but instead damages the blocking champion.
              </Typography>
            </li>
            <br />
            <li className="listStyles">
              <Typography>
                In patch V7.9, it was stated that Rift Heralds were exclusively
                female.
              </Typography>
            </li>
          </ul>
        </Grid>
      </Grid>
    </MonsterWrapper>
  );
};
