import svgPaths from "./svg-jjhh0nxf95";

function IconBasicMoveArrowUp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Basic / Move Arrow Up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_93_538)" id="Icon / Basic / Move Arrow Up">
          <path clipRule="evenodd" d={svgPaths.p1a3c500} fill="var(--fill-0, #323338)" fillOpacity="0.38" fillRule="evenodd" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_93_538">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default function IconButton() {
  return (
    <div className="bg-[#ecedf5] content-stretch flex gap-[8px] items-center justify-center relative rounded-[12px] size-full" data-name="Icon Button">
      <IconBasicMoveArrowUp />
    </div>
  );
}