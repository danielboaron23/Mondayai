import svgPaths from "./svg-rhn4b8togy";

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

export default function RightButtons() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-end relative size-full" data-name="Right buttons">
      <IconButton />
      <IconButton1 />
    </div>
  );
}