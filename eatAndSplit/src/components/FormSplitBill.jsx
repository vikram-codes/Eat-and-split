import React from "react";
import Button from "./Button";
function FormSplitBill() {
  //   let friendData = initialFriends;

  return (
    <>
      <form className="form-split-bill">
        <h2>SPLIT A BILL WITH </h2>
        <label>💰Bill value</label>
        <input type="number" />
        <label>🤷🏻‍♂️Your expense</label>
        <input type="number" />
        <label>💰... expense</label>
        <input type="number" disabled />
        <label>🤷🏻‍♂️Who is paying the bill?</label>
        <select>
          <option>You</option>
          <option>...</option>
        </select>
        <input type="text" />
        <Button>Split Bill</Button>
      </form>
    </>
  );
}

export default FormSplitBill;
