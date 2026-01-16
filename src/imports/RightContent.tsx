import svgPaths from "./svg-69i7o3sow0";
import imgStar from "figma:asset/d19fbde6c069c5c82573e290ed8844e5504d6365.png";

function IconColoredAiColored() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Colored / AI Colored">
      <div className="absolute inset-[7.5%]" data-name="Star">
        <img alt="" className="block max-w-none size-full" height="17" src={imgStar} width="17" />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex gap-[8px] h-full items-center justify-center max-h-[32px] min-h-[32px] px-[8px] py-0 relative rounded-[4px] shrink-0" data-name="Button">
      <IconColoredAiColored />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323338] text-[14px] text-nowrap">
        <p className="leading-[20px]">AI Sidekick</p>
      </div>
    </div>
  );
}

function IconPlatformIntegrations() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / Integrations">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / Integrations">
          <path clipRule="evenodd" d={svgPaths.p167ff800} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[5px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconPlatformIntegrations />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323338] text-[14px] text-nowrap">
        <p className="leading-[20px]">Integrate</p>
      </div>
    </div>
  );
}

function IconPlatformRobot() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / Robot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / Robot">
          <g id="Union">
            <path d={svgPaths.p1af52e00} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p1957bac0} fill="var(--fill-0, #676879)" />
            <path clipRule="evenodd" d={svgPaths.p24bc9140} fill="var(--fill-0, #676879)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[5px] relative rounded-[4px] shrink-0" data-name="Button">
      <IconPlatformRobot />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323338] text-[14px] text-nowrap">
        <p className="leading-[20px]">Automate</p>
      </div>
    </div>
  );
}

function IconPlatformUpdate() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / Update">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / Update">
          <path clipRule="evenodd" d={svgPaths.p20951d00} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center max-h-[32px] min-h-[32px] px-[8px] py-0 relative rounded-[4px] shrink-0 size-[32px]" data-name="Button">
      <IconPlatformUpdate />
    </div>
  );
}

function AvatarContainer() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Avatar Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Avatar Container">
          <path d={svgPaths.p1dd74270} id="Border" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex items-center mr-[-8px] relative rounded-[100px] shrink-0 w-[24px]" data-name="Avatar">
      <AvatarContainer />
    </div>
  );
}

function AvatarGroup() {
  return (
    <div className="content-stretch flex items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="AvatarGroup">
      {[...Array(3).keys()].map((_, i) => (
        <Avatar key={i} />
      ))}
    </div>
  );
}

function IconButton() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center relative rounded-[4px] shrink-0" data-name="Icon Button">
      <AvatarGroup />
    </div>
  );
}

function RightActions() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="right actions">
      <Button1 />
      <Button2 />
      <Button3 />
      <IconButton />
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex h-[32px] items-center justify-center max-h-[32px] min-h-[32px] px-[8px] py-0 relative rounded-[4px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323338] text-[14px] text-nowrap">
        <p className="leading-[20px]">Invite</p>
      </div>
    </div>
  );
}

function IconBasicMenu() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Basic / Menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Basic / Menu">
          <g id="Union">
            <path d={svgPaths.p20976d00} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p22c82000} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p2901f800} fill="var(--fill-0, #676879)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon Button">
      <IconBasicMenu />
    </div>
  );
}

export default function RightContent() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative size-full" data-name="right content">
      <Button />
      <RightActions />
      <Button4 />
      <IconButton1 />
    </div>
  );
}