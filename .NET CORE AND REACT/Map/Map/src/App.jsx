import { useState } from "react";
import CreateMap from "./components/CreateMap";
import Menu from "./components/Menu";
import Modal from "./components/Modal";

function App() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleDraw(isDrawing) {
    setIsDrawing((prevStatus) => {
      prevStatus = isDrawing;
      return prevStatus;
    });
  }

  function handleModal(isModalOpen) {
    setIsModalOpen(isModalOpen);
  }

  return (
    <>
      <Menu handleDraw={handleDraw} />
      <CreateMap
        handleDraw={handleDraw}
        isDrawing={isDrawing}
        handleModal={handleModal}
      />
      {isModalOpen && <Modal handleModal={handleModal} />}
    </>
  );
}

export default App;
