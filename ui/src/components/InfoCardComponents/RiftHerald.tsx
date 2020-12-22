import { Grid } from "@material-ui/core";
import React, { FC } from "react";
import { MonsterDetails } from "../MonsterDetails";
import { MonsterWrapper } from "./Baron";

interface RiftHeraldProps {}

export const RiftHerald: FC<RiftHeraldProps> = ({}) => {
  return (
    <MonsterWrapper>
      <Grid container>
        <Grid item>
          <MonsterDetails />
        </Grid>
      </Grid>
    </MonsterWrapper>
  );
};
