import Friend from "./Friend";

function FriendList({ handleSelectedFriend, friends, selectedFriend }) {
  console.log(selectedFriend);
  return (
    <ul>
      {friends.map((friend) => (
        <li
          className={
            selectedFriend && selectedFriend.id === friend.id ? "selected" : ""
          }
          key={friend.id}
        >
          <Friend friend={friend} handleSelectedFriend={handleSelectedFriend} />
        </li>
      ))}
    </ul>
  );
}

export default FriendList;
