import { useState } from "react";

import SearchTask from "./SearchTAsk";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

export default function TaskBoard() {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "Learn React ",
    "description ":
      "I want to learn react such than I can treat it like my slave and make it d whatever I want to do",
    tags: ["web", " react", "js"],
    priority: "high",
    isFavorite: true,
  };
  const [tasks, setTasksa] = useState([defaultTasks]);

  return (
    <section className="mb-20" id="tasks">
      <div className="container">
        <div className="p-2 flex justify-end">
          <SearchTask />
        </div>

        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <TaskActions />
          <TaskList />
        </div>
      </div>
    </section>
  );
}
