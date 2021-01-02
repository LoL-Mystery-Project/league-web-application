import React, { FC } from "react";
import { useWindowDimensions } from "../components/hooks/useWindowDimensions";
import { ComponentCatalogue } from "../utils/ComponentCatalogue";

export const Home: FC = () => {
  const { height } = useWindowDimensions();

  return (
    <div style={{ overflowY: "scroll", overflowX: 'hidden', height: height - 60 }}>
      <h1>Home</h1>
      <ComponentCatalogue />
    </div>
  );
};
