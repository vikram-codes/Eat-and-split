import React, { useState } from "react";
import Button from "./Button";
function FormSplitBill({ splitBill }) {
  const [billValue, setBillValue] = useState();
  const paidByFriend = billValue ? billValue - yourExpense : "";
  const [yourExpense, setYourExpense] = useState();
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  return (
    <>
      <form className="form-split-bill">
        <h2>SPLIT A BILL WITH {splitBill.name}</h2>
        <label>💰Bill value</label>
        <input
          type="number"
          value={billValue}
          onChange={(e) => setBillValue(Number(e.target.value))}
        />
        <label>🤷🏻‍♂️Your expense</label>
        <input
          type="number "
          value={yourExpense}
          onChange={(e) => setYourExpense(Number(e.target.value))}
        />
        <label>💰{splitBill.name}'s expense</label>
        <input type="number" disabled value={paidByFriend} />
        <label>🤷🏻‍♂️Who is paying the bill?</label>
        <select>
          <option>You</option>
          <option
            value={whoIsPaying}
            onChange={(e) => setWhoIsPaying(e.target.value)}
          >
            {splitBill.name}
          </option>
        </select>
        <input type="text" />
        <Button>Split Bill</Button>
      </form>
    </>
  );
}

export default FormSplitBill;
