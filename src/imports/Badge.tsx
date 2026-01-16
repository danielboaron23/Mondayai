import svgPaths from "./svg-lhbt5ta6br";

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

export default function Badge() {
  return (
    <div className="relative size-full" data-name="Badge">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pl-[9px] pr-0 py-0 relative size-full">
          <BreadcrumbsBar />
        </div>
      </div>
    </div>
  );
}