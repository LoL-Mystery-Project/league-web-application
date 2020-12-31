/* eslint-disable no-fallthrough */
import React, { FC } from "react";
import styled from "styled-components";
import { ModularMonsterCard } from "../../monster-layout/ModularMonsterCard";
import { MonsterType } from "../../monster-layout/MonsterTypes";
import { mainColour } from "../../styles/palette";

interface InfoCardPanelProps {
  selectedMonster: MonsterType;
}

const Wrapper = styled.div`
  .text {
    background-color: transparent;
    color: ${mainColour.white};
  }
`;

// mini nav / tab thing

export const InfoCardPanel: FC<InfoCardPanelProps> = ({ selectedMonster }) => {
  return (
    <Wrapper>
      <div className="text">
        <ModularMonsterCard selectedMonster={selectedMonster} />
      </div>
    </Wrapper>
  );
};
