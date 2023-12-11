import TasksHeader from "./Header";

const TasksLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      <div>
        <TasksHeader />
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default TasksLayout;
