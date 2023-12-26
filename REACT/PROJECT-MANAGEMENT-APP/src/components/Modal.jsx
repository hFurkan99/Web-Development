import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

//Dialogdaki refi AddingProject'e geçmek için forwardref kullanıldı.
//Input doldurmadaki herhangi bir hatada bu komponentte oluşturmuş olduğumuz open metodunu AddingProject'in handleSave fonksiyonu içerisinde çağırarak error modal'ı ortaya çıkartacağım
const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();

  //Bu kompenent dışından çağırılabilen bir fonksiyon oluşturmak için useImperativeHandle kullanıldı
  //İçerisindeki open metodu, başka bir komponentten aşağıdaki dialog alanına ulaşıp müdehale etmemizi sağlayacak
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  <div className="modal"> </div>;
  return createPortal(
    <dialog className="p-4 w-50 border-1  " ref={dialog}>
      {children}
      {/* Bu kompenent başka bir yerde kullanılırsa yani çağırılırsa tagleri arasında kalan içerikler children propu arasına yazılacak*/}
      {/* dialog içerisinde form oluşturup, method kullanarak form içerisindeki butona tıklayıp dialog'u yani error modal'ı kapattım*/}
      <form method="dialog" className=" text-end  ">
        <button className="btn btn-danger ">{buttonCaption}</button>
      </form>
    </dialog>,
    document.getElementById("modal-root") //Bu komponenti Index.html içerisindeki modal-root id'li div içerisine konumladım
  );
});

export default Modal;
