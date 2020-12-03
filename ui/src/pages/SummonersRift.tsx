import React, { FC } from "react";
import SummonerSearchBar from '../components/SummonerSearchBar'
import SummonersRiftMap from '../components/SummonersRiftMap'

interface SummonersRiftProps {}

export const SummonersRift: FC<SummonersRiftProps> = ({}) => {
  return (<>
  
  <h1>Summoner's Rift</h1>
  {/* <SummonerSearchBar/> */}
  <SummonersRiftMap/>
  
  </>);
};
