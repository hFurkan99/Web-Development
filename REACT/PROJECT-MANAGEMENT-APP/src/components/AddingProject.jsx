import { useRef } from "react";
import Inputs from "./Inputs";
import Modals from "./Modal";
function AddingProject({ onAdd, onCancel }) {
  //Modaldaki dialog refini buraya modal refi üzerinden geçip yine burada kullanacağım
  const modal = useRef();

  // Inputs komponentinden gelen inputları burda kullanmak için Inputs'taki forwardRef ile input değerlerini buraya çektim.
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();

  //Inputs komponentindeki save tuşuna tıklayınca.
  //Inputs komponentinden aldığım ref değerlerini kullnarak input içerisindeki değerleri teker teker değişkenlere aktardım.
  function handleSave() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descRef.current.value;
    const enteredDate = dateRef.current.value;

    //Alanlar boş olursa hata mesajı dönecek ve yeni proje oluşturma işlemi gerçekleşmeyecek. Trim kullanılmasının amacı sadece boşluklardan oluşan bir metnin de oluşturulmasını engellemek. Sağdan ve soldan tüm boşlukları keserek geriye kalan değer boş mu değil mi kontrol edilir.
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate === ""
    ) {
      //ERROR!
      modal.current.open(); // Modal komponentinde useImperativeHandle içerisindeki open metodunu kullandım. Buradaki modal refi, Modal'daki dialog refine eşit.Yani buradaki modal refi dolaylı yoldan Modal'daki dialog tagini referans alıyor.
      return; //Inputları doldurma sırasında hata olduysa direkt return ile fonksiyonu boş döndürüp çıkıyorum ki aşağıdaki onAdd çalışıp proje verilerini güncelleyemesin.
    }

    //Tüm değişkenleri kullanarak aşağıdaki keyler ile obje oluşturup, bu objeyi argüman olarak onAdd propsuyla App komponentine geçtim. Yollanan fonksiyon, bu argümanları kullanıp ProjectState'teki projects dizisini güncelleyecek.
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });

    // console.log(updatedInputs);
  }

  return (
    <>
      <Modals buttonCaption="Close" ref={modal}>
        <h2>Invalid Input</h2>
        <p>Looks like you forgot to enter a value...</p>
        <p>Please make sure you provide a valid value for every input field!</p>
      </Modals>
      <section className="adding-project">
        <div className="cancel-save-btns">
          <button
            onClick={onCancel}
            type="button"
            className="btn btn-light btn-lg text-danger "
          >
            Cancel
          </button>
          <button
            /*Bu sayfadaki handleSave'i tetikler, aynı zamanda dolaylı yoldan onAdd ile projectState objesindeki projeler dizisini güncelleme işlemnini de tetikler.*/
            onClick={handleSave}
            type="button"
            className="btn btn-success btn-lg ms-3"
          >
            Save
          </button>
        </div>
        <form>
          {/*Inputs komponentine geçilen bu proplarla gerekli özellikteki inputlat oluşturulu. Aynı zamanda Inputs komponentinde bulunan input refleri de burdan çekilir ve handleSave'de kullanılır.*/}
          <Inputs label={"TITLE"} type={"text"} ref={titleRef} />
          <Inputs label={"DESCRIPTION"} isTextArea={true} ref={descRef} />
          <Inputs label={"DATE"} type={"date"} ref={dateRef} />
        </form>
      </section>
    </>
  );
}

export default AddingProject;
