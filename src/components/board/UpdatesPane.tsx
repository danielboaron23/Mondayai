import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx } from 'clsx';
import svgPaths from '../../imports/svg-rllj2msr2u';
import emptyStateSvgPaths from '../../imports/svg-xb0yuw616m';
import { imgGroup } from '../../imports/svg-lybkw';
import img from "figma:asset/fe0a458297ef1c61817a6722d50a9731e7727ef6.png";
import { Task } from './TaskGroup';

interface UpdatesPaneProps {
  isOpen: boolean;
  onClose: () => void;
  task: Task | null;
}

// --- Icons ---

function IconBasicCloseSmall() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p3f6c200} fill="#676879" />
      </svg>
    </div>
  );
}

function IconBasicMenu() {
  return (
    <div className="relative shrink-0 size-[12.5px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5244 12.5244">
        <path d={svgPaths.p2dc7b400} fill="#676879" />
        <path d={svgPaths.p19973d00} fill="#676879" />
        <path d={svgPaths.p12327300} fill="#676879" />
      </svg>
    </div>
  );
}

function IconPlatformFeedback() {
  return (
    <div className="relative shrink-0 size-[12.5px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5244 12.5244">
        <path clipRule="evenodd" d={svgPaths.p2928b700} fill="#676879" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.p1a665f80} fill="#676879" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function IconPlatformMention() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path clipRule="evenodd" d={svgPaths.p216800} fill="#676879" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function IconPlatformAttach() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path clipRule="evenodd" d={svgPaths.p25cec1c0} fill="#676879" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function IconPlatformGif() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p1b824b00} fill="#676879" />
        <path d={svgPaths.p287d6980} fill="#676879" />
        <path d={svgPaths.p22ac2100} fill="#676879" />
      </svg>
    </div>
  );
}

function IconRedactorEmoji() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path clipRule="evenodd" d={svgPaths.p38e1f600} fill="#676879" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pc5cde80} fill="#676879" fillRule="evenodd" />
        <path d={svgPaths.p184f3000} fill="#676879" />
        <path d={svgPaths.p1b519f80} fill="#676879" />
      </svg>
    </div>
  );
}

function IconAiEditAi() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p367aeff8} fill="#676879" />
      </svg>
    </div>
  );
}

function IconAiSummarizeAi() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p11ff9900} fill="#676879" />
        <path d={svgPaths.p62d4170} fill="#676879" />
        <path d={svgPaths.p2f2f5100} fill="#676879" />
        <path d={svgPaths.p331b580} fill="#676879" />
      </svg>
    </div>
  );
}

function IconPlatformSetReminder() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path clipRule="evenodd" d={svgPaths.p31e01c00} fill="#676879" fillRule="evenodd" />
        <path d={svgPaths.p26b44800} fill="#676879" />
        <path clipRule="evenodd" d={svgPaths.p18481300} fill="#676879" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function IconBasicMenuSmall() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p2c7e2d00} fill="#676879" />
        <path d={svgPaths.p37281800} fill="#676879" />
        <path d={svgPaths.p87bb980} fill="#676879" />
      </svg>
    </div>
  );
}

function IconPlatformShow() {
  return (
    <div className="relative shrink-0 size-[12.5px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5244 12.5244">
        <path clipRule="evenodd" d={svgPaths.p29bb5880} fill="#676879" fillRule="evenodd" />
        <path clipRule="evenodd" d={svgPaths.pb4c1100} fill="#676879" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function IconPlatformThumbsUp() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path clipRule="evenodd" d={svgPaths.p1cac2070} fill="#676879" fillRule="evenodd" />
      </svg>
    </div>
  );
}

function IconPlatformReply() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path clipRule="evenodd" d={svgPaths.p16e59b00} fill="#676879" fillRule="evenodd" />
      </svg>
    </div>
  );
}

// --- Empty State Components ---

function EmptyStateIllustration() {
  return (
    <div className="relative size-full" data-name="No updates yet">
      <div className="absolute left-0 overflow-clip size-[182px] top-0" data-name="empty-state.8bf98d52.svg fill">
        <div className="absolute left-1/2 overflow-clip size-[174px] top-[calc(50%-4px)] translate-x-[-50%] translate-y-[-50%]" data-name="empty-state.8bf98d52.svg">
          <div className="absolute contents inset-0" data-name="Clip path group">
            <div className="absolute inset-[18%_17.89%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-31.123px_-31.32px] mask-size-[174px_174px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')`, WebkitMaskImage: `url('${imgGroup}')` }}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111.756 111.36">
                <g id="Group">
                  <path d={emptyStateSvgPaths.p24d2d440} fill="var(--fill-0, #CBDDFF)" id="Vector" />
                  <path d={emptyStateSvgPaths.p3cfb400} fill="var(--fill-0, #CBDDFF)" id="Vector_2" />
                  <path clipRule="evenodd" d={emptyStateSvgPaths.p128c7e80} fill="var(--fill-0, #181B34)" fillRule="evenodd" id="Vector_3" />
                  <path d={emptyStateSvgPaths.p21951c60} fill="var(--fill-0, white)" id="Vector_4" />
                  <path d={emptyStateSvgPaths.pfb45300} fill="var(--fill-0, #CBDDFF)" id="Vector_5" />
                  <path d={emptyStateSvgPaths.p12ce9c80} fill="var(--fill-0, #6161FF)" id="Vector_6" />
                  <path d={emptyStateSvgPaths.p3cd0b300} fill="var(--fill-0, #FFCC00)" id="Vector_7" />
                  <path clipRule="evenodd" d={emptyStateSvgPaths.pabeaf00} fill="var(--fill-0, #181B34)" fillRule="evenodd" id="Vector_8" />
                  <path clipRule="evenodd" d={emptyStateSvgPaths.pf223300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_9" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Main Component ---

export const UpdatesPane = ({ isOpen, onClose, task }: UpdatesPaneProps) => {
  const [activeTab, setActiveTab] = useState('Updates');
  const [isLiked, setIsLiked] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 z-[60]"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 bottom-0 w-[600px] z-[70] bg-white shadow-[-4px_0_16px_rgba(0,0,0,0.1)] flex flex-col font-sans"
          >
            {/* Header */}
            <div className="flex flex-col w-full">
                {/* Close & Menu */}
                <div className="flex items-start justify-between pb-[8px] pt-[16px] px-[12px] w-full">
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded">
                        <IconBasicCloseSmall />
                    </button>
                    <div className="flex items-center gap-[12px]">
                        <button className="flex items-center justify-center p-[8.7px] rounded-[2.5px] w-[30px] h-[30px] hover:bg-gray-100">
                            <IconBasicMenu />
                        </button>
                    </div>
                </div>

                {/* Title */}
                <div className="pl-[18px] pr-[24px]">
                    <h2 className="text-[24px] font-medium text-[#323338] tracking-[-0.2px] font-['Poppins',sans-serif]">
                        {task?.name || "Task Title"}
                    </h2>
                </div>

                {/* Tabs */}
                <div className="flex items-start mt-[12px] border-b border-[#dcdfec] px-[18px]">
                    {['Updates', 'Files', 'Activity Log', 'Item Card'].map((tab) => (
                        <div key={tab} className="flex flex-col gap-px items-center relative shrink-0 cursor-pointer" onClick={() => setActiveTab(tab)}>
                            <div className={clsx(
                                "px-[16px] py-[4px] text-[14px] leading-[22px] text-center",
                                activeTab === tab ? "text-[#323338]" : "text-[#323338]" // In design both look similar color, but active has blue line
                            )}>
                                {tab}
                            </div>
                            {activeTab === tab ? (
                                <div className="bg-[#0073ea] h-[2px] w-full" />
                            ) : (
                                <div className="bg-transparent h-px w-full" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Content Body */}
            <div className="flex-1 overflow-y-auto bg-[#f6f7fb]">
                <div className="flex flex-col items-center px-[24px] py-[16px] gap-[8px] w-full min-h-full bg-white">
                    
                    {/* Give Feedback Button - Aligned Right */}
                    <div className="w-full flex justify-end">
                        <button className="flex items-center gap-[5px] h-[25px] px-[10px] py-[3.7px] rounded-[2.5px] hover:bg-gray-100 transition-colors">
                            <IconPlatformFeedback />
                            <span className="text-[10px] text-[#323338] leading-[13.7px]">Give feedback</span>
                        </button>
                    </div>

                    {/* Main Input Field */}
                    <div className="w-full bg-white rounded-[8px] border border-[#dcdfec] flex flex-col relative overflow-hidden group focus-within:border-[#0073ea] transition-colors shrink-0">
                        <div className="p-[16px] min-h-[52px]">
                            <p className="text-[#676879] text-[14px] leading-[20px]">Write an reply and mention others with @</p>
                        </div>
                        <div className="flex items-center pb-[8px] pl-[8px] pr-[16px] gap-[10px]">
                            <div className="flex items-center">
                                <button className="p-[6px] rounded-[4px] hover:bg-gray-100"><IconPlatformMention /></button>
                                <button className="p-[6px] rounded-[4px] hover:bg-gray-100"><IconPlatformAttach /></button>
                                <button className="p-[6px] rounded-[4px] hover:bg-gray-100"><IconPlatformGif /></button>
                                <button className="p-[6px] rounded-[4px] hover:bg-gray-100"><IconRedactorEmoji /></button>
                                <button className="p-[6px] rounded-[4px] hover:bg-gray-100"><IconAiEditAi /></button>
                            </div>
                        </div>
                    </div>

                    {/* Updates List */}
                    <div className="w-full flex flex-col gap-[16px] mt-4 flex-1">
                        {task?.updates && task.updates.length > 0 ? (
                            task.updates.map((update) => (
                                <UpdateCard key={update.id} update={update} isLiked={isLiked} setIsLiked={setIsLiked} />
                            ))
                        ) : (
                            <div className="flex flex-col items-center justify-center flex-1 py-12">
                                <div className="relative w-[182px] h-[182px]">
                                    <EmptyStateIllustration />
                                </div>
                                <div className="h-[40px] relative shrink-0 w-full flex justify-center items-center mt-2">
                                    <p className="font-['Poppins',sans-serif] font-bold text-[18px] text-[#323338] tracking-[-0.1px] leading-[24px]">No updates yet</p>
                                </div>
                                <div className="h-[44px] relative shrink-0 w-full flex justify-center items-center mt-1">
                                    <div className="flex flex-col items-center">
                                        <p className="font-['Figtree',sans-serif] font-normal text-[16px] text-[#323338] leading-[22px]">Share progress, mention a teammate,</p>
                                        <p className="font-['Figtree',sans-serif] font-normal text-[16px] text-[#323338] leading-[22px]">or upload a file to get things moving</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

function UpdateCard({ update, isLiked, setIsLiked }: { update: any, isLiked: boolean, setIsLiked: (v: boolean) => void }) {
    return (
        <div className="bg-white rounded-[8px] border border-[#dcdfec] w-full flex flex-col relative overflow-hidden shrink-0">
            {/* Header */}
            <div className="flex items-start justify-between pt-[16px] px-[12px] pb-[8px]">
                <div className="flex items-center gap-[8px]">
                    <div className="size-[26px] rounded-full overflow-hidden shrink-0 relative">
                        <img src={img} alt="" className="absolute left-0 top-0 size-full object-cover" />
                    </div>
                    <div className="flex items-center gap-[8px]">
                        <span className="text-[14px] font-semibold text-[#323338] leading-[20px]">{update.author}</span>
                        <span className="text-[14px] text-[#676879] leading-[22px]">{update.timestamp}</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <button className="flex items-center justify-center size-[24px] rounded-[4px] hover:bg-gray-100"><IconAiSummarizeAi /></button>
                    <button className="flex items-center justify-center size-[24px] rounded-[4px] hover:bg-gray-100 px-[8px] py-[6px]"><IconPlatformSetReminder /></button>
                    <button className="flex items-center justify-center size-[24px] rounded-[4px] hover:bg-gray-100 px-[8px] py-[6px]"><IconBasicMenuSmall /></button>
                </div>
            </div>

            {/* Content */}
            <div className="px-[16px] py-[8px]">
                <div className="text-[14px] text-[#323338] leading-[20px]" dangerouslySetInnerHTML={{ __html: update.content }} />
            </div>

            {/* Reactions & Seen */}
            <div className="px-[18px] py-[8px] flex flex-col items-end w-full">
                <div className="w-full flex items-center justify-between py-[4px]">
                    <div className="flex items-center gap-[8px]">
                        <div className="flex items-center justify-center px-[6px] rounded-[10px] bg-[#f0f3ff] border border-transparent hover:border-[#dcdfec] cursor-pointer transition-colors">
                            <span className="text-[14px] leading-[22px]">👍 <span className="text-[#676879] text-[12px] ml-1">1</span></span>
                        </div>
                    </div>
                    <div className="flex items-center gap-[4px] text-[#676879] text-[12px]">
                        <IconPlatformShow />
                        <span className="leading-[16px]">2</span>
                    </div>
                </div>
            </div>

            {/* Action Buttons Line */}
            <div className="border-t border-[#ecedf5] w-full">
                <div className="flex items-center px-[12px] py-[4px] gap-[8px]">
                    <button 
                        className="flex items-center gap-[8px] px-[8px] py-[6px] h-[32px] rounded-[4px] hover:bg-gray-100 transition-colors"
                        onClick={() => setIsLiked(!isLiked)}
                    >
                        <div className={isLiked ? "text-[#0073ea]" : "text-[#323338]"}>
                            <IconPlatformThumbsUp />
                        </div>
                        <span className={clsx("text-[14px] leading-[22px]", isLiked ? "text-[#0073ea] font-medium" : "text-[#323338]")}>Like</span>
                    </button>
                    <button className="flex items-center gap-[8px] px-[8px] py-[6px] h-[32px] rounded-[4px] hover:bg-gray-100 transition-colors">
                        <IconPlatformReply />
                        <span className="text-[14px] text-[#323338] leading-[20px]">Reply</span>
                    </button>
                </div>
            </div>

            {/* Reply Input Area */}
            <div className="w-full pb-[24px] px-[16px] pt-[8px] flex items-center gap-[4px]">
                <div className="size-[26px] rounded-full overflow-hidden shrink-0 relative self-start mt-1">
                    <img src={img} alt="" className="absolute left-0 top-0 size-full object-cover" />
                </div>
                <div className="flex-1 bg-white rounded-[8px] border border-[#dcdfec] overflow-hidden relative">
                    <div className="p-[16px]">
                        <p className="text-[#676879] text-[14px] leading-[20px]">Write an reply and mention others with @</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
