import React, { useState } from "react";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import FormAddFriend from "./FormAddFriend";

export default function FriendList({ friends, onSelection, splitBill }) {
  return (
    <>
      <div>
        <ul>
          {friends.map((f) => (
            <>
              <Friend
                friend={f}
                key={f.id}
                onSelection={onSelection}
                splitBill={splitBill}
              />
            </>
          ))}
        </ul>
      </div>
    </>
  );
}

function Friend({ friend, onSelection, splitBill }) {
  const isSelected = splitBill?.id === friend.id;
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance >= 0 ? `${friend.balance == 0 ? "" : "green"}` : "red"
        }
      >
        {friend.balance >= 0
          ? `${
              friend.balance == 0
                ? `You and ${friend.name} are even`
                : `${friend.name} owes you $${friend.balance}`
            }`
          : `You owe ${friend.name} $${Math.abs(friend.balance)}`}
      </p>
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
