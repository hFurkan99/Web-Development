import tasksLogo from "../assets/tasks.png";
function NoProject({ handleNewProject }) {
  return (
    <>
      <section className="new-project">
        <div>
          <img src={tasksLogo} alt="task logo" />
          <h2 className="m-4">No Project Selected</h2>
        </div>
        <div>
          <p className="fs-3 ">
            Select a project or get started with a new one
          </p>
          <button
            onClick={handleNewProject}
            type="button"
            className="btn btn-success btn-lg m-2"
          >
            Create a new project
          </button>
        </div>
      </section>
    </>
  );
}

export default NoProject;
