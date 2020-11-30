import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Test } from "./components/Test";
import { RiftMap } from "./pages/RiftMap";

export const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Test} />
        <Route path="/test" component={RiftMap} />
      </Switch>
    </BrowserRouter>
  );
};
