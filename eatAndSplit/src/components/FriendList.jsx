import React from "react";
import Button from "./Button";
import FormSplitBill from "./FormSplitBill";
import FormAddFriend from "./FormAddFriend";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function FriendList() {
  let friends = initialFriends;

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
