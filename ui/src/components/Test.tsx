import React, { FC } from "react";

interface TestProps {}

export const Test: FC<TestProps> = ({}) => {
  return (
    <div>
      <h1>{`Title page`}</h1>
    </div>
  );
};
