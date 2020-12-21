import React, { FC } from "react";
import styled from "styled-components";
import { MonsterObject } from "../pages/SummonersRift";
import { mainColour } from "../styles/palette";
import { Baron } from "./InfoCardComponents/Baron";

const Wrapper = styled.div`
  .text {
    background-color: transparent;
    color: ${mainColour.white};
  }
`;

// mini nav / tab thing

interface InfoPanelProps {
  InfoPanelProps: MonsterObject;
}

export const InfoCardPanel: FC<InfoPanelProps> = ({ InfoPanelProps }) => {
  //const classes = useStyles();

  return (
    <Wrapper>
      <div className="text">
        <Baron />
      </div>
    </Wrapper>
  );
};
