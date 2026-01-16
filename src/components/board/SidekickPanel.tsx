import React, { useState, useEffect, useRef } from "react";
import { X, ChevronDown, Plus, ArrowUp } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { clsx } from "clsx";
import { motion, AnimatePresence } from "motion/react";

// Assets from Figma Import
import imgGradient from "figma:asset/90f8cf54832502c4e962befcc7c9e121547fed3b.png";
import imgStar from "figma:asset/d19fbde6c069c5c82573e290ed8844e5504d6365.png";
import imgAvatar from "figma:asset/f8631c20e9a10e0f2edcf3d87371628aa5cf9678.png";

// SVG Paths
const svgPaths = {
  p1174de80: "M5.27573 4.21887C4.98388 3.92704 4.51072 3.92705 4.21888 4.21888C3.92704 4.51073 3.92704 4.9839 4.21889 5.27574L8.94357 10.0003L4.21952 14.7243C3.92768 15.0161 3.92767 15.4893 4.21951 15.7811C4.51134 16.073 4.98452 16.073 5.27636 15.7811L10.0005 11.0571L14.7245 15.7811C15.0163 16.073 15.4895 16.073 15.7813 15.7811C16.0732 15.4893 16.0732 15.0161 15.7813 14.7243L11.0573 10.0003L15.7819 5.27574C16.0738 4.9839 16.0738 4.51073 15.7819 4.21888C15.4901 3.92705 15.017 3.92704 14.7251 4.21887L10.0005 8.94348L5.27573 4.21887Z",
  p14642500: "M2.62738 9.43898C2.86901 9.19735 3.19674 9.0616 3.53846 9.0616C3.88018 9.0616 4.20791 9.19735 4.44954 9.43898C4.69117 9.68062 4.82692 10.0083 4.82692 10.3501C4.82692 10.6918 4.69117 11.0195 4.44954 11.2611C4.20791 11.5028 3.88018 11.6385 3.53846 11.6385C3.19674 11.6385 2.86901 11.5028 2.62738 11.2611C2.38575 11.0195 2.25 10.6918 2.25 10.3501C2.25 10.0083 2.38575 9.68062 2.62738 9.43898Z",
  p1476ac80: "M1.4 3.5C1.4 2.7268 2.0268 2.1 2.8 2.1H11.2C11.9732 2.1 12.6 2.7268 12.6 3.5V10.5C12.6 11.2732 11.9732 11.9 11.2 11.9H2.8C2.0268 11.9 1.4 11.2732 1.4 10.5V3.5ZM5.25 3.15H11.2C11.3933 3.15 11.55 3.3067 11.55 3.5V10.5C11.55 10.6933 11.3933 10.85 11.2 10.85H5.25L5.25 3.15ZM4.2 3.15H2.8C2.6067 3.15 2.45 3.3067 2.45 3.5V10.5C2.45 10.6933 2.6067 10.85 2.8 10.85H4.2L4.2 3.15Z",
  p183c2100: "M2.68881 7.5C2.30839 7.5 2 7.83579 2 8.25C2 8.66421 2.30839 9 2.68881 9H11.9647C12.3451 9 12.6535 8.66421 12.6535 8.25C12.6535 7.83579 12.3451 7.5 11.9647 7.5H2.68881Z",
  p19e0a000: "M2 11.25C2 10.8358 2.30839 10.5 2.68881 10.5H10C10.3804 10.5 10.6888 10.8358 10.6888 11.25C10.6888 11.6642 10.3804 12 10 12H2.68881C2.30839 12 2 11.6642 2 11.25Z",
  p1a3c500: "M10.0708 17.8919C9.65654 17.8919 9.32076 17.5561 9.32076 17.1419L9.32076 4.81042L4.69244 9.43873C4.39955 9.73163 3.92467 9.73163 3.63178 9.43873C3.33889 9.14584 3.33889 8.67097 3.63178 8.37807L9.54043 2.46943C9.83332 2.17653 10.3082 2.17653 10.6011 2.46943L16.5097 8.37807C16.8026 8.67097 16.8026 9.14584 16.5097 9.43873C16.2168 9.73163 15.742 9.73163 15.4491 9.43873L10.8208 4.81042L10.8208 17.1419C10.8208 17.5561 10.485 17.8919 10.0708 17.8919Z",
  p1ac09f00: "M1.51458 15.9326V6.26656C1.51464 5.78484 1.70618 5.32301 2.04681 4.98238C2.38744 4.64175 2.84927 4.45021 3.33099 4.45015H8.664C9.07821 4.45015 9.414 4.78594 9.414 5.20015C9.414 5.61437 9.07821 5.95015 8.664 5.95015H3.33099C3.24709 5.95021 3.16668 5.9836 3.10735 6.04293C3.04803 6.10226 3.01464 6.18266 3.01458 6.26656V15.9326C3.01458 16.0165 3.04798 16.0978 3.10735 16.1572C3.16666 16.2164 3.24718 16.2499 3.33099 16.25H13.997C14.081 16.25 14.1622 16.2166 14.2216 16.1572C14.281 16.0978 14.3144 16.0165 14.3144 15.9326V11.5996C14.3145 11.1855 14.6503 10.8496 15.0644 10.8496C15.4783 10.8498 15.8142 11.1856 15.8144 11.5996V15.9326C15.8144 16.4144 15.6228 16.877 15.2822 17.2177C14.9415 17.5584 14.4788 17.75 13.997 17.75H3.33099C2.84936 17.7499 2.38742 17.5582 2.04681 17.2177C1.70613 16.8771 1.51458 16.4144 1.51458 15.9326Z",
  p20452a80: "M7.30859 14.78C6.89438 14.78 6.55859 15.1158 6.55859 15.53C6.55859 15.9442 6.89438 16.28 7.30859 16.28H17.0009C17.4151 16.28 17.7509 15.9442 17.7509 15.53C17.7509 15.1158 17.4151 14.78 17.0009 14.78H7.30859Z",
  p229e4800: "M18.1662 4.54769L16.3462 3.97692C16.1954 3.92308 16.0662 3.80462 16.0231 3.65385L15.4523 1.83385C15.3877 1.64 15.2046 1.5 15 1.5C14.7954 1.5 14.6123 1.62923 14.5477 1.83385L13.9769 3.65385C13.9338 3.80462 13.8046 3.93385 13.6538 3.97692L11.8338 4.54769C11.64 4.61231 11.5 4.79538 11.5 5C11.5 5.20462 11.6292 5.38769 11.8338 5.45231L13.6538 6.02308C13.8046 6.07692 13.9338 6.19538 13.9769 6.34615L14.5477 8.16615C14.6123 8.36 14.7954 8.5 15 8.5C15.2046 8.5 15.3877 8.37077 15.4523 8.16615L16.0231 6.34615C16.0662 6.19538 16.1954 6.06615 16.3462 6.02308L18.1662 5.45231C18.36 5.38769 18.5 5.20462 18.5 5C18.5 4.79538 18.3708 4.61231 18.1662 4.54769Z",
  p23a2cf00: "M7.30859 9.60018C6.89438 9.60018 6.55859 9.93596 6.55859 10.3502C6.55859 10.7644 6.89438 11.1002 7.30859 11.1002H17.0009C17.4151 11.1002 17.7509 10.7644 17.7509 10.3502C17.7509 9.93596 17.4151 9.60018 17.0009 9.60018H7.30859Z",
  p2d8dd980: "M2.00001 5.25C2.00001 4.83579 2.3084 4.5 2.68881 4.5H8.90494C9.28536 4.5 9.59375 4.83579 9.59375 5.25C9.59375 5.66421 9.28536 6 8.90494 6H2.68881C2.3084 6 2.00001 5.66421 2.00001 5.25Z",
  p2dd8dcf0: "M10 2.25C10.4142 2.25 10.75 2.58579 10.75 3V9.25H17C17.4142 9.25 17.75 9.58579 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75H10.75V17C10.75 17.4142 10.4142 17.75 10 17.75C9.58579 17.75 9.25 17.4142 9.25 17V10.75H3C2.58579 10.75 2.25 10.4142 2.25 10C2.25 9.58579 2.58579 9.25 3 9.25H9.25V3C9.25 2.58579 9.58579 2.25 10 2.25Z",
  p2e517100: "M6.24865 7.82946C6.1222 7.92948 5.99181 8.01111 5.87315 8.04906V11.1149C5.87315 11.5437 6.01033 11.9304 6.24865 12.218C6.51127 12.5349 6.89672 12.7315 7.35676 12.7315H11.5598C11.7251 12.7315 11.8912 12.665 12.0078 12.5485C12.1069 12.4487 12.1565 12.299 12.1565 12.1668C12.1565 12.0485 12.1234 11.932 12.0564 11.8498C11.9573 11.7 11.9408 11.5327 12.0078 11.3654C12.0739 11.2 12.2226 11.0992 12.3878 11.065C12.653 11.016 12.8513 10.7822 12.8513 10.516C12.8513 10.3995 12.8192 10.2822 12.7347 10.1823C12.6356 10.0659 12.6035 9.91613 12.6356 9.7664C12.6687 9.61574 12.7687 9.49835 12.9009 9.43273C13.0991 9.3329 13.2157 9.14897 13.1983 8.93269C13.1983 8.69884 13.067 8.49919 12.8513 8.41601C12.6687 8.34853 12.553 8.1988 12.5365 8.01579C12.52 7.83278 12.6035 7.64977 12.7522 7.54902C12.9174 7.43256 13.0165 7.23199 13 7.03234C12.9679 6.76522 12.6852 6.53322 12.4043 6.53322H10.1196C9.92229 6.53322 9.72311 6.43247 9.59093 6.28274C9.45875 6.11544 9.39267 5.91579 9.42571 5.71615L9.57441 4.54969C9.60837 4.33248 9.59093 4.14947 9.55789 3.99973C9.4883 3.70506 9.33943 3.44579 9.13596 3.24438C9.12299 3.23154 9.10981 3.21894 9.09641 3.20659C8.96346 3.084 8.80934 2.98509 8.64026 2.91554C8.45871 2.84085 8.25992 2.8 8.05161 2.8C8.01857 2.8 7.98552 2.81664 7.969 2.83327C7.95248 2.84991 7.93596 2.88226 7.93596 2.91554V4.28257C7.93596 5.03309 7.72025 5.76606 7.32372 6.3992L6.74452 7.33273C6.62562 7.48117 6.44173 7.67675 6.24865 7.82946ZM5.83795 6.51777C5.54994 6.20185 5.13506 6.0036 4.67387 6.0036H3.17477C2.30505 6.0036 1.6 6.70865 1.6 7.57838V12.8252C1.6 13.6949 2.30505 14.4 3.17477 14.4H4.67387C5.26352 14.4 5.77748 14.0759 6.04735 13.5962C6.41981 13.8079 6.85972 13.9315 7.35676 13.9315H11.5598C12.0319 13.9315 12.5065 13.7465 12.8559 13.3975L12.8592 13.3941C13.2212 13.0296 13.3565 12.5547 13.3565 12.1668C13.3565 12.0906 13.3516 12.009 13.3401 11.924C13.7708 11.6032 14.0513 11.0918 14.0513 10.516C14.0513 10.3762 14.0349 10.2251 13.9948 10.071C14.2602 9.76118 14.4227 9.35201 14.3976 8.88438C14.3874 8.50356 14.2566 8.1381 14.0252 7.84298C14.158 7.5686 14.2227 7.25678 14.1959 6.93337L14.1941 6.91117L14.1914 6.88905C14.131 6.38624 13.8528 6.0014 13.5631 5.76027C13.271 5.51717 12.8657 5.33322 12.4043 5.33322H10.6842L10.7629 4.71595C10.8197 4.33574 10.7884 4.00704 10.7297 3.74113L10.7278 3.73253L10.7258 3.72395C10.4358 2.49604 9.35057 1.6 8.05161 1.6C7.67673 1.6 7.34324 1.76042 7.11753 1.9877C6.8992 2.20755 6.73596 2.53627 6.73596 2.91554V4.28257C6.73596 4.80284 6.58633 5.31579 6.30671 5.76225L5.83795 6.51777ZM13.6485 9.40451C13.6493 9.40544 13.6501 9.40637 13.6509 9.4073L13.6485 9.40451ZM5.04865 7.57838C5.04865 7.3714 4.88086 7.2036 4.67387 7.2036H3.17477C2.96779 7.2036 2.8 7.3714 2.8 7.57838V12.8252C2.8 13.0322 2.96779 13.2 3.17477 13.2H4.67387C4.88086 13.2 5.04865 13.0322 5.04865 12.8252V7.57838Z",
  p299bdd00: "M8.07706 1.97705C7.11056 1.97705 6.32706 2.76055 6.32706 3.72705V4.88614H5.16797C4.20147 4.88614 3.41797 5.66964 3.41797 6.63614V16.2725C3.41797 17.239 4.20147 18.0225 5.16797 18.0225H11.8952C12.8617 18.0225 13.6452 17.239 13.6452 16.2725V15.1134H15.774C16.7405 15.1134 17.524 14.3299 17.524 13.3634V6.0815C17.524 5.5854 17.3135 5.11261 16.9447 4.78074L14.3287 2.42629C14.0073 2.13708 13.5903 1.97705 13.158 1.97705H8.07706ZM7.82706 3.72705C7.82706 3.58898 7.93899 3.47705 8.07706 3.47705H13.158C13.2197 3.47705 13.2793 3.49991 13.3252 3.54123L15.9413 5.89568C15.9939 5.94309 16.024 6.01063 16.024 6.0815V13.3634C16.024 13.5015 15.9121 13.6134 15.774 13.6134H8.07706C7.93899 13.6134 7.82706 13.5015 7.82706 13.3634V3.72705ZM12.1452 15.1134H8.07706C7.11056 15.1134 6.32706 14.3299 6.32706 13.3634V6.38614H5.16797C5.0299 6.38614 4.91797 6.49807 4.91797 6.63614V16.2725C4.91797 16.4106 5.0299 16.5225 5.16797 16.5225H11.8952C12.0333 16.5225 12.1452 16.4106 12.1452 16.2725V15.1134Z",
  p31f8b800: "M14.9844 10.2636C15.3358 9.91213 15.9057 9.91213 16.2572 10.2636L17.7434 11.7498C18.0949 12.1014 18.0948 12.6714 17.7432 13.0228L13.5414 17.2219C13.4217 17.3415 13.2708 17.425 13.1059 17.4627L10.9021 17.9668C10.2089 18.1254 9.61425 17.4552 9.85423 16.7858L10.5641 14.8057C10.6089 14.6806 10.6809 14.567 10.7749 14.473L14.9844 10.2636ZM15.6208 11.6071L11.8441 15.3837L11.4803 16.3984L12.6535 16.13L16.3998 12.3861L15.6208 11.6071Z",
  p325ad400: "M7.30859 4.26147C6.89438 4.26147 6.55859 4.59726 6.55859 5.01147C6.55859 5.42569 6.89438 5.76147 7.30859 5.76147H9.4084C9.82261 5.76147 10.1584 5.42569 10.1584 5.01147C10.1584 4.59726 9.82261 4.26147 9.4084 4.26147H7.30859Z",
  p37b8c380: "M8 1.8C8.33137 1.8 8.6 2.06863 8.6 2.4V7.4H13.6C13.9314 7.4 14.2 7.66863 14.2 8C14.2 8.33137 13.9314 8.6 13.6 8.6H8.6V13.6C8.6 13.9314 8.33137 14.2 8 14.2C7.66863 14.2 7.4 13.9314 7.4 13.6V8.6H2.4C2.06863 8.6 1.8 8.33137 1.8 8C1.8 7.66863 2.06863 7.4 2.4 7.4H7.4V2.4C7.4 2.06863 7.66863 1.8 8 1.8Z",
  p37e2a500: "M10.5326 3.24492C11.0801 2.69347 11.9724 2.69347 12.5199 3.24492L13.9213 4.65605C14.463 5.2019 14.463 6.08287 13.9213 6.62871L7.25625 13.3406C7.17556 13.4219 7.07309 13.4787 6.96133 13.5037L3.71035 14.2313C3.51027 14.2759 3.30085 14.2158 3.15566 14.0711C3.01041 13.9263 2.94936 13.7167 2.99355 13.5164L3.71621 10.242C3.74075 10.1311 3.79638 10.0296 3.87637 9.94902L10.5326 3.24492ZM11.6684 4.09063C11.5901 4.01185 11.4624 4.01185 11.3842 4.09063L4.85098 10.6707L4.36855 12.8543L6.52871 12.3709L13.0697 5.78301C13.1467 5.70512 13.1467 5.57965 13.0697 5.50176L11.6684 4.09063ZM4.3998 1.2C4.56342 1.2 4.71036 1.31459 4.76211 1.47344L5.21816 2.9666C5.25271 3.09009 5.35644 3.18713 5.47695 3.23125L6.93301 3.69902C7.09668 3.75202 7.19961 3.90234 7.19961 4.07012C7.19959 4.23789 7.08807 4.38823 6.93301 4.44121L5.47695 4.90898C5.35641 4.94429 5.25268 5.05009 5.21816 5.17363L4.76211 6.6668C4.71033 6.83441 4.5634 6.94023 4.3998 6.94023C4.23636 6.94014 4.09029 6.82544 4.03848 6.6668L3.58145 5.17363C3.5469 5.05015 3.44317 4.9531 3.32266 4.90898L1.8666 4.44121C1.70313 4.38813 1.60002 4.23776 1.6 4.07012C1.6 3.90247 1.71172 3.75213 1.8666 3.69902L3.32266 3.23125C3.44314 3.19596 3.54687 3.09006 3.58145 2.9666L4.03848 1.47344C4.09025 1.30594 4.23632 1.20008 4.3998 1.2Z",
  p3b046840: "M15.7803 3.46967C15.4874 3.17678 15.0126 3.17678 14.7197 3.46967C14.4268 3.76256 14.4268 4.23744 14.7197 4.53033L15.4393 5.25H12C11.7639 5.25 11.5416 5.36115 11.4 5.55L9 8.75L6.6 5.55C6.45836 5.36115 6.23607 5.25 6 5.25H2.75C2.33579 5.25 2 5.58579 2 6C2 6.41421 2.33579 6.75 2.75 6.75H5.625L8.0625 10L5.625 13.25H2.75C2.33579 13.25 2 13.5858 2 14C2 14.4142 2.33579 14.75 2.75 14.75H6C6.23607 14.75 6.45836 14.6389 6.6 14.45L9 11.25L11.4 14.45C11.5416 14.6389 11.7639 14.75 12 14.75H15.4393L14.7197 15.4697C14.4268 15.7626 14.4268 16.2374 14.7197 16.5303C15.0126 16.8232 15.4874 16.8232 15.7803 16.5303L17.7803 14.5303C18.0732 14.2374 18.0732 13.7626 17.7803 13.4697L15.7803 11.4697C15.4874 11.1768 15.0126 11.1768 14.7197 11.4697C14.4268 11.7626 14.4268 12.2374 14.7197 12.5303L15.4393 13.25H12.375L9.9375 10L12.375 6.75H15.4393L14.7197 7.46967C14.4268 7.76256 14.4268 8.23744 14.7197 8.53033C15.0126 8.82322 15.4874 8.82322 15.7803 8.53033L17.7803 6.53033C18.0732 6.23744 18.0732 5.76256 17.7803 5.46967L15.7803 3.46967Z",
  p3c8b4b40: "M2.62738 14.6188C2.86902 14.3772 3.19674 14.2414 3.53846 14.2414C3.88018 14.2414 4.20791 14.3772 4.44954 14.6188C4.69118 14.8605 4.82692 15.1882 4.82692 15.5299C4.82692 15.8716 4.69118 16.1994 4.44954 16.441C4.20791 16.6826 3.88018 16.8184 3.53846 16.8184C3.19674 16.8184 2.86902 16.6826 2.62738 16.441C2.38575 16.1994 2.25 15.8716 2.25 15.5299C2.25 15.1882 2.38575 14.8605 2.62738 14.6188Z",
  p3d41af80: "M11.675 2.4C12.7381 2.4 13.6 3.26185 13.6 4.325V11.675C13.6 12.7381 12.7381 13.6 11.675 13.6H4.325C3.26185 13.6 2.4 12.7381 2.4 11.675V4.325C2.4 3.26185 3.26185 2.4 4.325 2.4H11.675Z",
  p3df9da00: "M16.3462 3.97692L18.1662 4.54769C18.3708 4.61231 18.5 4.79538 18.5 5C18.5 5.20462 18.36 5.38769 18.1662 5.45231L16.3462 6.02308C16.1954 6.06615 16.0662 6.19538 16.0231 6.34615L15.4523 8.16615C15.3877 8.37077 15.2046 8.5 15 8.5C14.7954 8.5 14.6123 8.36 14.5477 8.16615L13.9769 6.34615C13.9338 6.19538 13.8046 6.07692 13.6538 6.02308L11.8338 5.45231C11.6292 5.38769 11.5 5.20462 11.5 5C11.5 4.79538 11.64 4.61231 11.8338 4.54769L13.6538 3.97692C13.8046 3.93385 13.9338 3.80462 13.9769 3.65385L14.5477 1.83385C14.6123 1.62923 14.7954 1.5 15 1.5C15.2046 1.5 15.3877 1.64 15.4523 1.83385L16.0231 3.65385C16.0662 3.80462 16.1954 3.92308 16.3462 3.97692Z",
  p3f969940: "M16.981 3.59919C16.9809 3.37398 16.8912 3.1579 16.732 2.9986C16.5726 2.83921 16.3559 2.74958 16.1304 2.74958C15.9051 2.74965 15.6892 2.83929 15.5299 2.9986L8.91755 9.60993L8.71735 11.0113L10.1207 10.8111L16.732 4.20075C16.8914 4.04136 16.981 3.82459 16.981 3.59919ZM18.481 3.59919C18.481 4.22241 18.2332 4.8206 17.7925 5.2613L11.0045 12.0494C10.8898 12.164 10.7411 12.2383 10.5806 12.2613L7.94098 12.6392C7.70728 12.6727 7.47122 12.5932 7.30426 12.4263C7.13751 12.2595 7.05906 12.0241 7.09235 11.7906L7.4693 9.14997C7.49227 8.98943 7.56656 8.84084 7.68122 8.72614L14.4693 1.93805C14.9099 1.49744 15.5073 1.24965 16.1304 1.24958C16.7537 1.24958 17.3518 1.49736 17.7925 1.93805C18.233 2.37866 18.4809 2.97615 18.481 3.59919Z",
  p52f1780: "M3.53846 3.70776C3.19674 3.70776 2.86901 3.84351 2.62738 4.08515C2.38575 4.32678 2.25 4.6545 2.25 4.99623C2.25 5.33795 2.38575 5.66567 2.62738 5.9073C2.86901 6.14894 3.19674 6.28469 3.53846 6.28469C3.88018 6.28469 4.20791 6.14894 4.44954 5.9073C4.69117 5.66567 4.82692 5.33795 4.82692 4.99623C4.82692 4.6545 4.69117 4.32678 4.44954 4.08515C4.20791 3.84351 3.88018 3.70776 3.53846 3.70776Z",
  p5ae0100: "M9.44176 12.7603C9.75007 13.0798 10.2499 13.0798 10.5582 12.7603L14.7688 8.39668C15.0771 8.07716 15.0771 7.55912 14.7688 7.2396C14.4605 6.92008 13.9606 6.92008 13.6523 7.2396L10 11.0247L6.34772 7.2396C6.03941 6.92008 5.53954 6.92008 5.23123 7.2396C4.92292 7.55912 4.92292 8.07716 5.23123 8.39668L9.44176 12.7603Z",
  p23f1de00: "M10.75 7.75241V8.74999C10.75 9.85456 11.6454 10.75 12.75 10.75C13.8546 10.75 14.75 9.85456 14.75 8.74999V7.74999C14.75 6.25215 14.2697 4.79388 13.3794 3.58935C12.4891 2.38482 11.2356 1.49757 9.80371 1.0581C8.37179 0.618625 6.83657 0.65001 5.42383 1.14771C4.01109 1.64542 2.79534 2.58359 1.95508 3.82355C1.11482 5.06351 0.69457 6.53987 0.755868 8.03646C0.817166 9.53305 1.35688 10.9707 2.29573 12.1378C3.23459 13.3049 4.52336 14.1399 5.97207 14.5204C7.42077 14.9009 8.95272 14.8066 10.3439 14.2515M10.75 7.75241C10.7487 9.40815 9.40605 10.75 7.75 10.75C6.09315 10.75 4.75 9.40685 4.75 7.74999C4.75 6.09314 6.09315 4.74999 7.75 4.74999C9.40605 4.74999 10.7487 6.09183 10.75 7.74757M10.75 7.75241V7.74757M10.75 7.74757V4.74999",
};

// Component Definitions for Icons
const IconColoredAiColored = () => (
  <div className="relative shrink-0 size-[20px]">
    <div className="absolute inset-[7.5%]">
      <img alt="" className="block max-w-none size-full" height="17" src={imgStar} width="17" />
    </div>
  </div>
);

const IconAiEditAi = () => (
  <div className="relative shrink-0 size-[16px]">
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p37e2a500} fill="#676879" />
    </svg>
  </div>
);

const IconPlatformWriteWithAi = () => (
  <div className="relative shrink-0 size-[16px]">
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip_write_ai)">
            <path d={svgPaths.p229e4800} fill="#676879" />
            <path d={svgPaths.p2d8dd980} fill="#676879" />
            <path d={svgPaths.p183c2100} fill="#676879" />
            <path d={svgPaths.p19e0a000} fill="#676879" />
            <path clipRule="evenodd" d={svgPaths.p31f8b800} fill="#676879" fillRule="evenodd" />
        </g>
        <defs>
            <clipPath id="clip_write_ai">
                <rect fill="white" height="16" width="16" />
            </clipPath>
        </defs>
    </svg>
  </div>
);

const IconPlatformShuffle = () => (
  <div className="relative shrink-0 size-[16px]">
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip_shuffle)">
            <path d={svgPaths.p3b046840} fill="#676879" />
        </g>
        <defs>
            <clipPath id="clip_shuffle">
                <rect fill="white" height="16" width="16" />
            </clipPath>
        </defs>
    </svg>
  </div>
);

const IconAiBulletsAi = () => (
  <div className="relative shrink-0 size-[16px]">
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip_bullets)">
            <path d={svgPaths.p3df9da00} fill="#676879" />
            <path d={svgPaths.p325ad400} fill="#676879" />
            <path d={svgPaths.p14642500} fill="#676879" />
            <path d={svgPaths.p23a2cf00} fill="#676879" />
            <path d={svgPaths.p3c8b4b40} fill="#676879" />
            <path d={svgPaths.p20452a80} fill="#676879" />
            <path d={svgPaths.p52f1780} fill="#676879" />
        </g>
        <defs>
            <clipPath id="clip_bullets">
                <rect fill="white" height="16" rx="1.78571" width="16" />
            </clipPath>
        </defs>
    </svg>
  </div>
);

const IconBasicAdd = () => (
  <div className="relative shrink-0 size-[16px]">
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip_add)">
            <path clipRule="evenodd" d={svgPaths.p2dd8dcf0} fill="#676879" fillRule="evenodd" />
        </g>
        <defs>
            <clipPath id="clip_add">
                <rect fill="white" height="16" width="16" />
            </clipPath>
        </defs>
    </svg>
  </div>
);

const IconBasicDropdownChevronDown = () => (
  <div className="relative shrink-0 size-[20px]">
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <path d={svgPaths.p5ae0100} fill="#676879" id="Union" />
    </svg>
  </div>
);

const IconPlatformDuplicate = () => (
  <div className="relative shrink-0 size-[20px]">
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <path clipRule="evenodd" d={svgPaths.p299bdd00} fill="#323338" fillRule="evenodd" />
    </svg>
  </div>
);

const IconDoc = () => (
  <div className="relative shrink-0 size-[20px]">
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <path d={svgPaths.p3ff5b100} fill="#323338" />
        <path d={svgPaths.p735ab80} fill="#323338" />
        <path clipRule="evenodd" d={svgPaths.p3ed71e00} fill="#323338" fillRule="evenodd" />
    </svg>
  </div>
);

const IconPlatformThumbsUp = () => (
  <div className="relative shrink-0 size-[16px]">
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path clipRule="evenodd" d={svgPaths.p2e517100} fill="#323338" fillRule="evenodd" />
    </svg>
  </div>
);

const IconPlatformStopAi = () => (
  <div className="relative shrink-0 size-[16px]">
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p3d41af80} fill="white" />
    </svg>
  </div>
);

const IconAt = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#676879]">
    <circle cx="12" cy="12" r="4" />
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
  </svg>
);

const IconSearch = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#676879]">
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

const IconVector = () => (
  <div className="relative shrink-0 size-[16px]">
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5 15.5">
      <path d={svgPaths.p23f1de00} id="Vector" stroke="#676879" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  </div>
);

// --- Response Types & Mock Data ---

type ResponseType = "agenda" | "progress" | "email" | "risks" | "checklist" | "help" | "generic";

// Function to detect response type from user input
const detectResponseType = (input: string): ResponseType => {
  const lowerInput = input.toLowerCase();

  if (lowerInput.includes("summarize") || lowerInput.includes("progress") || lowerInput.includes("status") || lowerInput.includes("update on")) {
    return "progress";
  }
  if (lowerInput.includes("email") || lowerInput.includes("draft") || lowerInput.includes("stakeholder") || lowerInput.includes("write")) {
    return "email";
  }
  if (lowerInput.includes("risk") || lowerInput.includes("at-risk") || lowerInput.includes("deadline") || lowerInput.includes("delayed") || lowerInput.includes("blocked")) {
    return "risks";
  }
  if (lowerInput.includes("checklist") || lowerInput.includes("list") || lowerInput.includes("steps") || lowerInput.includes("todo") || lowerInput.includes("invitation")) {
    return "checklist";
  }
  if (lowerInput.includes("agenda") || lowerInput.includes("schedule") || lowerInput.includes("event") || lowerInput.includes("program")) {
    return "agenda";
  }
  if (lowerInput.includes("help") || lowerInput.includes("what can") || lowerInput.includes("what else")) {
    return "help";
  }
  return "generic";
};

// Follow-up messages based on response type
const getFollowUpMessage = (type: ResponseType): string => {
  const messages: Record<ResponseType, string> = {
    agenda: "Here's a draft agenda based on the Elevate event. Want me to add this to the task, or adjust any sessions first?",
    progress: "Here's your weekly summary. Want me to share this with the team or add more details?",
    email: "Here's a draft email ready to send. Want me to adjust the tone or add more details?",
    risks: "I found 2 items that need attention. Want me to notify the owners or suggest solutions?",
    checklist: "Here's your checklist. Want me to add this to the task or create subtasks?",
    help: "Here are some things I can help with. Just ask or pick one!",
    generic: "I've analyzed your request. Would you like me to take any action on this?",
  };
  return messages[type];
};

// Success messages based on response type
const getSuccessMessage = (type: ResponseType): { main: string; followUp: string } => {
  const messages: Record<ResponseType, { main: string; followUp: string }> = {
    agenda: {
      main: "Done! I've added the agenda to the \"Create agenda\" task and updated its status to <strong>Working on it</strong>.",
      followUp: "Want me to draft speaker invitations or create a timeline for the breakout sessions?"
    },
    progress: {
      main: "Done! I've posted the summary as an update on this board.",
      followUp: "Want me to schedule a weekly auto-summary or share this via email?"
    },
    email: {
      main: "Done! The email draft has been saved and is ready to send.",
      followUp: "Want me to schedule it for tomorrow morning or send it now?"
    },
    risks: {
      main: "Done! I've flagged the at-risk items and notified the task owners.",
      followUp: "Want me to suggest deadline extensions or reassign resources?"
    },
    checklist: {
      main: "Done! The checklist has been added to the \"Send invitations\" task.",
      followUp: "Want me to assign owners to each item or set due dates?"
    },
    help: {
      main: "I'm here to help! Pick any suggestion or ask me anything about this board.",
      followUp: "I can summarize, draft, analyze risks, create checklists, and more."
    },
    generic: {
      main: "Done! I've completed the requested action.",
      followUp: "Is there anything else you'd like me to help with?"
    },
  };
  return messages[type];
};

// --- Response Card Components ---

const ProgressCard = () => (
  <div className="bg-white relative rounded-[24px] shrink-0 w-full border border-[#c3c6d4] shadow-sm overflow-hidden">
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-[12px] items-center px-[20px] py-[16px] relative w-full text-[#323338]">
        <p className="font-['Poppins',sans-serif] font-medium text-[18px] w-full">Weekly Progress Summary</p>
        <div className="font-['Figtree',sans-serif] text-[14px] w-full leading-[1.5]">
          <p className="mb-[12px]">
            <span className="font-semibold text-[#00854d]">Completed (2)</span><br/>
            Send invitations, Venues
          </p>
          <p className="mb-[12px]">
            <span className="font-semibold text-[#fdab3d]">In Progress (3)</span><br/>
            Find guest speakers, Create agenda, Design event branding
          </p>
          <p className="mb-[12px]">
            <span className="font-semibold text-[#676879]">Not Started (4)</span><br/>
            Build registration page, Coordinate catering, Confirm tech setup, Schedule dry run
          </p>
          <p className="mt-[16px] pt-[12px] border-t border-[#c3c6d4]">
            <span className="font-semibold">Overall:</span> 22% complete • On track for event date
          </p>
        </div>
      </div>
    </div>
  </div>
);

const EmailCard = () => (
  <div className="bg-white relative rounded-[24px] shrink-0 w-full border border-[#c3c6d4] shadow-sm overflow-hidden">
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-[12px] items-center px-[20px] py-[16px] relative w-full text-[#323338]">
        <p className="font-['Poppins',sans-serif] font-medium text-[18px] w-full">Stakeholder Update Email</p>
        <div className="font-['Figtree',sans-serif] text-[14px] w-full leading-[1.5] bg-[#f6f7fb] rounded-[8px] p-[12px]">
          <p className="mb-[8px]"><span className="font-semibold">Subject:</span> Elevate 2025 - Planning Update</p>
          <p className="mb-[8px]">Hi team,</p>
          <p className="mb-[8px]">Quick update on Elevate 2025 planning:</p>
          <p className="mb-[4px]">• Invitations sent to 150+ attendees</p>
          <p className="mb-[4px]">• Venue confirmed at Grand Hall</p>
          <p className="mb-[4px]">• Agenda draft in review</p>
          <p className="mb-[8px]">• Speaker outreach 60% complete</p>
          <p className="mb-[8px]">Next milestone: Finalize agenda by Friday.</p>
          <p>Best,<br/>Sandra</p>
        </div>
      </div>
    </div>
  </div>
);

const RisksCard = () => (
  <div className="bg-white relative rounded-[24px] shrink-0 w-full border border-[#c3c6d4] shadow-sm overflow-hidden">
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-[12px] items-center px-[20px] py-[16px] relative w-full text-[#323338]">
        <p className="font-['Poppins',sans-serif] font-medium text-[18px] w-full">At-Risk Items</p>
        <div className="font-['Figtree',sans-serif] text-[14px] w-full leading-[1.5]">
          <div className="bg-[#ffefef] border border-[#e44258] rounded-[8px] p-[12px] mb-[12px]">
            <p className="font-semibold text-[#c4314b] mb-[4px]">Find guest speakers</p>
            <p className="text-[13px] text-[#676879]">Due in 3 days • Only 2 of 5 speakers confirmed</p>
          </div>
          <div className="bg-[#fff8e6] border border-[#fdab3d] rounded-[8px] p-[12px]">
            <p className="font-semibold text-[#b37700] mb-[4px]">Coordinate catering</p>
            <p className="text-[13px] text-[#676879]">Due in 5 days • Awaiting vendor quotes</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ChecklistCard = () => (
  <div className="bg-white relative rounded-[24px] shrink-0 w-full border border-[#c3c6d4] shadow-sm overflow-hidden">
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-[12px] items-center px-[20px] py-[16px] relative w-full text-[#323338]">
        <p className="font-['Poppins',sans-serif] font-medium text-[18px] w-full">Send Invitations Checklist</p>
        <div className="font-['Figtree',sans-serif] text-[14px] w-full leading-[1.5]">
          <div className="flex items-center gap-[8px] mb-[10px]">
            <div className="w-[18px] h-[18px] rounded border-2 border-[#00854d] bg-[#00854d] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2"/></svg>
            </div>
            <span className="line-through text-[#676879]">Finalize guest list</span>
          </div>
          <div className="flex items-center gap-[8px] mb-[10px]">
            <div className="w-[18px] h-[18px] rounded border-2 border-[#00854d] bg-[#00854d] flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="white" strokeWidth="2"/></svg>
            </div>
            <span className="line-through text-[#676879]">Design invitation template</span>
          </div>
          <div className="flex items-center gap-[8px] mb-[10px]">
            <div className="w-[18px] h-[18px] rounded border-2 border-[#c3c6d4]"></div>
            <span>Set up RSVP tracking</span>
          </div>
          <div className="flex items-center gap-[8px] mb-[10px]">
            <div className="w-[18px] h-[18px] rounded border-2 border-[#c3c6d4]"></div>
            <span>Send to VIP list first</span>
          </div>
          <div className="flex items-center gap-[8px]">
            <div className="w-[18px] h-[18px] rounded border-2 border-[#c3c6d4]"></div>
            <span>Schedule reminder emails</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HelpCard = () => (
  <div className="bg-white relative rounded-[24px] shrink-0 w-full border border-[#c3c6d4] shadow-sm overflow-hidden">
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-[12px] items-center px-[20px] py-[16px] relative w-full text-[#323338]">
        <p className="font-['Poppins',sans-serif] font-medium text-[18px] w-full">AI Sidekick Can Help With</p>
        <div className="font-['Figtree',sans-serif] text-[14px] w-full leading-[1.5]">
          <p className="mb-[8px]"><span className="font-semibold">Summarize</span> – Get status updates on tasks</p>
          <p className="mb-[8px]"><span className="font-semibold">Draft</span> – Write emails, docs, and content</p>
          <p className="mb-[8px]"><span className="font-semibold">Analyze</span> – Find risks and blockers</p>
          <p className="mb-[8px]"><span className="font-semibold">Generate</span> – Create checklists and agendas</p>
          <p className="mb-[0px]"><span className="font-semibold">Update</span> – Add content to tasks automatically</p>
        </div>
      </div>
    </div>
  </div>
);

const GenericCard = ({ message }: { message: string }) => (
  <div className="bg-white relative rounded-[24px] shrink-0 w-full border border-[#c3c6d4] shadow-sm overflow-hidden">
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-[12px] items-center px-[20px] py-[16px] relative w-full text-[#323338]">
        <div className="font-['Figtree',sans-serif] text-[14px] w-full leading-[1.5]">
          <p>I understood your request: "{message}"</p>
          <p className="mt-[12px]">I can help you with this! Let me know if you'd like me to:</p>
          <ul className="list-disc ml-[21px] mt-[8px]">
            <li>Create a task for this</li>
            <li>Draft related content</li>
            <li>Find relevant information</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

// --- Subcomponents for States ---

const AgendaCard = () => (
  <div className="bg-white relative rounded-[24px] shrink-0 w-full border border-[#c3c6d4] shadow-sm overflow-hidden">
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-[12px] items-center px-[20px] py-[16px] relative w-full text-[#323338]">
        <p className="font-['Poppins',sans-serif] font-medium text-[18px] w-full">Elevate 2025 Event Agenda</p>
        <div className="font-['Figtree',sans-serif] text-[14px] w-full leading-[1.5]">
          <p className="mb-[12px]">
            <span className="font-semibold">09:00 – 09:30 | Registration & Welcome<br/></span>
            Check-in, badge pickup, networking
          </p>
          <p className="mb-[12px]">
            <span className="font-semibold">09:30 – 09:45 | Opening Remarks<br/></span>
            Sandra Johnston, Event Lead
          </p>
          <p className="mb-[12px]">
            <span className="font-semibold">09:45 – 10:30 | Keynote: Future of Work<br/></span>
            Transforming how teams collaborate
          </p>
          <p className="mb-[12px]">
            <span className="font-semibold">10:30 – 11:15 | Panel: AI in the Workplace<br/></span>
            Industry leaders share insights + Q&A
          </p>
          <p className="font-semibold mb-[12px]">11:15 – 11:30 | Networking Break</p>
          <p className="mb-0">
            <span className="font-semibold">11:30 – 12:15 | Breakout Sessions<br/></span>
            Choose your track:
          </p>
          <ul className="list-disc ml-[21px] mb-[12px]">
            <li>Track A: Productivity Masterclass</li>
            <li>Track B: Leadership Workshop</li>
            <li>Track C: Innovation Lab</li>
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full flex items-center justify-center px-[16px] py-[12px]">
        <div className="flex grow items-center justify-between">
           <button className="flex h-[32px] items-center justify-center px-[8px] rounded-[4px] hover:bg-gray-50 text-[#323338] text-[14px]">
             See all
           </button>
           <div className="flex gap-[8px] items-center">
             <button className="flex items-center justify-center size-[32px] rounded-[4px] hover:bg-gray-50">
               <IconPlatformDuplicate />
             </button>
             <button className="flex gap-[8px] h-[32px] items-center justify-center px-[8px] rounded-[4px] border border-[#c3c6d4] hover:bg-gray-50 text-[#323338] text-[14px]">
               Save as Doc
               <IconDoc />
             </button>
           </div>
        </div>
      </div>
    </div>
  </div>
);

const ThinkingIndicator = () => (
  <div className="flex gap-[8px] items-center w-full">
    <IconColoredAiColored />
    <p className="bg-clip-text bg-gradient-to-r from-[#555761] via-[#323338] to-[#caccd6] text-transparent font-['Figtree',sans-serif] text-[14px]">
      Thinking...
    </p>
  </div>
);

const FeedbackButtons = () => (
  <div className="flex gap-[2px] items-center">
    <button className="flex items-center justify-center size-[24px] rounded-[4px] hover:bg-gray-100">
      <IconPlatformThumbsUp />
    </button>
    <button className="flex items-center justify-center size-[24px] rounded-[4px] hover:bg-gray-100 rotate-180">
      <IconPlatformThumbsUp />
    </button>
  </div>
);

const SuccessMessage = ({ type }: { type: ResponseType }) => {
  const messages = getSuccessMessage(type);
  return (
    <div className="flex flex-col gap-[8px] w-full">
      <div className="flex gap-[8px] items-center">
        <IconColoredAiColored />
        <span className="text-[#676879] text-[14px]">Thought process</span>
        <IconBasicDropdownChevronDown />
      </div>
      <div className="text-[#323338] text-[14px] leading-[1.6]">
        <p className="mb-[12px]" dangerouslySetInnerHTML={{ __html: messages.main }} />
        <p>{messages.followUp}</p>
      </div>
      <FeedbackButtons />
    </div>
  );
};

// --- Mention System ---

type MentionType = "board" | "doc";
interface MentionItem {
  id: string;
  type: MentionType;
  name: string;
}

const mentionsData: MentionItem[] = [
  { id: "1", type: "board", name: "Elevate event planning" },
  { id: "2", type: "board", name: "Q1 Marketing campaigns" },
  { id: "3", type: "board", name: "Product roadmap 2025" },
  { id: "4", type: "board", name: "Sprint backlog" },
  { id: "5", type: "board", name: "Team capacity tracker" },
  { id: "6", type: "doc", name: "Elevate Event Brief" },
  { id: "7", type: "doc", name: "Budget breakdown" },
  { id: "8", type: "doc", name: "Vendor contracts" },
  { id: "9", type: "doc", name: "Weekly standup notes" },
];

const MentionPanel = ({
  filter,
  onSelect,
}: {
  filter: string;
  onSelect: (item: MentionItem) => void;
}) => {
  const filtered = mentionsData.filter((m) =>
    m.name.toLowerCase().includes(filter.toLowerCase())
  );

  const boards = filtered.filter((m) => m.type === "board");
  const docs = filtered.filter((m) => m.type === "doc");

  if (filtered.length === 0) {
    return (
    <div className="absolute top-full mt-2 left-0 w-full bg-white border border-[#c3c6d4] shadow-[0_4px_16px_rgba(0,0,0,0.2)] rounded-[8px] p-6 flex flex-col items-center justify-center z-50">
        <IconSearch />
        <span className="mt-2 text-[#676879] text-[14px] font-['Figtree',sans-serif]">
          No matching results
        </span>
      </div>
    );
  }

  const renderItem = (item: MentionItem, isSelected: boolean) => (
    <div
      key={item.id}
      onClick={() => onSelect(item)}
      className={clsx(
        "flex items-center gap-2 px-3 py-2 text-[14px] text-[#323338] font-['Figtree',sans-serif] cursor-pointer rounded-sm transition-colors",
        isSelected ? "bg-[#cce4ff]" : "hover:bg-[#f6f7fb]"
      )}
      style={{ height: "36px" }}
    >
      <div className="text-[#676879] flex items-center">
        {item.type === "board" ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path clipRule="evenodd" d={svgPaths.p1476ac80} fill="currentColor" fillRule="evenodd"/></svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d={svgPaths.p3ff5b100} fill="currentColor" /><path d={svgPaths.p735ab80} fill="currentColor" /><path clipRule="evenodd" d={svgPaths.p3ed71e00} fill="currentColor" fillRule="evenodd" /></svg>
        )}
      </div>
      <span className="truncate">{item.name}</span>
    </div>
  );

  return (
    <div className="absolute top-full mt-2 left-0 w-full bg-white border border-[#c3c6d4] shadow-[0_4px_16px_rgba(0,0,0,0.2)] rounded-[8px] py-2 flex flex-col z-50 max-h-[250px] overflow-y-auto">
      {boards.length > 0 && (
        <>
          <div className="px-3 py-1 text-[12px] font-semibold text-[#676879] font-['Figtree',sans-serif]">
            Boards
          </div>
          {boards.map((item, idx) => renderItem(item, item.name === "Elevate event planning"))}
        </>
      )}
      {docs.length > 0 && (
        <>
          <div className="px-3 py-1 text-[12px] font-semibold text-[#676879] font-['Figtree',sans-serif] mt-1">
            Docs
          </div>
          {docs.map((item) => renderItem(item, false))}
        </>
      )}
    </div>
  );
};

// --- Input Component with Mentions Support ---

interface SidekickInputProps {
  value: string;
  onChange: (val: string) => void;
  onSend: () => void;
  placeholder?: string;
  isProcessing?: boolean;
}

const SidekickInput = ({ value, onChange, onSend, placeholder, isProcessing }: SidekickInputProps) => {
  const [showMentions, setShowMentions] = useState(false);
  const [mentionFilter, setMentionFilter] = useState("");
  const inputRef = useRef<HTMLDivElement>(null);

  // Sync prop value to div content (one-way for simplicity in this proto)
  useEffect(() => {
    if (inputRef.current && inputRef.current.innerText !== value) {
        // Only if empty to avoid cursor jumping issues in this simple implementation
        if (value === "") inputRef.current.innerText = "";
    }
  }, [value]);

  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    const text = e.currentTarget.innerText;
    onChange(text);

    // Simple mention detection: Check if cursor is after an '@'
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const textBeforeCursor = range.startContainer.textContent?.slice(0, range.startOffset) || "";
      const lastAt = textBeforeCursor.lastIndexOf("@");
      
      if (lastAt !== -1) {
        const query = textBeforeCursor.slice(lastAt + 1);
        // Only show if no spaces (simple username/item logic)
        if (!query.includes(" ")) {
            setShowMentions(true);
            setMentionFilter(query);
            return;
        }
      }
    }
    setShowMentions(false);
  };

  const insertMention = (item: MentionItem) => {
    setShowMentions(false);
    if (!inputRef.current) return;

    // This is a simplified insertion that replaces the whole text or appends
    // A real production implementation requires robust range manipulation
    const text = inputRef.current.innerText;
    const lastAt = text.lastIndexOf("@");
    const prefix = text.slice(0, lastAt);
    
    // Create the token HTML
    const tokenHtml = `<span class="mention-token" style="background-color: #f0f3ff; border: 1px solid #c3c6d4; border-radius: 4px; padding: 2px 6px; display: inline-flex; align-items: center; gap: 4px; font-size: 13px; color: #323338; user-select: none;" contenteditable="false"><span style="display:flex; align-items:center; justify-content:center; width:14px; height:14px;">${item.type === 'board' ? '<svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path clipRule="evenodd" d="M1.4 3.5C1.4 2.7268 2.0268 2.1 2.8 2.1H11.2C11.9732 2.1 12.6 2.7268 12.6 3.5V10.5C12.6 11.2732 11.9732 11.9 11.2 11.9H2.8C2.0268 11.9 1.4 11.2732 1.4 10.5V3.5ZM5.25 3.15H11.2C11.3933 3.15 11.55 3.3067 11.55 3.5V10.5C11.55 10.6933 11.3933 10.85 11.2 10.85H5.25L5.25 3.15ZM4.2 3.15H2.8C2.6067 3.15 2.45 3.3067 2.45 3.5V10.5C2.45 10.6933 2.6067 10.85 2.8 10.85H4.2L4.2 3.15Z" fill="currentColor" fill-rule="evenodd"/></svg>' : '📄'}</span>${item.name}</span>&nbsp;`;
    
    // In a real contentEditable, we'd insert the node at the range.
    // For this prototype, we'll just append to the div and update state
    // Note: React state 'value' won't perfectly track HTML, so we rely on innerHTML for display
    inputRef.current.innerHTML = prefix + tokenHtml;
    
    // Move cursor to end
    const range = document.createRange();
    const sel = window.getSelection();
    range.selectNodeContents(inputRef.current);
    range.collapse(false);
    sel?.removeAllRanges();
    sel?.addRange(range);
    
    onChange(inputRef.current.innerText); // Value is just text for logic
  };

  const handleManualMention = () => {
    if (inputRef.current) {
        inputRef.current.innerText += "@";
        onChange(inputRef.current.innerText);
        setShowMentions(true);
        setMentionFilter("");
        inputRef.current.focus();
        // Move cursor to end
        const range = document.createRange();
        const sel = window.getSelection();
        range.selectNodeContents(inputRef.current);
        range.collapse(false);
        sel?.removeAllRanges();
        sel?.addRange(range);
    }
  };

  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full border border-[#c3c6d4] shadow-sm">
        <div className="flex flex-col gap-[16px] px-[12px] py-[8px] relative">
            {showMentions && (
                <MentionPanel filter={mentionFilter} onSelect={insertMention} />
            )}
            
            <div 
                ref={inputRef}
                contentEditable
                onInput={handleInput}
                className="w-full outline-none text-[14px] text-[#323338] bg-transparent font-['Figtree',sans-serif] leading-[20px] min-h-[60px] empty:before:content-[attr(data-placeholder)] empty:before:text-[#676879]"
                data-placeholder={placeholder}
                style={{ whiteSpace: "pre-wrap" }}
            />
            
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center size-[24px] cursor-pointer hover:bg-gray-100 rounded">
                        <IconBasicAdd />
                    </div>
                    <div 
                        className="flex items-center justify-center size-[24px] cursor-pointer hover:bg-[rgba(103,104,121,0.1)] rounded transition-colors"
                        onClick={handleManualMention}
                    >
                        <IconVector />
                    </div>
                </div>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div 
                            className={clsx(
                                "flex items-center justify-center size-[24px] rounded-[12px] cursor-pointer transition-colors", 
                                isProcessing ? "bg-[#323338]" : (value.length > 0 ? "bg-[#0073ea]" : "bg-[#ecedf5]")
                            )}
                            onClick={onSend}
                        >
                            {isProcessing ? (
                                <IconPlatformStopAi />
                            ) : (
                                <div className="relative shrink-0 size-[16px]">
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                                        <g clipPath="url(#clip_arrow_up)">
                                            <path clipRule="evenodd" d={svgPaths.p1a3c500} fill={value.length > 0 ? "white" : "#323338"} fillOpacity={value.length > 0 ? "1" : "0.38"} fillRule="evenodd"/>
                                        </g>
                                        <defs>
                                            <clipPath id="clip_arrow_up">
                                                <rect fill="white" height="16" width="16" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            )}
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Send message</p>
                    </TooltipContent>
                </Tooltip>
            </div>
        </div>
    </div>
  );
};

// --- Main Component ---

type ChatState = "idle" | "thinking" | "result" | "thinking_update" | "update_success";

type SidekickPanelProps = {
  isOpen: boolean;
  onClose: () => void;
  onAiAction?: (actionType: ResponseType) => void;
};

export const SidekickPanel = ({
  isOpen,
  onClose,
  onAiAction,
}: SidekickPanelProps) => {
  const [inputValue, setInputValue] = useState("");
  const [chatState, setChatState] = useState<ChatState>("idle");
  const [userMessage1, setUserMessage1] = useState("");
  const [userMessage2, setUserMessage2] = useState("");
  const [responseType, setResponseType] = useState<ResponseType>("agenda");

  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatState, userMessage1, userMessage2]);

  // Transitions
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (chatState === "thinking") {
      timer = setTimeout(() => setChatState("result"), 2500);
    } else if (chatState === "thinking_update") {
      timer = setTimeout(() => {
        setChatState("update_success");
        onAiAction?.(responseType);
      }, 1500);
    }
    return () => clearTimeout(timer);
  }, [chatState, onAiAction, responseType]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    if (chatState === "idle") {
      setUserMessage1(inputValue);
      setResponseType(detectResponseType(inputValue));
      setChatState("thinking");
    } else if (chatState === "result") {
      setUserMessage2(inputValue);
      setChatState("thinking_update");
    } else if (chatState === "update_success") {
      // Continue conversation - start new round
      setUserMessage1(inputValue);
      setUserMessage2("");
      setResponseType(detectResponseType(inputValue));
      setChatState("thinking");
    }
    setInputValue("");
  };

  const suggestions = [
    { id: 1, text: "Summarize this week's progress across all tasks", icon: <IconAiEditAi /> },
    { id: 2, text: "Draft a stakeholder update email for this board", icon: <IconPlatformWriteWithAi /> },
    { id: 3, text: "Identify at-risk items that may miss deadlines", icon: <IconPlatformShuffle /> },
    { id: 4, text: "Generate a checklist for the Send invitations task", icon: <IconAiBulletsAi /> },
    { id: 5, text: "What else can AI Sidekick help with?", icon: <IconBasicAdd /> },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/5 z-[60]"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-6 top-6 bottom-6 w-[400px] z-[70] flex flex-col pointer-events-none"
          >
            <div className="w-full h-full relative rounded-[34px] overflow-hidden shadow-[0px_6px_20px_0px_rgba(0,0,0,0.2)] pointer-events-auto bg-white/90 backdrop-blur-2xl flex flex-col">
              {/* Background */}
              <div className="absolute bottom-0 left-0 right-0 h-[400px] opacity-100 pointer-events-none z-0">
                <img src={imgGradient} alt="" className="w-full h-full object-cover mix-blend-normal opacity-80" />
              </div>

              {/* Header */}
              <div className="flex flex-col p-4 pb-0 relative z-10 shrink-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2 bg-transparent rounded px-2 py-1 hover:bg-black/5 cursor-pointer transition-colors">
                      <IconColoredAiColored />
                      <span className="font-semibold text-[#323338] text-[14px]">AI Sidekick</span>
                      <ChevronDown size={14} className="text-[#323338]" />
                    </div>
                    <div className="border border-[#1f76c2] rounded-[2px] px-1 h-[16px] flex items-center">
                      <span className="text-[#1f76c2] text-[10px] font-normal leading-none">Beta</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="flex items-center justify-center size-[32px] hover:bg-black/5 rounded cursor-pointer">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d={svgPaths.p3f969940} fill="#323338"/><path d={svgPaths.p1ac09f00} fill="#323338"/></svg>
                    </div>
                    <div className="flex items-center justify-center size-[32px] hover:bg-black/5 rounded cursor-pointer" onClick={onClose}>
                        <X size={20} color="#323338" />
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-[4px] px-[9px] text-[#323338]">
                   <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path clipRule="evenodd" d={svgPaths.p1476ac80} fill="#323338" fillRule="evenodd"/></svg>
                   <span className="text-[12px]">Elevate event planning</span>
                </div>
              </div>

              {/* Scrollable Content */}
              <div className={clsx("flex-1 overflow-y-auto px-6 pt-6 pb-2 scrollbar-hide relative z-10 flex flex-col", chatState === "idle" && "justify-center")} ref={scrollRef}>
                <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-[#ff9be3]/10 via-[#a25ddc]/5 to-transparent pointer-events-none z-0 mix-blend-multiply blur-3xl" />
                
                {chatState === "idle" ? (
                  <>
                    <div className="mb-6 relative z-10">
                      <h2 className="text-[18px] font-medium text-[#323338] tracking-tight mb-1 font-['Poppins',sans-serif]">Hey Sandra,</h2>
                      <p className="text-[14px] text-[#323338]">How can I help you move forward with this board?</p>
                    </div>
                    
                    {/* Inline Input */}
                    <div className="mb-6 relative z-50">
                        <SidekickInput 
                            value={inputValue}
                            onChange={setInputValue}
                            onSend={handleSend}
                            placeholder="Message Sidekick..."
                        />
                    </div>
                    
                    {/* Suggestions */}
                    <div className="relative z-10 mb-6">
                      <div className="flex flex-col gap-2">
                        {suggestions.map((item) => (
                          <button key={item.id} onClick={() => setInputValue(item.text)} className="w-full text-left bg-white/60 hover:bg-white/90 border border-[#c3c6d4]/60 rounded-[8px] p-3 flex items-start gap-3 transition-all hover:shadow-sm">
                             <div className="flex items-center justify-center size-[16px] text-[#676879] mt-0.5">{item.icon}</div>
                             <span className="text-[14px] text-[#323338] leading-[20px]">{item.text}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col gap-6 pb-4">
                    {/* User Message 1 */}
                    <div className="flex flex-col items-end w-full pl-6">
                        <div className="flex flex-col items-end gap-1">
                            <div className="size-8 rounded-full overflow-hidden mb-1 flex-shrink-0">
                                <img src={imgAvatar} alt="User" className="w-full h-full object-cover" />
                            </div>
                            <div className="bg-[#edf1fc] px-4 py-2.5 rounded-tl-xl rounded-tr-sm rounded-bl-xl rounded-br-xl text-[14px] text-[#323338] leading-[1.5]">
                                {userMessage1}
                            </div>
                        </div>
                    </div>

                    {/* Chat State: Thinking 1 */}
                    {chatState === "thinking" && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                            <ThinkingIndicator />
                        </motion.div>
                    )}

                    {/* Chat State: Result (Dynamic based on responseType) */}
                    {(chatState === "result" || chatState === "thinking_update" || chatState === "update_success") && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-4">
                            <div className="flex gap-[8px] items-center">
                                <IconColoredAiColored />
                                <span className="text-[#676879] text-[14px]">Thought process</span>
                                <IconBasicDropdownChevronDown />
                            </div>
                            {responseType === "agenda" && <AgendaCard />}
                            {responseType === "progress" && <ProgressCard />}
                            {responseType === "email" && <EmailCard />}
                            {responseType === "risks" && <RisksCard />}
                            {responseType === "checklist" && <ChecklistCard />}
                            {responseType === "help" && <HelpCard />}
                            {responseType === "generic" && <GenericCard message={userMessage1} />}
                            <div className="flex flex-col gap-2">
                                <p className="text-[14px] text-[#323338]">{getFollowUpMessage(responseType)}</p>
                                <FeedbackButtons />
                            </div>
                        </motion.div>
                    )}

                    {/* User Message 2 */}
                    {(userMessage2) && (
                        <div className="flex flex-col items-end w-full pl-6 mt-4">
                            <div className="flex flex-col items-end gap-1">
                                <div className="size-8 rounded-full overflow-hidden mb-1 flex-shrink-0">
                                    <img src={imgAvatar} alt="User" className="w-full h-full object-cover" />
                                </div>
                                <div className="bg-[#edf1fc] px-4 py-2.5 rounded-tl-xl rounded-tr-sm rounded-bl-xl rounded-br-xl text-[14px] text-[#323338] leading-[1.5]">
                                    {userMessage2}
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Chat State: Thinking Update */}
                    {chatState === "thinking_update" && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-2">
                            <ThinkingIndicator />
                        </motion.div>
                    )}

                    {/* Chat State: Success */}
                    {chatState === "update_success" && (
                        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-2">
                            <SuccessMessage type={responseType} />
                        </motion.div>
                    )}
                  </div>
                )}
              </div>

              {/* Fixed Bottom Input Area (Visible when NOT idle) */}
              {chatState !== "idle" && (
                <div className="shrink-0 z-20 px-3 pb-3 pt-0 bg-transparent flex flex-col gap-[6px]">
                    <SidekickInput 
                        value={inputValue}
                        onChange={setInputValue}
                        onSend={handleSend}
                        placeholder="Message Sidekick..."
                        isProcessing={chatState === "thinking" || chatState === "thinking_update"}
                    />
                    <div className="flex justify-center">
                        <p className="text-[12px] text-[#676879]">AI may be inaccurate, make sure to review it. <span className="text-[#1f76c2] cursor-pointer">Learn more</span></p>
                    </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
