import React, { FC } from "react";
import { mainColour } from "../styles/palette";
import { TextColourizer } from "../utils/TextColourizer";

export const Home: FC = () => {
  return (
    <div>
      <h1>Home</h1>
      <TextColourizer
        text="Reduces the target's armor and magic resistance by 0.5, stacking up to 100 times for a total of 50 maximum resistances reduction. Lasts for 8s, reduced to 4.5s after Baron Nashor is slain"
        paletteSet={{
          purple: mainColour.purple,
          green: mainColour.green,
          orange: mainColour.orange,
        }}
        colourSet={{
          purple: ["Baron Nashor"],
          green: ["resistance", "0.5", "100", "50", "8s", "4.5s"],
          orange: ["armor"],
        }}
      />
      <br />
      <TextColourizer
        text="Baron Nashor summons a tremor beneath the target's location that erupts with a tentacle after 1.25s, dealing 25% AD magic damage to units within and knocking them up for a duration based on their proximity to the area's center. Units near the area's edge are also slightly knocked away."
        paletteSet={{
          purple: mainColour.purple,
          green: mainColour.green,
          orange: mainColour.orange,
        }}
        colourSet={{
          purple: ["Baron Nashor"],
          green: ["1.25s", "magic damage"],
          orange: ["25% AD"],
        }}
      />
    </div>
  );
};
