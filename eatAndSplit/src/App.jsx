import "./App.css";
import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";
import { useState } from "react";

export default function App() {
  const [addFriend, setAddFriend] = useState(false);
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList />
          {addFriend && <FormAddFriend />}
          <Button>Add friend</Button>
        </div>
        <FormSplitBill />
      </div>
    </>
  );
}
