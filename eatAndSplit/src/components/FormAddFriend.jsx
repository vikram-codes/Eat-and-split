import React, { useState } from "react";
import Button from "./Button";

function FormAddFriend() {
  return (
    <>
      <br />
      <br />
      <form className="form-add-friend">
        <label>💁🏻‍♂️Friend name</label>
        <input type="text" />
        <label>🌄 Image URL</label>
        <input type="text" />
        <Button>Add</Button>
      </form>
    </>
  );
}

export default FormAddFriend;
