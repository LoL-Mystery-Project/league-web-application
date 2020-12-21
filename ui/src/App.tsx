import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchImageUrls } from "./redux/actions/imageActions";
import { Routes } from "./Routes";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImageUrls());
  }, [dispatch]);

  return <Routes />;
};

export default App;
