import React, { useState } from 'react';
import { 
  Home, 
  CheckSquare, 
  ChevronRight, 
  ChevronDown, 
  MoreHorizontal, 
  Search, 
  Plus,
} from '../Icons';
import { clsx } from 'clsx';

const svgPaths = {
  p10af4a00: "M10.5147 13.0416C10.5147 12.6274 10.8505 12.2916 11.2647 12.2916H14.8135C15.2277 12.2916 15.5635 12.6274 15.5635 13.0416C15.5635 13.4558 15.2277 13.7916 14.8135 13.7916H11.2647C10.8505 13.7916 10.5147 13.4558 10.5147 13.0416Z",
  p14e70900: "M7.25 15.4287C7.25 15.0145 7.58579 14.6787 8 14.6787H16.3429C16.7571 14.6787 17.0929 15.0145 17.0929 15.4287C17.0929 15.8429 16.7571 16.1787 16.3429 16.1787H8C7.58579 16.1787 7.25 15.8429 7.25 15.4287Z",
  p1842bf00: "M10 6.95132C10.4142 6.95132 10.75 7.28711 10.75 7.70132V10.9324C10.75 11.3466 10.4142 11.6824 10 11.6824C9.58579 11.6824 9.25 11.3466 9.25 10.9324V7.70132C9.25 7.28711 9.58579 6.95132 10 6.95132Z",
  p189ab000: "M7.40684 9.89578C7.68028 10.1692 8.12434 10.1692 8.39778 9.89578L11.1978 7.09578C11.399 6.89453 11.4581 6.59484 11.3487 6.33234C11.2393 6.06984 10.9856 5.89922 10.7012 5.89922L5.10122 5.90141C4.81903 5.90141 4.56309 6.07203 4.45372 6.33453C4.34434 6.59703 4.40559 6.89672 4.60466 7.09797L7.40466 9.89797L7.40684 9.89578Z",
  p1c7cd00: "M9.2303 13.3937C9.43444 13.1896 9.7113 13.0749 9.99999 13.0749C10.2887 13.0749 10.5655 13.1896 10.7697 13.3937C10.9738 13.5978 11.0885 13.8747 11.0885 14.1634C11.0885 14.4521 10.9738 14.7289 10.7697 14.9331C10.5655 15.1372 10.2887 15.2519 9.99999 15.2519C9.7113 15.2519 9.43444 15.1372 9.2303 14.9331C9.02617 14.7289 8.91149 14.4521 8.91149 14.1634C8.91149 13.8747 9.02617 13.5978 9.2303 13.3937ZM9.99999 14.1749C10.003 14.1749 10.006 14.1737 10.0081 14.1715C10.0103 14.1694 10.0115 14.1664 10.0115 14.1634C10.0115 14.1603 10.0103 14.1574 10.0081 14.1553C10.006 14.1531 10.003 14.1519 9.99999 14.1519C9.99694 14.1519 9.99402 14.1531 9.99186 14.1553C9.98971 14.1574 9.9885 14.1603 9.9885 14.1634C9.9885 14.1664 9.98971 14.1694 9.99186 14.1715C9.99402 14.1737 9.99694 14.1749 9.99999 14.1749Z",
  p1dabbb00: "M2.25 5C2.25 4.58579 2.58579 4.25 3 4.25H10.8214C11.2356 4.25 11.5714 4.58579 11.5714 5C11.5714 5.41421 11.2356 5.75 10.8214 5.75H3C2.58579 5.75 2.25 5.41421 2.25 5Z",
  p1f12ea00: "M2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V15C18 16.1046 17.1046 17 16 17H4C2.89543 17 2 16.1046 2 15V5ZM7.5 4.5H16C16.2761 4.5 16.5 4.72386 16.5 5V15C16.5 15.2761 16.2761 15.5 16 15.5H7.5L7.5 4.5ZM6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5Z",
  p22076b80: "M9.32809 5.76802C9.62098 6.06092 9.62098 6.53579 9.32809 6.82868L7.03571 9.12106C6.74281 9.41396 6.26794 9.41396 5.97505 9.12106L5.05809 8.20411C4.7652 7.91122 4.7652 7.43634 5.05809 7.14345C5.35099 6.85056 5.82586 6.85056 6.11875 7.14345L6.50538 7.53007L8.26743 5.76802C8.56032 5.47513 9.03519 5.47513 9.32809 5.76802Z",
  p2c17800: "M2 5C2 3.89543 2.89543 3 4 3H16C17.1046 3 18 3.89543 18 5V7H16.5V5C16.5 4.72386 16.2761 4.5 16 4.5H7.5L7.5 15.5H10V17H4C2.89543 17 2 16.1046 2 15V5ZM6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5Z",
  p2c961f00: "M5.24968 10.2143C5.24968 9.80008 5.58547 9.46429 5.99968 9.46429H13.8211C14.2353 9.46429 14.5711 9.80008 14.5711 10.2143C14.5711 10.6285 14.2353 10.9643 13.8211 10.9643H5.99968C5.58547 10.9643 5.24968 10.6285 5.24968 10.2143Z",
  p324a2500: "M10.5153 7.36258C10.5153 6.94837 10.8511 6.61258 11.2653 6.61258H14.8141C15.2283 6.61258 15.5641 6.94837 15.5641 7.36258C15.5641 7.77679 15.2283 8.11258 14.8141 8.11258H11.2653C10.8511 8.11258 10.5153 7.77679 10.5153 7.36258Z",
  p34b3ba00: "M2 3.88821C2 2.84538 2.84538 2 3.88821 2H16.1618C17.2046 2 18.05 2.84538 18.05 3.88821V16.1618C18.05 17.2046 17.2046 18.05 16.1618 18.05H3.88821C2.84538 18.05 2 17.2046 2 16.1618V3.88821ZM3.88821 3.5C3.67381 3.5 3.5 3.67381 3.5 3.88821V16.1618C3.5 16.3762 3.67381 16.55 3.88821 16.55H16.1618C16.3762 16.55 16.55 16.3762 16.55 16.1618V3.88821C16.55 3.67381 16.3762 3.5 16.1618 3.5H3.88821Z",
  p390b83f0: "M11.918 8.36609C11.7265 8.25583 11.4917 8.41298 11.5206 8.63202L11.9013 11.5126C11.9128 11.5996 11.8807 11.6867 11.8156 11.7455L9.65841 13.6921C9.49437 13.8401 9.57128 14.112 9.78855 14.1521L12.6458 14.6803C12.7321 14.6962 12.805 14.7536 12.8408 14.8337L14.0255 17.4869C14.1156 17.6886 14.3979 17.6995 14.5032 17.5053L15.5846 15.5114L18.3925 19.39C18.6354 19.7255 19.1043 19.8006 19.4398 19.5577C19.7753 19.3148 19.8504 18.8459 19.6075 18.5104L16.8712 14.7306L18.9841 14.5062C19.2038 14.4828 19.3013 14.2177 19.1492 14.0575L17.1481 11.9508C17.0876 11.8872 17.0624 11.7979 17.0805 11.712L17.6815 8.86922C17.7272 8.65305 17.5052 8.47832 17.3058 8.57353L14.6838 9.8257C14.6047 9.86351 14.5119 9.85994 14.4359 9.81616L11.918 8.36609Z",
  p3ed71e00: "M16.1557 7.61667C16.1557 7.63699 16.1549 7.65713 16.1533 7.67705V16.3767C16.1533 16.8337 15.9718 17.2721 15.6486 17.5952C15.3254 17.9184 14.8871 18.1 14.43 18.1H4.72333C4.26627 18.1 3.82794 17.9184 3.50475 17.5952C3.18157 17.2721 3 16.8337 3 16.3767V3.72333C3 3.26628 3.18157 2.82794 3.50475 2.50475C3.82794 2.18157 4.26628 2 4.72333 2H10.6204C11.0771 2.0001 11.5153 2.1815 11.8384 2.50436L15.6488 6.31481C15.9717 6.63787 16.1532 7.07606 16.1533 7.5328V7.55628C16.1549 7.5762 16.1557 7.59634 16.1557 7.61667ZM4.72333 3.5C4.6641 3.5 4.6073 3.52353 4.56541 3.56541C4.52353 3.6073 4.5 3.6641 4.5 3.72333V16.3767C4.5 16.4359 4.52353 16.4927 4.56541 16.5346C4.6073 16.5765 4.6641 16.6 4.72333 16.6H14.43C14.4892 16.6 14.546 16.5765 14.5879 16.5346C14.6298 16.4927 14.6533 16.4359 14.6533 16.3767V8.36667H11.5124C11.0553 8.36667 10.617 8.1851 10.2938 7.86191C9.97063 7.53873 9.78906 7.10039 9.78906 6.64333V3.55469L4.72333 3.5ZM14.0793 6.86667L11.2891 4.07639V6.64333C11.2891 6.70256 11.3126 6.75937 11.3545 6.80125C11.3964 6.84314 11.4532 6.86667 11.5124 6.86667H14.0793Z",
  p3ff5b100: "M6.41895 9.8999C6.00473 9.8999 5.66895 10.2357 5.66895 10.6499C5.66895 11.0641 6.00473 11.3999 6.41895 11.3999H12.4409C12.8551 11.3999 13.1909 11.0641 13.1909 10.6499C13.1909 10.2357 12.8551 9.8999 12.4409 9.8999H6.41895Z",
  p735ab80: "M6.41914 13.0999C6.00492 13.0999 5.66914 13.4357 5.66914 13.8499C5.66914 14.2641 6.00492 14.5999 6.41914 14.5999H10.2824C10.6966 14.5999 11.0324 14.2641 11.0324 13.8499C11.0324 13.4357 10.6966 13.0999 10.2824 13.0999H6.41914Z",
  pbe7d180: "M10 2.10593C9.661 2.10593 9.32868 2.20024 9.04023 2.37833C8.75177 2.55642 8.51855 2.81125 8.36665 3.11431L2.44277 14.9621C2.30361 15.2406 2.23784 15.5501 2.25185 15.8611C2.26586 16.1721 2.3591 16.4744 2.52272 16.7392C2.68635 17.004 2.91493 17.2227 3.18678 17.3744C3.45863 17.5261 3.76473 17.6058 4.07604 17.6059H15.9236C16.2349 17.6058 16.5414 17.5261 16.8132 17.3744C17.0851 17.2227 17.3137 17.004 17.4773 16.7392C17.6409 16.4744 17.7341 16.1721 17.7481 15.8611C17.7622 15.5501 17.6965 15.2407 17.5573 14.9622L11.6337 3.11495C11.4818 2.81189 11.2482 2.55642 10.9598 2.37833C10.6713 2.20024 10.339 2.10593 10 2.10593ZM9.82821 3.65468C9.87984 3.62281 9.93932 3.60593 10 3.60593C10.0607 3.60593 10.1202 3.62281 10.1718 3.65468C10.2233 3.68651 10.265 3.73204 10.2922 3.78619L16.2155 15.6327C16.2404 15.6825 16.2522 15.738 16.2497 15.7936C16.2472 15.8493 16.2305 15.9034 16.2012 15.9508C16.1719 15.9982 16.131 16.0373 16.0823 16.0645C16.0337 16.0916 15.9789 16.1059 15.9232 16.1059H4.07684C4.02112 16.1059 3.96633 16.0916 3.91767 16.0645C3.86901 16.0373 3.8281 15.9982 3.79881 15.9508C3.76953 15.9034 3.75284 15.8493 3.75033 15.7936C3.74783 15.738 3.75956 15.6827 3.78441 15.6329L9.70765 3.78641C9.73484 3.73228 9.77666 3.68651 9.82821 3.65468Z",
  pf01580: "M9.32758 11.0915C9.62047 11.3844 9.62047 11.8593 9.32758 12.1522L7.0352 14.4446C6.74231 14.7375 6.26743 14.7375 5.97454 14.4446L5.05759 13.5276C4.76469 13.2347 4.76469 12.7599 5.05759 12.467C5.35048 12.1741 5.82535 12.1741 6.11825 12.467L6.50487 12.8536L8.26692 11.0915C8.55981 10.7986 9.03469 10.7986 9.32758 11.0915Z",
  pf6bfc00: "M13.499 2.68583C13.499 2.30712 13.1921 2.00007 12.8134 2C12.4347 1.99993 12.1276 2.30688 12.1275 2.68559C12.1275 3.17163 12.0182 3.64398 11.8167 4.05354C11.6666 4.35855 11.4716 4.61643 11.2482 4.81815C10.8401 4.7131 10.4214 4.65937 9.99943 4.65937C9.57786 4.65937 9.15963 4.71299 8.75199 4.81782C8.52868 4.61615 8.3338 4.35838 8.18381 4.05354C7.98229 3.64398 7.87307 3.17163 7.87299 2.68559C7.87292 2.30688 7.56586 1.99993 7.18715 2C6.80845 2.00007 6.5015 2.30712 6.50156 2.68583C6.50168 3.37352 6.65555 4.05391 6.95327 4.659C7.07958 4.91571 7.2306 5.15634 7.40382 5.37605C6.84129 5.7056 6.33232 6.13856 5.89538 6.65494C5.76838 6.80503 5.64799 6.96153 5.53447 7.12385C5.2604 6.8757 4.96053 6.66223 4.6394 6.48933C4.03158 6.16208 3.36484 5.98965 2.68552 5.98984C2.30681 5.98995 1.99989 6.29704 2 6.67575C2.00011 7.05446 2.3072 7.36137 2.6859 7.36127C3.13038 7.36114 3.5744 7.47349 3.98925 7.69686C4.2988 7.86352 4.5884 8.09013 4.8453 8.37065C4.78365 8.51543 4.72652 8.66282 4.67405 8.81254C4.46817 9.39995 4.33611 10.0167 4.28039 10.6438H2.68571C2.307 10.6438 2 10.9508 2 11.3295C2 11.7082 2.307 12.0152 2.68571 12.0152H4.28038C4.33611 12.6423 4.46817 13.259 4.67405 13.8464C4.72657 13.9963 4.78375 14.1438 4.84545 14.2887C4.58852 14.5693 4.29886 14.7959 3.98925 14.9626C3.5744 15.186 3.13038 15.2984 2.6859 15.2982C2.3072 15.2981 2.00011 15.605 2 15.9837C1.99989 16.3625 2.30681 16.6695 2.68552 16.6697C3.36484 16.6698 4.03158 16.4974 4.6394 16.1702C4.96062 15.9972 5.26057 15.7837 5.5347 15.5354C5.64816 15.6976 5.76847 15.854 5.89538 16.004C6.42283 16.6274 7.05524 17.1291 7.76014 17.4742C8.46558 17.8195 9.2269 17.9996 9.99943 17.9996C10.772 17.9996 11.5333 17.8195 12.2387 17.4742C12.9436 17.1291 13.576 16.6274 14.1035 16.004C14.2305 15.8539 14.3509 15.6974 14.4644 15.5351C14.7386 15.7835 15.0387 15.9971 15.3601 16.1702C15.9679 16.4974 16.6347 16.6698 17.314 16.6697C17.6927 16.6695 17.9996 16.3625 17.9995 15.9837C17.9994 15.605 17.6923 15.2981 17.3136 15.2982C16.8691 15.2984 16.4251 15.186 16.0102 14.9626C15.7005 14.7958 15.4106 14.569 15.1536 14.2882C15.2152 14.1435 15.2723 13.9961 15.3248 13.8464C15.5307 13.259 15.6627 12.6423 15.7185 12.0152H17.3144C17.6931 12.0152 18.0001 11.7082 18.0001 11.3295C18.0001 10.9508 17.6931 10.6438 17.3144 10.6438H15.7185C15.6961 10.3926 15.6616 10.1431 15.6149 9.89652C15.6122 9.87807 15.6086 9.85987 15.6044 9.84194C15.5355 9.49163 15.4421 9.14732 15.3248 8.81254C15.2724 8.66299 15.2153 8.51575 15.1538 8.37113C15.4108 8.09039 15.7005 7.86361 16.0102 7.69686C16.4251 7.47349 16.8691 7.36114 17.3136 7.36127C17.6923 7.36137 17.9994 7.05446 17.9995 6.67575C17.9996 6.29704 17.6927 5.98995 17.314 5.98984C16.6346 5.98965 15.9679 6.16208 15.3601 6.48933C15.0388 6.66232 14.7388 6.8759 14.4646 7.1242C14.351 6.96176 14.2306 6.80514 14.1035 6.65494C13.6668 6.13891 13.1583 5.70619 12.5962 5.37672C12.7696 5.15683 12.9208 4.91597 13.0472 4.659C13.345 4.05391 13.4988 3.37352 13.499 2.68583ZM14.0471 9.31406C14.0417 9.29806 14.0362 9.2821 14.0306 9.26616C13.9528 9.04438 13.863 8.83026 13.7621 8.62503C13.7444 8.59557 13.7291 8.56497 13.7161 8.53351C13.5296 8.17125 13.308 7.83801 13.0566 7.5408C12.6436 7.05275 12.1596 6.67292 11.6357 6.4165C11.1125 6.16034 10.5569 6.0308 9.99943 6.0308C9.442 6.0308 8.88639 6.16034 8.36311 6.4165C7.83929 6.67292 7.35527 7.05275 6.9423 7.5408C6.69219 7.83639 6.47163 8.16762 6.28583 8.52759C6.27157 8.5631 6.25428 8.59754 6.23404 8.63051C6.1342 8.83407 6.04532 9.04635 5.96828 9.26616C5.96269 9.2821 5.95717 9.29806 5.95172 9.31406H14.0471ZM5.65401 10.6855C5.63324 10.89 5.62232 11.0963 5.62148 11.3034C5.6218 11.312 5.62196 11.3207 5.62196 11.3295C5.62196 11.3382 5.6218 11.3469 5.62148 11.3555C5.62434 12.057 5.7427 12.7492 5.96828 13.3928C6.04566 13.6136 6.135 13.8268 6.23538 14.0312C6.25458 14.0627 6.27108 14.0956 6.28482 14.1294C6.47083 14.4901 6.69174 14.822 6.9423 15.1181C7.35527 15.6062 7.83929 15.986 8.36311 16.2425C8.88639 16.4986 9.442 16.6282 9.99943 16.6282C10.5569 16.6282 11.1125 16.4986 11.6357 16.2425C12.1596 15.986 12.6436 15.6062 13.0566 15.1181C13.3085 14.8203 13.5306 14.4863 13.7172 14.1232C13.7296 14.0936 13.7441 14.0648 13.7606 14.037C13.8622 13.8308 13.9525 13.6157 14.0306 13.3928C14.259 12.7412 14.3774 12.0398 14.3774 11.3295C14.3774 11.1136 14.3665 10.8986 14.3448 10.6855H5.65401Z",
};

export const Sidebar = () => {
  const [favoritesOpen, setFavoritesOpen] = useState(false);
  const [workspacesOpen, setWorkspacesOpen] = useState(true);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <div className="w-[300px] h-full bg-[linear-gradient(180deg,#EDF1FC_0%,#f6f7fb_100%)] flex flex-col shrink-0 font-sans text-[#323338] mx-[5px] my-[0px] p-[0px] rounded-t-[8px] rounded-b-[0px]">
      
      {/* Top Navigation */}
      <div className="flex flex-col pt-2 px-2 gap-1">
        <SidebarItem icon={<Home size={16} />} label="Home" />
        <SidebarItem icon={<CheckSquare size={16} />} label="My work" />
      </div>

      <div className="h-4"></div>

      {/* Favorites */}
      <div className="px-4 py-1 flex items-center gap-1 cursor-pointer hover:bg-gray-200/50 rounded group" onClick={() => setFavoritesOpen(!favoritesOpen)}>
        <span className="text-[12px] font-semibold flex-1">Favorites</span>
        <ChevronRight size={12} className={clsx("transition-transform", favoritesOpen && "rotate-90")} />
      </div>
      
      {favoritesOpen && (
        <div className="px-2 pb-2">
           <span className="text-xs text-gray-400 pl-4">No favorites yet</span>
        </div>
      )}

      <div className="h-2"></div>

      {/* Workspaces */}
      <div className="px-4 py-1 flex items-center gap-1 group">
        <span className="text-[12px] font-semibold flex-1">Workspaces</span>
        <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <MoreHorizontal size={14} className="mr-1 cursor-pointer" />
            <Search size={14} className="cursor-pointer" />
        </div>
      </div>

      {/* Workspace Selector */}
      <div className="px-3 mt-1 mb-2">
        <div className="flex items-center gap-1">
            <div className="border border-[#c3c6d4] bg-white rounded flex items-center p-1 w-full h-[32px] cursor-pointer hover:bg-gray-50">
                <div className="w-5 h-5 bg-[#0073ea] rounded-[3px] flex items-center justify-center text-white text-[10px] font-bold mr-2">M</div>
                <span className="text-[14px] font-semibold truncate flex-1">Main workspace</span>
                <ChevronDown size={14} />
            </div>
            <button className="w-8 h-8 bg-[#0073ea] rounded hover:bg-[#0060b9] flex items-center justify-center text-white shrink-0">
                <Plus size={20} />
            </button>
        </div>
      </div>

      {/* Project List */}
      <div className="flex flex-col gap-0.5 px-2 overflow-y-auto flex-1 pb-4 scrollbar-thin">
        {/* Marketing campaign */}
        <SidebarItem 
            icon={
                <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g>
                            <path clipRule="evenodd" d={svgPaths.p2c17800} fill="currentColor" fillRule="evenodd" />
                            <path d={svgPaths.p390b83f0} fill="currentColor" />
                        </g>
                    </svg>
                </div>
            } 
            label="Marketing campaign" 
        />
        {/* Elevate event planning (Active) */}
        <SidebarItem 
            icon={
                <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d={svgPaths.p1f12ea00} fill="currentColor" fillRule="evenodd" />
                    </svg>
                </div>
            } 
            label="Elevate event planning" 
            active 
        />
        {/* Project requests & Approvals */}
        <SidebarItem 
            icon={
                <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g>
                            <path clipRule="evenodd" d={svgPaths.p34b3ba00} fill="currentColor" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p22076b80} fill="currentColor" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.pf01580} fill="currentColor" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p324a2500} fill="currentColor" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.p10af4a00} fill="currentColor" fillRule="evenodd" />
                        </g>
                    </svg>
                </div>
            } 
            label="Project requests & Approvals" 
        />
        {/* Risk register */}
        <SidebarItem 
            icon={
                <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g>
                            <path d={svgPaths.p1842bf00} fill="currentColor" />
                            <path clipRule="evenodd" d={svgPaths.p1c7cd00} fill="currentColor" fillRule="evenodd" />
                            <path clipRule="evenodd" d={svgPaths.pbe7d180} fill="currentColor" fillRule="evenodd" />
                        </g>
                    </svg>
                </div>
            } 
            label="Risk register" 
        />
        {/* Issues log */}
        <SidebarItem 
            icon={
                <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <path clipRule="evenodd" d={svgPaths.pf6bfc00} fill="currentColor" fillRule="evenodd" />
                    </svg>
                </div>
            } 
            label="Issues log" 
        />
        {/* Learning center */}
        <SidebarItem 
            icon={
                <div className="relative shrink-0 size-[20px]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                        <g>
                            <path d={svgPaths.p3ff5b100} fill="currentColor" />
                            <path d={svgPaths.p735ab80} fill="currentColor" />
                            <path clipRule="evenodd" d={svgPaths.p3ed71e00} fill="currentColor" fillRule="evenodd" />
                        </g>
                    </svg>
                </div>
            } 
            label="Learning center" 
        />
        
        {/* Projects Folder */}
        <div 
            className="flex items-center gap-2 px-2 py-1.5 rounded cursor-pointer hover:bg-[#ebecf0] mt-1"
            onClick={() => setProjectsOpen(!projectsOpen)}
        >
            <div className={clsx("transition-transform text-[#676879] relative shrink-0 size-[20px]", !projectsOpen && "-rotate-90")}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                    <path d={svgPaths.p189ab000} fill="currentColor" />
                </svg>
            </div>
            <span className="text-[14px] text-[#676879] truncate font-normal">Projects</span>
        </div>
        
        {projectsOpen && (
            <div className="pl-6 flex flex-col gap-0.5">
                <SidebarItem 
                    icon={
                        <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                <g>
                                    <path d={svgPaths.p1dabbb00} fill="currentColor" />
                                    <path d={svgPaths.p2c961f00} fill="currentColor" />
                                    <path d={svgPaths.p14e70900} fill="currentColor" />
                                </g>
                            </svg>
                        </div>
                    } 
                    label="Project 1" 
                />
                <SidebarItem 
                    icon={
                        <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                <g>
                                    <path d={svgPaths.p1dabbb00} fill="currentColor" />
                                    <path d={svgPaths.p2c961f00} fill="currentColor" />
                                    <path d={svgPaths.p14e70900} fill="currentColor" />
                                </g>
                            </svg>
                        </div>
                    } 
                    label="Project 2" 
                />
                <SidebarItem 
                    icon={
                        <div className="relative shrink-0 size-[20px]">
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                                <g>
                                    <path d={svgPaths.p1dabbb00} fill="currentColor" />
                                    <path d={svgPaths.p2c961f00} fill="currentColor" />
                                    <path d={svgPaths.p14e70900} fill="currentColor" />
                                </g>
                            </svg>
                        </div>
                    } 
                    label="Project 3" 
                />
            </div>
        )}
      </div>
      
      {/* Bottom Gradient Overlay (Visual flair from Flow.tsx) */}
      <div className="h-12 bg-gradient-to-t from-[#f6f7fb] to-transparent shrink-0 pointer-events-none -mt-12"></div>
    </div>
  );
};

interface SidebarItemProps {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
}

function SidebarItem({ icon, label, active }: SidebarItemProps) {
    return (
        <div className={clsx(
            "flex items-center gap-2 px-2 py-1.5 rounded-[4px] cursor-pointer text-[14px] transition-colors relative",
            active ? "bg-[#cce4ff] text-[#0073ea]" : "text-[#323338] hover:bg-[#ebecf0]"
        )}>
            {active && <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#0073ea] rounded-r-md"></div>}
            <div className={clsx(active ? "text-[#0073ea]" : "text-[#676879]")}>
                {icon}
            </div>
            <span className={clsx("truncate", active ? "font-medium" : "font-normal")}>{label}</span>
        </div>
    );
}
