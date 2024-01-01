import { useState } from "react";
import AddFriend from "./components/AddFriend";
import FriendList from "./components/FriendsList";
import SplitBill from "./components/SplitBill";
import { initialFriends } from "./data";

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [isAddButtonActive, setIsAddButtonActive] = useState(true);

  function handleSelectedFriend(friend) {
    console.log(friend);
    setSelectedFriend(() => friend);
  }

  function handleAddNewFriend(newFriend) {
    setFriends((prevFriends) => [
      ...prevFriends,
      {
        id: Date.now(),
        name: newFriend.name,
        image: newFriend.photo,
        balance: 0,
      },
    ]);
  }

  function handleSplitBill(bill) {
    if (bill.who === "you") {
      selectedFriend.balance =
        Number(selectedFriend.balance) + Number(bill.friends);
    } else if (bill.who === selectedFriend.name) {
      selectedFriend.balance =
        Number(selectedFriend.balance) - Number(bill.yours);
    }
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          selectedFriend={selectedFriend}
          friends={friends}
          handleSelectedFriend={handleSelectedFriend}
        />

        {isAddButtonActive ? (
          <button
            onClick={() => setIsAddButtonActive(false)}
            className="button"
          >
            Add New Friend
          </button>
        ) : (
          <>
            <AddFriend handleAddNewFriend={handleAddNewFriend} />
            <button
              onClick={() => setIsAddButtonActive(true)}
              className="button"
            >
              Close
            </button>
          </>
        )}
      </div>
      {selectedFriend && (
        <SplitBill
          handleSplitBill={handleSplitBill}
          selectedFriend={selectedFriend}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}

export default App;
