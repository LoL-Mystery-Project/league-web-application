import React, { FC, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { mainColour } from "../../styles/palette";
import styled from "styled-components";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { ImageAsset } from "../ImageAsset";
import { MonsterDetails } from "../MonsterDetails";

const StyledTabs = withStyles({
  root: {
    color: mainColour.white,
  },
})(Tabs);

const useStyles = makeStyles({
  indicator: {
    color: mainColour.blue,
  },
  root: {
    color: mainColour.white,
    fontFamily: "Friz Quadrata",
  },
  footerText: {
    fontFamily: "Friz Quadrata",
    fontSize: 20,
    textTransform: "none",
  },
});

export const MonsterWrapper = styled.div`
  .infoHeaderText {
    font-family: Friz Quadrata;
    font-size: 30px;
    color: ${mainColour.yellow};
  }

  .infoText {
    font-size: 16px;
    color: ${mainColour.white};
  }

  .greyText {
    font-family: Friz Quadrata;
    font-size: 16px;
    color: ${mainColour.grey};
  }

  .overViewSubTextStyling {
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    display: flex;
    align-items: center;

    /* yellow/main */
    color: #b67f15;
  }
  .effectsDescription {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    align-items: center;

    /* grey/main */
    color: #808080;
  }
  .effectsSubHeaderStyle {
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    display: flex;
    align-items: center;

    /* purple/main */
    color: ${mainColour.purple};
  }

  .abilitiesTitleStyle {
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    display: flex;
    align-items: center;

    /* yellow/main */
    color: ${mainColour.yellow};
  }

  .SubAbilitiesStyle {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 15px;
    white-space: nowrap;
  }

  .abilitiesSubHeaderStyle {
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 18px;
    display: flex;
    align-items: center;

    /* purple/main */
    color: ${mainColour.white};
  }

  .textColorStylingOrange {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: ${mainColour.orange};
  }
  .textColorStylingBlue {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: ${mainColour.blue};
  }
  .textColorStylingYellow {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: ${mainColour.yellow};
  }
  .textColorStylingPurple {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: ${mainColour.purple};
  }

  .textColorStylingGreen {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: ${mainColour.green};
  }

  .textColorStylingWhite {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;

    color: ${mainColour.white};
  }

  .leftBorder {
    position: absolute;
  }

  .bountyStyles {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 34px;
    white-space: nowrap;
  }

  .listStyles {
    margin-left: -20px;
  }

  .effectsStyles {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 15px;
    margin-right: 15px;
  }
`;

interface BaronProps {}

export const Baron: FC<BaronProps> = ({}) => {
  const classes = useStyles();
  const [baronData, setBaronData] = useState<any>({});

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("http://localhost:5000/monsters");
        const json = await response.json();
        const baron = json.find((elem: any) => elem.name === "Baron Nashor");
        setBaronData(baron);
      } catch {
        // do nothing, API call failed.
      }
    })();
  }, []);

  useEffect(() => {
    if (baronData) {
      console.log(baronData);
    }
  }, [baronData]);

  return (
    <MonsterWrapper>
      <Grid container style={{ display: "flex", flexDirection: "column" }}>
        {/* OVERVIEW: BOUNTY, STATISTICS, SPAWN */}
        <Grid item>
          <MonsterDetails />
        </Grid>
        {/* EFFECTS: HEADER AND INFO */}
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
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="handofbaron.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="effectsSubHeaderStyle">
                    Hand of Baron
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        Gives
                        <span className="textColorStylingOrange">
                          {" "}
                          12 - 48 (based on minutes) attack damage{" "}
                        </span>
                        and{" "}
                        <span className="textColorStylingBlue">
                          20 - 80 (based on minutes) ability power
                        </span>{" "}
                        determined   by the time the{" "}
                        <span className="textColorStylingYellow">Baron</span> is
                        slain.
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="empoweredrecall.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="effectsSubHeaderStyle">
                    Empowered Recall
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        After{" "}
                        <span className="textColorStylingBlue">
                          0.5s cast time
                        </span>
                        , channel for{" "}
                        <span className="textColorStylingBlue">4s</span> to
                        blink to their team’s fountain if not interrupted.
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="unknown.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="effectsSubHeaderStyle">
                    Aura - Empowered Minions
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        Nearby allied minions gain: Slow Resist,{" "}
                        <span className="textColorStylingBlue">
                          75% damage reduction
                        </span>
                        from area of effect and damage over time   abilities and
                        attacks (except for Super Minions),{" "}
                        <span className="textColorStylingPurple">
                          bonus movement speed
                        </span>{" "}
                        equal to{" "}
                        <span className="textColorStylingPurple">
                          90% averaged movement speed
                        </span>{" "}
                        of all nearby champions, capped at{" "}
                        <span className="textColorStylingPurple">500</span>.{" "}
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
          </Grid>
        </Grid>

        {/* ABILITIES */}
        <Grid>
          {/* ABILITIES LINE SEPARATOR */}
          <Grid item style={{ paddingTop: 10 }}>
            <ImageAsset alt="line.svg" />
          </Grid>
          {/* ABILITES HEADER */}
          <Typography className="infoHeaderText">Abilities</Typography>
          {/* ABILITIES INFO - BASIC ATTACKS*/}
          <Grid>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 15,
              }}
            >
              <Typography className="abilitiesTitleStyle">
                Basic Attacks
              </Typography>
              <Typography
                className="effectsDescription"
                style={{ marginLeft: 25 }}
              >
                Baron will attack the unit closest to him
              </Typography>
            </div>
          </Grid>
          <Grid
            container
            spacing={1}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="unknown.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="abilitiesSubHeaderStyle">
                    Melee Attack
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        If the target is in front of
                        <span className="textColorStylingPurple">
                          {" "}
                          Baron Nashor{" "}
                        </span>
                        within about melee range, he occasionally uses a Melee
                        attack instead of a Ranged attack, dealing{" "}
                        <span className="textColorStylingOrange">
                          100% AD physical damage
                        </span>{" "}
                        to the target and{" "}
                        <span className="textColorStylingOrange">
                          50% AD physical damage
                        </span>{" "}
                        to nearby units.
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="unknown.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="abilitiesSubHeaderStyle">
                    Ranged Attack
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        If the target is in front of
                        <span className="textColorStylingPurple">
                          {" "}
                          Baron Nashor{" "}
                        </span>
                        , he deals{" "}
                        <span className="textColorStylingOrange">
                          100% AD physical damage
                        </span>{" "}
                        to the target and applies two stack of Voracious
                        Corrosion{" "}
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="unknown.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="abilitiesSubHeaderStyle">
                    Single-target Rear Attack
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        If the target is behind
                        <span className="textColorStylingPurple">
                          {" "}
                          Baron Nashor{" "}
                        </span>
                        , he erects a spike that deals{" "}
                        <span className="textColorStylingOrange">
                          100% AD physical damage
                        </span>{" "}
                        to the target.{" "}
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
          </Grid>

          {/* ABILITIES INFO - PASSIVES*/}
          <Grid>
            <div
              style={{
                marginTop: 15,
              }}
            >
              <Typography className="abilitiesTitleStyle">Passives</Typography>
            </div>
          </Grid>
          <Grid
            container
            spacing={1}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="unknown.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="abilitiesSubHeaderStyle">
                    Presence of the Baron
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        While Baron Nashor is alive, all obstructing Champion,
                        Pets and Wards that are on top of him are pushed to a
                        location in front of him. Baron Nashor is immune to
                        Ghost effects (ghosted units cannot pass through him).
                      </Typography>
                    </li>
                    <li className="listStyles">
                      <Typography>
                        Upon spawning, Baron Nashor knocks back all units that
                        are within his collision radius
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="unknown.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="abilitiesSubHeaderStyle">
                    Debuff Immunity
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        Immune to all forms of crowd control except stasis.
                        Additionally, Baron Nashor's stats cannot be reduced by
                        any means.
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="unknown.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="abilitiesSubHeaderStyle">
                    Baron's Gaze
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        Baron Nashor has 50% damage reduction from the unit that
                        it has most recently basic attacked for 8s, reduced to
                        4.5s after Baron Nashor is slain.
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="unknown.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="abilitiesSubHeaderStyle">
                    Voracious Corrosion
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        Reduces the target's armor and magic resistence by 0.5,
                        stacking up to 100 times for a total of 50 maximum
                        resistences reduction. Lasts for 8s, reduced to 4.5s
                        after Baron Nashor is slain.
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="unknown.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="abilitiesSubHeaderStyle">
                    Void Corruption
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        Basic attacks cause another burst of 60 (+ 20% AD) bonus
                        magic damage that can occur every 0.75s. This attack
                        targets the nearest champion with the lowest number of
                        Voracious Corrosion stacks, applying another stack.
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
          </Grid>

          {/* ABILITIES INFO - ACTIVES*/}
          <Grid>
            <div
              style={{
                marginTop: 15,
              }}
            >
              <Typography className="abilitiesTitleStyle">Actives</Typography>
            </div>
          </Grid>
          <Grid
            container
            spacing={1}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="unknown.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="abilitiesSubHeaderStyle">
                    Acid Pool
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        After winding up for 2s, Baron Nashor spits out 3 pools
                        of acid in a cone in front of him, landing over 0.75s
                        and dealing 10% AD magic damage to all champions upon
                        impact as well as creating a field for 2.5s that slows
                        by 50%.
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="unknown.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="abilitiesSubHeaderStyle">
                    Acid Shot
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        After winding up for 2s, Baron Nashor spits acid down a
                        straight line over 2s, dealing 20% AD magic damage to
                        all units it hits.
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="unknown.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="abilitiesSubHeaderStyle">
                    Tentacle Knockup
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        Baron Nashor summons a tremor beneath the target's
                        location that erupts with a tentacle after 1.25s,
                        dealing 25% AD magic damage to units within and knocking
                        them up for a duration based on their proximity to the
                        areas center. Units near the area's edge are also
                        slightly knocked away.
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
            <Grid item>
              <div className="effectsStyles">
                <ImageAsset alt="unknown.svg" />
                <span style={{ paddingLeft: 20, paddingTop: 30 }}>
                  <Typography className="abilitiesSubHeaderStyle">
                    Area-of-Effect Rear Attack
                  </Typography>
                  <ul style={{ margin: 0 }}>
                    <li className="listStyles">
                      <Typography>
                        Erects a cluster of spikes dealing 50% AD physical
                        damage and stunning for 0.5s
                      </Typography>
                    </li>
                  </ul>
                </span>
              </div>
            </Grid>
          </Grid>
        </Grid>

        {/* Strategy */}
        <Grid>
          <Grid item style={{ paddingTop: 10 }}>
            <ImageAsset alt="line.svg" />
          </Grid>
          {/* STRATEGY HEADER */}
          <Typography className="infoHeaderText">Strategy</Typography>
          <Grid>
            <ul style={{ margin: 10 }}>
              <li className="listStyles">
                <Typography>
                  Baron Nashor is a highly coveted objective that is difficult
                  to fight without proper strength and personnel. A tank to
                  endure the damage is almost always required, otherwise there
                  are few champions that can battle the monster
                  self-sufficiently, mainly utilizing immense sustainability and
                  DPS.
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>

        {/* TRIVIA */}
        <Grid>
          <Grid item style={{ paddingTop: 10 }}>
            <ImageAsset alt="line.svg" />
          </Grid>
          {/* TRIVIA HEADER */}
          <Typography className="infoHeaderText">Trivia</Typography>
          <Grid className="listStyles">
            <ul style={{ margin: 10 }}>
              <li>
                <Typography>
                  During Snowdown Showdown 2012, players could earn a summoner
                  icon featuring old Baron Nashor's main head with a santa hat
                  on Baron Nashor's main head with a santa hat on.
                </Typography>
              </li>
              <li>
                <Typography>
                  Nashor is an anagram for Roshan, being a tribute to the
                  monster filling a similar role in Defense of the Ancients.
                </Typography>
              </li>
              <li>
                <Typography>
                  A box labeled 'Baron Acid' can be seen in the preview video
                  for the launch of the League of Legends' Mac Version.
                </Typography>
              </li>
              <li>
                <Typography>
                  Old Baron Nashor's skull was placed within his modern
                  counterpart's pit in patch V5.7.
                </Typography>
              </li>
              <li>
                <Typography>
                  In the Death Recap screen, Voracious Corrosion is labeled as
                  'WormAttack' and Wrath of the Ancients 'wrathdamage'.
                </Typography>
              </li>
              <li>
                <Typography>
                  Voracious Corrosion old icon was recycled from Tabu's Soul
                  Drain.
                </Typography>
              </li>
              <li>
                <Typography>
                  If Baron and Elder Dragon Elder Dragon had a duel, Baron
                  Nashor will lose. Elder Dragon's HP regen is so high (250
                  HP/s) that Baron can't even deal damage to him.
                </Typography>
              </li>
            </ul>
          </Grid>
        </Grid>

        {/* FOOTER */}
        <Grid>
          <Grid item style={{ paddingTop: 10 }}>
            <ImageAsset alt="line.svg" />
          </Grid>

          <StyledTabs
            // value={value}
            // onChange={handleChange}
            indicatorColor="primary"
            centered
          >
            <Tab
              disableRipple
              label={
                <Typography className={classes.footerText}>Overview</Typography>
              }
            />
            <Tab
              disableRipple
              label={
                <Typography className={classes.footerText}>Effects</Typography>
              }
            />
            <Tab
              disableRipple
              label={
                <Typography className={classes.footerText}>
                  Abilities
                </Typography>
              }
            />
            <Tab
              disableRipple
              label={
                <Typography className={classes.footerText}>Strategy</Typography>
              }
            />
            <Tab
              disableRipple
              label={
                <Typography className={classes.footerText}>Trivia</Typography>
              }
            />
          </StyledTabs>

          <Grid style={{ paddingTop: 30, textAlign: "center" }}>
            <ImageAsset alt="ender.svg" />
          </Grid>
        </Grid>
      </Grid>
    </MonsterWrapper>
  );
};
