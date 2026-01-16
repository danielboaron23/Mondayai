import svgPaths from "./svg-nkps68t5so";

function ProductLogoLarge() {
  return (
    <div className="absolute aspect-[112/112] left-[15.63%] right-[15.63%] top-1/2 translate-y-[-50%]" data-name="Product Logo / Large">
      <div className="absolute inset-[8.14%_6.65%_7.93%_6.51%]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1048 18.4643">
          <g id="Union">
            <path clipRule="evenodd" d={svgPaths.p31d4e00} fill="var(--fill-0, #6161FF)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p20525600} fill="var(--fill-0, #6161FF)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3daf1f00} fill="var(--fill-0, #6161FF)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p35f83ac0} fill="var(--fill-0, #6161FF)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p8fa5880} fill="var(--fill-0, #6161FF)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1a8adc00} fill="var(--fill-0, #6161FF)" fillRule="evenodd" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function ProductLogoSmall() {
  return (
    <div className="overflow-clip relative rounded-[8px] shrink-0 size-[32px]" data-name="Product Logo / Small">
      <ProductLogoLarge />
    </div>
  );
}

function ProductLogoFull() {
  return (
    <div className="content-stretch flex gap-[4px] h-[40px] items-center pl-0 pr-[8px] py-0 relative rounded-[4px] shrink-0" data-name=".Product logo - full">
      <ProductLogoSmall />
      <p className="font-['Poppins:Bold',sans-serif] leading-[13.5px] not-italic relative shrink-0 text-[#323338] text-[16px] text-nowrap">monday</p>
      <p className="font-['Poppins:Regular',sans-serif] leading-[13.5px] not-italic relative shrink-0 text-[#323338] text-[16px] text-nowrap">Work Management</p>
    </div>
  );
}

function IconPlatformNotifications() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / Notifications">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / Notifications">
          <path clipRule="evenodd" d={svgPaths.p10df4a00} fill="var(--fill-0, #323338)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButton() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-0 rounded-[4px] size-[40px] top-0" data-name="Icon Button">
      <IconPlatformNotifications />
    </div>
  );
}

function TopBarIconButton() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name=".Top bar icon Button">
      <IconButton />
    </div>
  );
}

function IconPlatformInbox() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / Inbox">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / Inbox">
          <path clipRule="evenodd" d={svgPaths.p3480b200} fill="var(--fill-0, #323338)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButton1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-0 rounded-[4px] size-[40px] top-0" data-name="Icon Button">
      <IconPlatformInbox />
    </div>
  );
}

function TopBarIconButton1() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name=".Top bar icon Button">
      <IconButton1 />
    </div>
  );
}

function IconPlatformInvite() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / Invite">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / Invite">
          <g id="Union">
            <path clipRule="evenodd" d={svgPaths.pfb19580} fill="var(--fill-0, #323338)" fillRule="evenodd" />
            <path d={svgPaths.pcb3ad00} fill="var(--fill-0, #323338)" />
            <path d={svgPaths.p13d82f20} fill="var(--fill-0, #323338)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-0 rounded-[4px] size-[40px] top-0" data-name="Icon Button">
      <IconPlatformInvite />
    </div>
  );
}

function TopBarIconButton2() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name=".Top bar icon Button">
      <IconButton2 />
    </div>
  );
}

function IconPlatformSearch() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / Search">
          <path clipRule="evenodd" d={svgPaths.p39a67600} fill="var(--fill-0, #323338)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButton3() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-0 rounded-[4px] size-[40px] top-0" data-name="Icon Button">
      <IconPlatformSearch />
    </div>
  );
}

function TopBarIconButton3() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name=".Top bar icon Button">
      <IconButton3 />
    </div>
  );
}

function IconPlatformHelp() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / Help">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / Help">
          <g id="Union">
            <path d={svgPaths.p1b610270} fill="var(--fill-0, #323338)" />
            <path d={svgPaths.p2b9c8670} fill="var(--fill-0, #323338)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-0 rounded-[4px] size-[40px] top-0" data-name="Icon Button">
      <IconPlatformHelp />
    </div>
  );
}

function TopBarIconButton4() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name=".Top bar icon Button">
      <IconButton4 />
    </div>
  );
}

function Divider() {
  return (
    <div className="h-[28px] relative shrink-0 w-px" data-name="Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Divider" />
    </div>
  );
}

function MondayVibeLogo() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name=".monday Vibe logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id=".monday Vibe logo">
          <path clipRule="evenodd" d={svgPaths.p6e5fa00} fill="var(--fill-0, #323338)" fillRule="evenodd" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function IconButton5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-0 rounded-[4px] size-[40px] top-0" data-name="Icon Button">
      <MondayVibeLogo />
    </div>
  );
}

function TopBarIconButton5() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name=".Top bar icon Button">
      <IconButton5 />
    </div>
  );
}

function IconBasicSwitcher() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Basic / Switcher">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_37451)" id="Icon / Basic / Switcher">
          <g id="Vector">
            <path d={svgPaths.p1cdea100} fill="var(--fill-0, #323338)" />
            <path d={svgPaths.p18aed200} fill="var(--fill-0, #323338)" />
            <path d={svgPaths.p55aba80} fill="var(--fill-0, #323338)" />
            <path d={svgPaths.p1c75e600} fill="var(--fill-0, #323338)" />
            <path d={svgPaths.p15b1cf00} fill="var(--fill-0, #323338)" />
            <path d={svgPaths.p243a0700} fill="var(--fill-0, #323338)" />
            <path d={svgPaths.p3fb90a00} fill="var(--fill-0, #323338)" />
            <path d={svgPaths.p3aa49c00} fill="var(--fill-0, #323338)" />
            <path d={svgPaths.p563540} fill="var(--fill-0, #323338)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_37451">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function IconButton6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center justify-center left-0 rounded-[4px] size-[40px] top-0" data-name="Icon Button">
      <IconBasicSwitcher />
    </div>
  );
}

function TopBarIconButton6() {
  return (
    <div className="relative shrink-0 size-[40px]" data-name=".Top bar icon Button">
      <IconButton6 />
    </div>
  );
}

function ProductLogoSmall1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Product Logo / Small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Product Logo / Small">
          <path clipRule="evenodd" d={svgPaths.p388f4c00} fill="var(--fill-0, #FB275D)" fillRule="evenodd" id="Shape" />
          <path clipRule="evenodd" d={svgPaths.p25b5d100} fill="var(--fill-0, #FFCB00)" fillRule="evenodd" id="Shape_2" />
          <path clipRule="evenodd" d={svgPaths.p3a13be00} fill="var(--fill-0, #00C875)" fillRule="evenodd" id="Oval" />
        </g>
      </svg>
    </div>
  );
}

function AvatarContainer() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Avatar Container">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Avatar Container">
          <path d={svgPaths.p1657e380} id="Border" stroke="var(--stroke-0, white)" />
        </g>
      </svg>
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex items-center relative rounded-[100px] shrink-0" data-name="Avatar">
      <AvatarContainer />
    </div>
  );
}

function AvatarButton() {
  return (
    <div className="bg-white content-stretch flex items-center relative rounded-bl-[8px] rounded-br-[100px] rounded-tl-[8px] rounded-tr-[100px] shrink-0" data-name=".Avatar button">
      <ProductLogoSmall1 />
      <Avatar />
    </div>
  );
}

function RightContainer() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Right container">
      <TopBarIconButton />
      <TopBarIconButton1 />
      <TopBarIconButton2 />
      <TopBarIconButton3 />
      <TopBarIconButton4 />
      <Divider />
      <TopBarIconButton5 />
      <TopBarIconButton6 />
      <AvatarButton />
    </div>
  );
}

export default function TopBarInternal() {
  return (
    <div className="bg-[#edf1fc] relative size-full" data-name="Top bar [Internal]">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-h-[inherit] min-h-[inherit] pl-[8px] pr-[12px] py-0 relative size-full">
          <ProductLogoFull />
          <RightContainer />
        </div>
      </div>
    </div>
  );
}