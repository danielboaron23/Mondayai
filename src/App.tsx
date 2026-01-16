import React, { useState } from 'react';
import { TopBar } from './components/layout/TopBar';
import { Sidebar } from './components/layout/Sidebar';
import { BoardHeader } from './components/board/BoardHeader';
import { TaskBoard } from './components/board/TaskBoard';
import { SidekickPanel } from './components/board/SidekickPanel';
import { UpdatesPane } from './components/board/UpdatesPane';
import { Task } from './components/board/TaskGroup';

export default function App() {
  const [isSidekickOpen, setIsSidekickOpen] = useState(false);
  const [updatesPaneTask, setUpdatesPaneTask] = useState<Task | null>(null);

  const [group1Tasks, setGroup1Tasks] = useState<Task[]>([
    {
      id: '1',
      name: 'Send invitations',
      description: 'Finalize guest list and send out event invitations',
      status: 'Done',
      priority: 'Critical',
      type: 'Craft',
      updates: [
        {
          id: 'demo1',
          author: 'Sandra Johnston',
          timestamp: 'Just now',
          content: 'Started compiling a list of potential guest speakers with experience in product leadership and scaling SaaS teams. Will share recommendations by end of week.'
        }
      ]
    },
    {
      id: '2',
      name: 'Venues',
      description: 'Confirm venue booking and upload contract',
      status: 'Working on it',
      priority: 'Critical',
      type: 'Logistics'
    },
    {
      id: '3',
      name: 'Find guest speakers',
      description: 'Reach out to potential keynote and panel speakers',
      status: 'Working on it',
      priority: 'High',
      type: 'Program'
    },
    {
      id: '4',
      name: 'Create agenda',
      description: 'Draft a preliminary agenda for review',
      status: 'Ready to start',
      priority: 'High',
      type: 'Content'
    }
  ]);

  const [group2Tasks, setGroup2Tasks] = useState<Task[]>([
    {
      id: '5',
      name: 'Design event branding',
      description: 'Finalize guest list and send out event invitations',
      status: 'Ready to start',
      priority: 'Critical',
      type: 'Design'
    },
    {
      id: '6',
      name: 'Build registration page',
      description: 'Confirm venue booking and upload contract',
      status: 'Ready to start',
      priority: 'Critical',
      type: 'Web'
    },
    {
      id: '7',
      name: 'Coordinate catering',
      description: 'Reach out to potential keynote and panel speakers',
      status: 'Ready to start',
      priority: 'High',
      type: 'Logistics'
    },
    {
      id: '8',
      name: 'Confirm tech setup',
      description: 'Draft a preliminary agenda for review',
      status: 'Needs shaping',
      priority: 'High',
      type: 'Production'
    },
    {
      id: '9',
      name: 'Schedule dry run',
      description: 'Start user interviews on the new ai actions',
      status: 'Ready to start',
      priority: 'Low',
      type: 'Program'
    }
  ]);

  const handleAiAction = () => {
    // Update "Create agenda" task (id: 4)
    setGroup1Tasks(prevTasks => prevTasks.map(task => {
        if (task.id === '4') {
            const agendaContent = `
<strong>Elevate 2025 Event Agenda</strong><br/>
<br/>
<strong>09:00 – 09:30 | Registration & Welcome</strong><br/>
Check-in, badge pickup, networking<br/>
<br/>
<strong>09:30 – 09:45 | Opening Remarks</strong><br/>
Sandra Johnston, Event Lead<br/>
<br/>
<strong>09:45 – 10:30 | Keynote: Future of Work</strong><br/>
Transforming how teams collaborate<br/>
<br/>
<strong>10:30 – 11:15 | Panel: AI in the Workplace</strong><br/>
Industry leaders share insights + Q&A<br/>
<br/>
<strong>11:15 – 11:30 | Networking Break</strong><br/>
<br/>
<strong>11:30 – 12:15 | Breakout Sessions</strong><br/>
Choose your track:<br/>
<ul>
<li>Track A: Productivity Masterclass</li>
<li>Track B: Leadership Workshop</li>
<li>Track C: Innovation Lab</li>
</ul>
`;

            return {
                ...task,
                status: 'Working on it', // Update status
                description: 'Agenda draft added by AI Sidekick', // Update description to reflect action
                updates: [
                    ...(task.updates || []),
                    {
                        id: Math.random().toString(36).substr(2, 9),
                        content: agendaContent,
                        author: 'AI Sidekick',
                        timestamp: 'Just now'
                    }
                ]
            };
        }
        return task;
    }));
  };

  const handleAddTask = (groupTitle: string, taskName: string) => {
    const newTask: Task = {
      id: Math.random().toString(36).substr(2, 9),
      name: taskName,
      description: '',
      status: 'Working on it', 
      priority: 'Low',
      type: 'Other'
    };

    if (groupTitle === "This week's tasks") {
      setGroup1Tasks(prev => [...prev, newTask]);
    } else if (groupTitle === "Next week's tasks") {
      setGroup2Tasks(prev => [...prev, newTask]);
    }
  };

  const handleOpenUpdates = (task: Task) => {
    setUpdatesPaneTask(task);
  };

  return (
    <div className="flex flex-col w-full h-screen bg-[#f6f7fb] overflow-hidden font-sans text-[#323338]">
      <TopBar />
      <div className="flex flex-1 overflow-hidden relative pl-[6px] bg-[rgba(5,14,36,0)] pt-[0px] pr-[0px] pb-[0px]">
        <Sidebar />
        <div className="flex flex-col flex-1 min-w-0 bg-white rounded-tl-[16px] relative overflow-hidden shadow-sm">
          <div className="flex flex-col flex-1 overflow-y-auto p-[20px]">
            <BoardHeader onAiSidekickClick={() => setIsSidekickOpen(true)} />
            <TaskBoard 
              group1Tasks={group1Tasks} 
              group2Tasks={group2Tasks} 
              onAddTask={handleAddTask}
              onOpenUpdates={handleOpenUpdates}
            />
          </div>
          
          {/* Sidekick Panel Overlay */}
          <SidekickPanel 
            isOpen={isSidekickOpen} 
            onClose={() => setIsSidekickOpen(false)} 
            onAiAction={handleAiAction}
          />

          {/* Updates Pane Overlay */}
          <UpdatesPane 
            isOpen={!!updatesPaneTask} 
            onClose={() => setUpdatesPaneTask(null)} 
            task={updatesPaneTask} 
          />
        </div>
      </div>
    </div>
  );
}
