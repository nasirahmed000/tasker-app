import { useState } from "react";

import SearchTask from "./SearchTAsk";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";
import AddTaskModal from "./AddTaskModal";

export default function TaskBoard() {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "Learn React Native ",
    "description ":
      "I want to learn react such than I can treat it like my slave and make it d whatever I want to do",
    tags: ["web", " react", "js"],
    priority: "high",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTasks]);
  const [showAddModal, setShowAddModal] = useState(false);

  function handleAddTask(tasks) {
    console.log("Add Task Clicked", tasks);
  }
  return (
    <section className="mb-20" id="tasks">
      {showAddModal && <AddTaskModal onSave={handleAddTask} />}

      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions onAddClick={() => setShowAddModal(true)} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </section>
  );
}
