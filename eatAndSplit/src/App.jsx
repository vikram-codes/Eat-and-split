import "./App.css";
import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";
import Button from "./components/Button";
import FormSplitBill from "./components/FormSplitBill";

export default function App() {
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList />
          <FormAddFriend />
          <Button>Add friend</Button>
        </div>
        <FormSplitBill />
      </div>
    </>
  );
}
