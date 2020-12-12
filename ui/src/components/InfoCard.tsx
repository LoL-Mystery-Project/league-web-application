import React, { FC, useEffect } from "react";
import styled from "styled-components";

import { mainColour, subColour } from "../styles/palette";
import InfoCardTabs from './InfoCardTabs';
import {InfoCardPanel} from './InfoCardPanel';

const Wrapper = styled.div`
  .soulIconHover:hover {
    color: #ffffff;
    background-color: rgba(255, 255, 255, 0.1);
  }

  .toggleButtonStyles {
    color: ${mainColour.yellow};
    font-family: Friz Quadrata;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 15px;
    display: flex;
    align-items: center;
  }

  .check-rotate {
    transform: rotate(45deg);
  }
`;

interface InfoCardDetails {
  helloObject: string;
}

interface InfoCardProps {
    infoCardProps: Array<InfoCardDetails>;
}
    
  
export const InfoCard: FC<InfoCardProps> = ({infoCardProps}) => {
    //const classes = useStyles();

  
  return (
    <div><p>{`Hello World!!!!! ${infoCardProps[0].helloObject}`}</p>
    
    <InfoCardTabs />
    <InfoCardPanel  InfoPanelProps={[{helloObject: 'hey there'}]}/>
    
    </div>

  );
}
