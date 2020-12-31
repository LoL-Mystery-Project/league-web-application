/* eslint-disable no-fallthrough */
import React, { FC } from "react";
import styled from "styled-components";
import { ModularMonsterCard } from "../monster-layout/ModularMonsterCard";
import { mainColour } from "../styles/palette";

const Wrapper = styled.div`
  .text {
    background-color: transparent;
    color: ${mainColour.white};
  }
`;

// mini nav / tab thing

export const InfoCardPanel: FC = () => {
  return (
    <Wrapper>
      <div className="text">
        <ModularMonsterCard />
      </div>
    </Wrapper>
  );
};
