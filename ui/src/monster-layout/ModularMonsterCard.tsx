import { Grid } from "@material-ui/core";
import React, { FC } from "react";
import { ImageAsset } from "../components/ImageAsset";
import { MonsterDetails } from "./MonsterDetails";
import { Footer } from "./Footer";
import { InfoHeader } from "./InfoHeader";
import { useSelector } from "react-redux";
import { RootState } from "../redux/ReduxTypes";
import { Information } from "./Information";

export const ModularMonsterCard: FC = () => {
  const { selectedMonster } = useSelector((state: RootState) => state.monsters);

  return (
    <div>
      <MonsterDetails />
      <ImageAsset alt="line.svg" />
      <Grid container style={{ display: "flex", flexDirection: "column" }}>
        {selectedMonster?.informationText?.map((section) => {
          return (
            <>
              <Grid item>
                <InfoHeader title={section.title} subtitle={section.subtitle} />
              </Grid>
              <Grid
                container
                spacing={1}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Information subcategories={section.subcategories} />
              </Grid>
            </>
          );
        })}
      </Grid>
      <Footer />
    </div>
  );
};
