import svgPaths from "./svg-nd89limyvu";
import { imgColorLayer } from "./svg-igccz";

function TextCursor() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-px" data-name="Text cursor">
      <div className="absolute bg-[#323338] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[1px_18px]" data-name="Color layer" style={{ maskImage: `url('${imgColorLayer}')` }} />
    </div>
  );
}

function Container() {
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

function Container1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[12px] py-0 relative w-full">
          <Container />
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

function IconBasicMoveArrowUp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Basic / Move Arrow Up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_67_669)" id="Icon / Basic / Move Arrow Up">
          <path clipRule="evenodd" d={svgPaths.p1a3c500} fill="var(--fill-0, #323338)" fillOpacity="0.38" fillRule="evenodd" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_67_669">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function SubmitButton() {
  return (
    <div className="bg-[#ecedf5] content-stretch flex gap-[8px] items-center justify-center max-h-[24px] max-w-[24px] relative rounded-[12px] shrink-0 size-[24px]" data-name="Submit button">
      <IconBasicMoveArrowUp />
    </div>
  );
}

function Container2() {
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

function Container3() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start justify-center overflow-clip px-0 py-[8px] relative rounded-[inherit] w-full">
        <Container1 />
        <Container2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_0px_8px_0px_rgba(174,212,252,0.4)]" />
    </div>
  );
}

function Container4() {
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

export default function PromptEditor() {
  return (
    <div className="backdrop-blur-2xl backdrop-filter content-stretch flex flex-col gap-[6px] items-center justify-end pb-[12px] pt-0 px-[12px] relative rounded-tl-[16px] rounded-tr-[16px] size-full" data-name="Prompt editor">
      <Container3 />
      <Container4 />
    </div>
  );
}