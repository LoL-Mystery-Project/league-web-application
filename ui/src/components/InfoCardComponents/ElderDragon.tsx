import { Grid } from "@material-ui/core";
import React, { FC } from "react";
import { MonsterDetails } from "../MonsterDetails";

export const ElderDragon: FC = () => {
  return (
    <Grid container>
      <Grid item>
        <MonsterDetails />
      </Grid>
    </Grid>
  );
};
