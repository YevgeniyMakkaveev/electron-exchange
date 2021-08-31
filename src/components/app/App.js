import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTable } from "../../store/currencyList";
import Selector from "../selector/Selector";
import MainScreen from "../mainScreen/mainScreen";
import "./App.scss";
const App = () => {
  const [selected, getSelected] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTable());
  }, [dispatch]);
  return (
    <div>
      <h3>{selected}</h3>
      <Selector getMoney={getSelected} />
      <MainScreen currency={selected} />
    </div>
  );
};
export default App;
