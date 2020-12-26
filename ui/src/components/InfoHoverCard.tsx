/* eslint-disable no-fallthrough */
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../redux/types";
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

export const InfoHoverCard: FC = () => {
  return (
    <Wrapper>
      <div className="text"></div>
    </Wrapper>
  );
};
