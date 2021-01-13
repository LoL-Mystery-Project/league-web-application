import { Typography, Grid, Collapse } from "@material-ui/core";
import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/ReduxTypes";
import { ImageAsset } from "../components/ImageAsset";
import { InfoHeader } from "../layout/InfoHeader";
import { ColouredList } from "../layout/ColouredList";
import { monsterDetailsConstants } from "../styles/dimension";
import { MonsterWrapper } from "../components/InfoCardComponents (no longer used)/Baron";
import { MonsterVariant } from "./MonsterTypes";
import { MonsterSelect } from "../layout/MonsterSelect";

interface MonsterDetailsProps {
  monsterVariant: MonsterVariant;
  selectedVariant?: number;
  setSelectedVariant?: (index: number) => void;
}

export const MonsterDetails: FC<MonsterDetailsProps> = ({
  monsterVariant,
  selectedVariant,
  setSelectedVariant,
}) => {
  const { selectedMonster } = useSelector((state: RootState) => state.monsters);
  const { overview } = selectedMonster!;
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const healthCharacterCount = monsterVariant?.stats?.health.length ?? 0;
  const attackCharacterCount = monsterVariant?.stats.attackDamage.length ?? 0;
  const isOverCharLimit = healthCharacterCount > 12 ? true : false;
  const firstColumnSize = isOverCharLimit ? 6 : 4;
  const secondColumnSize = isOverCharLimit ? 3 : 3;
  const thirdColumnSize = isOverCharLimit ? 3 : 2;
  const secondColumnMarginLeft = healthCharacterCount > 12 ? 20 : 0;
  const thirdColumnMarginLeft = attackCharacterCount > 5 ? 20 : 0;
  const initialCharacterCount = monsterVariant?.location?.initial.length ?? 0;
  const isOverInitialCharLimit = initialCharacterCount > 10 ? true : false;
  const spawnColumnMarginLeft = isOverInitialCharLimit ? -40 : -30;
  const spawnFirstColumnSize = isOverInitialCharLimit ? 7 : 4;
  const spawnInitialMarginTop = isOverInitialCharLimit ? 6 : 0;
  const initialTextMarginBottom = isOverInitialCharLimit ? 19 : 0;

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
          {selectedMonster && selectedMonster.hasVariants && (
            <Grid item xs={12} style={{ marginTop: -5, marginBottom: 30 }}>
              <MonsterSelect
                variants={selectedMonster!.details}
                value={selectedVariant!}
                setSelectedVariant={setSelectedVariant!}
              />
            </Grid>
          )}
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
                        {monsterVariant?.bounty?.gold}{" "}
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
                      <Typography> {monsterVariant?.bounty?.exp} </Typography>
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
                      <Typography> {monsterVariant?.bounty?.cs} </Typography>
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
                    <Grid item xs={firstColumnSize}>
                      {/* HP */}

                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        {" "}
                        <ImageAsset alt="heart.svg" />
                        <span className="textColorStylingGreen">
                          {monsterVariant?.stats?.health}
                        </span>{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={secondColumnSize}>
                      {/* ATK */}

                      <Typography
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: secondColumnMarginLeft,
                        }}
                      >
                        <ImageAsset alt="physicaldamage.svg" />{" "}
                        <span className="textColorStylingOrange">
                          {" "}
                          {monsterVariant?.stats.attackDamage}
                        </span>{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={thirdColumnSize}>
                      {/* DEF */}

                      <Typography
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: thirdColumnMarginLeft,
                        }}
                      >
                        <ImageAsset alt="shield_orange.svg" />
                        <span className="textColorStylingOrange">
                          {" "}
                          {monsterVariant?.stats.armor}{" "}
                        </span>
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  {/* STAT COL 2 */}
                  <Grid container className="bountyStyles">
                    <Grid item xs={firstColumnSize}>
                      {/* REGEN */}

                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <ImageAsset alt="hpregeneration.svg" />{" "}
                        <span className="textColorStylingGreen">
                          {monsterVariant?.stats.healthRegen || "-"}
                        </span>{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={secondColumnSize}>
                      {/* ATK.SPD */}

                      <Typography
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: secondColumnMarginLeft,
                        }}
                      >
                        <ImageAsset alt="attackspd.svg" />{" "}
                        <span className="textColorStylingOrange">
                          {monsterVariant?.stats.attackSpeed}{" "}
                        </span>{" "}
                      </Typography>
                    </Grid>
                    <Grid item xs={thirdColumnSize}>
                      {/* MR */}
                      <Typography
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: thirdColumnMarginLeft,
                        }}
                      >
                        <ImageAsset alt="shield_blue.svg" />{" "}
                        <span className="textColorStylingBlue">
                          {monsterVariant?.stats.magicResist}
                        </span>{" "}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  {/* STAT COL 3 */}
                  <Grid container className="bountyStyles">
                    <Grid item xs={firstColumnSize}>
                      {/* SPEED */}
                      <Typography
                        style={{ display: "flex", alignItems: "center" }}
                      >
                        <ImageAsset alt="movement.svg" />{" "}
                        <span className="textColorStylingPurple">
                          {monsterVariant?.stats.movSpeed}
                        </span>{" "}
                      </Typography>{" "}
                    </Grid>
                    <Grid item xs={secondColumnSize}>
                      {/* RANGE */}
                      <Typography
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginLeft: secondColumnMarginLeft,
                        }}
                      >
                        <ImageAsset alt="range.svg" />{" "}
                        <span className="textColorStylingWhite">
                          {monsterVariant?.stats.range}
                        </span>{" "}
                      </Typography>{" "}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          {/* SPAWN */}
          <Grid item xs={3} style={{ marginLeft: spawnColumnMarginLeft }}>
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
                <Grid
                  container
                  className="bountyStyles"
                  style={{ marginTop: spawnInitialMarginTop }}
                >
                  <Grid item xs={4}>
                    <Typography
                      className="greyText"
                      style={{ marginBottom: initialTextMarginBottom }}
                    >
                      Initial
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={spawnFirstColumnSize}
                    style={{
                      marginLeft:
                        monsterDetailsConstants.statsColumnItemsMarginLeft,
                    }}
                  >
                    <Typography className="spawnInfo">
                      {monsterVariant?.location?.initial}
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
                    <Typography>{monsterVariant?.location?.respawn}</Typography>
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
