import svgPaths from "./svg-jnjn5h4llt";
import imgGradient from "figma:asset/90f8cf54832502c4e962befcc7c9e121547fed3b.png";
import imgStar from "figma:asset/d19fbde6c069c5c82573e290ed8844e5504d6365.png";
import imgAvatar from "figma:asset/f8631c20e9a10e0f2edcf3d87371628aa5cf9678.png";
import { imgAnalyzingAndRankin, imgColorLayer } from "./svg-iicxy";

function Mask() {
  return (
    <div className="absolute bg-white inset-[-50px]" data-name="Mask">
      <div className="absolute bg-black inset-[76px] rounded-[34px]" data-name="Shape" />
    </div>
  );
}

function Blur() {
  return <div className="absolute backdrop-blur-2xl backdrop-filter bg-[rgba(50,51,56,0.08)] blur-[20px] filter inset-[31px_26px_21px_26px] mix-blend-hard-light rounded-[34px]" data-name="Blur" />;
}

function Blur1() {
  return (
    <div className="absolute inset-[-26px]" data-name="Blur">
      <Mask />
      <Blur />
    </div>
  );
}

function Fill() {
  return (
    <div className="absolute inset-0 overflow-clip rounded-[34px]" data-name="Fill">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[34px]">
        <div className="absolute bg-[#262626] inset-0 mix-blend-color-dodge rounded-[34px]" />
        <div className="absolute bg-[rgba(255,255,255,0.9)] inset-0 rounded-[34px]" />
      </div>
      <div className="absolute h-[396px] left-[calc(50%-0.5px)] top-[calc(50%+236px)] translate-x-[-50%] translate-y-[-50%] w-[455px]" data-name="Gradient">
        <div className="absolute inset-[-37.37%_-32.53%]">
          <img alt="" className="block max-w-none size-full" height="692" src={imgGradient} width="751" />
        </div>
      </div>
    </div>
  );
}

function GlassEffect() {
  return <div className="absolute bg-[rgba(0,0,0,0)] inset-0 rounded-[34px]" data-name="Glass Effect" />;
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <div className="absolute inset-[7.5%]" data-name="Star">
        <img alt="" className="block max-w-none size-full" height="17" src={imgStar} width="17" />
      </div>
    </div>
  );
}

function DropdownIcon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Dropdown icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Dropdown icon">
          <path d={svgPaths.p5ae0100} fill="var(--fill-0, #323338)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center max-h-[32px] min-h-[32px] px-[8px] py-0 relative rounded-[4px] shrink-0" data-name="Button">
      <Icon />
      <div className="flex flex-col font-['Figtree:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#323338] text-[14px] text-nowrap">
        <p className="leading-[20px]">AI Sidekick</p>
      </div>
      <DropdownIcon />
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex items-center justify-center px-[4px] py-0 relative rounded-[2px] shrink-0" data-name="Label">
      <div aria-hidden="true" className="absolute border border-[#1f76c2] border-solid inset-0 pointer-events-none rounded-[2px]" />
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#1f76c2] text-[12px] text-center text-nowrap">Beta</p>
    </div>
  );
}

function TitleAndBadge() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Title and badge">
      <Button />
      <Label />
    </div>
  );
}

function IconPlatformNewChat() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / New Chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / New Chat">
          <g id="Vector">
            <path d={svgPaths.p3f969940} fill="var(--fill-0, #323338)" />
            <path d={svgPaths.p1ac09f00} fill="var(--fill-0, #323338)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 size-[32px]" data-name="IconButton">
      <IconPlatformNewChat />
    </div>
  );
}

function IconBasicCloseMedium() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Basic / Close Medium">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Basic / Close Medium">
          <path d={svgPaths.p1174de80} fill="var(--fill-0, #323338)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 size-[32px]" data-name="IconButton">
      <IconBasicCloseMedium />
    </div>
  );
}

function RightButtons() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative shrink-0" data-name="Right buttons">
      <IconButton />
      <IconButton1 />
    </div>
  );
}

function HeaderContent() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header content">
      <TitleAndBadge />
      <RightButtons />
    </div>
  );
}

function IconPlatformBoard() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon / Platform / Board">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon / Platform / Board">
          <path clipRule="evenodd" d={svgPaths.p1476ac80} fill="var(--fill-0, #323338)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[4px] items-center pl-[2px] pr-0 py-0 relative rounded-[4px] shrink-0">
      <IconPlatformBoard />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323338] text-[12px] text-center text-nowrap">
        <p className="leading-[16px]">Elevate event planning</p>
      </div>
    </div>
  );
}

function BreadcrumbItem() {
  return (
    <div className="content-stretch flex items-center justify-center pl-0 pr-[2px] py-0 relative rounded-[4px] shrink-0" data-name="Breadcrumb Item">
      <Frame />
    </div>
  );
}

function BreadcrumbsBar() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Breadcrumbs Bar">
      <BreadcrumbItem />
    </div>
  );
}

function Badge() {
  return (
    <div className="content-stretch flex flex-col items-start pl-[9px] pr-0 py-0 relative shrink-0" data-name="Badge">
      <BreadcrumbsBar />
    </div>
  );
}

function Header() {
  return (
    <div className="mb-[-16px] relative shrink-0 w-full" data-name="Header">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative w-full">
          <HeaderContent />
          <Badge />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="relative rounded-[100px] shrink-0 size-[32px]" data-name="Avatar">
      <img alt="" className="block max-w-none size-full" height="32" src={imgAvatar} width="32" />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="content">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[1.5] max-w-[270px] relative shrink-0 text-[#323338] text-[14px] text-nowrap" dir="auto">
        Develop a detailed agenda outline with time slots and session topics, referencing the “Create agenda” task. Ensure logical flow and highlight key segments for the event.
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-[#edf1fc] max-w-[302px] relative rounded-bl-[12px] rounded-br-[12px] rounded-tl-[12px] rounded-tr-[4px] shrink-0" data-name="Container">
      <div className="content-stretch flex flex-col items-start max-w-[inherit] overflow-clip px-[16px] py-[10px] relative rounded-[inherit]">
        <Content />
      </div>
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid border-white inset-0 pointer-events-none rounded-bl-[12px] rounded-br-[12px] rounded-tl-[12px] rounded-tr-[4px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-end size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-end pl-[24px] pr-0 py-0 relative w-full">
          <Avatar />
          <Container />
        </div>
      </div>
    </div>
  );
}

function IconColoredAiColored() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Colored / AI Colored">
      <div className="absolute inset-[7.5%]" data-name="Star">
        <img alt="" className="block max-w-none size-full" height="17" src={imgStar} width="17" />
      </div>
    </div>
  );
}

function Thinking() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="thinking">
      <IconColoredAiColored />
      <p className="bg-clip-text bg-gradient-to-r font-['Figtree:Regular',sans-serif] font-normal from-[#d0d4e4] from-[7.212%] leading-[20px] relative shrink-0 text-[14px] text-nowrap to-[#323338]" dir="auto" style={{ WebkitTextFillColor: "transparent" }}>
        Understanding task context
      </p>
    </div>
  );
}

function AnalyzingAndRankin() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[324px_40px] relative shrink-0" data-name="Analyzing and rankin..." style={{ maskImage: `url('${imgAnalyzingAndRankin}')` }}>
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#323338] text-[14px] w-[306.518px]" dir="auto">
        Understanding context based on task name, description, and status
      </p>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-end max-h-[160px] relative shrink-0 w-[324px]" data-name="Mask group">
      <AnalyzingAndRankin />
    </div>
  );
}

function Container2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#676879] border-[0px_0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[8px] pr-0 py-0 relative w-full">
          <MaskGroup />
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start px-[10px] py-0 relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function ThinkingProcess() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[352px]" data-name="Thinking process">
      <Thinking />
      <Container3 />
    </div>
  );
}

function Container4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex items-start pl-0 pr-[16px] py-0 relative w-full">
          <ThinkingProcess />
        </div>
      </div>
    </div>
  );
}

function AiBody() {
  return (
    <div className="basis-0 grow mb-[-16px] min-h-px min-w-px relative shrink-0 w-full" data-name="AI body">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start pb-[16px] pt-[32px] px-[24px] relative size-full">
          <Container1 />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start min-h-px min-w-px pb-[16px] pt-0 px-0 relative shrink-0 w-full" data-name="Content">
      <Header />
      <AiBody />
    </div>
  );
}

function TextCursor() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-px" data-name="Text cursor">
      <div className="absolute bg-[#323338] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[1px_18px]" data-name="Color layer" style={{ maskImage: `url('${imgColorLayer}')` }} />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <TextCursor />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#676879] text-[14px] text-nowrap">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden" dir="auto">
          Message Sidekick...
        </p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-0 relative w-full">
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function IconBasicAdd() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Basic / Add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Basic / Add">
          <path clipRule="evenodd" d={svgPaths.p37b8c380} fill="var(--fill-0, #323338)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function ActionsButton() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0 size-[24px]" data-name="Actions button">
      <IconBasicAdd />
    </div>
  );
}

function IconPlatformStopAi() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Platform / Stop AI">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Platform / Stop AI">
          <path d={svgPaths.p3d41af80} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function SubmitButton() {
  return (
    <div className="bg-[#323338] content-stretch flex gap-[8px] items-center justify-center max-h-[24px] max-w-[24px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Submit button">
      <IconPlatformStopAi />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[12px] py-0 relative w-full">
          <ActionsButton />
          <SubmitButton />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip px-0 py-[8px] relative rounded-[inherit] w-full">
        <Container6 />
        <Container7 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_8px_0px_rgba(174,212,252,0.4)]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[12px] py-0 relative w-full">
          <div className="basis-0 flex flex-col font-['Figtree:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#676879] text-[12px]">
            <p className="leading-[16px]" dir="auto">
              <span>{`AI may be inaccurate, make sure to review it. `}</span>
              <span className="text-[#1f76c2]">Learn more</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function PromptEditor() {
  return (
    <div className="backdrop-blur-2xl backdrop-filter content-stretch flex flex-col gap-[6px] items-center justify-end pb-[12px] pt-0 px-[12px] relative rounded-tl-[16px] rounded-tr-[16px] shrink-0 w-[400px]" data-name="Prompt editor">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Content2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[780px] items-start left-0 top-0 w-[400px]" data-name="Content">
      <Content1 />
      <PromptEditor />
    </div>
  );
}

export default function Sidekick() {
  return (
    <div className="relative shadow-[0px_6px_20px_0px_rgba(0,0,0,0.2)] size-full" data-name="Sidekick">
      <Blur1 />
      <Fill />
      <GlassEffect />
      <Content2 />
    </div>
  );
}