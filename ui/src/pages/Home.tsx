import { Typography } from "@material-ui/core";
import React, { FC } from "react";
import { mainColour } from "../styles/palette";
import { TextColourizer } from "../utils/TextColourizer";

export const Home: FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <TextColourizer
        text="Reduces the target's armor and magic resistance by 0.5, stacking up to 100 times for a total of 50 maximum resistances reduction. Lasts for 8s, reduced to 4.5s after Baron Nashor is slain"
        paletteMap={{
          purple: mainColour.purple,
          green: mainColour.green,
          orange: mainColour.orange,
        }}
        colouredWordMap={{
          purple: ["Baron Nashor"],
          green: ["resistance", "0.5", "100", "50", "8s", "4.5s"],
          orange: ["armor"],
        }}
      />
      <br />
      <TextColourizer
        text="Baron Nashor summons a tremor beneath the target's location that erupts with a tentacle after 1.25s, dealing 25% AD magic damage to units within and knocking them up for a duration based on their proximity to the area's center. Units near the area's edge are also slightly knocked away."
        paletteMap={{
          purple: mainColour.purple,
          blue: mainColour.blue,
          orange: mainColour.orange,
        }}
        colouredWordMap={{
          purple: ["Baron Nashor"],
          blue: ["1.25s", "magic damage"],
          orange: ["25% AD"],
        }}
      />
      <br />
      <TextColourizer
        text="Damaging an enemy champion below 20% of their maximum health blasts them with Elder Immolation afer 0.5s, executing them, which deals 100% of their current health as true damage that pierces through shields."
        paletteMap={{
          purple: mainColour.purple,
          blue: mainColour.blue,
          orange: mainColour.orange,
          green: mainColour.green,
        }}
        colouredWordMap={{
          purple: ["Elder Immolation"],
          blue: ["0.5s"],
          orange: ["true damage"],
          green: [
            "20% of their maximum health",
            "100% of their current health",
          ],
        }}
      />
    </div>
  );
};
