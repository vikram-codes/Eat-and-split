import React, { useState } from "react";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import FormAddFriend from "./FormAddFriend";

export default function FriendList({ friends }) {
  return (
    <>
      <div>
        <ul>
          {friends.map((f) => (
            <>
              <Friend friend={f} key={f.id} />
            </>
          ))}
        </ul>
        {/* <FormAddFriend />
        <Button>Add Friend</Button> */}
      </div>
      {/* <FormSplitBill data={initialFriends} /> */}
    </>
  );
}

function Friend(props) {
  return (
    <li>
      <img src={props.friend.image} alt={props.friend.name} />
      <h3>{props.friend.name}</h3>
      <p
        className={
          props.friend.balance >= 0
            ? `${props.friend.balance == 0 ? "" : "green"}`
            : "red"
        }
      >
        {props.friend.balance >= 0
          ? `${
              props.friend.balance == 0
                ? `You and ${props.friend.name} are even`
                : `${props.friend.name} owes you $${props.friend.balance}`
            }`
          : `You owe ${props.friend.name} $${Math.abs(props.friend.balance)}`}
      </p>
      <Button>Select</Button>
    </li>
  );
}
