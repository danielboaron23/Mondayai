import svgPaths from "./svg-r3fs3ogzb2";
import imgGradient from "figma:asset/90f8cf54832502c4e962befcc7c9e121547fed3b.png";
import imgStar from "figma:asset/d19fbde6c069c5c82573e290ed8844e5504d6365.png";

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
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start p-[16px] relative w-full">
          <HeaderContent />
          <Badge />
        </div>
      </div>
    </div>
  );
}

function SubGreetingSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Sub-greeting section">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#323338] text-[14px] w-[352px]" dir="auto">
        How can I help you move forward with this board?
      </p>
    </div>
  );
}

function GreetingText() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Greeting text">
      <p className="font-['Poppins:Medium',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#323338] text-[18px] tracking-[-0.09px] w-[352px]">Hey Sandra,</p>
      <SubGreetingSection />
    </div>
  );
}

function GreetingSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Greeting section">
      <GreetingText />
    </div>
  );
}

function PromptInput() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Prompt input">
      <div className="bg-[#323338] h-[18px] shrink-0 w-px" data-name="Input underline" />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#676879] text-[14px] text-nowrap">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden" dir="auto">
          Message Sidekick...
        </p>
      </div>
    </div>
  );
}

function PromptInputContainer() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative shrink-0" data-name="Prompt input container">
      <PromptInput />
    </div>
  );
}

function IconBasicAdd() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Basic / Add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Basic / Add">
          <path clipRule="evenodd" d={svgPaths.p2dd8dcf0} fill="var(--fill-0, #323338)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButton2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" data-name="Icon Button">
      <IconBasicAdd />
    </div>
  );
}

function IconBasicMoveArrowUp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Basic / Move Arrow Up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_39456)" id="Icon / Basic / Move Arrow Up">
          <path clipRule="evenodd" d={svgPaths.p1a3c500} fill="var(--fill-0, #323338)" fillOpacity="0.38" fillRule="evenodd" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_1_39456">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconButton3() {
  return (
    <div className="bg-[#ecedf5] content-stretch flex gap-[8px] items-center justify-center max-h-[24px] max-w-[24px] relative rounded-[12px] shrink-0 size-[24px]" data-name="Icon Button">
      <IconBasicMoveArrowUp />
    </div>
  );
}

function PromptActions() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Prompt actions">
      <IconButton2 />
      <IconButton3 />
    </div>
  );
}

function PromptContainer() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Prompt container">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start px-[12px] py-0 relative size-full">
          <PromptInputContainer />
          <PromptActions />
        </div>
      </div>
    </div>
  );
}

function PromptSection() {
  return (
    <div className="bg-white h-[100px] relative rounded-[12px] shrink-0 w-full" data-name="Prompt section">
      <div className="content-stretch flex flex-col items-start justify-center overflow-clip pb-[8px] pt-[12px] px-0 relative rounded-[inherit] size-full">
        <PromptContainer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#676879] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function PromptEditor() {
  return (
    <div className="backdrop-blur-2xl backdrop-filter bg-[rgba(255,255,255,0)] content-stretch flex flex-col items-center justify-end relative shrink-0 w-full" data-name="Prompt editor">
      <PromptSection />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <GreetingSection />
      <PromptEditor />
    </div>
  );
}

function IconAiEditAi() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / AI / Edit AI">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / AI / Edit AI">
          <path d={svgPaths.p37e2a500} fill="var(--fill-0, #676879)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center px-0 py-[2px] relative shrink-0">
      <IconAiEditAi />
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#323338] text-[14px] w-full" dir="auto">
        Draft invitation email template for Send invitions task
      </p>
    </div>
  );
}

function ActionsSuggestions() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[56px] relative rounded-[8px] shrink-0 w-full" data-name="Actions suggestions">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start px-[12px] py-[8px] relative size-full">
          <Frame2 />
          <Frame1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c3c6d4] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconPlatformWriteWithAi() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Platform / Write With AI">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_39445)" id="Icon / Platform / Write With AI">
          <g id="Union">
            <path d={svgPaths.p229e4800} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p2d8dd980} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p183c2100} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p19e0a000} fill="var(--fill-0, #676879)" />
            <path clipRule="evenodd" d={svgPaths.p31f8b800} fill="var(--fill-0, #676879)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_39445">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center px-0 py-[2px] relative shrink-0">
      <IconPlatformWriteWithAi />
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#323338] text-[14px] w-full" dir="auto">
        Outline agenda structure for Create agenda item
      </p>
    </div>
  );
}

function ActionsSuggestions1() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[56px] relative rounded-[8px] shrink-0 w-full" data-name="Actions suggestions">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start px-[12px] py-[8px] relative size-full">
          <Frame3 />
          <Frame4 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c3c6d4] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconPlatformShuffle() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Platform / Shuffle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_39459)" id="Icon / Platform / Shuffle">
          <path d={svgPaths.p3b046840} fill="var(--fill-0, #676879)" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_1_39459">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center px-0 py-[2px] relative shrink-0">
      <IconPlatformShuffle />
    </div>
  );
}

function Frame6() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#323338] text-[14px] w-full" dir="auto">
        List venue comparison criteria for Venues task
      </p>
    </div>
  );
}

function ActionsSuggestions2() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Actions suggestions">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start px-[12px] py-[8px] relative size-full">
          <Frame5 />
          <Frame6 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c3c6d4] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconAiBulletsAi() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / AI / Bullets AI">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / AI / Bullets AI">
          <g clipPath="url(#clip0_1_39442)">
            <g id="Union">
              <path d={svgPaths.p3df9da00} fill="var(--fill-0, #676879)" />
              <path d={svgPaths.p325ad400} fill="var(--fill-0, #676879)" />
              <path d={svgPaths.p14642500} fill="var(--fill-0, #676879)" />
              <path d={svgPaths.p23a2cf00} fill="var(--fill-0, #676879)" />
              <path d={svgPaths.p3c8b4b40} fill="var(--fill-0, #676879)" />
              <path d={svgPaths.p20452a80} fill="var(--fill-0, #676879)" />
              <path d={svgPaths.p52f1780} fill="var(--fill-0, #676879)" />
            </g>
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_39442">
            <rect fill="white" height="16" rx="1.78571" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center px-0 py-[2px] relative shrink-0">
      <IconAiBulletsAi />
    </div>
  );
}

function Frame8() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#323338] text-[14px] w-full" dir="auto">
        Build catering requirements checklist for Coordinate catering
      </p>
    </div>
  );
}

function ActionsSuggestions3() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[56px] relative rounded-[8px] shrink-0 w-full" data-name="Actions suggestions">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start px-[12px] py-[8px] relative size-full">
          <Frame7 />
          <Frame8 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c3c6d4] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function IconBasicAdd1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Basic / Add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_39485)" id="Icon / Basic / Add">
          <path clipRule="evenodd" d={svgPaths.p2dd8dcf0} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_1_39485">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center px-0 py-[2px] relative shrink-0">
      <IconBasicAdd1 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[2px] grow items-start justify-center min-h-px min-w-px relative shrink-0">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#323338] text-[14px] w-full" dir="auto">
        What else can AI Sidekick help with
      </p>
    </div>
  );
}

function ActionsSuggestions4() {
  return (
    <div className="bg-[rgba(255,255,255,0.6)] h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Actions suggestions">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[8px] items-start px-[12px] py-[8px] relative size-full">
          <Frame9 />
          <Frame10 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#c3c6d4] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function SuggestionsList() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Suggestions list">
      <ActionsSuggestions />
      <ActionsSuggestions1 />
      <ActionsSuggestions2 />
      <ActionsSuggestions3 />
      <ActionsSuggestions4 />
    </div>
  );
}

function SuggestionsContainer() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Suggestions container">
      <p className="font-['Figtree:SemiBold',sans-serif] font-semibold leading-[16px] relative shrink-0 text-[#676879] text-[12px] w-[352px]">Suggestions for you</p>
      <SuggestionsList />
    </div>
  );
}

function SuggestionsSection() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Suggestions section">
      <SuggestionsContainer />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start justify-end relative shrink-0 w-full" data-name="Main content">
      <Container />
      <SuggestionsSection />
    </div>
  );
}

function AiBody() {
  return (
    <div className="h-[696px] relative shrink-0 w-full" data-name="AI body">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center pb-[16px] pt-0 px-[24px] relative size-full">
          <MainContent />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 top-0 w-[400px]" data-name="Content">
      <Header />
      <AiBody />
    </div>
  );
}

export default function Sidekick() {
  return (
    <div className="relative shadow-[0px_6px_20px_0px_rgba(0,0,0,0.2)] size-full" data-name="Sidekick">
      <Blur1 />
      <Fill />
      <GlassEffect />
      <Content />
    </div>
  );
}