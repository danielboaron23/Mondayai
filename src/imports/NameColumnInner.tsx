function AtomsHorizontalDivider() {
  return (
    <div className="absolute bottom-0 h-px left-0 right-0" data-name="Atoms / Horizontal Divider">
      <div className="absolute bg-[#d0d4e4] inset-0" data-name="Horizontal Divider" />
    </div>
  );
}

function SubItemsButton() {
  return <div className="absolute content-stretch flex items-start left-0 px-[4px] py-[7px] top-0" data-name="Sub Items Button" />;
}

function AddItemInput() {
  return (
    <div className="absolute content-stretch flex items-center left-0 pb-[3px] pl-[16px] pr-[10px] pt-[4px] right-px top-[calc(50%-0.5px)] translate-y-[-50%]" data-name="Add Item Input">
      <p className="font-['Figtree:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#676879] text-[14px] text-nowrap">+ Add item</p>
    </div>
  );
}

export default function NameColumnInner() {
  return (
    <div className="relative size-full" data-name="Name Column Inner">
      <AtomsHorizontalDivider />
      <SubItemsButton />
      <AddItemInput />
    </div>
  );
}