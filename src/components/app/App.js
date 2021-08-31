import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTable } from "../../store/currencyList";
import Select from "../selector/";
import MainScreen from "../mainScreen/";
import "./App.scss";
const App = () => {
  const [selected, getSelected] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTable());
  }, [dispatch]);
  return (
    <div className="app">
      <div className="label__wrapper">
        <h1 className="label">Universal exchanger</h1>
      </div>
      <div className="main">
        <Select getMoney={getSelected} />
        <MainScreen currency={selected} />
      </div>
    </div>
  );
};
export default App;
