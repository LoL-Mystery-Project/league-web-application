import React, { FC } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import { Test } from "./components/Test";

import { Wiki } from "./pages/Wiki";
import { Home } from "./pages/Home";
import { RiftMap } from "./pages/RiftMap";
import { SummonersRift } from "./pages/SummonersRift";
import { WatchLive } from "./pages/WatchLive";
import { Leaderboard } from "./pages/Leaderboard";
import { Stats } from "./pages/Stats";
import { Guides } from "./pages/Guides";
import { ImageGallery } from "./components/ImageGallery";

export const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Test} />
        <Route path="/test" component={RiftMap} />
        <Route path="/home" component={Home} />
        <Route path="/watchlive" component={WatchLive} />
        <Route path="/leaderboards" component={Leaderboard} />
        <Route path="/stats" component={Stats} />
        <Route path="/guides" component={Guides} />
        <Route path="/summonersrift" component={SummonersRift} />
        <Route path="/wiki" component={Wiki} />
        <Route path="/image_gallery" component={ImageGallery} />
      </Switch>
    </BrowserRouter>
  );
};
