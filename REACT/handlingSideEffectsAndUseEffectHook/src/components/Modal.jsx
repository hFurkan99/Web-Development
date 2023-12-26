import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
function Modal({ open, onClose, children }) {
  const dialog = useRef();

  //useEffect içerisinde kullanılmazsa bu alandaki kodlar çalıştığı anda henüz bir dialog ref olmadığı için( use effect kullanılmazsa bu scopetan sonraki alan daha sonra çalışacak) dialog refine ulaşılamayacaktı.
  // Bu kod bloğu hem Modal komponent renderlandığında hem de dependency içerisindeki değer güncellendiğinde çalışacaktır.
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]); //dependency alanına yazılan değer değştiği zaman bu kod bloğu çalışacak.

  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {/*Esc tuşuna basınca da App'teki handleRemovePlace çalışsın ve setModalIsOpen'ı false yapsın. Aksi halde esc ile çıkışta bu değer true kalır ve dependency değeri true kaldığı için modal bir daha açılmaz. Çünkü yukardaki useEffect dependency'ye bağlı olarak çalşıyor*/}
      {open ? children : null} {/* App kompenentinde bahsettiğim kontrol*/}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
