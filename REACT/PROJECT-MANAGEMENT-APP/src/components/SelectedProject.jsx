import Tasks from "./Tasks";

function SelectedProject({
  selectedProject,
  onDelete,
  onAddTask,
  tasks,
  onDeleteTask,
}) {
  return (
    <section className="project-page">
      <div className="project-title ">
        <h1>{selectedProject.title}</h1>
        <button onClick={onDelete} className="delete-btn btn btn-dark ">
          Delete
        </button>
      </div>
      <p className="project-date">{selectedProject.date}</p>
      <div className="project-description">{selectedProject.description}</div>
      <Tasks onAddTask={onAddTask} tasks={tasks} onDeleteTask={onDeleteTask} />
    </section>
  );
}

export default SelectedProject;
