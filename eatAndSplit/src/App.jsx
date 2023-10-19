import "./App.css";
import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

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

export default function App() {
  const [addFriend, setAddFriend] = useState(false);
  const [splitBill, setSplitBill] = useState(false);
  let [friends, setFriends] = useState(initialFriends);

  function handleFormAddFriend() {
    setAddFriend((prev) => !prev);
  }

  function handleAddFriend(friend) {
    setFriends((friends = [...friends, friend]));
  }

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList friends={friends} />
          {addFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
          <Button onClick={handleFormAddFriend}>
            {addFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
        {splitBill && <FormSplitBill />}
      </div>
    </>
  );
}
