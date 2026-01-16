import React from 'react';
import { 
  Bell, 
  Inbox, 
  Search, 
  HelpCircle, 
  Grid3x3, 
  Home, 
  CheckSquare, 
  ChevronRight, 
  ChevronDown, 
  MoreHorizontal,
  Plus,
  Filter,
  ArrowUpDown,
  EyeOff,
  User,
  Users,
  Zap,
  Puzzle,
  UserPlus,
  Sparkles,
  Maximize2,
  Folder,
  Briefcase,
  AlertCircle,
  FileText,
  Bookmark,
  MessageCircle,
  Star,
  Layout
} from 'lucide-react';

// Re-export Lucide icons
export { 
  Bell, Inbox, Search, HelpCircle, Grid3x3, Home, CheckSquare, 
  ChevronRight, ChevronDown, MoreHorizontal, Plus, Filter, 
  ArrowUpDown, EyeOff, User, Users, Zap, Puzzle, UserPlus, 
  Sparkles, Maximize2, Folder, Briefcase, AlertCircle, FileText,
  Bookmark, MessageCircle, Star, Layout
};

// Custom Monday Logo based on Figma Import
export const MondayLogo = () => (
  <div className="flex items-center gap-1">
    <div className="relative w-8 h-8">
      <svg className="w-full h-full" viewBox="0 0 19.1048 18.4643" fill="none">
        <path clipRule="evenodd" d="M5.36364 12.9898C6.87536 12.9899 8.10074 14.2154 8.10077 15.7272C8.10074 17.2389 6.87535 18.4643 5.36364 18.4643C3.85193 18.4643 2.62634 17.2389 2.62631 15.7272C2.62634 14.2154 3.85193 12.9899 5.36364 12.9898Z" fill="#ff5ac4" fillRule="evenodd" />
        <path clipRule="evenodd" d="M13.7885 12.9774C15.2978 12.9774 16.5214 14.2011 16.5214 15.7103C16.5214 17.2195 15.2978 18.4429 13.7885 18.4429C12.2794 18.4429 11.0559 17.2195 11.0559 15.7103C11.0559 14.2011 12.2794 12.9775 13.7885 12.9774Z" fill="#00c875" fillRule="evenodd" />
        <path clipRule="evenodd" d="M9.5644 7.18169C11.0658 7.18169 12.283 8.39874 12.283 9.90011C12.283 11.4015 11.0658 12.6185 9.5644 12.6185C8.06307 12.6185 6.84598 11.4014 6.84597 9.90011C6.846 8.39878 8.06309 7.18176 9.5644 7.18169Z" fill="#fdab3d" fillRule="evenodd" />
        <path clipRule="evenodd" d="M2.72981 4.98157C4.23747 4.98157 5.45979 6.20393 5.45982 7.71158C5.45978 9.21922 4.23746 10.4414 2.72981 10.4414C1.22222 10.4413 4.07782e-05 9.21918 0 7.71158C2.74713e-05 6.20397 1.22221 4.98164 2.72981 4.98157Z" fill="#e2445c" fillRule="evenodd" />
        <path clipRule="evenodd" d="M16.375 4.98116C17.8826 4.98121 19.1047 6.20338 19.1048 7.71097C19.1048 9.21862 17.8826 10.4409 16.375 10.441C14.8673 10.441 13.645 9.21863 13.645 7.71097C13.645 6.20337 14.8674 4.98119 16.375 4.98116Z" fill="#0073ea" fillRule="evenodd" />
        <path clipRule="evenodd" d="M9.54386 0C11.0536 1.80293e-05 12.2775 1.22396 12.2775 2.73367C12.2775 4.24339 11.0536 5.46733 9.54386 5.46734C8.03415 5.46732 6.81021 4.24339 6.81019 2.73367C6.81021 1.22397 8.03415 2.74733e-05 9.54386 0Z" fill="#a25ddc" fillRule="evenodd" />
      </svg>
    </div>
    <div className="flex flex-col leading-none">
      <span className="font-bold text-[18px] text-[#323338]">monday</span>
      <span className="text-[12px] text-[#323338] tracking-wider uppercase">Work Management</span>
    </div>
  </div>
);
