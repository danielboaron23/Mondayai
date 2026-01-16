import svgPaths from "./svg-tcbclty5xx";

function AtomsHorizontalDivider() {
  return <div className="absolute h-px left-[4px] right-0 top-0" data-name="Atoms / Horizontal Divider" />;
}

function AtomsHorizontalDivider1() {
  return (
    <div className="absolute bottom-0 h-px left-[4px] right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsVerticalDivider() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function LeftIndicatorInner() {
  return <div className="bg-[#784bd1] h-[36px] rounded-[4px] shrink-0 w-[6px]" data-name="Left Indicator Inner" />;
}

function Checkbox() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="🔥 Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox container">
        <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function CheckbocIndicator() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="Checkboc Indicator">
      <Checkbox />
    </div>
  );
}

function CellCheckboxInner() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="Cell Checkbox inner">
      <LeftIndicatorInner />
      <CheckbocIndicator />
    </div>
  );
}

function CellCheckbox() {
  return (
    <div className="absolute inset-0 rounded-bl-[4px] rounded-tl-[4px]" data-name="_Cell Checkbox">
      <AtomsHorizontalDivider />
      <AtomsHorizontalDivider1 />
      <AtomsVerticalDivider />
      <CellCheckboxInner />
    </div>
  );
}

function AtomsCellCheckbox() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[39px]" data-name="Atoms / 🔥 Cell Checkbox">
      <CellCheckbox />
    </div>
  );
}

function AtomsVerticalDivider1() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider2() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-[-4px]" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function SubItemsButton() {
  return <div className="absolute content-stretch flex items-start left-0 px-[4px] py-[7px] top-0" data-name="Sub Items Button" />;
}

function EditableHeading() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="🔥 Editable Heading">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-0 relative size-full">
          <p className="basis-0 font-['Figtree:Regular',sans-serif] font-normal grow leading-[22px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-nowrap">Send invitations</p>
        </div>
      </div>
    </div>
  );
}

function IndicationLabel() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Indication+ Label">
      <EditableHeading />
    </div>
  );
}

function EditableHeadingOpenButton() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[30px] right-[8px] top-1/2 translate-y-[-50%]" data-name="Editable Heading + Open Button">
      <IndicationLabel />
    </div>
  );
}

function NameColumnInner() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Name Column Inner">
      <AtomsVerticalDivider1 />
      <AtomsHorizontalDivider2 />
      <SubItemsButton />
      <EditableHeadingOpenButton />
    </div>
  );
}

function IconAiAi() {
  return (
    <div className="absolute left-1/2 size-[22px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Icon / AI / AI">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon / AI / AI">
          <path d={svgPaths.p3c2b3e40} fill="var(--fill-0, #676879)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Animation() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="animation1">
      <IconAiAi />
    </div>
  );
}

function IconPlatformAddUpdate() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="Icon / Platform / Add update">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Icon / Platform / Add update">
          <path d={svgPaths.p3a46c8f0} fill="var(--fill-0, #676879)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function StartConversationIcon() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center justify-center px-[22px] py-0 relative shrink-0" data-name="Start Conversation Icon">
      <div aria-hidden="true" className="absolute border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Animation />
      <IconPlatformAddUpdate />
    </div>
  );
}

function NameColumn() {
  return (
    <div className="basis-0 bg-white content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="_Name Column">
      <AtomsCellCheckbox />
      <NameColumnInner />
      <StartConversationIcon />
    </div>
  );
}

export default function AtomsNameColumnAiWide() {
  return (
    <div className="content-stretch flex items-start relative size-full" data-name="Atoms / 🔥 Name Column AI wide">
      <NameColumn />
    </div>
  );
}