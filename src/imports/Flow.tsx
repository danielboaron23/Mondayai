import svgPaths from "./svg-xhmaf1k9xa";
import imgProperties from "figma:asset/e80552e5cd311931922a10d6dd70061713e6b1ac.png";
import imgProperties1 from "figma:asset/cf1083401990504fa214e1814dd9e86530f6484c.png";
import imgStar from "figma:asset/d19fbde6c069c5c82573e290ed8844e5504d6365.png";

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

function TopBarInternal() {
  return (
    <div className="bg-[#edf1fc] h-[48px] max-h-[48px] min-h-[48px] relative shrink-0 w-full" data-name="Top bar [Internal]">
      <div className="flex flex-row items-center max-h-[inherit] min-h-[inherit] overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-h-[inherit] min-h-[inherit] pl-[8px] pr-[12px] py-0 relative size-full">
          <ProductLogoFull />
          <RightContainer />
        </div>
      </div>
    </div>
  );
}

function IconPlatformHome() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Platform / Home">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Platform / Home">
          <path clipRule="evenodd" d={svgPaths.p14ce600} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Vector 31 (Stroke)" />
        </g>
      </svg>
    </div>
  );
}

function LeftSide() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Left Side">
      <IconPlatformHome />
      <div className="basis-0 flex flex-col font-['Figtree:Regular',sans-serif] font-normal grow h-[22px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#676879] text-[14px]">
        <p className="leading-[20px]" dir="auto">
          Home
        </p>
      </div>
    </div>
  );
}

function LeftPaneTopDefault() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name=".Left Pane/Top-Default">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <LeftSide />
        </div>
      </div>
    </div>
  );
}

function IconPlatformMyWeek() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Platform / My Week">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Platform / My Week">
          <g id="Union">
            <path d={svgPaths.p301fce00} fill="var(--fill-0, #676879)" />
            <path clipRule="evenodd" d={svgPaths.p2078c000} fill="var(--fill-0, #676879)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide1() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Left Side">
      <IconPlatformMyWeek />
      <div className="basis-0 flex flex-col font-['Figtree:Regular',sans-serif] font-normal grow h-[22px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#676879] text-[14px]">
        <p className="leading-[20px]" dir="auto">
          My work
        </p>
      </div>
    </div>
  );
}

function LeftPaneTopDefault1() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name=".Left Pane/Top-Default">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <LeftSide1 />
        </div>
      </div>
    </div>
  );
}

function Top() {
  return (
    <div className="relative shrink-0 w-full" data-name="Top">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start px-[16px] py-0 relative w-full">
          <LeftPaneTopDefault />
          <LeftPaneTopDefault1 />
        </div>
      </div>
    </div>
  );
}

function LeftSide2() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Left Side">
      <div className="flex flex-col font-['Figtree:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#323338] text-[12px] text-nowrap">
        <p className="leading-[16px]">Favorites</p>
      </div>
    </div>
  );
}

function IconBasicDropdownChevronRight() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icon / Basic / Dropdown Chevron Right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon / Basic / Dropdown Chevron Right">
          <path d={svgPaths.p1dcc2b00} fill="var(--fill-0, #323338)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function LeftPaneFavorites() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Left Pane/Favorites">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
          <LeftSide2 />
          <IconBasicDropdownChevronRight />
        </div>
      </div>
    </div>
  );
}

function LeftPaneFavoritesWithItems() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name=".Left Pane/Favorites with items">
      <LeftPaneFavorites />
    </div>
  );
}

function FavoritesSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Favorites section">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center px-[16px] py-0 relative w-full">
          <LeftPaneFavoritesWithItems />
        </div>
      </div>
    </div>
  );
}

function LeftSide3() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Left Side">
      <div className="flex flex-col font-['Figtree:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#323338] text-[12px] text-nowrap">
        <p className="leading-[16px]">Workspaces</p>
      </div>
    </div>
  );
}

function IconBasicMenu() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Basic / Menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_37530)" id="Icon / Basic / Menu">
          <g id="Union">
            <path d={svgPaths.p20976d00} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p22c82000} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p2901f800} fill="var(--fill-0, #676879)" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_37530">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DeprecatedIconButtonToSwap() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 size-[24px]" data-name="🔴 [DEPRECATED] IconButton - to swap">
      <IconBasicMenu />
    </div>
  );
}

function IconPlatformSearch1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Platform / Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_37524)" id="Icon / Platform / Search">
          <path clipRule="evenodd" d={svgPaths.p39a67600} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
        </g>
        <defs>
          <clipPath id="clip0_1_37524">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DeprecatedIconButtonToSwap1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 size-[24px]" data-name="🔴 [DEPRECATED] IconButton - to swap">
      <IconPlatformSearch1 />
    </div>
  );
}

function Actions() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Actions">
      <DeprecatedIconButtonToSwap />
      <DeprecatedIconButtonToSwap1 />
    </div>
  );
}

function LeftPaneWorkspaces() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name=".Left Pane/Workspaces">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[8px] relative size-full">
          <LeftSide3 />
          <Actions />
        </div>
      </div>
    </div>
  );
}

function AvatarContainer1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Avatar Container">
      <div className="absolute flex flex-col font-['Figtree:Regular',sans-serif] font-normal inset-0 justify-center leading-[0] text-[12px] text-center text-white">
        <p className="leading-[16px]">F</p>
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="bg-[#0073ea] content-stretch flex items-center p-[2px] relative rounded-[2.899px] shrink-0" data-name="Avatar">
      <AvatarContainer1 />
    </div>
  );
}

function IconBasicDropdownChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Basic / Dropdown Chevron Down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Basic / Dropdown Chevron Down">
          <path d={svgPaths.p3088e680} fill="var(--fill-0, #323338)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButton7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[4px] shrink-0 size-[24px]" data-name="Icon Button">
      <IconBasicDropdownChevronDown />
    </div>
  );
}

function TextFieldContainer() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name="Text field container">
      <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative size-full">
          <Avatar1 />
          <div className="basis-0 flex flex-col font-['Figtree:SemiBold',sans-serif] font-semibold grow justify-center leading-[0] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-nowrap">
            <p className="leading-[20px] overflow-ellipsis overflow-hidden">Main workspace</p>
          </div>
          <IconButton7 />
        </div>
      </div>
    </div>
  );
}

function TextField() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Text Field">
      <TextFieldContainer />
    </div>
  );
}

function IconBasicAdd() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Basic / Add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Basic / Add">
          <path clipRule="evenodd" d={svgPaths.p2dd8dcf0} fill="var(--fill-0, white)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButton8() {
  return (
    <div className="bg-[#0073ea] content-stretch flex gap-[8px] items-center justify-center max-h-[32px] max-w-[32px] relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon Button">
      <IconBasicAdd />
    </div>
  );
}

function LeftPangeWorkspaceSelect() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[268px]" data-name=".Left Pange/Workspace select">
      <TextField />
      <IconButton8 />
    </div>
  );
}

function WorkspacesSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Workspaces section">
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start justify-center px-[16px] py-0 relative w-full">
          <LeftPaneWorkspaces />
          <LeftPangeWorkspaceSelect />
        </div>
      </div>
    </div>
  );
}

function IconPlatformBoardTemplate() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Platform / Board Template">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Platform / Board Template">
          <g id="Union">
            <path clipRule="evenodd" d={svgPaths.p11bd8500} fill="var(--fill-0, #676879)" fillRule="evenodd" />
            <path d={svgPaths.p3203d300} fill="var(--fill-0, #676879)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide4() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Left Side">
      <IconPlatformBoardTemplate />
      <div className="basis-0 flex flex-col font-['Figtree:Regular',sans-serif] font-normal grow h-[22px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#676879] text-[14px]">
        <p className="leading-[20px]">Marketing campaign</p>
      </div>
    </div>
  );
}

function LeftPaneBoardsAndItems() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name=".Left Pane/Boards and items">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <LeftSide4 />
        </div>
      </div>
    </div>
  );
}

function IconPlatformBoard() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Platform / Board">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Platform / Board">
          <path clipRule="evenodd" d={svgPaths.pb47df00} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function LeftSide5() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Left Side">
      <IconPlatformBoard />
      <div className="basis-0 flex flex-col font-['Figtree:Regular',sans-serif] font-normal grow h-[22px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#323338] text-[14px]">
        <p className="leading-[20px]">Elevate event planning</p>
      </div>
    </div>
  );
}

function LeftPaneBoardsAndItems1() {
  return (
    <div className="bg-[#cce4ff] h-[32px] relative rounded-[4px] shrink-0 w-full" data-name=".Left Pane/Boards and items">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <LeftSide5 />
        </div>
      </div>
    </div>
  );
}

function IconPlatformCheckList() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Platform / Check List">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Platform / Check List">
          <g id="Union">
            <path clipRule="evenodd" d={svgPaths.p16d64900} fill="var(--fill-0, #676879)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3ff05b00} fill="var(--fill-0, #676879)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pcd59a80} fill="var(--fill-0, #676879)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2bc9200} fill="var(--fill-0, #676879)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p394e0f80} fill="var(--fill-0, #676879)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide6() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Left Side">
      <IconPlatformCheckList />
      <div className="basis-0 flex flex-col font-['Figtree:Regular',sans-serif] font-normal grow h-[22px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#676879] text-[14px]">
        <p className="leading-[20px]">{`Project requests & Approvals`}</p>
      </div>
    </div>
  );
}

function LeftPaneBoardsAndItems2() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name=".Left Pane/Boards and items">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <LeftSide6 />
        </div>
      </div>
    </div>
  );
}

function IconPlatformAlert() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Platform / Alert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Platform / Alert">
          <g id="Union">
            <path d={svgPaths.pcefc400} fill="var(--fill-0, #676879)" />
            <path clipRule="evenodd" d={svgPaths.p21efd270} fill="var(--fill-0, #676879)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1d81b200} fill="var(--fill-0, #676879)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide7() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Left Side">
      <IconPlatformAlert />
      <div className="basis-0 flex flex-col font-['Figtree:Regular',sans-serif] font-normal grow h-[22px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#676879] text-[14px]">
        <p className="leading-[20px]">Risk register</p>
      </div>
    </div>
  );
}

function LeftPaneBoardsAndItems3() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name=".Left Pane/Boards and items">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <LeftSide7 />
        </div>
      </div>
    </div>
  );
}

function IconPlatformBug() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Platform / Bug">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Platform / Bug">
          <path clipRule="evenodd" d={svgPaths.p1b7fd700} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function LeftSide8() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Left Side">
      <IconPlatformBug />
      <div className="basis-0 flex flex-col font-['Figtree:Regular',sans-serif] font-normal grow h-[22px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#676879] text-[14px]">
        <p className="leading-[20px]">Issues log</p>
      </div>
    </div>
  );
}

function LeftPaneBoardsAndItems4() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name=".Left Pane/Boards and items">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <LeftSide8 />
        </div>
      </div>
    </div>
  );
}

function IconDoc() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Doc">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Doc">
          <g id="Union">
            <path d={svgPaths.p57ec800} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p3a3a2600} fill="var(--fill-0, #676879)" />
            <path clipRule="evenodd" d={svgPaths.p13a62e00} fill="var(--fill-0, #676879)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide9() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Left Side">
      <IconDoc />
      <div className="basis-0 flex flex-col font-['Figtree:Regular',sans-serif] font-normal grow h-[22px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#676879] text-[14px]">
        <p className="leading-[20px]">Learning center</p>
      </div>
    </div>
  );
}

function LeftPaneBoardsAndItems5() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name=".Left Pane/Boards and items">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <LeftSide9 />
        </div>
      </div>
    </div>
  );
}

function IconBasicCarretDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name=".Icon / Basic / Carret down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id=".Icon / Basic / Carret down">
          <path d={svgPaths.p189ab000} fill="var(--fill-0, #676879)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function LeftSide10() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Left Side">
      <IconBasicCarretDown />
      <div className="basis-0 flex flex-col font-['Figtree:Regular',sans-serif] font-normal grow h-[22px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#676879] text-[14px]">
        <p className="leading-[20px]">Projects</p>
      </div>
    </div>
  );
}

function LeftPaneGroupedItems() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name=".Left Pane/Grouped items">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <LeftSide10 />
        </div>
      </div>
    </div>
  );
}

function IconViewsGantt() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Views / Gantt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Views / Gantt">
          <g id="Union">
            <path d={svgPaths.p572400} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p796a980} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p3ff6ed80} fill="var(--fill-0, #676879)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide11() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Left Side">
      <IconViewsGantt />
      <div className="basis-0 flex flex-col font-['Figtree:Regular',sans-serif] font-normal grow h-[22px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#676879] text-[14px]">
        <p className="leading-[20px]">Project 1</p>
      </div>
    </div>
  );
}

function LeftPaneBoardsAndItems6() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name=".Left Pane/Boards and items">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <LeftSide11 />
        </div>
      </div>
    </div>
  );
}

function IconViewsGantt1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Views / Gantt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Views / Gantt">
          <g id="Union">
            <path d={svgPaths.p572400} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p796a980} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p3ff6ed80} fill="var(--fill-0, #676879)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide12() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Left Side">
      <IconViewsGantt1 />
      <div className="basis-0 flex flex-col font-['Figtree:Regular',sans-serif] font-normal grow h-[22px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#676879] text-[14px]">
        <p className="leading-[20px]">Project 2</p>
      </div>
    </div>
  );
}

function LeftPaneBoardsAndItems7() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name=".Left Pane/Boards and items">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <LeftSide12 />
        </div>
      </div>
    </div>
  );
}

function IconViewsGantt2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Views / Gantt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Views / Gantt">
          <g id="Union">
            <path d={svgPaths.p572400} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p796a980} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p3ff6ed80} fill="var(--fill-0, #676879)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LeftSide13() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px overflow-clip relative shrink-0" data-name="Left Side">
      <IconViewsGantt2 />
      <div className="basis-0 flex flex-col font-['Figtree:Regular',sans-serif] font-normal grow h-[22px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#676879] text-[14px]">
        <p className="leading-[20px]">Project 3</p>
      </div>
    </div>
  );
}

function LeftPaneBoardsAndItems8() {
  return (
    <div className="h-[32px] relative rounded-[4px] shrink-0 w-full" data-name=".Left Pane/Boards and items">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[8px] relative size-full">
          <LeftSide13 />
        </div>
      </div>
    </div>
  );
}

function ItemsGroup() {
  return (
    <div className="relative shrink-0 w-full" data-name="Items group">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start pl-[24px] pr-0 py-0 relative w-full">
          <LeftPaneBoardsAndItems6 />
          <LeftPaneBoardsAndItems7 />
          <LeftPaneBoardsAndItems8 />
        </div>
      </div>
    </div>
  );
}

function LeftPaneGroupedItemsWithItems() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name=".Left Pane/Grouped items with items">
      <LeftPaneGroupedItems />
      <ItemsGroup />
    </div>
  );
}

function BoardsAndItemsSection() {
  return (
    <div className="relative shrink-0 w-full" data-name="Boards and items section">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start px-[16px] py-0 relative w-full">
          <LeftPaneBoardsAndItems />
          <LeftPaneBoardsAndItems1 />
          <LeftPaneBoardsAndItems2 />
          <LeftPaneBoardsAndItems3 />
          <LeftPaneBoardsAndItems4 />
          <LeftPaneBoardsAndItems5 />
          <LeftPaneGroupedItemsWithItems />
        </div>
      </div>
    </div>
  );
}

function Properties() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px pb-[24px] pt-[12px] px-0 relative rounded-tl-[12px] shrink-0" data-name="Properties">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-tl-[12px]">
        <div className="absolute inset-0 rounded-tl-[12px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(237, 241, 252) 0%, rgb(237, 241, 252) 100%), linear-gradient(168.342deg, rgb(255, 255, 255) 0%, rgb(237, 241, 252) 138.2%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)" }} />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-tl-[12px] size-full" src={imgProperties} />
        <div className="absolute inset-0 rounded-tl-[12px]" style={{ backgroundImage: "linear-gradient(50.6885deg, rgba(255, 255, 255, 0.5) 90.234%, rgba(237, 241, 252, 0.5) 100%)" }} />
        <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-tl-[12px] size-full" src={imgProperties1} />
      </div>
      <Top />
      <FavoritesSection />
      <WorkspacesSection />
      <BoardsAndItemsSection />
    </div>
  );
}

function LeftPane() {
  return (
    <div className="content-stretch flex flex-col h-full items-start relative shrink-0 z-[2]" data-name="Left pane">
      <Properties />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="title">
      <div className="flex flex-col font-['Poppins:Medium',sans-serif] justify-center leading-[0] max-w-[600px] min-w-[30px] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[24px] text-nowrap tracking-[-0.12px]">
        <p className="leading-[30px] overflow-ellipsis overflow-hidden" dir="auto">
          Elevate event planning
        </p>
      </div>
    </div>
  );
}

function IconBasicDropdownChevronDown1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Basic / Dropdown Chevron Down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Basic / Dropdown Chevron Down">
          <path d={svgPaths.p5ae0100} fill="var(--fill-0, #676879)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButton9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon Button">
      <IconBasicDropdownChevronDown1 />
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center px-[4px] py-0 relative rounded-[4px] shrink-0" data-name="title">
      <Title />
      <IconButton9 />
    </div>
  );
}

function LeftContent() {
  return (
    <div className="content-stretch flex gap-[12px] h-[32px] items-start relative shrink-0" data-name="left content">
      <Title1 />
    </div>
  );
}

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

function AvatarContainer2() {
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

function Avatar2() {
  return (
    <div className="content-stretch flex items-center mr-[-8px] relative rounded-[100px] shrink-0 w-[24px]" data-name="Avatar">
      <AvatarContainer2 />
    </div>
  );
}

function AvatarGroup() {
  return (
    <div className="content-stretch flex items-start pl-0 pr-[8px] py-0 relative shrink-0" data-name="AvatarGroup">
      {[...Array(3).keys()].map((_, i) => (
        <Avatar2 key={i} />
      ))}
    </div>
  );
}

function IconButton10() {
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
      <IconButton10 />
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

function IconBasicMenu1() {
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

function IconButton11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="Icon Button">
      <IconBasicMenu1 />
    </div>
  );
}

function RightContent() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-start relative shrink-0" data-name="right content">
      <Button />
      <RightActions />
      <Button4 />
      <IconButton11 />
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex h-[32px] items-start justify-between max-h-[32px] relative shrink-0 w-full" data-name="title">
      <LeftContent />
      <RightContent />
    </div>
  );
}

function IconBasicMenu2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon / Basic / Menu">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon / Basic / Menu">
          <g id="Union">
            <path d={svgPaths.p3ebdfec0} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p15f15700} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p27995c00} fill="var(--fill-0, #676879)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconButton12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[4px] shrink-0 size-[20px]" data-name="Icon Button">
      <IconBasicMenu2 />
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex gap-[4px] items-center overflow-clip px-[16px] py-[4px] relative rounded-[4px] shrink-0" data-name="tab">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#323338] text-[16px] text-center text-nowrap">Main table</p>
      <IconButton12 />
    </div>
  );
}

function TabsBase() {
  return (
    <div className="content-stretch flex flex-col gap-px items-center max-h-[33px] relative shrink-0" data-name=".Tabs base">
      <Tab />
      <div className="bg-[#0073ea] h-[2px] max-h-[2px] min-h-px shrink-0 w-full" data-name="underline" />
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Tabs">
      <TabsBase />
    </div>
  );
}

function IconBasicAddSmall() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Basic / Add Small">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Basic / Add Small">
          <path clipRule="evenodd" d={svgPaths.p2554c800} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function DeprecatedIconButtonToSwap2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[8px] py-[6px] relative rounded-[4px] shrink-0 size-[32px]" data-name="🔴 [DEPRECATED] IconButton - to swap">
      <IconBasicAddSmall />
    </div>
  );
}

function LeftContent1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="left content">
      <Tabs />
      <DeprecatedIconButtonToSwap2 />
    </div>
  );
}

function TabsRow() {
  return (
    <div className="content-stretch flex items-end relative shrink-0 w-full" data-name="tabs row">
      <div aria-hidden="true" className="absolute border-[#c3c6d4] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <LeftContent1 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Title2 />
      <TabsRow />
    </div>
  );
}

function SplitButton() {
  return (
    <div className="bg-[#0073ea] content-stretch flex h-[32px] items-center overflow-clip px-[8px] py-0 relative rounded-bl-[4px] rounded-tl-[4px] shrink-0" data-name="Split button">
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[14px] text-nowrap text-white">
        <p className="leading-[20px]">New Item</p>
      </div>
    </div>
  );
}

function IconBasicDropdownChevronDown2() {
  return (
    <div className="absolute left-[2px] size-[20px] top-[6px]" data-name="Icon / Basic / Dropdown Chevron Down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Basic / Dropdown Chevron Down">
          <path d={svgPaths.p5ae0100} fill="var(--fill-0, white)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButton13() {
  return (
    <div className="bg-[#0073ea] h-[32px] overflow-clip relative rounded-br-[4px] rounded-tr-[4px] shrink-0 w-[24px]" data-name="Icon button">
      <div className="absolute bg-[#0060b9] bottom-0 left-0 top-0 w-px" data-name="Line" />
      <IconBasicDropdownChevronDown2 />
    </div>
  );
}

function NewItemBtn() {
  return (
    <div className="content-stretch flex h-[32px] items-center overflow-clip relative rounded-[4px] shrink-0" data-name="new item btn">
      <SplitButton />
      <IconButton13 />
    </div>
  );
}

function IconPlatformSearch2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / Search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / Search">
          <path clipRule="evenodd" d={svgPaths.p39a67600} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Search() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="search">
      <IconPlatformSearch2 />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-nowrap">
        <p className="leading-[20px] overflow-ellipsis overflow-hidden">Search</p>
      </div>
    </div>
  );
}

function IconPlatformPersonRound() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / Person Round">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / Person Round">
          <g id="Union">
            <path clipRule="evenodd" d={svgPaths.p28fd0000} fill="var(--fill-0, #676879)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p26c5fb00} fill="var(--fill-0, #676879)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center max-h-[32px] min-h-[32px] px-[8px] py-0 relative rounded-[4px] shrink-0" data-name="Button">
      <IconPlatformPersonRound />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323338] text-[14px] text-nowrap">
        <p className="leading-[20px]">Person</p>
      </div>
    </div>
  );
}

function IconPlatformFilter() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / Filter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / Filter">
          <path clipRule="evenodd" d={svgPaths.p30b43d00} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center max-h-[32px] min-h-[32px] px-[8px] py-0 relative rounded-[4px] shrink-0" data-name="Button">
      <IconPlatformFilter />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323338] text-[14px] text-nowrap">
        <p className="leading-[20px]">Filter</p>
      </div>
    </div>
  );
}

function IconPlatformSort() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / Sort">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / Sort">
          <g id="Union">
            <path d={svgPaths.p17694e00} fill="var(--fill-0, #676879)" />
            <path d={svgPaths.p39c83680} fill="var(--fill-0, #676879)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center max-h-[32px] min-h-[32px] px-[8px] py-0 relative rounded-[4px] shrink-0" data-name="Button">
      <IconPlatformSort />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323338] text-[14px] text-nowrap">
        <p className="leading-[20px]">Sort</p>
      </div>
    </div>
  );
}

function IconPlatformHide() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / Hide">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / Hide">
          <path clipRule="evenodd" d={svgPaths.p197c3180} fill="var(--fill-0, #676879)" fillRule="evenodd" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center max-h-[32px] min-h-[32px] px-[8px] py-0 relative rounded-[4px] shrink-0" data-name="Button">
      <IconPlatformHide />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323338] text-[14px] text-nowrap">
        <p className="leading-[20px]">Hide</p>
      </div>
    </div>
  );
}

function IconPlatformGroup() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon / Platform / Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon / Platform / Group">
          <g id="Union">
            <path d="M15 14V9L9 9V14H15Z" fill="var(--fill-0, #676879)" />
            <path clipRule="evenodd" d={svgPaths.pec59780} fill="var(--fill-0, #676879)" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[32px] items-center justify-center max-h-[32px] min-h-[32px] px-[8px] py-0 relative rounded-[4px] shrink-0" data-name="Button">
      <IconPlatformGroup />
      <div className="flex flex-col font-['Figtree:Regular',sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#323338] text-[14px] text-nowrap">
        <p className="leading-[20px]">Group By</p>
      </div>
    </div>
  );
}

function IconBasicMenu3() {
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

function Menu() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-center relative rounded-[4px] shrink-0 size-[32px]" data-name="menu">
      <IconBasicMenu3 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0" data-name="buttons">
      <Search />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Menu />
    </div>
  );
}

function Tools() {
  return (
    <div className="content-stretch flex gap-[16px] h-[32px] items-start relative shrink-0" data-name="tools">
      <NewItemBtn />
      <Buttons />
    </div>
  );
}

function IconBasicDropdownChevronUp() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon / Basic / Dropdown Chevron Up">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon / Basic / Dropdown Chevron Up">
          <path d={svgPaths.p3e938680} fill="var(--fill-0, #676879)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function LocalBtnCollapse() {
  return (
    <div className="bg-[#f6f7fb] content-stretch flex items-center justify-center px-[8px] py-[6px] relative rounded-[24px] shrink-0 size-[24px]" data-name=".local-btn-collapse">
      <IconBasicDropdownChevronUp />
    </div>
  );
}

function Tools1() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Tools">
      <Tools />
      <LocalBtnCollapse />
    </div>
  );
}

function BoardHeaderInternal() {
  return (
    <div className="min-w-[1005px] relative shrink-0 w-full" data-name="Board header [Internal]">
      <div className="min-w-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start min-w-[inherit] pb-[8px] pl-[16px] pr-[24px] pt-0 relative w-full">
          <Frame />
          <Tools1 />
        </div>
      </div>
    </div>
  );
}

function IconBasicDropdownChevronDown3() {
  return (
    <div className="h-[30px] relative shrink-0 w-[18px]" data-name="Icon / Basic / DropdownChevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 30">
        <g clipPath="url(#clip0_1_37382)" id="Icon / Basic / DropdownChevron down">
          <path clipRule="evenodd" d={svgPaths.p3c1a9800} fill="var(--fill-0, #784BD1)" fillRule="evenodd" id="Icon/Back (Stroke)" />
        </g>
        <defs>
          <clipPath id="clip0_1_37382">
            <rect fill="white" height="30" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CoolapseExpandGroupButton() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip pl-[9px] pr-[2px] py-0 relative shrink-0" data-name="Coolapse/Expand Group Button">
      <IconBasicDropdownChevronDown3 />
    </div>
  );
}

function EditableHeadingVariants() {
  return (
    <div className="content-stretch flex h-[26px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Editable heading variants">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#784bd1] text-[18px] text-nowrap tracking-[-0.09px]">This week’s tasks</p>
    </div>
  );
}

function TitleCollapse() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Title + Collapse">
      <CoolapseExpandGroupButton />
      <EditableHeadingVariants />
    </div>
  );
}

function TitleCollapseTextIndication() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Title + collapse + text indication">
      <TitleCollapse />
    </div>
  );
}

function GruopTitleInner() {
  return (
    <div className="relative shrink-0 w-full" data-name="Gruop Title Inner">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-[4px] pr-0 py-0 relative w-full">
          <TitleCollapseTextIndication />
        </div>
      </div>
    </div>
  );
}

function GroupTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="Group Title">
      <GruopTitleInner />
    </div>
  );
}

function AtomsHorizontalDivider() {
  return (
    <div className="absolute h-px left-[4px] right-0 top-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
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
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox container">
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
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Cell Checkbox inner">
      <LeftIndicatorInner />
      <CheckbocIndicator />
    </div>
  );
}

function CellCheckbox() {
  return (
    <div className="absolute inset-0 rounded-tl-[4px]" data-name="_Cell Checkbox">
      <AtomsHorizontalDivider />
      <AtomsHorizontalDivider1 />
      <AtomsVerticalDivider />
      <CellCheckboxInner />
    </div>
  );
}

function AtomsCellCheckbox() {
  return (
    <div className="h-[36px] overflow-clip relative rounded-tl-[4px] shrink-0 w-[39px]" data-name="Atoms / 🔥 Cell Checkbox">
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
    <div className="absolute h-px left-0 right-0 top-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsHorizontalDivider3() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function EditableHeading() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-center left-[calc(50%+0.5px)] px-[4px] py-0 rounded-[4px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="🔥 Editable Heading">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#323338] text-[14px] text-nowrap">Name</p>
    </div>
  );
}

function AtomsColumnHeader() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Atoms / 🔥 Column Header">
      <AtomsVerticalDivider1 />
      <AtomsHorizontalDivider2 />
      <AtomsHorizontalDivider3 />
      <EditableHeading />
    </div>
  );
}

function MainColumnHeader() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative rounded-tl-[4px] shrink-0" data-name="_Main Column Header">
      <AtomsCellCheckbox />
      <AtomsColumnHeader />
    </div>
  );
}

function AtomsMainColumnHeader() {
  return (
    <div className="bg-white content-stretch flex h-[36px] items-start relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 w-full" data-name="Atoms / 🔥 Main Column Header">
      <MainColumnHeader />
    </div>
  );
}

function AtomsHorizontalDivider4() {
  return <div className="absolute h-px left-[4px] right-0 top-0" data-name="Atoms / Horizontal Divider" />;
}

function AtomsHorizontalDivider5() {
  return (
    <div className="absolute bottom-0 h-px left-[4px] right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsVerticalDivider2() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function LeftIndicatorInner1() {
  return <div className="bg-[#784bd1] h-[36px] rounded-[4px] shrink-0 w-[6px]" data-name="Left Indicator Inner" />;
}

function Checkbox1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="🔥 Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox container">
        <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function CheckbocIndicator1() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="Checkboc Indicator">
      <Checkbox1 />
    </div>
  );
}

function CellCheckboxInner1() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="Cell Checkbox inner">
      <LeftIndicatorInner1 />
      <CheckbocIndicator1 />
    </div>
  );
}

function CellCheckbox1() {
  return (
    <div className="absolute inset-0 rounded-bl-[4px] rounded-tl-[4px]" data-name="_Cell Checkbox">
      <AtomsHorizontalDivider4 />
      <AtomsHorizontalDivider5 />
      <AtomsVerticalDivider2 />
      <CellCheckboxInner1 />
    </div>
  );
}

function AtomsCellCheckbox1() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[39px]" data-name="Atoms / 🔥 Cell Checkbox">
      <CellCheckbox1 />
    </div>
  );
}

function AtomsVerticalDivider3() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider6() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-[-4px]" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function SubItemsButton() {
  return <div className="absolute content-stretch flex items-start left-0 px-[4px] py-[7px] top-0" data-name="Sub Items Button" />;
}

function EditableHeading1() {
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
      <EditableHeading1 />
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
      <AtomsVerticalDivider3 />
      <AtomsHorizontalDivider6 />
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
      <AtomsCellCheckbox1 />
      <NameColumnInner />
      <StartConversationIcon />
    </div>
  );
}

function AtomsNameColumnAiWide() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Atoms / 🔥 Name Column AI wide">
      <NameColumn />
    </div>
  );
}

function AtomsHorizontalDivider7() {
  return <div className="absolute h-px left-[4px] right-0 top-0" data-name="Atoms / Horizontal Divider" />;
}

function AtomsHorizontalDivider8() {
  return (
    <div className="absolute bottom-0 h-px left-[4px] right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsVerticalDivider4() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function LeftIndicatorInner2() {
  return <div className="bg-[#784bd1] h-[36px] rounded-[4px] shrink-0 w-[6px]" data-name="Left Indicator Inner" />;
}

function Checkbox2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="🔥 Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox container">
        <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function CheckbocIndicator2() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="Checkboc Indicator">
      <Checkbox2 />
    </div>
  );
}

function CellCheckboxInner2() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="Cell Checkbox inner">
      <LeftIndicatorInner2 />
      <CheckbocIndicator2 />
    </div>
  );
}

function CellCheckbox2() {
  return (
    <div className="absolute inset-0 rounded-bl-[4px] rounded-tl-[4px]" data-name="_Cell Checkbox">
      <AtomsHorizontalDivider7 />
      <AtomsHorizontalDivider8 />
      <AtomsVerticalDivider4 />
      <CellCheckboxInner2 />
    </div>
  );
}

function AtomsCellCheckbox2() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[39px]" data-name="Atoms / 🔥 Cell Checkbox">
      <CellCheckbox2 />
    </div>
  );
}

function AtomsVerticalDivider5() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider9() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-[-4px]" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function SubItemsButton1() {
  return <div className="absolute content-stretch flex items-start left-0 px-[4px] py-[7px] top-0" data-name="Sub Items Button" />;
}

function EditableHeading2() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="🔥 Editable Heading">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-0 relative size-full">
          <p className="basis-0 font-['Figtree:Regular',sans-serif] font-normal grow leading-[22px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-nowrap">Venues</p>
        </div>
      </div>
    </div>
  );
}

function IndicationLabel1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Indication+ Label">
      <EditableHeading2 />
    </div>
  );
}

function EditableHeadingOpenButton1() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[30px] right-[8px] top-1/2 translate-y-[-50%]" data-name="Editable Heading + Open Button">
      <IndicationLabel1 />
    </div>
  );
}

function NameColumnInner1() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Name Column Inner">
      <AtomsVerticalDivider5 />
      <AtomsHorizontalDivider9 />
      <SubItemsButton1 />
      <EditableHeadingOpenButton1 />
    </div>
  );
}

function IconAiAi1() {
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

function Animation1() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="animation1">
      <IconAiAi1 />
    </div>
  );
}

function IconPlatformAddUpdate1() {
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

function StartConversationIcon1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center justify-center px-[22px] py-0 relative shrink-0" data-name="Start Conversation Icon">
      <div aria-hidden="true" className="absolute border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Animation1 />
      <IconPlatformAddUpdate1 />
    </div>
  );
}

function NameColumn1() {
  return (
    <div className="basis-0 bg-white content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="_Name Column">
      <AtomsCellCheckbox2 />
      <NameColumnInner1 />
      <StartConversationIcon1 />
    </div>
  );
}

function AtomsNameColumnAiWide1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Atoms / 🔥 Name Column AI wide">
      <NameColumn1 />
    </div>
  );
}

function AtomsHorizontalDivider10() {
  return <div className="absolute h-px left-[4px] right-0 top-0" data-name="Atoms / Horizontal Divider" />;
}

function AtomsHorizontalDivider11() {
  return (
    <div className="absolute bottom-0 h-px left-[4px] right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsVerticalDivider6() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function LeftIndicatorInner3() {
  return <div className="bg-[#784bd1] h-[36px] rounded-[4px] shrink-0 w-[6px]" data-name="Left Indicator Inner" />;
}

function Checkbox3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="🔥 Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox container">
        <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function CheckbocIndicator3() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="Checkboc Indicator">
      <Checkbox3 />
    </div>
  );
}

function CellCheckboxInner3() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="Cell Checkbox inner">
      <LeftIndicatorInner3 />
      <CheckbocIndicator3 />
    </div>
  );
}

function CellCheckbox3() {
  return (
    <div className="absolute inset-0 rounded-bl-[4px] rounded-tl-[4px]" data-name="_Cell Checkbox">
      <AtomsHorizontalDivider10 />
      <AtomsHorizontalDivider11 />
      <AtomsVerticalDivider6 />
      <CellCheckboxInner3 />
    </div>
  );
}

function AtomsCellCheckbox3() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[39px]" data-name="Atoms / 🔥 Cell Checkbox">
      <CellCheckbox3 />
    </div>
  );
}

function AtomsVerticalDivider7() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider12() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-[-4px]" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function SubItemsButton2() {
  return <div className="absolute content-stretch flex items-start left-0 px-[4px] py-[7px] top-0" data-name="Sub Items Button" />;
}

function EditableHeading3() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="🔥 Editable Heading">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-0 relative size-full">
          <p className="basis-0 font-['Figtree:Regular',sans-serif] font-normal grow leading-[22px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-nowrap">Find guest speakers</p>
        </div>
      </div>
    </div>
  );
}

function IndicationLabel2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Indication+ Label">
      <EditableHeading3 />
    </div>
  );
}

function EditableHeadingOpenButton2() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[30px] right-[8px] top-1/2 translate-y-[-50%]" data-name="Editable Heading + Open Button">
      <IndicationLabel2 />
    </div>
  );
}

function NameColumnInner2() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Name Column Inner">
      <AtomsVerticalDivider7 />
      <AtomsHorizontalDivider12 />
      <SubItemsButton2 />
      <EditableHeadingOpenButton2 />
    </div>
  );
}

function IconAiAi2() {
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

function Animation2() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="animation1">
      <IconAiAi2 />
    </div>
  );
}

function IconPlatformAddUpdate2() {
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

function StartConversationIcon2() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center justify-center px-[22px] py-0 relative shrink-0" data-name="Start Conversation Icon">
      <div aria-hidden="true" className="absolute border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Animation2 />
      <IconPlatformAddUpdate2 />
    </div>
  );
}

function NameColumn2() {
  return (
    <div className="basis-0 bg-white content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="_Name Column">
      <AtomsCellCheckbox3 />
      <NameColumnInner2 />
      <StartConversationIcon2 />
    </div>
  );
}

function AtomsNameColumnAiWide2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Atoms / 🔥 Name Column AI wide">
      <NameColumn2 />
    </div>
  );
}

function AtomsHorizontalDivider13() {
  return <div className="absolute h-px left-[4px] right-0 top-0" data-name="Atoms / Horizontal Divider" />;
}

function AtomsHorizontalDivider14() {
  return (
    <div className="absolute bottom-0 h-px left-[4px] right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsVerticalDivider8() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function LeftIndicatorInner4() {
  return <div className="bg-[#784bd1] h-[36px] rounded-[4px] shrink-0 w-[6px]" data-name="Left Indicator Inner" />;
}

function Checkbox4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="🔥 Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox container">
        <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function CheckbocIndicator4() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="Checkboc Indicator">
      <Checkbox4 />
    </div>
  );
}

function CellCheckboxInner4() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="Cell Checkbox inner">
      <LeftIndicatorInner4 />
      <CheckbocIndicator4 />
    </div>
  );
}

function CellCheckbox4() {
  return (
    <div className="absolute inset-0 rounded-bl-[4px] rounded-tl-[4px]" data-name="_Cell Checkbox">
      <AtomsHorizontalDivider13 />
      <AtomsHorizontalDivider14 />
      <AtomsVerticalDivider8 />
      <CellCheckboxInner4 />
    </div>
  );
}

function AtomsCellCheckbox4() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[39px]" data-name="Atoms / 🔥 Cell Checkbox">
      <CellCheckbox4 />
    </div>
  );
}

function AtomsVerticalDivider9() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider15() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-[-4px]" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function SubItemsButton3() {
  return <div className="absolute content-stretch flex items-start left-0 px-[4px] py-[7px] top-0" data-name="Sub Items Button" />;
}

function EditableHeading4() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="🔥 Editable Heading">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-0 relative size-full">
          <p className="basis-0 font-['Figtree:Regular',sans-serif] font-normal grow leading-[22px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-nowrap">Create agenda</p>
        </div>
      </div>
    </div>
  );
}

function IndicationLabel3() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Indication+ Label">
      <EditableHeading4 />
    </div>
  );
}

function EditableHeadingOpenButton3() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[30px] right-[8px] top-1/2 translate-y-[-50%]" data-name="Editable Heading + Open Button">
      <IndicationLabel3 />
    </div>
  );
}

function NameColumnInner3() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Name Column Inner">
      <AtomsVerticalDivider9 />
      <AtomsHorizontalDivider15 />
      <SubItemsButton3 />
      <EditableHeadingOpenButton3 />
    </div>
  );
}

function IconAiAi3() {
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

function Animation3() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="animation1">
      <IconAiAi3 />
    </div>
  );
}

function IconPlatformAddUpdate3() {
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

function StartConversationIcon3() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center justify-center px-[22px] py-0 relative shrink-0" data-name="Start Conversation Icon">
      <div aria-hidden="true" className="absolute border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Animation3 />
      <IconPlatformAddUpdate3 />
    </div>
  );
}

function NameColumn3() {
  return (
    <div className="basis-0 bg-white content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="_Name Column">
      <AtomsCellCheckbox4 />
      <NameColumnInner3 />
      <StartConversationIcon3 />
    </div>
  );
}

function AtomsNameColumnAiWide3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Atoms / 🔥 Name Column AI wide">
      <NameColumn3 />
    </div>
  );
}

function ColumnsCompositesBoardColumns() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[366px]" data-name="Columns & Composites / 🔥 Board Columns">
      <AtomsMainColumnHeader />
      <AtomsNameColumnAiWide />
      <AtomsNameColumnAiWide1 />
      <AtomsNameColumnAiWide2 />
      <AtomsNameColumnAiWide3 />
    </div>
  );
}

function AtomsVerticalDivider10() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider16() {
  return (
    <div className="absolute h-px left-0 right-0 top-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsHorizontalDivider17() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function EditableHeading5() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-center left-[calc(50%+0.5px)] px-[4px] py-0 rounded-[4px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="🔥 Editable Heading">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#323338] text-[14px] text-nowrap">Description</p>
    </div>
  );
}

function ColumnHeader() {
  return (
    <div className="absolute bg-white inset-0" data-name="_Column Header">
      <AtomsVerticalDivider10 />
      <AtomsHorizontalDivider16 />
      <AtomsHorizontalDivider17 />
      <EditableHeading5 />
    </div>
  );
}

function AtomsColumnHeader1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Atoms / 🔥 Column Header">
      <ColumnHeader />
    </div>
  );
}

function AtomsVerticalDivider11() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider18() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function LabelClearButton() {
  return (
    <div className="absolute content-stretch flex inset-[4px_6px_5px_5px] items-center px-[6px] py-0" data-name="Label + Clear Button">
      <p className="basis-0 font-['Figtree:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-center text-nowrap">Finalize guest list and send out event invitations</p>
    </div>
  );
}

function DateColumn() {
  return (
    <div className="absolute bg-white inset-0" data-name="_Date Column">
      <AtomsVerticalDivider11 />
      <AtomsHorizontalDivider18 />
      <LabelClearButton />
    </div>
  );
}

function AtomsDateColumn() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Atoms / 🔥 Date Column">
      <DateColumn />
    </div>
  );
}

function AtomsVerticalDivider12() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider19() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function LabelClearButton1() {
  return (
    <div className="absolute content-stretch flex inset-[4px_6px_5px_5px] items-center px-[6px] py-0" data-name="Label + Clear Button">
      <p className="basis-0 font-['Figtree:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-center text-nowrap">Confirm venue booking and upload contract</p>
    </div>
  );
}

function DateColumn1() {
  return (
    <div className="absolute bg-white inset-0" data-name="_Date Column">
      <AtomsVerticalDivider12 />
      <AtomsHorizontalDivider19 />
      <LabelClearButton1 />
    </div>
  );
}

function AtomsDateColumn1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Atoms / 🔥 Date Column">
      <DateColumn1 />
    </div>
  );
}

function AtomsVerticalDivider13() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider20() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function LabelClearButton2() {
  return (
    <div className="absolute content-stretch flex inset-[4px_6px_5px_5px] items-center px-[6px] py-0" data-name="Label + Clear Button">
      <p className="basis-0 font-['Figtree:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-center text-nowrap">Reach out to potential keynote and panel speakers</p>
    </div>
  );
}

function DateColumn2() {
  return (
    <div className="absolute bg-white inset-0" data-name="_Date Column">
      <AtomsVerticalDivider13 />
      <AtomsHorizontalDivider20 />
      <LabelClearButton2 />
    </div>
  );
}

function AtomsDateColumn2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Atoms / 🔥 Date Column">
      <DateColumn2 />
    </div>
  );
}

function AtomsVerticalDivider14() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider21() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function LabelClearButton3() {
  return (
    <div className="absolute content-stretch flex inset-[4px_6px_5px_5px] items-center px-[6px] py-0" data-name="Label + Clear Button">
      <p className="basis-0 font-['Figtree:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-center text-nowrap">Draft a preliminary agenda for review</p>
    </div>
  );
}

function DateColumn3() {
  return (
    <div className="absolute bg-white inset-0" data-name="_Date Column">
      <AtomsVerticalDivider14 />
      <AtomsHorizontalDivider21 />
      <LabelClearButton3 />
    </div>
  );
}

function AtomsDateColumn3() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Atoms / 🔥 Date Column">
      <DateColumn3 />
    </div>
  );
}

function ColumnsCompositesBoardColumns1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[223px]" data-name="Columns & Composites / 🔥 Board Columns">
      <AtomsColumnHeader1 />
      <AtomsDateColumn />
      <AtomsDateColumn1 />
      <AtomsDateColumn2 />
      <AtomsDateColumn3 />
    </div>
  );
}

function AtomsVerticalDivider15() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider22() {
  return (
    <div className="absolute h-px left-0 right-0 top-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsHorizontalDivider23() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function EditableHeading6() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-center left-[calc(50%+0.5px)] px-[4px] py-0 rounded-[4px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="🔥 Editable Heading">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#323338] text-[14px] text-nowrap">Status</p>
    </div>
  );
}

function ColumnHeader1() {
  return (
    <div className="absolute bg-white inset-0" data-name="_Column Header">
      <AtomsVerticalDivider15 />
      <AtomsHorizontalDivider22 />
      <AtomsHorizontalDivider23 />
      <EditableHeading6 />
    </div>
  );
}

function AtomsColumnHeader2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[9]" data-name="Atoms / 🔥 Column Header">
      <ColumnHeader1 />
    </div>
  );
}

function AtomsVerticalDivider16() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider24() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn() {
  return (
    <div className="absolute bg-[#00c875] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider16 />
      <AtomsHorizontalDivider24 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+0.5px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Done</p>
    </div>
  );
}

function AtomsStatusColumn() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[8]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn />
    </div>
  );
}

function AtomsVerticalDivider17() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider25() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn1() {
  return (
    <div className="absolute bg-[#fdab3d] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider17 />
      <AtomsHorizontalDivider25 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+0.5px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Working on it</p>
    </div>
  );
}

function AtomsStatusColumn1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[7]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn1 />
    </div>
  );
}

function AtomsVerticalDivider18() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider26() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn2() {
  return (
    <div className="absolute bg-[#fdab3d] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider18 />
      <AtomsHorizontalDivider26 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+0.5px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Working on it</p>
    </div>
  );
}

function AtomsStatusColumn2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[6]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn2 />
    </div>
  );
}

function AtomsVerticalDivider19() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider27() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn3() {
  return (
    <div className="absolute bg-[#007eb5] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider19 />
      <AtomsHorizontalDivider27 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+1px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Ready to start</p>
    </div>
  );
}

function AtomsStatusColumn3() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[5]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn3 />
    </div>
  );
}

function ColumnsCompositesBoardColumns2() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[163px]" data-name="Columns & Composites / 🔥 Board Columns">
      <AtomsColumnHeader2 />
      <AtomsStatusColumn />
      <AtomsStatusColumn1 />
      <AtomsStatusColumn2 />
      <AtomsStatusColumn3 />
    </div>
  );
}

function AtomsVerticalDivider20() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider28() {
  return (
    <div className="absolute h-px left-0 right-0 top-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsHorizontalDivider29() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function EditableHeading7() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-center left-1/2 px-[4px] py-0 rounded-[4px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="🔥 Editable Heading">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#323338] text-[14px] text-nowrap">Priority</p>
    </div>
  );
}

function ColumnHeader2() {
  return (
    <div className="absolute bg-white inset-0" data-name="_Column Header">
      <AtomsVerticalDivider20 />
      <AtomsHorizontalDivider28 />
      <AtomsHorizontalDivider29 />
      <EditableHeading7 />
    </div>
  );
}

function AtomsColumnHeader3() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[9]" data-name="Atoms / 🔥 Column Header">
      <ColumnHeader2 />
    </div>
  );
}

function AtomsVerticalDivider21() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider30() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn4() {
  return (
    <div className="absolute bg-[#df2f4a] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider21 />
      <AtomsHorizontalDivider30 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+0.5px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Critical</p>
    </div>
  );
}

function AtomsStatusColumn4() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[8]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn4 />
    </div>
  );
}

function AtomsVerticalDivider22() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider31() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn5() {
  return (
    <div className="absolute bg-[#ffcb00] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider22 />
      <AtomsHorizontalDivider31 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-1/2 text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">High</p>
    </div>
  );
}

function AtomsStatusColumn5() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[7]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn5 />
    </div>
  );
}

function AtomsVerticalDivider23() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider32() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn6() {
  return (
    <div className="absolute bg-[#ffcb00] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider23 />
      <AtomsHorizontalDivider32 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-1/2 text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">High</p>
    </div>
  );
}

function AtomsStatusColumn6() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[6]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn6 />
    </div>
  );
}

function AtomsVerticalDivider24() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider33() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn7() {
  return (
    <div className="absolute bg-[#ffcb00] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider24 />
      <AtomsHorizontalDivider33 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-1/2 text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">High</p>
    </div>
  );
}

function AtomsStatusColumn7() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[5]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn7 />
    </div>
  );
}

function ColumnsCompositesBoardColumns3() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[162px]" data-name="Columns & Composites / 🔥 Board Columns">
      <AtomsColumnHeader3 />
      <AtomsStatusColumn4 />
      <AtomsStatusColumn5 />
      <AtomsStatusColumn6 />
      <AtomsStatusColumn7 />
    </div>
  );
}

function AtomsVerticalDivider25() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider34() {
  return (
    <div className="absolute h-px left-0 right-0 top-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsHorizontalDivider35() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function EditableHeading8() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-center left-1/2 px-[4px] py-0 rounded-[4px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="🔥 Editable Heading">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#323338] text-[14px] text-nowrap">Type</p>
    </div>
  );
}

function ColumnHeader3() {
  return (
    <div className="absolute bg-white inset-0" data-name="_Column Header">
      <AtomsVerticalDivider25 />
      <AtomsHorizontalDivider34 />
      <AtomsHorizontalDivider35 />
      <EditableHeading8 />
    </div>
  );
}

function AtomsColumnHeader4() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[9]" data-name="Atoms / 🔥 Column Header">
      <ColumnHeader3 />
    </div>
  );
}

function AtomsVerticalDivider26() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider36() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn8() {
  return (
    <div className="absolute bg-[#4eccc6] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider26 />
      <AtomsHorizontalDivider36 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+0.5px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Craft</p>
    </div>
  );
}

function AtomsStatusColumn8() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[8]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn8 />
    </div>
  );
}

function AtomsVerticalDivider27() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider37() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn9() {
  return (
    <div className="absolute bg-[#ff5ac4] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider27 />
      <AtomsHorizontalDivider37 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+0.5px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Logistics</p>
    </div>
  );
}

function AtomsStatusColumn9() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[7]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn9 />
    </div>
  );
}

function AtomsVerticalDivider28() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider38() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn10() {
  return (
    <div className="absolute bg-[#ff7575] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider28 />
      <AtomsHorizontalDivider38 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+0.5px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Program</p>
    </div>
  );
}

function AtomsStatusColumn10() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[6]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn10 />
    </div>
  );
}

function AtomsVerticalDivider29() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider39() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn11() {
  return (
    <div className="absolute bg-[#ff6d3b] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider29 />
      <AtomsHorizontalDivider39 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+0.5px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Content</p>
    </div>
  );
}

function AtomsStatusColumn11() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[5]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn11 />
    </div>
  );
}

function ColumnsCompositesBoardColumns4() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[162px]" data-name="Columns & Composites / 🔥 Board Columns">
      <AtomsColumnHeader4 />
      <AtomsStatusColumn8 />
      <AtomsStatusColumn9 />
      <AtomsStatusColumn10 />
      <AtomsStatusColumn11 />
    </div>
  );
}

function AtomsVerticalDivider30() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider40() {
  return (
    <div className="absolute h-px left-0 right-0 top-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsHorizontalDivider41() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function IconBasicAdd1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon / Basic / Add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon / Basic / Add">
          <path d={svgPaths.p3f512280} fill="var(--fill-0, #676879)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButton14() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[8px] px-[8px] py-[6px] rounded-[4px] size-[22px] top-1/2 translate-y-[-50%]" data-name="🔥 IconButton">
      <IconBasicAdd1 />
    </div>
  );
}

function ColumnHeader4() {
  return (
    <div className="absolute bg-white inset-0" data-name="_Column Header">
      <AtomsVerticalDivider30 />
      <AtomsHorizontalDivider40 />
      <AtomsHorizontalDivider41 />
      <IconButton14 />
    </div>
  );
}

function AtomsColumnHeader5() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[9]" data-name="Atoms / 🔥 Column Header">
      <ColumnHeader4 />
    </div>
  );
}

function EmptyColumn() {
  return <div className="absolute bg-white border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0" data-name="_Empty Column" />;
}

function AtomsEmptyColumn() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[8]" data-name="Atoms / 🔥 Empty Column">
      <EmptyColumn />
    </div>
  );
}

function EmptyColumn1() {
  return <div className="absolute bg-white border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0" data-name="_Empty Column" />;
}

function AtomsEmptyColumn1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[7]" data-name="Atoms / 🔥 Empty Column">
      <EmptyColumn1 />
    </div>
  );
}

function EmptyColumn2() {
  return <div className="absolute bg-white border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0" data-name="_Empty Column" />;
}

function AtomsEmptyColumn2() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[6]" data-name="Atoms / 🔥 Empty Column">
      <EmptyColumn2 />
    </div>
  );
}

function EmptyColumn3() {
  return <div className="absolute bg-white border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0" data-name="_Empty Column" />;
}

function AtomsEmptyColumn3() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[5]" data-name="Atoms / 🔥 Empty Column">
      <EmptyColumn3 />
    </div>
  );
}

function ColumnsCompositesBoardColumns5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Columns & Composites / 🔥 Board Columns">
      <AtomsColumnHeader5 />
      <AtomsEmptyColumn />
      <AtomsEmptyColumn1 />
      <AtomsEmptyColumn2 />
      <AtomsEmptyColumn3 />
    </div>
  );
}

function InnerBoardColumns() {
  return (
    <div className="content-stretch flex items-start mb-[-180px] relative shrink-0 w-full" data-name="Inner Board Columns">
      <ColumnsCompositesBoardColumns />
      <ColumnsCompositesBoardColumns1 />
      <ColumnsCompositesBoardColumns2 />
      <ColumnsCompositesBoardColumns3 />
      <ColumnsCompositesBoardColumns4 />
      <ColumnsCompositesBoardColumns5 />
    </div>
  );
}

function InnerBoardRowIndications() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[180px] pt-0 px-0 relative shrink-0 w-full" data-name="Inner Board+ Row Indications">
      <InnerBoardColumns />
    </div>
  );
}

function AtomsHorizontalDivider42() {
  return <div className="absolute h-px left-[4px] right-0 top-0" data-name="Atoms / Horizontal Divider" />;
}

function AtomsHorizontalDivider43() {
  return (
    <div className="absolute bottom-0 h-px left-[4px] right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsVerticalDivider31() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function LeftIndicatorInner5() {
  return <div className="bg-[#bba5e8] h-[36px] rounded-[4px] shrink-0 w-[6px]" data-name="Left Indicator Inner" />;
}

function Checkbox5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="🔥 Checkbox">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox container">
        <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function CheckbocIndicator5() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="Checkboc Indicator">
      <Checkbox5 />
    </div>
  );
}

function CellCheckboxInner5() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="Cell Checkbox inner">
      <LeftIndicatorInner5 />
      <CheckbocIndicator5 />
    </div>
  );
}

function CellCheckbox5() {
  return (
    <div className="absolute inset-0 rounded-bl-[4px] rounded-tl-[4px]" data-name="_Cell Checkbox">
      <AtomsHorizontalDivider42 />
      <AtomsHorizontalDivider43 />
      <AtomsVerticalDivider31 />
      <CellCheckboxInner5 />
    </div>
  );
}

function AtomsCellCheckbox5() {
  return (
    <div className="absolute h-[36px] left-0 overflow-clip top-1/2 translate-y-[-50%] w-[39px]" data-name="Atoms / 🔥 Cell Checkbox">
      <CellCheckbox5 />
    </div>
  );
}

function AtomsHorizontalDivider44() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function SubItemsButton4() {
  return <div className="absolute content-stretch flex items-start left-0 px-[4px] py-[7px] top-0" data-name="Sub Items Button" />;
}

function AddItemInput() {
  return (
    <div className="absolute content-stretch flex items-center left-0 pb-[3px] pl-[16px] pr-[10px] pt-[4px] right-px top-[calc(50%-0.5px)] translate-y-[-50%]" data-name="Add Item Input">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#676879] text-[14px] text-nowrap">+ Add item</p>
    </div>
  );
}

function NameColumnInner4() {
  return (
    <div className="absolute h-[36px] left-[36px] right-[56px] top-1/2 translate-y-[-50%]" data-name="Name Column Inner">
      <AtomsHorizontalDivider44 />
      <SubItemsButton4 />
      <AddItemInput />
    </div>
  );
}

function AtomsVerticalDivider32() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider45() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function EmptyConversationCell() {
  return (
    <div className="absolute h-[36px] right-0 top-1/2 translate-y-[-50%] w-[56px]" data-name="Empty Conversation cell">
      <AtomsVerticalDivider32 />
      <AtomsHorizontalDivider45 />
    </div>
  );
}

function NameColumn4() {
  return (
    <div className="absolute bg-white inset-0 overflow-clip rounded-bl-[4px]" data-name="_Name Column">
      <AtomsCellCheckbox5 />
      <NameColumnInner4 />
      <EmptyConversationCell />
    </div>
  );
}

function AtomsNameColumn() {
  return (
    <div className="h-[36px] relative rounded-bl-[4px] shrink-0 w-full" data-name="Atoms / 🔥 Name Column">
      <NameColumn4 />
    </div>
  );
}

function ClosedGroupItem() {
  return <div className="bg-white h-[60px] opacity-0 shrink-0 w-[366px]" data-name="Closed group item" />;
}

function EmptyColumn4() {
  return <div className="absolute bg-white border-[#d0d4e4] border-[0px_1px_1px] border-solid inset-0 rounded-bl-[8px]" data-name="_Empty Column" />;
}

function AtomsEmptyColumn4() {
  return (
    <div className="h-full relative rounded-bl-[8px] shrink-0 w-[223px]" data-name="Atoms / 🔥 Empty Column">
      <EmptyColumn4 />
    </div>
  );
}

function EmptyColumn5() {
  return <div className="absolute bg-white border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0" data-name="_Empty Column" />;
}

function AtomsEmptyColumn5() {
  return (
    <div className="h-full relative shrink-0 w-[163px]" data-name="Atoms / 🔥 Empty Column">
      <EmptyColumn5 />
    </div>
  );
}

function EmptyColumn6() {
  return <div className="absolute bg-white border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0" data-name="_Empty Column" />;
}

function AtomsEmptyColumn6() {
  return (
    <div className="h-full relative shrink-0 w-[159px]" data-name="Atoms / 🔥 Empty Column">
      <EmptyColumn6 />
    </div>
  );
}

function EmptyColumn7() {
  return <div className="absolute bg-white border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0" data-name="_Empty Column" />;
}

function AtomsEmptyColumn7() {
  return (
    <div className="h-full relative shrink-0 w-[150px]" data-name="Atoms / 🔥 Empty Column">
      <EmptyColumn7 />
    </div>
  );
}

function EmptyColumn8() {
  return <div className="absolute bg-white border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0" data-name="_Empty Column" />;
}

function AtomsEmptyColumn8() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Atoms / 🔥 Empty Column">
      <EmptyColumn8 />
    </div>
  );
}

function BoardFooter() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-start min-h-px min-w-px overflow-clip relative rounded-bl-[8px] shrink-0" data-name="_Board Footer">
      <ClosedGroupItem />
      <AtomsEmptyColumn4 />
      <AtomsEmptyColumn5 />
      <AtomsEmptyColumn6 />
      <AtomsEmptyColumn7 />
      <AtomsEmptyColumn8 />
    </div>
  );
}

function PanelsBoardFooter() {
  return (
    <div className="content-stretch flex h-[35px] items-start relative shrink-0 w-full" data-name="Panels / 🔥 Board Footer">
      <BoardFooter />
    </div>
  );
}

function BoardContent() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Board content">
      <InnerBoardRowIndications />
      <AtomsNameColumn />
      <PanelsBoardFooter />
    </div>
  );
}

function PanelsInnerBoardVersionTwo() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start pb-[40px] pt-0 px-0 relative shrink-0 w-[1286px]" data-name="Panels / Inner Board Version Two">
      <GroupTitle />
      <BoardContent />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto pl-[16px] pr-0 py-0 relative shrink-0" data-name="Content">
      <PanelsInnerBoardVersionTwo />
    </div>
  );
}

function IconBasicDropdownChevronDown4() {
  return (
    <div className="h-[30px] relative shrink-0 w-[18px]" data-name="Icon / Basic / DropdownChevron down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 30">
        <g clipPath="url(#clip0_1_37402)" id="Icon / Basic / DropdownChevron down">
          <path clipRule="evenodd" d={svgPaths.p3c1a9800} fill="var(--fill-0, #579BFC)" fillRule="evenodd" id="Icon/Back (Stroke)" />
        </g>
        <defs>
          <clipPath id="clip0_1_37402">
            <rect fill="white" height="30" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CoolapseExpandGroupButton1() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip pl-[9px] pr-[2px] py-0 relative shrink-0" data-name="Coolapse/Expand Group Button">
      <IconBasicDropdownChevronDown4 />
    </div>
  );
}

function EditableHeadingVariants1() {
  return (
    <div className="content-stretch flex h-[26px] items-center p-[4px] relative rounded-[4px] shrink-0" data-name="Editable heading variants">
      <p className="font-['Poppins:SemiBold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#579bfc] text-[18px] text-nowrap tracking-[-0.09px]">Next week’s tasks</p>
    </div>
  );
}

function TitleCollapse1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Title + Collapse">
      <CoolapseExpandGroupButton1 />
      <EditableHeadingVariants1 />
    </div>
  );
}

function TitleCollapseTextIndication1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Title + collapse + text indication">
      <TitleCollapse1 />
    </div>
  );
}

function GruopTitleInner1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Gruop Title Inner">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center pl-[4px] pr-0 py-0 relative w-full">
          <TitleCollapseTextIndication1 />
        </div>
      </div>
    </div>
  );
}

function GroupTitle1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0" data-name="Group Title">
      <GruopTitleInner1 />
    </div>
  );
}

function AtomsHorizontalDivider46() {
  return (
    <div className="absolute h-px left-[4px] right-0 top-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsHorizontalDivider47() {
  return (
    <div className="absolute bottom-0 h-px left-[4px] right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsVerticalDivider33() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function LeftIndicatorInner6() {
  return <div className="bg-[#579bfc] h-[36px] rounded-[4px] shrink-0 w-[6px]" data-name="Left Indicator Inner" />;
}

function Checkbox6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="🔥 Checkbox">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox container">
        <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function CheckbocIndicator6() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="Checkboc Indicator">
      <Checkbox6 />
    </div>
  );
}

function CellCheckboxInner6() {
  return (
    <div className="absolute content-stretch flex items-center left-0 overflow-clip top-0" data-name="Cell Checkbox inner">
      <LeftIndicatorInner6 />
      <CheckbocIndicator6 />
    </div>
  );
}

function CellCheckbox6() {
  return (
    <div className="absolute inset-0 rounded-tl-[4px]" data-name="_Cell Checkbox">
      <AtomsHorizontalDivider46 />
      <AtomsHorizontalDivider47 />
      <AtomsVerticalDivider33 />
      <CellCheckboxInner6 />
    </div>
  );
}

function AtomsCellCheckbox6() {
  return (
    <div className="h-[36px] overflow-clip relative rounded-tl-[4px] shrink-0 w-[39px]" data-name="Atoms / 🔥 Cell Checkbox">
      <CellCheckbox6 />
    </div>
  );
}

function AtomsVerticalDivider34() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider48() {
  return (
    <div className="absolute h-px left-0 right-0 top-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsHorizontalDivider49() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function EditableHeading9() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-center left-[calc(50%+0.5px)] px-[4px] py-0 rounded-[4px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="🔥 Editable Heading">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#323338] text-[14px] text-nowrap">Name</p>
    </div>
  );
}

function AtomsColumnHeader6() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Atoms / 🔥 Column Header">
      <AtomsVerticalDivider34 />
      <AtomsHorizontalDivider48 />
      <AtomsHorizontalDivider49 />
      <EditableHeading9 />
    </div>
  );
}

function MainColumnHeader1() {
  return (
    <div className="basis-0 content-stretch flex grow items-start min-h-px min-w-px relative rounded-tl-[4px] shrink-0" data-name="_Main Column Header">
      <AtomsCellCheckbox6 />
      <AtomsColumnHeader6 />
    </div>
  );
}

function AtomsMainColumnHeader1() {
  return (
    <div className="bg-white content-stretch flex h-[36px] items-start relative rounded-bl-[4px] rounded-tl-[4px] shrink-0 w-full" data-name="Atoms / 🔥 Main Column Header">
      <MainColumnHeader1 />
    </div>
  );
}

function AtomsHorizontalDivider50() {
  return <div className="absolute h-px left-[4px] right-0 top-0" data-name="Atoms / Horizontal Divider" />;
}

function AtomsHorizontalDivider51() {
  return (
    <div className="absolute bottom-0 h-px left-[4px] right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsVerticalDivider35() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function LeftIndicatorInner7() {
  return <div className="bg-[#579bfc] h-[36px] rounded-[4px] shrink-0 w-[6px]" data-name="Left Indicator Inner" />;
}

function Checkbox7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="🔥 Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox container">
        <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function CheckbocIndicator7() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="Checkboc Indicator">
      <Checkbox7 />
    </div>
  );
}

function CellCheckboxInner7() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="Cell Checkbox inner">
      <LeftIndicatorInner7 />
      <CheckbocIndicator7 />
    </div>
  );
}

function CellCheckbox7() {
  return (
    <div className="absolute inset-0 rounded-bl-[4px] rounded-tl-[4px]" data-name="_Cell Checkbox">
      <AtomsHorizontalDivider50 />
      <AtomsHorizontalDivider51 />
      <AtomsVerticalDivider35 />
      <CellCheckboxInner7 />
    </div>
  );
}

function AtomsCellCheckbox7() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[39px]" data-name="Atoms / 🔥 Cell Checkbox">
      <CellCheckbox7 />
    </div>
  );
}

function AtomsVerticalDivider36() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider52() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-[-4px]" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function SubItemsButton5() {
  return <div className="absolute content-stretch flex items-start left-0 px-[4px] py-[7px] top-0" data-name="Sub Items Button" />;
}

function EditableHeading10() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="🔥 Editable Heading">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-0 relative size-full">
          <p className="basis-0 font-['Figtree:Regular',sans-serif] font-normal grow leading-[22px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-nowrap">Design event branding</p>
        </div>
      </div>
    </div>
  );
}

function IndicationLabel4() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Indication+ Label">
      <EditableHeading10 />
    </div>
  );
}

function EditableHeadingOpenButton4() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[30px] right-[8px] top-1/2 translate-y-[-50%]" data-name="Editable Heading + Open Button">
      <IndicationLabel4 />
    </div>
  );
}

function NameColumnInner5() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Name Column Inner">
      <AtomsVerticalDivider36 />
      <AtomsHorizontalDivider52 />
      <SubItemsButton5 />
      <EditableHeadingOpenButton4 />
    </div>
  );
}

function IconAiAi4() {
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

function Animation4() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="animation1">
      <IconAiAi4 />
    </div>
  );
}

function IconPlatformAddUpdate4() {
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

function StartConversationIcon4() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center justify-center px-[22px] py-0 relative shrink-0" data-name="Start Conversation Icon">
      <div aria-hidden="true" className="absolute border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Animation4 />
      <IconPlatformAddUpdate4 />
    </div>
  );
}

function NameColumn5() {
  return (
    <div className="basis-0 bg-white content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="_Name Column">
      <AtomsCellCheckbox7 />
      <NameColumnInner5 />
      <StartConversationIcon4 />
    </div>
  );
}

function AtomsNameColumnAiWide4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Atoms / 🔥 Name Column AI wide">
      <NameColumn5 />
    </div>
  );
}

function AtomsHorizontalDivider53() {
  return <div className="absolute h-px left-[4px] right-0 top-0" data-name="Atoms / Horizontal Divider" />;
}

function AtomsHorizontalDivider54() {
  return (
    <div className="absolute bottom-0 h-px left-[4px] right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsVerticalDivider37() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function LeftIndicatorInner8() {
  return <div className="bg-[#579bfc] h-[36px] rounded-[4px] shrink-0 w-[6px]" data-name="Left Indicator Inner" />;
}

function Checkbox8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="🔥 Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox container">
        <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function CheckbocIndicator8() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="Checkboc Indicator">
      <Checkbox8 />
    </div>
  );
}

function CellCheckboxInner8() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="Cell Checkbox inner">
      <LeftIndicatorInner8 />
      <CheckbocIndicator8 />
    </div>
  );
}

function CellCheckbox8() {
  return (
    <div className="absolute inset-0 rounded-bl-[4px] rounded-tl-[4px]" data-name="_Cell Checkbox">
      <AtomsHorizontalDivider53 />
      <AtomsHorizontalDivider54 />
      <AtomsVerticalDivider37 />
      <CellCheckboxInner8 />
    </div>
  );
}

function AtomsCellCheckbox8() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[39px]" data-name="Atoms / 🔥 Cell Checkbox">
      <CellCheckbox8 />
    </div>
  );
}

function AtomsVerticalDivider38() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider55() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-[-4px]" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function SubItemsButton6() {
  return <div className="absolute content-stretch flex items-start left-0 px-[4px] py-[7px] top-0" data-name="Sub Items Button" />;
}

function EditableHeading11() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="🔥 Editable Heading">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-0 relative size-full">
          <p className="basis-0 font-['Figtree:Regular',sans-serif] font-normal grow leading-[22px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-nowrap">Build registration page</p>
        </div>
      </div>
    </div>
  );
}

function IndicationLabel5() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Indication+ Label">
      <EditableHeading11 />
    </div>
  );
}

function EditableHeadingOpenButton5() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[30px] right-[8px] top-1/2 translate-y-[-50%]" data-name="Editable Heading + Open Button">
      <IndicationLabel5 />
    </div>
  );
}

function NameColumnInner6() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Name Column Inner">
      <AtomsVerticalDivider38 />
      <AtomsHorizontalDivider55 />
      <SubItemsButton6 />
      <EditableHeadingOpenButton5 />
    </div>
  );
}

function IconAiAi5() {
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

function Animation5() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="animation1">
      <IconAiAi5 />
    </div>
  );
}

function IconPlatformAddUpdate5() {
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

function StartConversationIcon5() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center justify-center px-[22px] py-0 relative shrink-0" data-name="Start Conversation Icon">
      <div aria-hidden="true" className="absolute border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Animation5 />
      <IconPlatformAddUpdate5 />
    </div>
  );
}

function NameColumn6() {
  return (
    <div className="basis-0 bg-white content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="_Name Column">
      <AtomsCellCheckbox8 />
      <NameColumnInner6 />
      <StartConversationIcon5 />
    </div>
  );
}

function AtomsNameColumnAiWide5() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Atoms / 🔥 Name Column AI wide">
      <NameColumn6 />
    </div>
  );
}

function AtomsHorizontalDivider56() {
  return <div className="absolute h-px left-[4px] right-0 top-0" data-name="Atoms / Horizontal Divider" />;
}

function AtomsHorizontalDivider57() {
  return (
    <div className="absolute bottom-0 h-px left-[4px] right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsVerticalDivider39() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function LeftIndicatorInner9() {
  return <div className="bg-[#579bfc] h-[36px] rounded-[4px] shrink-0 w-[6px]" data-name="Left Indicator Inner" />;
}

function Checkbox9() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="🔥 Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox container">
        <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function CheckbocIndicator9() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="Checkboc Indicator">
      <Checkbox9 />
    </div>
  );
}

function CellCheckboxInner9() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="Cell Checkbox inner">
      <LeftIndicatorInner9 />
      <CheckbocIndicator9 />
    </div>
  );
}

function CellCheckbox9() {
  return (
    <div className="absolute inset-0 rounded-bl-[4px] rounded-tl-[4px]" data-name="_Cell Checkbox">
      <AtomsHorizontalDivider56 />
      <AtomsHorizontalDivider57 />
      <AtomsVerticalDivider39 />
      <CellCheckboxInner9 />
    </div>
  );
}

function AtomsCellCheckbox9() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[39px]" data-name="Atoms / 🔥 Cell Checkbox">
      <CellCheckbox9 />
    </div>
  );
}

function AtomsVerticalDivider40() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider58() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-[-4px]" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function SubItemsButton7() {
  return <div className="absolute content-stretch flex items-start left-0 px-[4px] py-[7px] top-0" data-name="Sub Items Button" />;
}

function EditableHeading12() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="🔥 Editable Heading">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-0 relative size-full">
          <p className="basis-0 font-['Figtree:Regular',sans-serif] font-normal grow leading-[22px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-nowrap">Coordinate catering</p>
        </div>
      </div>
    </div>
  );
}

function IndicationLabel6() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Indication+ Label">
      <EditableHeading12 />
    </div>
  );
}

function EditableHeadingOpenButton6() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[30px] right-[8px] top-1/2 translate-y-[-50%]" data-name="Editable Heading + Open Button">
      <IndicationLabel6 />
    </div>
  );
}

function NameColumnInner7() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Name Column Inner">
      <AtomsVerticalDivider40 />
      <AtomsHorizontalDivider58 />
      <SubItemsButton7 />
      <EditableHeadingOpenButton6 />
    </div>
  );
}

function IconAiAi6() {
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

function Animation6() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="animation1">
      <IconAiAi6 />
    </div>
  );
}

function IconPlatformAddUpdate6() {
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

function StartConversationIcon6() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center justify-center px-[22px] py-0 relative shrink-0" data-name="Start Conversation Icon">
      <div aria-hidden="true" className="absolute border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Animation6 />
      <IconPlatformAddUpdate6 />
    </div>
  );
}

function NameColumn7() {
  return (
    <div className="basis-0 bg-white content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="_Name Column">
      <AtomsCellCheckbox9 />
      <NameColumnInner7 />
      <StartConversationIcon6 />
    </div>
  );
}

function AtomsNameColumnAiWide6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Atoms / 🔥 Name Column AI wide">
      <NameColumn7 />
    </div>
  );
}

function AtomsHorizontalDivider59() {
  return <div className="absolute h-px left-[4px] right-0 top-0" data-name="Atoms / Horizontal Divider" />;
}

function AtomsHorizontalDivider60() {
  return (
    <div className="absolute bottom-0 h-px left-[4px] right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsVerticalDivider41() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function LeftIndicatorInner10() {
  return <div className="bg-[#579bfc] h-[36px] rounded-[4px] shrink-0 w-[6px]" data-name="Left Indicator Inner" />;
}

function Checkbox10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="🔥 Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox container">
        <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function CheckbocIndicator10() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="Checkboc Indicator">
      <Checkbox10 />
    </div>
  );
}

function CellCheckboxInner10() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="Cell Checkbox inner">
      <LeftIndicatorInner10 />
      <CheckbocIndicator10 />
    </div>
  );
}

function CellCheckbox10() {
  return (
    <div className="absolute inset-0 rounded-bl-[4px] rounded-tl-[4px]" data-name="_Cell Checkbox">
      <AtomsHorizontalDivider59 />
      <AtomsHorizontalDivider60 />
      <AtomsVerticalDivider41 />
      <CellCheckboxInner10 />
    </div>
  );
}

function AtomsCellCheckbox10() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[39px]" data-name="Atoms / 🔥 Cell Checkbox">
      <CellCheckbox10 />
    </div>
  );
}

function AtomsVerticalDivider42() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider61() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-[-4px]" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function SubItemsButton8() {
  return <div className="absolute content-stretch flex items-start left-0 px-[4px] py-[7px] top-0" data-name="Sub Items Button" />;
}

function EditableHeading13() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="🔥 Editable Heading">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-0 relative size-full">
          <p className="basis-0 font-['Figtree:Regular',sans-serif] font-normal grow leading-[22px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-nowrap">Confirm tech setup</p>
        </div>
      </div>
    </div>
  );
}

function IndicationLabel7() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Indication+ Label">
      <EditableHeading13 />
    </div>
  );
}

function EditableHeadingOpenButton7() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[30px] right-[8px] top-1/2 translate-y-[-50%]" data-name="Editable Heading + Open Button">
      <IndicationLabel7 />
    </div>
  );
}

function NameColumnInner8() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Name Column Inner">
      <AtomsVerticalDivider42 />
      <AtomsHorizontalDivider61 />
      <SubItemsButton8 />
      <EditableHeadingOpenButton7 />
    </div>
  );
}

function IconAiAi7() {
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

function Animation7() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="animation1">
      <IconAiAi7 />
    </div>
  );
}

function IconPlatformAddUpdate7() {
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

function StartConversationIcon7() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center justify-center px-[22px] py-0 relative shrink-0" data-name="Start Conversation Icon">
      <div aria-hidden="true" className="absolute border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Animation7 />
      <IconPlatformAddUpdate7 />
    </div>
  );
}

function NameColumn8() {
  return (
    <div className="basis-0 bg-white content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="_Name Column">
      <AtomsCellCheckbox10 />
      <NameColumnInner8 />
      <StartConversationIcon7 />
    </div>
  );
}

function AtomsNameColumnAiWide7() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Atoms / 🔥 Name Column AI wide">
      <NameColumn8 />
    </div>
  );
}

function AtomsHorizontalDivider62() {
  return <div className="absolute h-px left-[4px] right-0 top-0" data-name="Atoms / Horizontal Divider" />;
}

function AtomsHorizontalDivider63() {
  return (
    <div className="absolute bottom-0 h-px left-[4px] right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsVerticalDivider43() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function LeftIndicatorInner11() {
  return <div className="bg-[#579bfc] h-[36px] rounded-[4px] shrink-0 w-[6px]" data-name="Left Indicator Inner" />;
}

function Checkbox11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="🔥 Checkbox">
      <div className="relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox container">
        <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function CheckbocIndicator11() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="Checkboc Indicator">
      <Checkbox11 />
    </div>
  );
}

function CellCheckboxInner11() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="Cell Checkbox inner">
      <LeftIndicatorInner11 />
      <CheckbocIndicator11 />
    </div>
  );
}

function CellCheckbox11() {
  return (
    <div className="absolute inset-0 rounded-bl-[4px] rounded-tl-[4px]" data-name="_Cell Checkbox">
      <AtomsHorizontalDivider62 />
      <AtomsHorizontalDivider63 />
      <AtomsVerticalDivider43 />
      <CellCheckboxInner11 />
    </div>
  );
}

function AtomsCellCheckbox11() {
  return (
    <div className="h-[36px] overflow-clip relative shrink-0 w-[39px]" data-name="Atoms / 🔥 Cell Checkbox">
      <CellCheckbox11 />
    </div>
  );
}

function AtomsVerticalDivider44() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider64() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-[-4px]" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function SubItemsButton9() {
  return <div className="absolute content-stretch flex items-start left-0 px-[4px] py-[7px] top-0" data-name="Sub Items Button" />;
}

function EditableHeading14() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="🔥 Editable Heading">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[4px] py-0 relative size-full">
          <p className="basis-0 font-['Figtree:Regular',sans-serif] font-normal grow leading-[22px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-nowrap">Schedule dry run</p>
        </div>
      </div>
    </div>
  );
}

function IndicationLabel8() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Indication+ Label">
      <EditableHeading14 />
    </div>
  );
}

function EditableHeadingOpenButton8() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center left-[30px] right-[8px] top-1/2 translate-y-[-50%]" data-name="Editable Heading + Open Button">
      <IndicationLabel8 />
    </div>
  );
}

function NameColumnInner9() {
  return (
    <div className="basis-0 grow h-[36px] min-h-px min-w-px relative shrink-0" data-name="Name Column Inner">
      <AtomsVerticalDivider44 />
      <AtomsHorizontalDivider64 />
      <SubItemsButton9 />
      <EditableHeadingOpenButton8 />
    </div>
  );
}

function IconAiAi8() {
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

function Animation8() {
  return (
    <div className="relative shrink-0 size-[22px]" data-name="animation1">
      <IconAiAi8 />
    </div>
  );
}

function IconPlatformAddUpdate8() {
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

function StartConversationIcon8() {
  return (
    <div className="content-stretch flex gap-[12px] h-[36px] items-center justify-center px-[22px] py-0 relative shrink-0" data-name="Start Conversation Icon">
      <div aria-hidden="true" className="absolute border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0 pointer-events-none" />
      <Animation8 />
      <IconPlatformAddUpdate8 />
    </div>
  );
}

function NameColumn9() {
  return (
    <div className="basis-0 bg-white content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="_Name Column">
      <AtomsCellCheckbox11 />
      <NameColumnInner9 />
      <StartConversationIcon8 />
    </div>
  );
}

function AtomsNameColumnAiWide8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Atoms / 🔥 Name Column AI wide">
      <NameColumn9 />
    </div>
  );
}

function ColumnsCompositesBoardColumns6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[366px]" data-name="Columns & Composites / 🔥 Board Columns">
      <AtomsMainColumnHeader1 />
      <AtomsNameColumnAiWide4 />
      <AtomsNameColumnAiWide5 />
      <AtomsNameColumnAiWide6 />
      <AtomsNameColumnAiWide7 />
      <AtomsNameColumnAiWide8 />
    </div>
  );
}

function AtomsVerticalDivider45() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider65() {
  return (
    <div className="absolute h-px left-0 right-0 top-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsHorizontalDivider66() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function EditableHeading15() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-center left-[calc(50%+0.5px)] px-[4px] py-0 rounded-[4px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="🔥 Editable Heading">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#323338] text-[14px] text-nowrap">Description</p>
    </div>
  );
}

function ColumnHeader5() {
  return (
    <div className="absolute bg-white inset-0" data-name="_Column Header">
      <AtomsVerticalDivider45 />
      <AtomsHorizontalDivider65 />
      <AtomsHorizontalDivider66 />
      <EditableHeading15 />
    </div>
  );
}

function AtomsColumnHeader7() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Atoms / 🔥 Column Header">
      <ColumnHeader5 />
    </div>
  );
}

function AtomsVerticalDivider46() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider67() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function LabelClearButton4() {
  return (
    <div className="absolute content-stretch flex inset-[4px_6px_5px_5px] items-center px-[6px] py-0" data-name="Label + Clear Button">
      <p className="basis-0 font-['Figtree:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-center text-nowrap">Finalize guest list and send out event invitations</p>
    </div>
  );
}

function DateColumn4() {
  return (
    <div className="absolute bg-white inset-0" data-name="_Date Column">
      <AtomsVerticalDivider46 />
      <AtomsHorizontalDivider67 />
      <LabelClearButton4 />
    </div>
  );
}

function AtomsDateColumn4() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Atoms / 🔥 Date Column">
      <DateColumn4 />
    </div>
  );
}

function AtomsVerticalDivider47() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider68() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function LabelClearButton5() {
  return (
    <div className="absolute content-stretch flex inset-[4px_6px_5px_5px] items-center px-[6px] py-0" data-name="Label + Clear Button">
      <p className="basis-0 font-['Figtree:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-center text-nowrap">Confirm venue booking and upload contract</p>
    </div>
  );
}

function DateColumn5() {
  return (
    <div className="absolute bg-white inset-0" data-name="_Date Column">
      <AtomsVerticalDivider47 />
      <AtomsHorizontalDivider68 />
      <LabelClearButton5 />
    </div>
  );
}

function AtomsDateColumn5() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Atoms / 🔥 Date Column">
      <DateColumn5 />
    </div>
  );
}

function AtomsVerticalDivider48() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider69() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function LabelClearButton6() {
  return (
    <div className="absolute content-stretch flex inset-[4px_6px_5px_5px] items-center px-[6px] py-0" data-name="Label + Clear Button">
      <p className="basis-0 font-['Figtree:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-center text-nowrap">Reach out to potential keynote and panel speakers</p>
    </div>
  );
}

function DateColumn6() {
  return (
    <div className="absolute bg-white inset-0" data-name="_Date Column">
      <AtomsVerticalDivider48 />
      <AtomsHorizontalDivider69 />
      <LabelClearButton6 />
    </div>
  );
}

function AtomsDateColumn6() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Atoms / 🔥 Date Column">
      <DateColumn6 />
    </div>
  );
}

function AtomsVerticalDivider49() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider70() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function LabelClearButton7() {
  return (
    <div className="absolute content-stretch flex inset-[4px_6px_5px_5px] items-center px-[6px] py-0" data-name="Label + Clear Button">
      <p className="basis-0 font-['Figtree:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-center text-nowrap">Draft a preliminary agenda for review</p>
    </div>
  );
}

function DateColumn7() {
  return (
    <div className="absolute bg-white inset-0" data-name="_Date Column">
      <AtomsVerticalDivider49 />
      <AtomsHorizontalDivider70 />
      <LabelClearButton7 />
    </div>
  );
}

function AtomsDateColumn7() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Atoms / 🔥 Date Column">
      <DateColumn7 />
    </div>
  );
}

function AtomsVerticalDivider50() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider71() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function LabelClearButton8() {
  return (
    <div className="absolute content-stretch flex inset-[4px_6px_5px_5px] items-center px-[6px] py-0" data-name="Label + Clear Button">
      <p className="basis-0 font-['Figtree:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px overflow-ellipsis overflow-hidden relative shrink-0 text-[#323338] text-[14px] text-center text-nowrap">Start user interviews on the new ai actions</p>
    </div>
  );
}

function DateColumn8() {
  return (
    <div className="absolute bg-white inset-0" data-name="_Date Column">
      <AtomsVerticalDivider50 />
      <AtomsHorizontalDivider71 />
      <LabelClearButton8 />
    </div>
  );
}

function AtomsDateColumn8() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Atoms / 🔥 Date Column">
      <DateColumn8 />
    </div>
  );
}

function ColumnsCompositesBoardColumns7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[223px]" data-name="Columns & Composites / 🔥 Board Columns">
      <AtomsColumnHeader7 />
      <AtomsDateColumn4 />
      <AtomsDateColumn5 />
      <AtomsDateColumn6 />
      <AtomsDateColumn7 />
      <AtomsDateColumn8 />
    </div>
  );
}

function AtomsVerticalDivider51() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider72() {
  return (
    <div className="absolute h-px left-0 right-0 top-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsHorizontalDivider73() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function EditableHeading16() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-center left-[calc(50%+0.5px)] px-[4px] py-0 rounded-[4px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="🔥 Editable Heading">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#323338] text-[14px] text-nowrap">Status</p>
    </div>
  );
}

function ColumnHeader6() {
  return (
    <div className="absolute bg-white inset-0" data-name="_Column Header">
      <AtomsVerticalDivider51 />
      <AtomsHorizontalDivider72 />
      <AtomsHorizontalDivider73 />
      <EditableHeading16 />
    </div>
  );
}

function AtomsColumnHeader8() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[9]" data-name="Atoms / 🔥 Column Header">
      <ColumnHeader6 />
    </div>
  );
}

function AtomsVerticalDivider52() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider74() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn12() {
  return (
    <div className="absolute bg-[#007eb5] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider52 />
      <AtomsHorizontalDivider74 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+1px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Ready to start</p>
    </div>
  );
}

function AtomsStatusColumn12() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[8]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn12 />
    </div>
  );
}

function AtomsVerticalDivider53() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider75() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn13() {
  return (
    <div className="absolute bg-[#007eb5] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider53 />
      <AtomsHorizontalDivider75 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+1px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Ready to start</p>
    </div>
  );
}

function AtomsStatusColumn13() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[7]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn13 />
    </div>
  );
}

function AtomsVerticalDivider54() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider76() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn14() {
  return (
    <div className="absolute bg-[#007eb5] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider54 />
      <AtomsHorizontalDivider76 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+1px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Ready to start</p>
    </div>
  );
}

function AtomsStatusColumn14() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[6]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn14 />
    </div>
  );
}

function AtomsVerticalDivider55() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider77() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn15() {
  return (
    <div className="absolute bg-[#ff5ac4] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider55 />
      <AtomsHorizontalDivider77 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+0.5px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Needs shaping</p>
    </div>
  );
}

function AtomsStatusColumn15() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[5]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn15 />
    </div>
  );
}

function AtomsVerticalDivider56() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider78() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn16() {
  return (
    <div className="absolute bg-[#007eb5] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider56 />
      <AtomsHorizontalDivider78 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+1px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Ready to start</p>
    </div>
  );
}

function AtomsStatusColumn16() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[4]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn16 />
    </div>
  );
}

function ColumnsCompositesBoardColumns8() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[163px]" data-name="Columns & Composites / 🔥 Board Columns">
      <AtomsColumnHeader8 />
      <AtomsStatusColumn12 />
      <AtomsStatusColumn13 />
      <AtomsStatusColumn14 />
      <AtomsStatusColumn15 />
      <AtomsStatusColumn16 />
    </div>
  );
}

function AtomsVerticalDivider57() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider79() {
  return (
    <div className="absolute h-px left-0 right-0 top-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsHorizontalDivider80() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function EditableHeading17() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-center left-1/2 px-[4px] py-0 rounded-[4px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="🔥 Editable Heading">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#323338] text-[14px] text-nowrap">Priority</p>
    </div>
  );
}

function ColumnHeader7() {
  return (
    <div className="absolute bg-white inset-0" data-name="_Column Header">
      <AtomsVerticalDivider57 />
      <AtomsHorizontalDivider79 />
      <AtomsHorizontalDivider80 />
      <EditableHeading17 />
    </div>
  );
}

function AtomsColumnHeader9() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[9]" data-name="Atoms / 🔥 Column Header">
      <ColumnHeader7 />
    </div>
  );
}

function AtomsVerticalDivider58() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider81() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn17() {
  return (
    <div className="absolute bg-[#df2f4a] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider58 />
      <AtomsHorizontalDivider81 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+0.5px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Critical</p>
    </div>
  );
}

function AtomsStatusColumn17() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[8]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn17 />
    </div>
  );
}

function AtomsVerticalDivider59() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider82() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn18() {
  return (
    <div className="absolute bg-[#df2f4a] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider59 />
      <AtomsHorizontalDivider82 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+0.5px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Critical</p>
    </div>
  );
}

function AtomsStatusColumn18() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[7]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn18 />
    </div>
  );
}

function AtomsVerticalDivider60() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider83() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn19() {
  return (
    <div className="absolute bg-[#ffcb00] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider60 />
      <AtomsHorizontalDivider83 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-1/2 text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">High</p>
    </div>
  );
}

function AtomsStatusColumn19() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[6]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn19 />
    </div>
  );
}

function AtomsVerticalDivider61() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider84() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn20() {
  return (
    <div className="absolute bg-[#ffcb00] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider61 />
      <AtomsHorizontalDivider84 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-1/2 text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">High</p>
    </div>
  );
}

function AtomsStatusColumn20() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[5]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn20 />
    </div>
  );
}

function AtomsVerticalDivider62() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider85() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn21() {
  return (
    <div className="absolute bg-[#00c875] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider62 />
      <AtomsHorizontalDivider85 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+0.5px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Low</p>
    </div>
  );
}

function AtomsStatusColumn21() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[4]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn21 />
    </div>
  );
}

function ColumnsCompositesBoardColumns9() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[162px]" data-name="Columns & Composites / 🔥 Board Columns">
      <AtomsColumnHeader9 />
      <AtomsStatusColumn17 />
      <AtomsStatusColumn18 />
      <AtomsStatusColumn19 />
      <AtomsStatusColumn20 />
      <AtomsStatusColumn21 />
    </div>
  );
}

function AtomsVerticalDivider63() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider86() {
  return (
    <div className="absolute h-px left-0 right-0 top-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsHorizontalDivider87() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function EditableHeading18() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-center left-1/2 px-[4px] py-0 rounded-[4px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="🔥 Editable Heading">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#323338] text-[14px] text-nowrap">Type</p>
    </div>
  );
}

function ColumnHeader8() {
  return (
    <div className="absolute bg-white inset-0" data-name="_Column Header">
      <AtomsVerticalDivider63 />
      <AtomsHorizontalDivider86 />
      <AtomsHorizontalDivider87 />
      <EditableHeading18 />
    </div>
  );
}

function AtomsColumnHeader10() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[9]" data-name="Atoms / 🔥 Column Header">
      <ColumnHeader8 />
    </div>
  );
}

function AtomsVerticalDivider64() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider88() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn22() {
  return (
    <div className="absolute bg-[#9d50dd] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider64 />
      <AtomsHorizontalDivider88 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-1/2 text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Design</p>
    </div>
  );
}

function AtomsStatusColumn22() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[8]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn22 />
    </div>
  );
}

function AtomsVerticalDivider65() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider89() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn23() {
  return (
    <div className="absolute bg-[#579bfc] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider65 />
      <AtomsHorizontalDivider89 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+0.5px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Web</p>
    </div>
  );
}

function AtomsStatusColumn23() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[7]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn23 />
    </div>
  );
}

function AtomsVerticalDivider66() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider90() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn24() {
  return (
    <div className="absolute bg-[#ff5ac4] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider66 />
      <AtomsHorizontalDivider90 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+0.5px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Logistics</p>
    </div>
  );
}

function AtomsStatusColumn24() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[6]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn24 />
    </div>
  );
}

function AtomsVerticalDivider67() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider91() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn25() {
  return (
    <div className="absolute bg-[#00c875] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider67 />
      <AtomsHorizontalDivider91 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+0.5px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Production</p>
    </div>
  );
}

function AtomsStatusColumn25() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[5]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn25 />
    </div>
  );
}

function AtomsVerticalDivider68() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider92() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function StatusColumn26() {
  return (
    <div className="absolute bg-[#ff7575] inset-0" data-name="_Status Column">
      <AtomsVerticalDivider68 />
      <AtomsHorizontalDivider92 />
      <p className="absolute font-['Figtree:Regular',sans-serif] font-normal leading-[20px] left-[calc(50%+0.5px)] text-[14px] text-center text-nowrap text-white top-[calc(50%-11px)] translate-x-[-50%]">Program</p>
    </div>
  );
}

function AtomsStatusColumn26() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[4]" data-name="Atoms / ❇️ Status Column">
      <StatusColumn26 />
    </div>
  );
}

function ColumnsCompositesBoardColumns10() {
  return (
    <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[162px]" data-name="Columns & Composites / 🔥 Board Columns">
      <AtomsColumnHeader10 />
      <AtomsStatusColumn22 />
      <AtomsStatusColumn23 />
      <AtomsStatusColumn24 />
      <AtomsStatusColumn25 />
      <AtomsStatusColumn26 />
    </div>
  );
}

function AtomsVerticalDivider69() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider93() {
  return (
    <div className="absolute h-px left-0 right-0 top-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsHorizontalDivider94() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function IconBasicAdd2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Icon / Basic / Add">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Icon / Basic / Add">
          <path d={svgPaths.p3f512280} fill="var(--fill-0, #676879)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function IconButton15() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[8px] px-[8px] py-[6px] rounded-[4px] size-[22px] top-1/2 translate-y-[-50%]" data-name="🔥 IconButton">
      <IconBasicAdd2 />
    </div>
  );
}

function ColumnHeader9() {
  return (
    <div className="absolute bg-white inset-0" data-name="_Column Header">
      <AtomsVerticalDivider69 />
      <AtomsHorizontalDivider93 />
      <AtomsHorizontalDivider94 />
      <IconButton15 />
    </div>
  );
}

function AtomsColumnHeader11() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[9]" data-name="Atoms / 🔥 Column Header">
      <ColumnHeader9 />
    </div>
  );
}

function EmptyColumn9() {
  return <div className="absolute bg-white border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0" data-name="_Empty Column" />;
}

function AtomsEmptyColumn9() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[8]" data-name="Atoms / 🔥 Empty Column">
      <EmptyColumn9 />
    </div>
  );
}

function EmptyColumn10() {
  return <div className="absolute bg-white border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0" data-name="_Empty Column" />;
}

function AtomsEmptyColumn10() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[7]" data-name="Atoms / 🔥 Empty Column">
      <EmptyColumn10 />
    </div>
  );
}

function EmptyColumn11() {
  return <div className="absolute bg-white border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0" data-name="_Empty Column" />;
}

function AtomsEmptyColumn11() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[6]" data-name="Atoms / 🔥 Empty Column">
      <EmptyColumn11 />
    </div>
  );
}

function EmptyColumn12() {
  return <div className="absolute bg-white border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0" data-name="_Empty Column" />;
}

function AtomsEmptyColumn12() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[5]" data-name="Atoms / 🔥 Empty Column">
      <EmptyColumn12 />
    </div>
  );
}

function EmptyColumn13() {
  return <div className="absolute bg-white border-[#dcdfec] border-[0px_1px_1px_0px] border-solid inset-0" data-name="_Empty Column" />;
}

function AtomsEmptyColumn13() {
  return (
    <div className="h-[36px] relative shrink-0 w-full z-[4]" data-name="Atoms / 🔥 Empty Column">
      <EmptyColumn13 />
    </div>
  );
}

function ColumnsCompositesBoardColumns11() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow isolate items-start min-h-px min-w-px relative shrink-0" data-name="Columns & Composites / 🔥 Board Columns">
      <AtomsColumnHeader11 />
      <AtomsEmptyColumn9 />
      <AtomsEmptyColumn10 />
      <AtomsEmptyColumn11 />
      <AtomsEmptyColumn12 />
      <AtomsEmptyColumn13 />
    </div>
  );
}

function InnerBoardColumns1() {
  return (
    <div className="content-stretch flex items-start mb-[-216px] relative shrink-0 w-full" data-name="Inner Board Columns">
      <ColumnsCompositesBoardColumns6 />
      <ColumnsCompositesBoardColumns7 />
      <ColumnsCompositesBoardColumns8 />
      <ColumnsCompositesBoardColumns9 />
      <ColumnsCompositesBoardColumns10 />
      <ColumnsCompositesBoardColumns11 />
    </div>
  );
}

function InnerBoardRowIndications1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[216px] pt-0 px-0 relative shrink-0 w-full" data-name="Inner Board+ Row Indications">
      <InnerBoardColumns1 />
    </div>
  );
}

function AtomsHorizontalDivider95() {
  return <div className="absolute h-px left-[4px] right-0 top-0" data-name="Atoms / Horizontal Divider" />;
}

function AtomsHorizontalDivider96() {
  return (
    <div className="absolute bottom-0 h-px left-[4px] right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function AtomsVerticalDivider70() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function LeftIndicatorInner12() {
  return <div className="bg-[#abcdfd] h-[36px] rounded-[4px] shrink-0 w-[6px]" data-name="Left Indicator Inner" />;
}

function Checkbox12() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="🔥 Checkbox">
      <div className="bg-white relative rounded-[2px] shrink-0 size-[16px]" data-name="Checkbox container">
        <div aria-hidden="true" className="absolute border border-[#c3c6d4] border-solid inset-0 pointer-events-none rounded-[2px]" />
      </div>
    </div>
  );
}

function CheckbocIndicator12() {
  return (
    <div className="content-stretch flex items-center p-[8px] relative shrink-0" data-name="Checkboc Indicator">
      <Checkbox12 />
    </div>
  );
}

function CellCheckboxInner12() {
  return (
    <div className="absolute content-stretch flex items-center left-0 top-0" data-name="Cell Checkbox inner">
      <LeftIndicatorInner12 />
      <CheckbocIndicator12 />
    </div>
  );
}

function CellCheckbox12() {
  return (
    <div className="absolute inset-0 rounded-bl-[4px] rounded-tl-[4px]" data-name="_Cell Checkbox">
      <AtomsHorizontalDivider95 />
      <AtomsHorizontalDivider96 />
      <AtomsVerticalDivider70 />
      <CellCheckboxInner12 />
    </div>
  );
}

function AtomsCellCheckbox12() {
  return (
    <div className="absolute h-[36px] left-0 overflow-clip top-1/2 translate-y-[-50%] w-[39px]" data-name="Atoms / 🔥 Cell Checkbox">
      <CellCheckbox12 />
    </div>
  );
}

function AtomsHorizontalDivider97() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function SubItemsButton10() {
  return <div className="absolute content-stretch flex items-start left-0 px-[4px] py-[7px] top-0" data-name="Sub Items Button" />;
}

function AddItemInput1() {
  return (
    <div className="absolute content-stretch flex items-center left-0 pb-[3px] pl-[16px] pr-[10px] pt-[4px] right-px top-[calc(50%-0.5px)] translate-y-[-50%]" data-name="Add Item Input">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#676879] text-[14px] text-nowrap">+ Add item</p>
    </div>
  );
}

function NameColumnInner10() {
  return (
    <div className="absolute h-[36px] left-[36px] right-[56px] top-1/2 translate-y-[-50%]" data-name="Name Column Inner">
      <AtomsHorizontalDivider97 />
      <SubItemsButton10 />
      <AddItemInput1 />
    </div>
  );
}

function AtomsVerticalDivider71() {
  return (
    <div className="absolute bottom-0 right-0 top-0 w-px" data-name="Atoms / Vertical Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Vertical Divider" />
    </div>
  );
}

function AtomsHorizontalDivider98() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function EmptyConversationCell1() {
  return (
    <div className="absolute h-[36px] right-0 top-1/2 translate-y-[-50%] w-[56px]" data-name="Empty Conversation cell">
      <AtomsVerticalDivider71 />
      <AtomsHorizontalDivider98 />
    </div>
  );
}

function NameColumn10() {
  return (
    <div className="absolute bg-white inset-0 overflow-clip rounded-bl-[4px]" data-name="_Name Column">
      <AtomsCellCheckbox12 />
      <NameColumnInner10 />
      <EmptyConversationCell1 />
    </div>
  );
}

function AtomsNameColumn1() {
  return (
    <div className="h-[36px] relative rounded-bl-[4px] shrink-0 w-full" data-name="Atoms / 🔥 Name Column">
      <NameColumn10 />
    </div>
  );
}

function ClosedGroupItem1() {
  return <div className="bg-white h-[60px] opacity-0 shrink-0 w-[366px]" data-name="Closed group item" />;
}

function EmptyColumn14() {
  return <div className="absolute bg-white border-[#d0d4e4] border-[0px_1px_1px] border-solid inset-0 rounded-bl-[8px]" data-name="_Empty Column" />;
}

function AtomsEmptyColumn14() {
  return (
    <div className="h-full relative rounded-bl-[8px] shrink-0 w-[223px]" data-name="Atoms / 🔥 Empty Column">
      <EmptyColumn14 />
    </div>
  );
}

function EmptyColumn15() {
  return <div className="absolute bg-white border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0" data-name="_Empty Column" />;
}

function AtomsEmptyColumn15() {
  return (
    <div className="h-full relative shrink-0 w-[163px]" data-name="Atoms / 🔥 Empty Column">
      <EmptyColumn15 />
    </div>
  );
}

function EmptyColumn16() {
  return <div className="absolute bg-white border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0" data-name="_Empty Column" />;
}

function AtomsEmptyColumn16() {
  return (
    <div className="h-full relative shrink-0 w-[159px]" data-name="Atoms / 🔥 Empty Column">
      <EmptyColumn16 />
    </div>
  );
}

function EmptyColumn17() {
  return <div className="absolute bg-white border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0" data-name="_Empty Column" />;
}

function AtomsEmptyColumn17() {
  return (
    <div className="h-full relative shrink-0 w-[150px]" data-name="Atoms / 🔥 Empty Column">
      <EmptyColumn17 />
    </div>
  );
}

function EmptyColumn18() {
  return <div className="absolute bg-white border-[#d0d4e4] border-[0px_1px_1px_0px] border-solid inset-0" data-name="_Empty Column" />;
}

function AtomsEmptyColumn18() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Atoms / 🔥 Empty Column">
      <EmptyColumn18 />
    </div>
  );
}

function BoardFooter1() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-start min-h-px min-w-px overflow-clip relative rounded-bl-[8px] shrink-0" data-name="_Board Footer">
      <ClosedGroupItem1 />
      <AtomsEmptyColumn14 />
      <AtomsEmptyColumn15 />
      <AtomsEmptyColumn16 />
      <AtomsEmptyColumn17 />
      <AtomsEmptyColumn18 />
    </div>
  );
}

function PanelsBoardFooter1() {
  return (
    <div className="content-stretch flex h-[35px] items-start relative shrink-0 w-full" data-name="Panels / 🔥 Board Footer">
      <BoardFooter1 />
    </div>
  );
}

function BoardContent1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Board content">
      <InnerBoardRowIndications1 />
      <AtomsNameColumn1 />
      <PanelsBoardFooter1 />
    </div>
  );
}

function PanelsInnerBoardVersionTwo1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start pb-[40px] pt-0 px-0 relative shrink-0 w-[1286px]" data-name="Panels / Inner Board Version Two">
      <GroupTitle1 />
      <BoardContent1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-x-clip overflow-y-auto pl-[16px] pr-0 py-0 relative shrink-0" data-name="Content">
      <PanelsInnerBoardVersionTwo1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Content />
      <Content1 />
    </div>
  );
}

function PageContent() {
  return (
    <div className="basis-0 bg-white grow h-full min-h-px min-w-px relative rounded-tl-[16px] shrink-0 z-[1]" data-name="Page content">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start pb-[32px] pl-[20px] pr-0 pt-[16px] relative size-full">
          <BoardHeaderInternal />
          <Container />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Content">
      <div className="size-full">
        <div className="content-stretch flex isolate items-start pl-[12px] pr-0 py-0 relative size-full">
          <LeftPane />
          <PageContent />
        </div>
      </div>
    </div>
  );
}

export default function Flow() {
  return (
    <div className="bg-[#edf1fc] content-stretch flex flex-col items-start relative size-full" data-name="Flow">
      <TopBarInternal />
      <Content2 />
    </div>
  );
}