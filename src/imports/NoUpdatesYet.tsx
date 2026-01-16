import svgPaths from "./svg-xb0yuw616m";
import { imgGroup } from "./svg-lybkw";

function Group() {
  return (
    <div className="absolute inset-[18%_17.89%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-31.123px_-31.32px] mask-size-[174px_174px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 111.756 111.36">
        <g id="Group">
          <path d={svgPaths.p24d2d440} fill="var(--fill-0, #CBDDFF)" id="Vector" />
          <path d={svgPaths.p3cfb400} fill="var(--fill-0, #CBDDFF)" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p128c7e80} fill="var(--fill-0, #181B34)" fillRule="evenodd" id="Vector_3" />
          <path d={svgPaths.p21951c60} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.pfb45300} fill="var(--fill-0, #CBDDFF)" id="Vector_5" />
          <path d={svgPaths.p12ce9c80} fill="var(--fill-0, #6161FF)" id="Vector_6" />
          <path d={svgPaths.p3cd0b300} fill="var(--fill-0, #FFCC00)" id="Vector_7" />
          <path clipRule="evenodd" d={svgPaths.pabeaf00} fill="var(--fill-0, #181B34)" fillRule="evenodd" id="Vector_8" />
          <path clipRule="evenodd" d={svgPaths.pf223300} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function EmptyState8Bf98D52Svg() {
  return (
    <div className="absolute left-1/2 overflow-clip size-[174px] top-[calc(50%-4px)] translate-x-[-50%] translate-y-[-50%]" data-name="empty-state.8bf98d52.svg">
      <ClipPathGroup />
    </div>
  );
}

function EmptyState8Bf98D52SvgFill() {
  return (
    <div className="absolute left-0 overflow-clip size-[182px] top-0" data-name="empty-state.8bf98d52.svg fill">
      <EmptyState8Bf98D52Svg />
    </div>
  );
}

export default function NoUpdatesYet() {
  return (
    <div className="relative size-full" data-name="No updates yet">
      <EmptyState8Bf98D52SvgFill />
    </div>
  );
}