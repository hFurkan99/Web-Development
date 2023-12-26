import { useState } from "react";
import "./App.css";
import AddingProject from "./components/AddingProject";
import NoProject from "./components/NoProject";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  //Güncel sayfa durumunu ve oluşturulan projeleri tutan obje.
  const [projectState, setProjectState] = useState({
    selectProjectId: undefined,
    projects: [],
    tasks: [],
  });

  //Sidebarda ya da NoProjectte proje ekleye tıklayınca proje ekleme sayfasına geçme.
  function handleNewProject() {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState, //eski objenin elemanları da yeni objeye ekleniyor.
        selectProjectId: null, // Inputların olduğu sayfaya gitmek için null, noproject sayfası undefined.
      };
    });
  }

  function handleCancelAddProject() {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState, //eski objenin elemanları da yeni objeye ekleniyor.
        selectProjectId: undefined, // AddinProject sayfasındaki cancel butonuna tıklanınca NoProject sayfasına dönülüyor.
      };
    });
  }

  //Save butonuna bastıktan sonra ProjectState objesinin proje dizisine eleman ekleme.
  function handleAddProject(projectData) {
    //projectData -> AddingProjectten gelen proje bilgileri {title, desctiption, date}
    setProjectState((prevProjectState) => {
      const newProject = {
        ...projectData, //gelen objenin elemanları ve random bir id birleştirilerek yeni bir obje oluşturuluyor.
        id: Math.random(),
      };

      return {
        ...prevProjectState, //Objenin bazı özelliklerinin güncellenmediği durumlarda eski verileri bu şekilde eklemek gerekiyor. Hemen altta objenin tüm özellikleri yeniden tanımlandığı için burada bir etkisi olmasa da alışkanlık açısından eklemek da iyi olacaktır.
        selectProjectId: undefined, // Proje oluşturulduktan sonra NoProject sayfasına dönüldü.
        projects: [...prevProjectState.projects, newProject], //eski proje objelerine yukarda oluşturulan yeni proje objesi de eklenerek objelerle dolu bir dizi oluşturulur.
        //projectState objesi güncellenir
      };
    });
  }

  //Proje silme
  function handleDeleteProject() {
    setProjectState((prevProjectState) => {
      //Silinen proje çıkarıldıktan sonraki obje
      return {
        ...prevProjectState,
        selectProjectId: undefined, //Proje silindikten sonra NoProject sayfasına dönülüyor.
        //Id'si seçilen proje id'sine eşit olamayanlar yeni bir dizi oluşturacak. Yani delete butonuna tıklandığı anda selectProjectId hangi değerde ise o id'ye ait proje diziden filtrelenip yeni bir dizi oluşturulacak.
        projects: prevProjectState.projects.filter(
          (project) => project.id !== prevProjectState.selectProjectId
        ),
      };
    });
  }

  //Sideberda oluşan proje butonlarından hangisine tıklandıysa onClick ile o butonun id'si ile birlikte bu fonskiyon çağırılır. Id bilgisine göre tıklanan id projectState objesindeki selectProjectId'sine atanır. Daha sonra bu id kullanılarak tıklanan proje butonun içeriğinin değerleri selectedProject sayfasına geçilir ve o sayfa gösterilir.
  function handleSelectProject(projectId) {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState, //eski objenin elemanları da yeni objeye ekleniyor.
        selectProjectId: projectId, // Inputların olduğu sayfaya gitmek için null, noproject sayfası undefined.
      };
    });
  }

  //Task ekleme.
  //task ın izlediği prop dirlling: NewTask -> Tasks -> SelectedProjects -> App
  function handleAddTask(task) {
    setProjectState((prevProjectState) => {
      //projectState objesi içerisindeki task dizisi içeriği aşağıdaki formatta bir obje. Bu keylere value atanarak yeni bir task objesi oluşturuluyor. Daha sonra return ile dönecek ve tüm projectState objesi yeni eklenen task objesiyle birlikte güncellenecek
      const newTask = {
        text: task, //Metnin kendisi
        id: Math.random(), //Taskın id si
        projectId: prevProjectState.selectProjectId, // O anki proje id'si o taskın hangi projeye ait olduğunu gösterir. Bu bilgiye göre filtreleyip soldan seçili olan projenin tasklarını görüntüleyeceğim.
      };
      return {
        ...prevProjectState,
        tasks: [newTask, ...prevProjectState.tasks], //projectState objesine tasks key'i ilgili usestate içerisinde tanımlanmıştı. Eski dizi elemanlarını spread ile yeni task elemanını NewTask komponentindeki inputtan alıp yeni bir projectState objesi oluşturulup döndürülür.
      };
    });
  }

  //Task silme işlemi.
  //Taks komponentinden yine prop drille buraya getirildi. Bu sefer Tıklnan butonun karşılığı olan prop argüman aldı. Argüman olarak o an map içerisinde ulaşılmış olan taskın idsi gönderildi. Tasks -> SelectedProject ->App
  function handleDeleteTask(taskId) {
    setProjectState((prevProjectState) => {
      return {
        ...prevProjectState,
        tasks: prevProjectState.tasks.filter((task) => task.id !== taskId),
      };
    });
  }

  //Seçilen olan projenin tasklarınıu görüntülemek için bu filtrelemeyi yapmak zorundayım. Aksi halde tüm projelerde tüm tasklar gözükür.
  const selectedProjectTask = projectState.tasks.filter(
    (task) => task.projectId === projectState.selectProjectId
  );

  //Tıklanan proje butonuna göre ayarlanan selectProject değeri butondan gelen projenin id'si olduğu için seçilen projenin içine girilerek'leri karşılaştırılıyor ve dönen değer selectredProject'e atanıyor.
  const selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectProjectId
  );

  //selectProjectId null ya da undefined olmadığı sürece seçilen projenin id'si olacak ve yukarda id eşleşmesinden dönen proje bilgileri Selectedproject komponentine aktarılacak. Selected proje sayfasondaki delete butonu handleDeleteProjecti aktif edecek.
  let content = (
    <SelectedProject
      selectedProject={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      tasks={selectedProjectTask}
      onDeleteTask={handleDeleteTask}
    />
  );

  if (projectState.selectProjectId === null) {
    // Proje ekleme sayfasını göster.
    content = (
      <AddingProject
        onAdd={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    ); // AddingProject sayfasındaki butona tıklanınca çalışan handleSave fonksiyonun içerisindeki onAdd propsunun argümanına, orda oluşturulan veriler obje olarak verildi ve buradaki handleAddProject i aldığı argüman objesini de kullanarak calıştırdı. Bu sayede ProjectState güncellemesi dolaylı yoldan AddingProject sayfasındaki save butonuyla gerçekleşti.
  } else if (projectState.selectProjectId === undefined) {
    // NoProject sayfasını göster.
    content = <NoProject handleNewProject={handleNewProject} />; // NoProject sayfasındaki proje ekle butonuna basınca proje ekleme sayfasına git.
  }

  return (
    <main className="main-page">
      <SideBar
        /* Sidebar üzerindeki proje ekle butonu tarafından tetiklenen fonksiyon.*/
        handleNewProject={handleNewProject}
        /* Sidebarda oluşturulacak proje butonları için sibeBar komponentine projeler dizisini gönderdim*/
        projects={projectState.projects}
        /* Sidebar üzerinden tıklanan projenin id'si aktarılarak handleSelectProject fonksiyonu tetikleniyor */
        handleSelectProject={handleSelectProject}
        /*Seçilen proje butonunun idsine göre sidebardaki porje butonu görsel olarak aktif hale gelecek*/
        selectedProjectId={projectState.selectProjectId}
      />
      {content}
      {/*Buradaki içerik Projectstate'deki selectProjectId değerine göre gösterilecek.*/}
    </main>
  );
}

export default App;
