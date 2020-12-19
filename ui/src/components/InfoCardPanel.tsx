import React, { FC } from "react";
import styled from "styled-components";
import { mainColour } from "../styles/palette";
import {Baron} from './InfoCardComponents/Baron';

const Wrapper = styled.div`
  .text {
    color: ${mainColour.white};
  }
`;

// mini nav / tab thing

interface InfoPanelDetails {
  helloObject: string;
}

interface InfoPanelProps {
  InfoPanelProps: Array<InfoPanelDetails>;
}

export const InfoCardPanel: FC<InfoPanelProps> = ({ InfoPanelProps }) => {
  //const classes = useStyles();

  return (
    <Wrapper>
    <div className="text">
      <p>`This is info panel where we have a bunch of text' </p>
      <Baron/>
    </div>
    </Wrapper>
  );
};
