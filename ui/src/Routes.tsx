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
import { prodMode } from "../src/config/featureFlags";

export const Routes: FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          component={prodMode.default ? Test : SummonersRift}
        />
        <Route
          path="/test"
          component={prodMode.default ? Test : SummonersRift}
        />
        <Route path="/home" component={prodMode.home ? Home : SummonersRift} />
        <Route
          path="/watchlive"
          component={prodMode.watchlive ? WatchLive : SummonersRift}
        />
        <Route
          path="/leaderboards"
          component={prodMode.leaderboards ? Leaderboard : SummonersRift}
        />
        <Route
          path="/stats"
          component={prodMode.stats ? Stats : SummonersRift}
        />
        <Route
          path="/guides"
          component={prodMode.guides ? Guides : SummonersRift}
        />
        <Route
          path="/summonersrift"
          component={prodMode.summonersrift ? SummonersRift : SummonersRift}
        />
        <Route path="/wiki" component={prodMode.wiki ? Wiki : SummonersRift} />
        <Route
          path="/image_gallery"
          component={prodMode.image_gallery ? ImageGallery : SummonersRift}
        />
      </Switch>
    </BrowserRouter>
  );
};
