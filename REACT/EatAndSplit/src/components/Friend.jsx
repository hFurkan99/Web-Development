function Friend({ friend, handleSelectedFriend }) {
  return (
    <>
      <img src={friend.image} alt="" />
      <h3>{friend.name}</h3>
      <p className={friend.balance < 0 ? "red" : "green"}>
        {friend.balance === 0
          ? `You and ${friend.name} are even.`
          : friend.balance < 0
          ? `You owe ${friend.name} ${Math.abs(friend.balance)}$`
          : `${friend.name} owes you ${friend.balance}$`}
      </p>
      <button onClick={() => handleSelectedFriend(friend)} className="button">
        Select
      </button>
    </>
  );
}

export default Friend;
