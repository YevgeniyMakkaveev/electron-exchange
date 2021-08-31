import React from "react";
import { country } from "../files/country";
import { useSelector } from "react-redux";

const MainScreen = ({ currency }) => {
  const { currencyList } = useSelector((state) => state.table);
  console.log(currencyList);
  if (!currency) return <div> 111</div>;

  const exchange = "USD" + currency;
  const key = Object.keys(country).filter(function (key) {
    return country[key] === currency;
  });

  console.log(key);
  const flags = key[0] ? (
    key.map((flag) => (
      <img
        src={`https://flagcdn.com/256x192/${flag.toLowerCase()}.png`}
        alt={flag}
      />
    ))
  ) : (
    <p>No flags found </p>
  );
  const money = currencyList[exchange] ? currencyList[exchange] : "Not found";

  return (
    <div>
      {flags}
      <h2>
        1 USD for {money} {currency}
      </h2>
    </div>
  );
};
export default MainScreen;
