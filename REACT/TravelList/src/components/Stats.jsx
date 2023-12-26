function Stats({ items }) {
  const packedItems = items.filter((item) => item.packed);

  if (!items.length) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </p>
    );
  }

  return (
    <footer className="stats">
      <em>
        {packedItems.length === items.length
          ? "You got everything! Ready to go ✈️"
          : `You have ${
              items.length
            } items on your list, and you already packed ${
              packedItems.length
            } (${Math.round((packedItems.length / items.length) * 100)}%)`}
      </em>
    </footer>
  );
}

export default Stats;
