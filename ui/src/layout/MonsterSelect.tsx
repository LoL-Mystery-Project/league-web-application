import { makeStyles, MenuItem, Typography, Select } from "@material-ui/core";
import React, { FC, useState } from "react";
import { MonsterVariant } from "../monster-layout/MonsterTypes";
import { ImageAsset } from "../components/ImageAsset";
import { mainColour } from "../styles/palette";

interface MonsterSelectProps {
  variants: MonsterVariant[];
  value: number;
  setSelectedVariant: (index: number) => void;
}

const useStyles = makeStyles({
  root: {
    width: 300,
    border: 'unset !important'
  },
  select: {
    width: 300,
    color: mainColour.yellow,
  },
  text: {
    fontFamily: "Friz Quadrata",
    fontSize: 20,
    paddingLeft: 15,
  }
});

export const MonsterSelect: FC<MonsterSelectProps> = ({
  variants,
  value,
  setSelectedVariant,
}) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        open={open}
        onClick={() => setOpen(!open)}
        onClose={() => setOpen(false)}
        IconComponent={() => (
          <ImageAsset
            alt="select_arrows.svg"
            style={{ cursor: "pointer" }}
            onClick={() => setOpen(!open)}
          />
        )}
        disableUnderline
        className={classes.select}
        onChange={(e) => setSelectedVariant(e.target.value as number)}
      >
        {variants.map((variant, index) => {
          return (
            <MenuItem value={index}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <ImageAsset alt={variant.icon} />
                <Typography display="inline" className={classes.text}>
                  {variant.variant}
                </Typography>
              </div>
            </MenuItem>
          );
        })}
      </Select>
    </div>
  );
};
