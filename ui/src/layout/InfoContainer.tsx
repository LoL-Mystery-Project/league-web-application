import { Grid } from "@material-ui/core";
import React, { FC } from "react";
import { ImageAsset } from "../components/ImageAsset";
import { InfoHeader } from "./InfoHeader";
import { InfoSection } from "./InfoSection";
import { InfoSectionCategory } from "./layoutTypes";

interface InfoContainerProps {
  subcategories: Array<InfoSectionCategory>;
}

export const InfoContainer: FC<InfoContainerProps> = ({ subcategories }) => {
  return (
    <Grid
      container
      spacing={1}
      style={{ display: "flex", flexDirection: "column" }}
    >
      {subcategories?.map((subcategory) => {
        return (
          <Grid item>
            {subcategory.title !== "noSubcategory" && (
              <InfoHeader isSubheader={true} title={subcategory.title} />
            )}
            {subcategory.data.map((ability) => {
              return (
                <Grid item>
                  <InfoSection item={ability} />
                </Grid>
              );
            })}
          </Grid>
        );
      })}
      <Grid item>
        <ImageAsset alt="line.svg" />
      </Grid>
    </Grid>
  );
};
