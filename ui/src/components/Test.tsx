import React, { FC } from "react";

interface TestProps {}

// testing webhook
export const Test: FC<TestProps> = () => {
  return (
    <div>
      <h1>{`Title page`}</h1>
    </div>
  );
};
