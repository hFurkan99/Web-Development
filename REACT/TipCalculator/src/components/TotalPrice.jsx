function TotalPrice({ selectedValue }) {
  const avgTip = (selectedValue.me + selectedValue.friend) / 2 / 100;
  const tip = avgTip * selectedValue.bill;
  const total = selectedValue.bill + tip;

  return (
    <h3>
      You pay ${total} (${selectedValue.bill} + ${tip} tip)
    </h3>
  );
}

export default TotalPrice;
