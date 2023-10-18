import "./App.css";
import FriendList from "./components/FriendList";
import FormAddFriend from "./components/FormAddFriend";

export default function App() {
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList />
          <FormAddFriend />
        </div>
      </div>
    </>
  );
}
