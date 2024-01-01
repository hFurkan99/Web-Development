import { useState } from "react";

function TextExpander({
  children,
  collapsedNumWords = 10,
  expandButtonText = "Show More",
  collapseButtonText = "Show Less",
  buttonColor = "#000",
  className = "",
  expanded,
}) {
  const [expand, setExpand] = useState(expanded);

  function handleShowText() {
    setExpand((prevExpand) => !prevExpand);
  }

  const displayText = expand
    ? children
    : `${children.split(" ").slice(0, collapsedNumWords).join(" ")}...`;

  let style = {
    color: buttonColor,
    cursor: "pointer",
    marginLeft: "5px",
  };
  return (
    <div className={className}>
      <div>
        {displayText}
        <span onClick={handleShowText} role="button" style={style}>
          {expand ? collapseButtonText : expandButtonText}
        </span>
      </div>
    </div>
  );
}

export default TextExpander;
