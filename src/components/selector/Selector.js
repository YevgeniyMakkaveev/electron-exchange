import React from "react";
import { money } from "../files/money";
import "./Selector.scss";

const Select = ({ getMoney }) => {
  const list = Object.entries(money);
  const currencyContent = list.map((obj) => (
    <option key={obj[0]} value={obj[0]}>
      {obj[1]}
    </option>
  ));
  return (
    <div className="selector">
      <h2>Currency Selector</h2>
      <select
        className="exchange_list"
        onChange={(e) => getMoney(e.target.value)}
      >
        {currencyContent}
      </select>
    </div>
  );
};
export default Select;
