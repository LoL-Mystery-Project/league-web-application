import { Grid } from "@material-ui/core";
import React, { FC } from "react";
import { ImageAsset } from "../components/ImageAsset";
import { MonsterDetails } from "./MonsterDetails";
import { Footer } from "../layout/Footer";
import { InfoHeader } from "../layout/InfoHeader";
import { useSelector } from "react-redux";
import { RootState } from "../redux/ReduxTypes";
import { InfoContainer } from "../layout/InfoContainer";

export const ModularMonsterCard: FC = () => {
  const { selectedMonster } = useSelector((state: RootState) => state.monsters);

  return (
    <div>
      <MonsterDetails />
      <ImageAsset style={{marginLeft: 20}} alt="line.svg" />
      <Grid container style={{ display: "flex", flexDirection: "column" }}>
        {selectedMonster?.informationText?.map((section) => {
          return (
            <Grid item xs={12}>
              <InfoHeader title={section.title} subtitle={section.subtitle} />
              <InfoContainer subcategories={section.subcategories} />
            </Grid>
          );
        })}
      </Grid>
      <Footer />
    </div>
  );
};
