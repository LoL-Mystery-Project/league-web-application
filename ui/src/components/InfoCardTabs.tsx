import React, { FC, useEffect } from "react";
import styled from "styled-components";

import { mainColour, subColour } from "../styles/palette";

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

// mini nav / tab thing

// interface InfoCardTabsDetails {
//   helloObject: string;
// }

// interface InfoCardTabsProps {
//     infoCardTabsProps: Array<InfoCardTabsProps>;
// }
    
  
export default function InfoCardTabs() {
    //const classes = useStyles();

  
  return (
    <div><p>`This is info card tab' </p></div>
  );
}