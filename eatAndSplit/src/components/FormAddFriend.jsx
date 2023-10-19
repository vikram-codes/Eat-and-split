import React, { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleAddFriend(e) {
    e.preventDefault();
    const id = crypto.randomUUID();
    const newFriends = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };
    onAddFriend(newFriends);
    setImage("https://i.pravatar.cc/48");
    setName("");
  }
  return (
    <>
      <form className="form-add-friend" onSubmit={handleAddFriend}>
        <label>💁🏻‍♂️Friend name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>🌄 Image URL</label>
        <input type="text" value={image} />
        <Button>Add</Button>
      </form>
    </>
  );
}

export default FormAddFriend;
