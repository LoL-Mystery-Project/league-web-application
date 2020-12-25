/* eslint-disable no-fallthrough */
import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { MonsterCard } from "../monster-layout/MonsterCard";
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
  const [selectedComponent, setSelectedComponent] = useState<JSX.Element>(
    <></>
  );
  const { selectedMonster } = useSelector((state: RootState) => state.monsters);

  useEffect(() => {
    if (selectedMonster) {
      switch (selectedMonster?.name) {
        case "Baron Nashor":
          setSelectedComponent(<Baron />);
          break;
        case "Rift Herald":
          setSelectedComponent(<RiftHerald />);
          break;
        case "Elder Dragon":
          setSelectedComponent(<ElderDragon />);
          break;
        default:
          setSelectedComponent(<MonsterCard />);
          return;
      }
    }
  }, [selectedMonster]);

  return (
    <Wrapper>
      <div className="text">{selectedComponent}</div>
    </Wrapper>
  );
};
