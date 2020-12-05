import React, { FC, useEffect } from "react";

interface ItemsProps {}

export const Items: FC<ItemsProps> = ({}) => {
  const handleClick = async () => {
    const data = await fetch(
      "http://ddragon.leagueoflegends.com/cdn/10.18.1/data/en_US/profileicon.json"
    );
    const json = await data.json();
    Object.keys(json.data).forEach(console.log);
  };

  return (
    <>
      <h1>Items</h1>
      <button onClick={handleClick}>Click me</button>
    </>
  );
};
