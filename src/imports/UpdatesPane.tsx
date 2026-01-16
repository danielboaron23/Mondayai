import svgPaths from "./svg-rllj2msr2u";
import img from "figma:asset/fe0a458297ef1c61817a6722d50a9731e7727ef6.png";

function IconBasicCloseSmall() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Basic / Close Small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Basic / Close Small">
          <path d={svgPaths.p3f6c200} fill="var(--fill-0, #676879)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function CloseXIcon() {
  return (
    <div className="relative shrink-0 w-full" data-name="Close x icon">
      <div className="content-stretch flex items-start px-[10px] py-0 relative w-full">
        <IconBasicCloseSmall />
      </div>
    </div>
  );
}

function IconBasicMenu() {
  return (
    <div className="relative shrink-0 size-[12.524px]" data-name="Icon / Basic / Menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5244 12.5244">
        <g id="Icon / Basic / Menu">
          <g id="Union">
            <path d={svgPaths.p2dc7b400} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p19973d00} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p12327300} fill="var(--fill-0, #676879)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex items-center justify-center p-[8.767px] relative rounded-[2.505px] shrink-0 size-[30.059px]" data-name="Icon Button">
      <IconBasicMenu />
    </div>
  );
}

function InfoRightTop() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0" data-name="Info right top">
      <IconButton />
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="content-stretch flex items-start justify-between pl-[18px] pr-[24px] py-0 relative w-full">
        <p className="css-ew64yg font-['Poppins:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#323338] text-[24px] tracking-[-0.2px]">Find guest speakers</p>
        <InfoRightTop />
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[16px] py-[4px] relative shrink-0" data-name="tab">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>{`Assigned to me `}</p>
    </div>
  );
}

function TabsPrimitives() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center relative shrink-0 w-[18px]" data-name="Tabs-primitives">
      <Tab />
      <div className="bg-[#c3c6d4] h-px shrink-0 w-full" data-name="underline" />
    </div>
  );
}

function Tab1() {
  return (
    <div className="content-stretch flex items-center overflow-clip pb-[3px] pt-[4px] px-[16px] relative shrink-0" data-name="tab">
      <p className="css-ew64yg font-['Manrope:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#323338] text-[14px] text-center">Updates</p>
    </div>
  );
}

function TabsPrimitives1() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center relative shrink-0" data-name="Tabs-primitives">
      <Tab1 />
      <div className="bg-[#0073ea] h-[2px] shrink-0 w-full" data-name="underline" />
    </div>
  );
}

function Tab2() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[16px] py-[4px] relative shrink-0" data-name="tab">
      <p className="css-ew64yg font-['Manrope:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#323338] text-[14px] text-center">Files</p>
    </div>
  );
}

function TabsPrimitives2() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center relative shrink-0" data-name="Tabs-primitives">
      <Tab2 />
      <div className="bg-[#c3c6d4] h-px shrink-0 w-full" data-name="underline" />
    </div>
  );
}

function Tab3() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[16px] py-[4px] relative shrink-0" data-name="tab">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#323338] text-[14px] text-center">Activity Log</p>
    </div>
  );
}

function TabsPrimitives3() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center relative shrink-0" data-name="Tabs-primitives">
      <Tab3 />
      <div className="bg-[#c3c6d4] h-px shrink-0 w-full" data-name="underline" />
    </div>
  );
}

function Tab4() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[16px] py-[4px] relative shrink-0" data-name="tab">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#323338] text-[14px] text-center">Item Card</p>
    </div>
  );
}

function TabsPrimitives4() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center relative shrink-0" data-name="Tabs-primitives">
      <Tab4 />
      <div className="bg-[#c3c6d4] h-px shrink-0 w-full" data-name="underline" />
    </div>
  );
}

function Tab5() {
  return (
    <div className="content-stretch flex items-center overflow-clip px-[16px] py-[4px] relative shrink-0" data-name="tab">
      <p className="css-ew64yg font-['Roboto:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[14px] text-center text-white" style={{ fontVariationSettings: "'wdth' 100" }}>{`Assigned to me `}</p>
    </div>
  );
}

function TabsPrimitives5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-px items-center min-h-px min-w-px relative" data-name="Tabs-primitives">
      <Tab5 />
      <div className="bg-[#c3c6d4] h-px shrink-0 w-full" data-name="underline" />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Tabs">
      <TabsPrimitives />
      <TabsPrimitives1 />
      <TabsPrimitives2 />
      <TabsPrimitives3 />
      <TabsPrimitives4 />
      <TabsPrimitives5 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Title">
      <Title />
      <Tabs />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Header">
      <CloseXIcon />
      <Title1 />
    </div>
  );
}

function IconPlatformFeedback() {
  return (
    <div className="relative shrink-0 size-[12.524px]" data-name="Icon / Platform /  Feedback">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5244 12.5244">
        <g id="Icon / Platform /  Feedback">
          <g id="Union">
            <path clipRule="evenodd" d={svgPaths.p2928b700} fill="var(--fill-0, #676879)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1a665f80} fill="var(--fill-0, #676879)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[5.01px] h-[25.049px] items-center justify-center max-h-[25.048828125px] min-h-[25.048828125px] px-[10.02px] py-[3.757px] relative rounded-[2.505px] shrink-0" data-name="Button">
      <IconPlatformFeedback />
      <div className="css-g0mm18 flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323338] text-[10.02px]">
        <p className="css-ew64yg leading-[13.777px]">Give feedback</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-end relative shrink-0 w-full">
      <Button />
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex items-start pl-[16px] pr-[24px] py-[16px] relative w-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['Figtree:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#676879] text-[14px]">Write an reply and mention others with @</p>
      </div>
    </div>
  );
}

function IconPlatformMention() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / Mention">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / Mention">
          <path clipRule="evenodd" d={svgPaths.p216800} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center p-[6px] relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon Button">
      <IconPlatformMention />
    </div>
  );
}

function IconPlatformAttach() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / Attach">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / Attach">
          <path clipRule="evenodd" d={svgPaths.p25cec1c0} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButton2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center p-[6px] relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon Button">
      <IconPlatformAttach />
    </div>
  );
}

function IconPlatformGif() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / GIF">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / GIF">
          <g id="Union">
            <path d={svgPaths.p1b824b00} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p287d6980} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p22ac2100} fill="var(--fill-0, #676879)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center p-[6px] relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon Button">
      <IconPlatformGif />
    </div>
  );
}

function IconRedactorEmoji() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Redactor / Emoji">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Redactor / Emoji">
          <g id="Union">
            <path clipRule="evenodd" d={svgPaths.p38e1f600} fill="var(--fill-0, #676879)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pc5cde80} fill="var(--fill-0, #676879)" fillRule="evenodd" />
            <path d={svgPaths.p184f3000} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p1b519f80} fill="var(--fill-0, #676879)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center p-[6px] relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon Button">
      <IconRedactorEmoji />
    </div>
  );
}

function IconAiEditAi() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / AI / Edit AI">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / AI / Edit AI">
          <path d={svgPaths.p367aeff8} fill="var(--fill-0, #676879)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButton5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center p-[6px] relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon Button">
      <IconAiEditAi />
    </div>
  );
}

function AllActions() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="all actions">
      <IconButton1 />
      <IconButton2 />
      <IconButton3 />
      <IconButton4 />
      <IconButton5 />
    </div>
  );
}

function ActionsIcons() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Actions icons">
      <AllActions />
    </div>
  );
}

function ActionBar() {
  return (
    <div className="relative shrink-0 w-full" data-name="Action bar">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center pb-[8px] pl-[8px] pr-[16px] pt-0 relative w-full">
          <ActionsIcons />
        </div>
      </div>
    </div>
  );
}

function InputField() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name=".Input field">
      <div aria-hidden="true" className="absolute border border-[#dcdfec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Text />
      <ActionBar />
    </div>
  );
}

function Bottom() {
  return (
    <div className="relative shrink-0 w-full" data-name="Bottom">
      <div className="flex flex-col items-center justify-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-end px-[24px] py-[16px] relative w-full">
          <Frame />
          <InputField />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="דניאל בוארון">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img} />
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pl-0 pr-[4px] py-0 relative shrink-0" data-name="Time">
      <div className="css-g0mm18 flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#676879] text-[14px]">
        <p className="css-ew64yg leading-[22px]">Just now</p>
      </div>
    </div>
  );
}

function NameTime() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Name + Time">
      <p className="css-ew64yg font-['Figtree:SemiBold',sans-serif] font-semibold leading-[20px] relative shrink-0 text-[14px] text-black">Sandra Johnston</p>
      <Time />
    </div>
  );
}

function NameLine() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Name line">
      <NameTime />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Left">
      <Component />
      <NameLine />
    </div>
  );
}

function IconAiSummarizeAi() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / AI / Summarize AI">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / AI / Summarize AI">
          <g id="Union">
            <path d={svgPaths.p11ff9900} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p62d4170} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p2f2f5100} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p331b580} fill="var(--fill-0, #676879)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" data-name="Icon Button">
      <IconAiSummarizeAi />
    </div>
  );
}

function IconPlatformSetReminder() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Platform / Set reminder">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Platform / Set reminder">
          <g id="Union">
            <path clipRule="evenodd" d={svgPaths.p31e01c00} fill="var(--fill-0, #676879)" fillRule="evenodd" />
            <path d={svgPaths.p26b44800} fill="var(--fill-0, #676879)" />
            <path clipRule="evenodd" d={svgPaths.p18481300} fill="var(--fill-0, #676879)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 size-[24px]" data-name="IconButton">
      <IconPlatformSetReminder />
    </div>
  );
}

function IconBasicMenu1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Basic / Menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Basic / Menu">
          <g id="Union">
            <path d={svgPaths.p2c7e2d00} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p37281800} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p87bb980} fill="var(--fill-0, #676879)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 size-[24px]" data-name="IconButton">
      <IconBasicMenu1 />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Right">
      <IconButton6 />
      <IconButton7 />
      <IconButton8 />
    </div>
  );
}

function Header1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="content-stretch flex items-start justify-between pb-[8px] pt-[16px] px-[12px] relative w-full">
        <Left />
        <Right />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex items-end px-[16px] py-[8px] relative w-full">
          <p className="css-4hzbpn flex-[1_0_0] font-['Figtree:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[14px] text-black">Started compiling a list of potential guest speakers with experience in product leadership and scaling SaaS teams. Will share recommendations by end of week.</p>
        </div>
      </div>
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[6px] py-0 relative rounded-[10px] shrink-0" data-name="Left">
      <p className="css-ew64yg font-['Figtree:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#323338] text-[14px] text-center">
        <span>{`👍 `}</span>
        <span className="text-[#676879]">1</span>
      </p>
    </div>
  );
}

function Reactions() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Reactions">
      <Left1 />
    </div>
  );
}

function IconPlatformShow() {
  return (
    <div className="relative shrink-0 size-[12.524px]" data-name="Icon / Platform / Show">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.5244 12.5244">
        <g id="Icon / Platform / Show">
          <g id="Union">
            <path clipRule="evenodd" d={svgPaths.p29bb5880} fill="var(--fill-0, #676879)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pb4c1100} fill="var(--fill-0, #676879)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Seen() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="seen">
      <IconPlatformShow />
      <div className="css-g0mm18 flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#676879] text-[12px]">
        <p className="css-ew64yg leading-[16px]">{`2 `}</p>
      </div>
    </div>
  );
}

function Right1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start justify-center relative shrink-0" data-name="Right">
      <Seen />
    </div>
  );
}

function ReactionsLine() {
  return (
    <div className="content-stretch flex items-center justify-end px-0 py-[4px] relative shrink-0 w-full" data-name="Reactions line">
      <Reactions />
      <Right1 />
    </div>
  );
}

function Footer() {
  return (
    <div className="relative shrink-0 w-full" data-name="Footer">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col items-end px-[18px] py-[8px] relative w-full">
          <ReactionsLine />
        </div>
      </div>
    </div>
  );
}

function IconPlatformThumbsUp() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / Thumbs Up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / Thumbs Up">
          <path clipRule="evenodd" d={svgPaths.p1cac2070} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Like() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] py-[6px] relative rounded-[4px] shrink-0" data-name="Like">
      <IconPlatformThumbsUp />
      <div className="css-g0mm18 flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323338] text-[14px]">
        <p className="css-ew64yg leading-[22px]">Like</p>
      </div>
    </div>
  );
}

function IconPlatformReply() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / Reply">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / Reply">
          <path clipRule="evenodd" d={svgPaths.p16e59b00} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center px-[8px] py-[6px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconPlatformReply />
      <div className="css-g0mm18 flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323338] text-[14px]">
        <p className="css-ew64yg leading-[20px]">Reply</p>
      </div>
    </div>
  );
}

function ActionsIcons1() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Actions icons">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-0 relative w-full">
          <Like />
          <Button1 />
        </div>
      </div>
    </div>
  );
}

function ActionsLine() {
  return (
    <div className="relative shrink-0 w-full" data-name="Actions line">
      <div aria-hidden="true" className="absolute border-[#ecedf5] border-solid border-t inset-[-0.5px_0_0_0] pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[4px] relative w-full">
          <ActionsIcons1 />
        </div>
      </div>
    </div>
  );
}

function PostedMessageNewOnButtom() {
  return (
    <div className="bg-white content-stretch flex flex-col items-end relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Posted Message - new on buttom">
      <div aria-hidden="true" className="absolute border border-[#dcdfec] border-solid inset-0 pointer-events-none rounded-tl-[8px] rounded-tr-[8px]" />
      <Header1 />
      <Text1 />
      <Footer />
      <ActionsLine />
    </div>
  );
}

function Component1() {
  return (
    <div className="relative shrink-0 size-[26px]" data-name="דניאל בוארון">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={img} />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex items-center relative rounded-[100px] shrink-0" data-name="Avatar">
      <Component1 />
    </div>
  );
}

function Avatar1() {
  return (
    <div className="content-stretch flex h-full items-start relative shrink-0" data-name="Avatar">
      <Avatar />
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="content-stretch flex items-start p-[16px] relative w-full">
        <p className="css-4hzbpn flex-[1_0_0] font-['Figtree:Regular',sans-serif] font-normal leading-[20px] min-h-px min-w-px relative text-[#676879] text-[14px]">Write an reply and mention others with @</p>
      </div>
    </div>
  );
}

function InputField1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Input field">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Text2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#dcdfec] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Reply() {
  return (
    <div className="relative shrink-0 w-full" data-name="Reply">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pb-[24px] pl-[16px] pr-[18px] pt-[8px] relative w-full">
          <div className="flex flex-row items-center self-stretch">
            <Avatar1 />
          </div>
          <InputField1 />
        </div>
      </div>
    </div>
  );
}

function Replies() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start relative rounded-[8px] shrink-0 w-full" data-name="Replies">
      <div aria-hidden="true" className="absolute border border-[#dcdfec] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <PostedMessageNewOnButtom />
      <Reply />
    </div>
  );
}

function UpdatesContent() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Updates content">
      <div className="flex flex-col items-center overflow-x-clip overflow-y-auto size-full">
        <div className="content-stretch flex flex-col items-center px-[24px] py-[12px] relative size-full">
          <Replies />
        </div>
      </div>
    </div>
  );
}

export default function UpdatesPane() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center justify-between pb-0 pt-[12px] px-0 relative shadow-[0px_4px_8px_0px_rgba(0,0,0,0.2)] size-full" data-name="Updates pane">
      <Header />
      <Bottom />
      <UpdatesContent />
    </div>
  );
}