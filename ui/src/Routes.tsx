import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Test } from "./components/Test";
import { Champions } from "./pages/Champions";
import { Explore } from "./pages/Explore";
import { Items } from "./pages/Items";
import { RiftMap } from "./pages/RiftMap";
import { SummonersRift } from "./pages/SummonersRift";
import { TierList } from "./pages/TierList";
import { WatchLive } from "./pages/WatchLive";

export const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Test} />
        <Route path="/test" component={RiftMap} />
        <Route path="/explore" component={Explore} />
        <Route path="/watchlive" component={WatchLive} />
        <Route path="/tierlist" component={TierList} />
        <Route path="/summonersrift" component={SummonersRift} />
        <Route path="/champions" component={Champions} />
        <Route path="/items" component={Items} />
      </Switch>
    </BrowserRouter>
  );
};
