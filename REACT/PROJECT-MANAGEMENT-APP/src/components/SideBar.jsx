function SideBar({
  handleNewProject,
  projects,
  handleSelectProject,
  selectedProjectId,
}) {
  return (
    <>
      <section className="side-bar">
        <h2 className="text-center ">YOUR PROJECTS</h2>
        <button
          onClick={
            handleNewProject
          } /*App'teki handleNewProject fonksiyonunu bu butonla tetikledim.*/
          type="button"
          className="btn btn-danger  mt-5 btn-lg"
        >
          Add Project
        </button>
        <div className="sidebar-projects-buttons text-center ">
          <ul>
            {projects.map((project) => {
              let cssClass = "btn m-5 w-75 d-block ms-auto me-auto";

              if (project.id === selectedProjectId) {
                cssClass += " btn-secondary";
              } else {
                cssClass += " btn-dark";
              }
              return (
                <li className="list-unstyled" key={project.id}>
                  <button
                    onClick={() => handleSelectProject(project.id)}
                    className={cssClass}
                  >
                    {project.title}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}

export default SideBar;
