import React from 'react';
import { TaskGroup, Task } from './TaskGroup';
import { GROUP_COLORS } from './utils';

interface TaskBoardProps {
    group1Tasks: Task[];
    group2Tasks: Task[];
    onAddTask: (groupTitle: string, taskName: string) => void;
    onOpenUpdates: (task: Task) => void;
}

export const TaskBoard = ({ group1Tasks, group2Tasks, onAddTask, onOpenUpdates }: TaskBoardProps) => {
  return (
    <div className="flex-1 overflow-x-auto bg-white pt-6 pr-6">
      <div className="min-w-[1000px]">
        <TaskGroup 
            title="This week's tasks" 
            color={GROUP_COLORS["This week's tasks"]} 
            tasks={group1Tasks} 
            onAddTask={(name) => onAddTask("This week's tasks", name)}
            onOpenUpdates={onOpenUpdates}
        />
        <TaskGroup 
            title="Next week's tasks" 
            color={GROUP_COLORS["Next week's tasks"]} 
            tasks={group2Tasks} 
            onAddTask={(name) => onAddTask("Next week's tasks", name)}
            onOpenUpdates={onOpenUpdates}
        />
      </div>
    </div>
  );
};
