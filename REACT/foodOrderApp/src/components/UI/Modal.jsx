import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function Modal({ children, open, onClose, className = "" }) {
  const dialog = useRef();

  useEffect(() => {
    const modal = dialog.current;

    if (open) {
      modal.showModal();
    }

    return () => modal.close(); //open değeri değiştiği anda buradaki kod çalışır. Eğer open değeri true ise daha sonra yukarısı çalışığ modalı açar. True değilse burada modal hemen kapanır ve öyle kalır.
  }, [open]);

  return createPortal(
    //esc ile çıkışta progress state'ini değişebilmek için onClose
    <dialog ref={dialog} className={`modal ${className}`} onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
