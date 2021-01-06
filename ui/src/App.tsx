import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setDragOptions, setSelectedDrag } from "./redux/actions/dragonActions";
import { fetchImageUrls } from "./redux/actions/imageActions";
import { fetchAllMonsters } from "./redux/actions/monsterActions";
import { Routes } from "./Routes";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    Promise.all([
      dispatch(fetchAllMonsters()),
      dispatch(fetchImageUrls()),
      dispatch(setSelectedDrag("cloud")),
      dispatch(
        setDragOptions({
          showNeutralMonsters: true,
          showBuildings: true,
          showJunglePlants: false,
          showBrushes: false,
        })
      ),
    ]);
  }, [dispatch]);

  return <Routes />;
};

export default App;
