/* eslint-disable no-fallthrough */
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { ModularMonsterCard } from "../monster-layout/ModularMonsterCard";
import { RootState } from "../redux/ReduxTypes";
import { mainColour } from "../styles/palette";
import { Baron } from "./InfoCardComponents/Baron";
import { ElderDragon } from "./InfoCardComponents/ElderDragon";
import { RiftHerald } from "./InfoCardComponents/RiftHerald";

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
