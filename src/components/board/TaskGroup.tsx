import React, { useState } from 'react';
import { ChevronDown, MessageCircle, MoreHorizontal, Plus } from '../Icons';
import { clsx } from 'clsx';
import { STATUS_COLORS, PRIORITY_COLORS, TYPE_COLORS } from './utils';

export interface Task {
  id: string;
  name: string;
  description: string;
  status: string;
  priority: string;
  type: string;
  selected?: boolean;
  updates?: {
    id: string;
    content: string;
    author: string;
    timestamp: string;
  }[];
}

interface TaskGroupProps {
  title: string;
  color: string;
  tasks: Task[];
  onAddTask: (name: string) => void;
  onOpenUpdates: (task: Task) => void;
}

export const TaskGroup = ({ title, color, tasks, onAddTask, onOpenUpdates }: TaskGroupProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const [newTaskName, setNewTaskName] = useState("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && newTaskName.trim()) {
      onAddTask(newTaskName);
      setNewTaskName("");
    }
  };

  // CSS Grid definition
  // Checkbox | Name | Description | Status | Priority | Type | Add
  const gridTemplate = "34px minmax(260px, 1.5fr) minmax(200px, 1fr) 130px 130px 130px 40px";

  return (
    <div className="mb-10">
      {/* Group Header */}
      <div className="flex items-center group mb-3 hover:bg-gray-50/50 p-1 -ml-1 rounded transition-colors">
        <div 
            className="p-1 mr-2 rounded hover:bg-gray-200 cursor-pointer transition-colors"
            style={{ color }}
            onClick={() => setCollapsed(!collapsed)}
        >
            <ChevronDown size={20} className={clsx("transition-transform", collapsed && "-rotate-90")} />
        </div>
        <div className="text-[18px] font-medium cursor-pointer" style={{ color }}>
            {title}
        </div>
        <span className="text-gray-400 text-sm ml-3 font-normal opacity-0 group-hover:opacity-100 transition-opacity">
            {tasks.length} items
        </span>
      </div>

      {!collapsed && (
        <div className="flex flex-col shadow-sm">
            {/* Table Header */}
            <div 
                className="grid gap-[1px] bg-[#d0d4e4] border-y border-[#d0d4e4] sticky top-0 z-10" 
                style={{ gridTemplateColumns: gridTemplate }}
            >
                {/* Left Border Decoration using first cell */}
                <HeaderCell className="rounded-tl-[4px] relative overflow-hidden !p-0 bg-white">
                    <div className="absolute left-0 top-0 bottom-0 w-[6px]" style={{ backgroundColor: color }}></div>
                    <div className="flex items-center justify-center h-full w-full pl-[6px]">
                        <input type="checkbox" className="w-3.5 h-3.5 border-gray-300 rounded text-blue-600 focus:ring-0 bg-white" />
                    </div>
                </HeaderCell>
                
                <HeaderCell>Name</HeaderCell>
                <HeaderCell>Description</HeaderCell>
                <HeaderCell className="text-center">Status</HeaderCell>
                <HeaderCell className="text-center">Priority</HeaderCell>
                <HeaderCell className="text-center">Type</HeaderCell>
                <HeaderCell className="rounded-tr-[4px] flex items-center justify-center">
                    <Plus size={16} className="text-[#676879]" />
                </HeaderCell>
            </div>

            {/* Tasks */}
            <div className="flex flex-col bg-white">
                {tasks.map((task, index) => (
                    <div 
                        key={task.id} 
                        className="grid gap-[1px] bg-[#d0d4e4] border-b border-[#d0d4e4] group hover:bg-[#f5f6f8] h-[36px]"
                        style={{ gridTemplateColumns: gridTemplate }}
                    >
                        {/* Checkbox Cell */}
                        <div className="bg-white flex items-center relative overflow-hidden group-hover:bg-[#f5f6f8]">
                            <div className="absolute left-0 top-0 bottom-0 w-[6px]" style={{ backgroundColor: color }}></div>
                            <div className="flex items-center justify-center h-full w-full pl-[6px] hover:bg-gray-100 cursor-pointer transition-colors">
                                <input type="checkbox" className="w-3.5 h-3.5 border-gray-300 rounded text-blue-600 focus:ring-0 bg-white" />
                            </div>
                        </div>

                        {/* Name Cell */}
                        <div className="bg-white flex items-center justify-between group-hover:bg-[#f5f6f8] relative h-full">
                            <div className="content-stretch flex items-center px-[4px] py-0 relative size-full">
                                <p className="font-['Figtree',sans-serif] font-normal leading-[22px] overflow-ellipsis overflow-hidden relative text-[#323338] text-[14px] text-nowrap pl-1">
                                    {task.name}
                                </p>
                            </div>
                            <div className="flex items-center h-full absolute right-0 border-l border-[#d0d4e4] pl-[22px] pr-[16px] pt-[0px] pb-[0px] px-[22px] py-[0px]">
                                <div className="content-stretch flex gap-[12px] h-[36px] items-center justify-center relative shrink-0">
                                    {/* AI Icon */}
                                    <div className="relative shrink-0 size-[22px] cursor-pointer rounded">
                                        <div className="absolute left-1/2 size-[22px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                                                <g>
                                                    <path d="M10.901 20.064C10.043 20.042 9.339 19.503 9.097 18.722L7.788 14.388C7.733 14.201 7.579 14.124 7.513 14.102L3.157 12.661C2.42 12.386 1.936 11.682 1.925 10.879C1.947 10.043 2.475 9.339 3.256 9.097L7.612 7.788C7.799 7.733 7.876 7.579 7.898 7.513L9.317 3.212C9.57 2.442 10.285 1.925 11.099 1.925H11.121C11.946 1.947 12.65 2.475 12.881 3.256L14.19 7.59C14.245 7.777 14.399 7.854 14.465 7.876L18.766 9.295C19.558 9.57 20.064 10.274 20.064 11.099C20.042 11.935 19.514 12.65 18.722 12.881L14.388 14.19C14.256 14.234 14.146 14.333 14.102 14.465L12.683 18.766C12.43 19.536 11.715 20.053 10.89 20.053L10.901 20.064ZM3.795 11.143L8.052 12.551C8.701 12.782 9.185 13.288 9.372 13.926L10.681 18.26C10.714 18.359 10.802 18.425 10.901 18.425C11.011 18.425 11.088 18.37 11.121 18.271L12.551 13.948C12.782 13.299 13.288 12.815 13.926 12.628L18.26 11.319C18.359 11.286 18.425 11.198 18.425 11.099C18.425 11 18.359 10.912 18.249 10.868L13.948 9.449C13.299 9.218 12.804 8.712 12.617 8.074L11.308 3.74C11.275 3.652 11.198 3.586 11.099 3.575C11 3.575 10.923 3.641 10.89 3.729L9.46 8.052C9.229 8.701 8.723 9.185 8.085 9.372L3.74 10.681C3.652 10.714 3.575 10.802 3.575 10.901C3.575 11 3.641 11.088 3.729 11.121L3.795 11.143Z" fill="#676879" id="Union" />
                                                </g>
                                            </svg>
                                        </div>
                                    </div>
                                    
                                    {/* Add Update Icon */}
                                    {task.updates && task.updates.length > 0 ? (
                                        <div 
                                            className="relative shrink-0 size-[22px] cursor-pointer"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onOpenUpdates(task);
                                            }}
                                        >
                                            <div className="relative shrink-0 size-[22px]">
                                                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                                                    <g>
                                                        <path clipRule="evenodd" d="M11.4807 2.145C12.7607 2.14269 14.0238 2.43779 15.1703 3.00703C16.3168 3.57628 17.3154 4.40409 18.0873 5.4252C19.2294 6.934 19.8194 8.7889 19.7589 10.6802C19.6983 12.5716 18.9909 14.385 17.7547 15.8176C16.5184 17.2503 14.8282 18.2156 12.9661 18.5524C11.1039 18.8892 9.18265 18.5771 7.5229 17.6682L4.7256 18.9992C3.5574 19.5569 2.3364 18.337 2.893 17.1677L4.224 14.3704C3.53475 13.1117 3.18538 11.6951 3.21033 10.2602C3.23527 8.82538 3.63366 7.42179 4.36625 6.18779C5.09883 4.9538 6.14031 3.93198 7.38805 3.22306C8.6358 2.51414 10.0456 2.14258 11.4807 2.145ZM14.4353 4.4847C13.5171 4.02912 12.5057 3.79302 11.4807 3.795H11.4774C10.298 3.79311 9.13949 4.10694 8.12228 4.70392C7.10507 5.3009 6.26619 6.15927 5.69272 7.18992C5.11926 8.22057 4.8321 9.38593 4.86108 10.565C4.89005 11.7441 5.2341 12.894 5.8575 13.8952C5.9306 14.0128 5.97294 14.1468 5.98063 14.285C5.98832 14.4232 5.96111 14.5612 5.9015 14.6861L4.7157 17.1765L7.2061 15.9907C7.33104 15.9311 7.46896 15.9039 7.60718 15.9116C7.74539 15.9193 7.87945 15.9616 7.997 16.0347C8.75784 16.5098 9.60732 16.8254 10.4938 16.9622C11.3804 17.099 12.2855 17.0542 13.1541 16.8306C14.0228 16.6069 14.837 16.209 15.5472 15.661C16.2574 15.1131 16.8489 14.4265 17.2856 13.643C17.7224 12.8595 17.9953 11.9954 18.0879 11.1031C18.1805 10.2109 18.0908 9.30917 17.8242 8.45267C17.5577 7.59617 17.1198 6.80278 16.5372 6.12068C15.9547 5.43857 15.2395 4.88198 14.4353 4.4847Z" fill="#0073ea" fillRule="evenodd" />
                                                    </g>
                                                </svg>
                                            </div>
                                            <div className="absolute bg-[#0073ea] content-stretch flex flex-col items-center left-[13px] px-[4px] py-[2px] rounded-[10px] top-[10px]">
                                                <div className="flex flex-col font-['Figtree',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
                                                    <p className="leading-[9px]">{task.updates.length}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div 
                                            className="relative shrink-0 size-[22px] cursor-pointer rounded flex items-center justify-center transition-colors hover:bg-gray-200"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                onOpenUpdates(task);
                                            }}
                                        >
                                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
                                                <g>
                                                    <path d="M11.4778 2.14521C12.7577 2.14304 14.0208 2.43768 15.1673 3.00654C16.3143 3.57571 17.3137 4.40434 18.0862 5.42549C18.8587 6.44654 19.3836 7.63289 19.6194 8.89131C19.8552 10.1498 19.7951 11.4459 19.4446 12.6774C19.0942 13.9088 18.4629 15.0423 17.5999 15.988C16.7368 16.9337 15.6654 17.6663 14.471 18.1276C13.2765 18.5889 11.9909 18.7673 10.7161 18.6472C9.59419 18.5415 8.50747 18.2072 7.52178 17.6677L4.7249 18.9997C3.55603 19.5565 2.33566 18.3367 2.89189 17.1677L4.22393 14.3698C3.59197 13.2157 3.24351 11.925 3.21123 10.6052C3.17526 9.13192 3.53471 7.67614 4.25127 6.38838C4.96783 5.10063 6.01556 4.028 7.28643 3.28193C8.55654 2.5364 10.0032 2.14366 11.4759 2.14521L11.4778 2.97041V2.14521ZM11.4769 3.79561C10.2976 3.79391 9.13941 4.10785 8.12236 4.70479C7.10534 5.30175 6.26612 6.15967 5.69268 7.19014C5.11924 8.22068 4.83181 9.38614 4.86064 10.5651C4.88948 11.7441 5.23359 12.8939 5.85674 13.8952C6.0053 14.1339 6.02156 14.4324 5.90068 14.6862L4.71514 17.1765L7.20537 15.9909C7.45921 15.87 7.75763 15.8864 7.99639 16.0349C8.86664 16.5761 9.85108 16.9075 10.8714 17.0036C11.8917 17.0997 12.9203 16.9578 13.8763 16.5886C14.8324 16.2193 15.6902 15.6337 16.3812 14.8767C17.072 14.1196 17.5771 13.212 17.8577 12.2263C18.1383 11.2404 18.1861 10.2025 17.9974 9.19502C17.8086 8.18778 17.3891 7.23786 16.7708 6.42061C16.1524 5.60321 15.352 4.94066 14.4339 4.48506C13.5159 4.02953 12.5046 3.79374 11.4798 3.79561H11.4769ZM11.5501 6.3249C12.0057 6.32496 12.3753 6.6945 12.3753 7.1501V9.62471H14.8499C15.3055 9.62471 15.675 9.99431 15.6751 10.4499C15.6751 10.9055 15.3055 11.2751 14.8499 11.2751H12.3753V13.7497C12.3753 14.2053 12.0057 14.5748 11.5501 14.5749C11.0945 14.5749 10.7249 14.2053 10.7249 13.7497V11.2751H8.25029C7.79466 11.2751 7.4251 10.9055 7.4251 10.4499C7.42515 9.99431 7.79469 9.62471 8.25029 9.62471H10.7249V7.1501C10.7249 6.69446 11.0945 6.3249 11.5501 6.3249Z" fill="#676879" id="Union" />
                                                </g>
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Description Cell */}
                        <div className="bg-white px-2 flex items-center group-hover:bg-[#f5f6f8] h-full">
                            <span className="text-[14px] text-[#323338] truncate text-gray-500">
                                {task.description}
                            </span>
                        </div>

                        {/* Status Cell */}
                        <CellBadge 
                            text={task.status} 
                            color={STATUS_COLORS[task.status] || "#c4c4c4"} 
                        />

                        {/* Priority Cell */}
                        <CellBadge 
                            text={task.priority} 
                            color={PRIORITY_COLORS[task.priority] || "#c4c4c4"} 
                        />

                        {/* Type Cell */}
                        <CellBadge 
                            text={task.type} 
                            color={TYPE_COLORS[task.type] || "#c4c4c4"} 
                        />

                        {/* Empty/Actions Cell */}
                        <div className="bg-white flex items-center justify-center group-hover:bg-[#f5f6f8] h-full">
                        </div>
                    </div>
                ))}

                {/* Add Item Row */}
                <div 
                    className="grid gap-[1px] bg-white border-b border-[#d0d4e4] h-[36px]"
                    style={{ gridTemplateColumns: gridTemplate }}
                >
                    <div className="bg-white relative flex items-center rounded-bl-[4px]">
                        <div className="absolute left-0 top-0 bottom-0 w-[6px] rounded-bl-[4px]" style={{ backgroundColor: color }}></div>
                        <div className="pl-[14px] flex items-center justify-center w-full h-full">
                            {/* Empty checkbox area */}
                        </div>
                    </div>
                    <div className="bg-white flex items-center px-2 col-span-5 border-l border-r border-[#d0d4e4]">
                        <input 
                            type="text" 
                            placeholder="+ Add item" 
                            className="w-full font-['Figtree',sans-serif] font-normal leading-[22px] text-[14px] outline-none text-[#323338] placeholder-[#676879] h-full bg-white pl-2"
                            value={newTaskName}
                            onChange={(e) => setNewTaskName(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="bg-white rounded-br-[4px]"></div>
                </div>
            </div>
            
            {/* Group Summary/Footer (Visual) */}
            <div className="grid gap-[1px] mt-[-1px]" style={{ gridTemplateColumns: gridTemplate }}>
                 <div className="bg-white h-8 border-r border-transparent rounded-bl-lg"></div>
                 <div className="bg-white h-8 border-r border-[#e6e9ef]"></div>
                 <div className="bg-white h-8 border-r border-[#e6e9ef]"></div>
                 <div className="bg-white h-8 border-r border-[#e6e9ef]"></div>
                 <div className="bg-white h-8 border-r border-[#e6e9ef]"></div>
                 <div className="bg-white h-8 border-r border-[#e6e9ef]"></div>
                 <div className="bg-white h-8 rounded-br-lg"></div>
            </div>
        </div>
      )}
    </div>
  );
};

function HeaderCell({ children, className }: { children?: React.ReactNode, className?: string }) {
    return (
        <div className={clsx("bg-[#f5f6f8] h-[36px] flex items-center px-2 text-[13px] text-[#323338] font-normal justify-center select-none relative", className)}>
            {children}
            {/* Resize Handle (Visual) */}
            <div className="absolute right-0 top-1 bottom-1 w-[1px] bg-transparent hover:bg-blue-400 cursor-col-resize hover:w-[2px] transition-all"></div>
        </div>
    )
}

function CellBadge({ text, color }: { text: string, color: string }) {
    return (
        <div className="bg-white h-full w-full relative group">
            <div 
                className="h-full w-full flex items-center justify-center text-white text-[13px] font-normal truncate px-1 cursor-pointer transition-colors"
                style={{ backgroundColor: color }}
            >
                {text}
            </div>
            <div className="absolute top-0 right-0 bottom-0 w-[20px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 text-white cursor-pointer pointer-events-none">
                <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-white"></div>
            </div>
        </div>
    )
}
