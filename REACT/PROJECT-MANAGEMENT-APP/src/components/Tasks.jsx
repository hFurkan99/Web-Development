import NewTask from "./NewTask";

function Tasks({ onAddTask, tasks, onDeleteTask }) {
  return (
    <section>
      <h2>Tasks</h2>
      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 && <p>This project does not any tasks yet!</p>}
      {tasks.length > 0 && (
        <ul>
          {tasks.map((task) => (
            <li className="mt-5 list-unstyled d-flex task-list" key={task.id}>
              <span className="task-text">{task.text} </span>
              <button
                onClick={() => onDeleteTask(task.id)}
                className="btn btn-outline-light ms-auto"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
