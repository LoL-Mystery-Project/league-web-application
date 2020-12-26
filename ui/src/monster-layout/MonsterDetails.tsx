import { Typography, Grid } from "@material-ui/core";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/ReduxTypes";
import { TextColourizer, TextColourizerTypes } from "../utils/TextColourizer";
import { ImageAsset } from "../components/ImageAsset";
import { MonsterWrapper } from "../components/InfoCardComponents/Baron";
import { InfoHeader } from "./InfoHeader";

export const MonsterDetails: FC = () => {
  const { selectedMonster } = useSelector((state: RootState) => state.monsters);
  const { overview } = selectedMonster!;

  return (
    <MonsterWrapper>
      <InfoHeader title="Overview" />
      <div style={{ width: "100%" }}>
        <ul style={{ margin: 0 }}>
          {overview?.map(({ text, colourMap }: TextColourizerTypes, index) => (
            <li key={index}>
              {<TextColourizer text={text} colourMap={colourMap} />}
            </li>
          ))}
        </ul>
      </div>
      <Grid
        container
        spacing={1}
        style={{
          display: "flex",
          flexDirection: "row",
          paddingTop: 30,
          paddingBottom: 20,
        }}
      >
        {/* BOUNTY */}

        <Grid item xs={3}>
          <Typography
            className="overViewSubTextStyling"
            style={{ paddingBottom: 10 }}
          >
            Bounty
          </Typography>
          <Grid style={{ display: "flex", flexDirection: "row" }}>
            <ImageAsset alt="line2.svg" />
            <Grid
              container
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: 15,
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
          <Typography
            className="overViewSubTextStyling"
            style={{ paddingBottom: 10 }}
          >
            Statistics
          </Typography>
          <Grid style={{ display: "flex", flexDirection: "row" }}>
            <ImageAsset alt="line2.svg" />
            <Grid
              container
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: 15,
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
                      <span
                        className="textColorStylingGreen"
                        style={{ paddingLeft: 10 }}
                      >
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
                      <span
                        className="textColorStylingOrange"
                        style={{ paddingLeft: 10 }}
                      >
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
                      <span
                        className="textColorStylingOrange"
                        style={{ paddingLeft: 10 }}
                      >
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
                      <span
                        className="textColorStylingGreen"
                        style={{ paddingLeft: 10 }}
                      >
                        {selectedMonster?.stats.healthRegen || "n/a"}
                      </span>{" "}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    {/* ATK.SPD */}

                    <Typography
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <ImageAsset alt="attackspd.svg" />{" "}
                      <span
                        className="textColorStylingOrange"
                        style={{ paddingLeft: 10 }}
                      >
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
                      <span
                        className="textColorStylingBlue"
                        style={{ paddingLeft: 10 }}
                      >
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
                      <span
                        className="textColorStylingPurple"
                        style={{ paddingLeft: 10 }}
                      >
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
                      <span
                        className="textColorStylingWhite"
                        style={{ paddingLeft: 10 }}
                      >
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
        <Grid item xs={3} style={{ marginLeft: -30 }}>
          <Typography
            className="overViewSubTextStyling"
            style={{ paddingBottom: 10 }}
          >
            Spawn
          </Typography>
          <Grid style={{ display: "flex", flexDirection: "row" }}>
            {" "}
            <ImageAsset alt="line2.svg" />
            <Grid
              container
              className="bountyStyles"
              style={{ paddingLeft: 10 }}
            >
              <Grid container className="bountyStyles">
                <Grid item xs={4}>
                  <Typography className="greyText">Initial</Typography>
                </Grid>
                <Grid item xs={4} style={{ paddingLeft: 10 }}>
                  <Typography>{selectedMonster?.location?.initial}</Typography>
                </Grid>
              </Grid>
              <Grid container className="bountyStyles">
                <Grid item xs={4}>
                  <Typography className="greyText">Respawn</Typography>
                </Grid>
                <Grid item xs={4} style={{ paddingLeft: 10 }}>
                  <Typography>{selectedMonster?.location?.respawn}</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MonsterWrapper>
  );
};
