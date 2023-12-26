function AccordionItem({ title, text, num, onOpen, curOpen }) {
  let isOpen = num === curOpen;

  function handleShowText() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleShowText}>
      <p className="number">{num < 10 ? ` 0${num}` : num} </p>
      <p className="title">{title}</p>
      <p className="icon">{!isOpen ? "+" : "-"}</p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}

export default AccordionItem;
