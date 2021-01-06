import { Typography, Grid, Collapse } from "@material-ui/core";
import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/ReduxTypes";
import { ImageAsset } from "../components/ImageAsset";
import { InfoHeader } from "../layout/InfoHeader";
import { ColouredList } from "../layout/ColouredList";
import { monsterDetailsConstants } from "../styles/dimension";
import { MonsterWrapper } from "../components/InfoCardComponents (no longer used)/Baron";

export const MonsterDetails: FC = () => {
  const { selectedMonster } = useSelector((state: RootState) => state.monsters);
  const { overview } = selectedMonster!;
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  const handleClick = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  return (
    <MonsterWrapper>
      <InfoHeader title="Overview" handleArrowClick={handleClick} />
      <Collapse in={isPanelOpen}>
        <div className="overviewContainer">
          <ColouredList listItems={overview!} />
        </div>
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: monsterDetailsConstants.statsMarginTop,
            marginLeft: monsterDetailsConstants.statsMarginLeft,
            marginBottom: monsterDetailsConstants.statsMarginBottom,
          }}
        >
          {/* BOUNTY */}

          <Grid item xs={3}>
            <Typography className="overViewSubTextStyling">Bounty</Typography>
            <Grid style={{ display: "flex", flexDirection: "row" }}>
              <ImageAsset alt="line2.svg" />
              <Grid
                container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: monsterDetailsConstants.statsColumnMarginLeft,
                }}
              >
                <Grid item>
                  {/* Gold */}
                  <Grid container className="bountyStyles">
                    <Grid item xs={2}>
                      {/* Gold word */}
                      <Typography className="greyText"> Gold </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "center" }}>
                      {/* Gold icon */}
                      <ImageAsset alt="gold.svg" />
                    </Grid>
                    <Grid item xs={4}>
                      {/* Gold value */}
                      <Typography className="textColorStylingYellow">
                        {" "}
                        {selectedMonster?.bounty?.gold}{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  {/* EXP 1 */}
                  <Grid container className="bountyStyles">
                    <Grid item xs={2}>
                      {/* EXP word */}
                      <Typography className="greyText"> EXP </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "center" }}>
                      {/* EXP icon */}
                      <ImageAsset alt="exp.svg" />
                    </Grid>
                    <Grid item xs={4}>
                      {/* EXP value */}
                      <Typography> {selectedMonster?.bounty?.exp} </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  {/* CS */}
                  <Grid container className="bountyStyles">
                    <Grid item xs={2}>
                      {/* CS word */}
                      <Typography className="greyText"> CS </Typography>
                    </Grid>
                    <Grid item xs={4} style={{ textAlign: "center" }}>
                      {/* CS icon */}
                      <ImageAsset alt="cs.svg" />
                    </Grid>
                    <Grid item xs={4}>
                      {/* CS value */}
                      <Typography> {selectedMonster?.bounty?.cs} </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          {/* STATISTICS */}
          <Grid item xs={6}>
            <Typography className="overViewSubTextStyling">
              Statistics
            </Typography>
            <Grid style={{ display: "flex", flexDirection: "row" }}>
              <ImageAsset alt="line2.svg" />
              <Grid
                container
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: monsterDetailsConstants.statsColumnMarginLeft,
                }}
              >
                <Grid item>
                  {/* STAT COL 1 */}
                  <Grid container className="bountyStyles">
                    <Grid item xs={4}>
                      {/* HP */}

                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {" "}
                        <ImageAsset alt="heart.svg" />
                        <span className="textColorStylingGreen">
                          {selectedMonster?.stats?.health}
                        </span>{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      {/* ATK */}

                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <ImageAsset alt="physicaldamage.svg" />{" "}
                        <span className="textColorStylingOrange">
                          {" "}
                          {selectedMonster?.stats.attackDamage}
                        </span>{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      {/* DEF */}

                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <ImageAsset alt="shield_orange.svg" />
                        <span className="textColorStylingOrange">
                          {" "}
                          {selectedMonster?.stats.armor}{" "}
                        </span>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  {/* STAT COL 2 */}
                  <Grid container className="bountyStyles">
                    <Grid item xs={4}>
                      {/* REGEN */}

                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <ImageAsset alt="hpregeneration.svg" />{" "}
                        <span className="textColorStylingGreen">
                          {selectedMonster?.stats.healthRegen || "-"}
                        </span>{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      {/* ATK.SPD */}

                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <ImageAsset alt="attackspd.svg" />{" "}
                        <span className="textColorStylingOrange">
                          {selectedMonster?.stats.attackSpeed}{" "}
                        </span>{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      {/* MR */}
                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <ImageAsset alt="shield_blue.svg" />{" "}
                        <span className="textColorStylingBlue">
                          {selectedMonster?.stats.magicResist}
                        </span>{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  {/* STAT COL 3 */}
                  <Grid container className="bountyStyles">
                    <Grid item xs={4}>
                      {/* SPEED */}
                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <ImageAsset alt="movement.svg" />{" "}
                        <span className="textColorStylingPurple">
                          {selectedMonster?.stats.movSpeed}
                        </span>{" "}
                      </Typography>{" "}
                    </Grid>
                    <Grid item xs={4}>
                      {/* RANGE */}
                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <ImageAsset alt="range.svg" />{" "}
                        <span className="textColorStylingWhite">
                          {selectedMonster?.stats.range}
                        </span>{" "}
                      </Typography>{" "}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* SPAWN */}
          {/* TODO: negative marginLeft is to move Spawn section more to the left. 
                  We can edit/remove this when we solve the overlapping text issue */}
          <Grid
            item
            xs={3}
            style={{
              marginLeft: monsterDetailsConstants.spawnSectionMarginRight,
            }}
          >
            <Typography className="overViewSubTextStyling">Spawn</Typography>
            <Grid style={{ display: "flex", flexDirection: "row" }}>
              {" "}
              <ImageAsset alt="line2.svg" />
              <Grid
                container
                className="bountyStyles"
                style={{
                  marginLeft:
                    monsterDetailsConstants.statsColumnItemsMarginLeft,
                }}
              >
                <Grid container className="bountyStyles">
                  <Grid item xs={4}>
                    <Typography className="greyText">Initial</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      marginLeft:
                        monsterDetailsConstants.statsColumnItemsMarginLeft,
                    }}
                  >
                    <Typography>
                      {selectedMonster?.location?.initial}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container className="bountyStyles">
                  <Grid item xs={4}>
                    <Typography className="greyText">Respawn</Typography>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    style={{
                      marginLeft:
                        monsterDetailsConstants.statsColumnItemsMarginLeft,
                    }}
                  >
                    <Typography>
                      {selectedMonster?.location?.respawn}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Collapse>
    </MonsterWrapper>
  );
};
