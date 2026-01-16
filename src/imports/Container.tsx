import svgPaths from "./svg-a31b0alghu";

function Svg() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="SVG">
          <path clipRule="evenodd" d={svgPaths.p1b48fc00} fill="var(--fill-0, #0073EA)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#0073ea] content-stretch flex flex-col items-center left-[13px] px-[4px] py-[2px] rounded-[10px] top-[10px]" data-name="Background">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
        <p className="leading-[9px] whitespace-pre">1</p>
      </div>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex items-start pl-0 pr-[2px] py-0 relative size-full" data-name="Container">
      <Svg />
      <Background />
    </div>
  );
}