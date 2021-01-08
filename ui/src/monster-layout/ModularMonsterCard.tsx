import { Grid } from "@material-ui/core";
import React, { FC, useState } from "react";
import Collapse from "@material-ui/core/Collapse";
import { ImageAsset } from "../components/ImageAsset";
import { MonsterDetails } from "./MonsterDetails";
import { Footer } from "../layout/Footer";
import { InfoHeader } from "../layout/InfoHeader";
import { useSelector } from "react-redux";
import { RootState } from "../redux/ReduxTypes";
import { InfoContainer } from "../layout/InfoContainer";
import { lineConstants } from "../styles/dimension";
import { Category } from "../layout/layoutTypes";

interface openStateType {
  [key: string]: boolean;
}

export const ModularMonsterCard: FC = () => {
  const { selectedMonster } = useSelector((state: RootState) => state.monsters);
  const [openState, setOpenState] = useState<openStateType>({});

  const handleClick = (title?: string) => {
    setOpenState({ ...openState, [title!]: !openState[title!] });
  };

  return (
    <div>
      <MonsterDetails />
      <ImageAsset
        style={{ marginLeft: lineConstants.marginLeft }}
        alt="line.svg"
      />
      <Grid container style={{ display: "flex", flexDirection: "column" }}>
        {selectedMonster?.informationText?.map((section: Category) => {
          return (
            <>
              <Grid item xs={12}>
                <InfoHeader
                  title={section.title}
                  subtitle={section.subtitle}
                  handleArrowClick={handleClick}
                />
                <Collapse in={!openState[section.title]}>
                  <InfoContainer subcategories={section.subcategories} />
                </Collapse>
              </Grid>
              <Grid
                item
                style={{
                  marginTop: lineConstants.marginTop,
                  marginLeft: lineConstants.marginLeft,
                }}
              >
                <ImageAsset alt="line.svg" />
              </Grid>
            </>
          );
        })}
      </Grid>
      <Footer />
    </div>
  );
};
