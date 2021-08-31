import React from "react";
import { money } from "../files/money";

const Selector = ({ getMoney }) => {
  const list = Object.entries(money);
  const currencyContent = list.map((obj) => (
    <option key={obj[0]} value={obj[0]}>
      {obj[1]}
    </option>
  ));
  return (
    <div>
      <h2>Currency Selector</h2>
      <select onChange={(e) => getMoney(e.target.value)}>
        {currencyContent}
      </select>
    </div>
  );
};
export default Selector;
