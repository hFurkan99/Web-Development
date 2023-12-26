import { useRef, useState, useEffect, useCallback } from "react";

import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import { sortPlacesByDistance } from "./loc.js";

//Burdaki değerleri propla geçmediğimiz için ya da buraya atıfta bulunulmadığı için bu işlemlerin useEffect içerisinde yapılmasına ihtiyaç yok. Statelerden önce olacak şekilde komponent fonksiyonu içinde ya da direkt olarak komponent fonksiyonu dışında bir kez çalışması yeterli olacaktır. Burda oluşacak
const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || []; //depodaki itemları storeIds' e aktar
const storedPlaces = storedIds.map((id) =>
  AVAILABLE_PLACES.find((place) => place.id === id)
); // StoreIds'teki her bir id'yi gezerken AVAILABLE_PLACES datası içerisindeki mekanlardan id'si storeIds'le eşleşeni bulup storedPlaces'a kaydet. Bu işlem map sayesinde storeIds içindeki her id için tekrarlanır. Find her tur için sadece bir değer döndürür.
// setPickedPlaces(storedPlaces); //Bu değer burda güncellenmek yerine storedPlaces verileri pickedPlaces'ın ilk değeri olarak atanacak // depodaki mekanlar seçilmiş mekanlar değerini güncellemek için kullanıldı. Sayfa her yenilendiğinde bu değerler ekranda gösterilecek.

function App() {
  const selectedPlace = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]); //Aktif olan mekanları yakınlığa göre sıralayıp güncellemek için usestate
  const [pickedPlaces, setPickedPlaces] = useState(storedPlaces);

  //Tüm komponentler renderlandıktan sonra çalışır.
  useEffect(() => {
    //Kullanıcıdan konumu almak için.
    //İçerisindeki arrow konum bilgisi geldikten hemen sonra çalışır.
    navigator.geolocation.getCurrentPosition((position) => {
      //loc.ls'teki fonksiyon'a data'daki mekan objeleri ve kullanıcın konum bilgisine göre enlem ve boylam argüman olarak veriliyor.
      const sortedPlaces = sortPlacesByDistance(
        AVAILABLE_PLACES,
        position.coords.latitude,
        position.coords.longitude
      );
      setAvailablePlaces(sortedPlaces);
    });
  }, []); //İkinci parametreye [] girilirse bu fonksiyon sadece ilk app komponenti renderından sonra çalışır, bir daha çalışmaz. Tüm komponentler renderlandıktan sonra olacak şekilde.
  //Boş bırakılırsa her app komponenti renderından sonra en son olacak şekilde çalışır. Tekrar infinite loop olur.

  /*
  //Side Effect: Infinite Loop
  //Bu işlem side effect çünkü app.jsx'in görevi sayfaları renderlayıp görselleştirip sunmakkten burda yapılan iş bu göreve aykırı.
  //Kullanıcıdan konumu almak için.
  //İçerisindeki arrow konum bilgisi geldikten hemen sonra çalışır.
  // Bu fonksiyonu useEffect içerisine aldım
  navigator.geolocation.getCurrentPosition((position) => {
    //loc.ls'teki fonksiyon'a data'daki mekan objeleri ve kullanıcın konum bilgisine göre enlem ve boylam argüman olarak veriliyor.
    const sortedPlaces = sortPlacesByDistance(
      AVAILABLE_PLACES,
      position.coords.latitude,
      position.coords.longitude
    );
    //Usestate değeri her güncellendiğinde içerisinde bulunduğu komponent fonksiyonu tekrar renderlanaca.
    // Bu değer her güncellendiğinde app kompenenti de renderlanacak ve kullanıcı pozisyonu tekrar alınacak ve yeniden bu değer güncellenecek, sonsuz döngüye girilecek.
    //Bu nedenle bu yapı bir side effect.
    setAvailablePlaces(sortedPlaces);
  });
  */

  function handleStartRemovePlace(id) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    //useEffect kullanınlmasına gerek olmayan bir kullanım.
    //Kullanıcı bir mekan seçmek için görsele tıkladığı zaman bu fonksiyon çalışacağı için ve depolama işlemi de buna bağlı olduğu için sonsuz döngü oluşmaz.
    //Buraya girilen elemanlara siteyi kapatıp tekrar girildiğinde, depoda saklandıkları için tekrar ulaşılabilir olacak.
    //Yerel depodan selecterdPlaces verilerini okumak için.
    //Aşağıdaki set işleminden önce veri olmadığı için ilk okumada boş dizi döner.
    //
    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || []; //JSON.parse ile string olan depo verileri tekrar orijinal hallerine parçalanıyor.
    //Yerel depoya kaydetmek için
    //SelectedPlaces'a seçilen mekanların id leri kaydediliyor. Yukardaki storeIds içerisinde daha önce çekilen değerler handleSelectPlace fonksiyonunun parametresindeki id ile birleşerek seçilen mekanların id leri güncelleniyor.

    //Daha önce depolanan id'yi tekrar depoya kaydetmemek için.
    if (storedIds.indexOf(id) === -1) {
      //Eğer gelen id bilgisinin storeIds'te yerleştiği bir index yoksa o index boştur ve o id henüz depolanmamıştır. Bu nedenle if içerisi yürütülüp yeni id selectedPlaces'a depolanabilir. Aksi halde depolanamaz.
      localStorage.setItem(
        "selectedPlaces", //kaydedilen dizinin adı
        JSON.stringify([id, ...storedIds]) //diziye kaydetme işlemi
      ); //JSON.stringify ile değerler stringe çevrilip depolanıyor
    }
  }

  //useCallback sayesinde timer'ın bulunduğu useffectin aldığı fonksiyon dependency'si sonsuz dögüye neden olmayacak.
  const handleRemovePlace = useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setModalIsOpen(false);

    const storedIds = JSON.parse(localStorage.getItem("selectedPlaces")) || [];
    localStorage.setItem(
      "selectedPlaces",
      JSON.stringify(storedIds.filter((id) => id !== selectedPlace.current)) //Seçilen mekanın id'sini filtreleyip geri kalanı döndür. Local Stroge'dan veri kaldırma.
    );
  }, []); //useCallback içerisindeki herhangi bir değer tekrar render'ı tetikleme işlevinde olmadığı için bu dizi boş bırakıldı.

  return (
    <>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        {/* App renderlandığı anda bu komponent de renderlanacağı için bu komponent içindeki zamana bağlı fonskiyon da modal kapalı olsa dahi 3 saniyede bir çalıaşcaktı. Bu neden modalın açık olduğu durumlar koşulunu ekleyebiliriz modalIsOpen && <DeleteConfirmation.. gibi ancak bu işlemi Modal komponenti içinde yapmak daha mantıklı*/}
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={availablePlaces}
          fallbackText={"Sorting places by distance"}
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
