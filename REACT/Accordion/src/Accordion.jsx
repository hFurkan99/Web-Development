import { useState } from "react";
import AccordionItem from "./AccordionItem";
import { data } from "./data";
function Accordion() {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          key={i}
          title={el.title}
          text={el.text}
          num={i + 1}
        />
      ))}
    </div>
  );
}

export default Accordion;
