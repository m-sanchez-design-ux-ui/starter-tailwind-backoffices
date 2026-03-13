"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  disabled?: boolean;
}

export const SidebarItem = ({ href, icon, label, disabled }: SidebarItemProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  if (disabled) {
    return (
      <div className="group flex items-center gap-1.5 py-3 text-gray-400 cursor-not-allowed font-bold text-base dark:text-gray-700">
        <div className="w-1.5 h-6" />
        {icon}
        <span>{label}</span>
      </div>
    );
  }

  return (
    <li>
      <Link
        href={href}
        className={`group flex items-center gap-1.5 py-3 transition-all duration-150 font-bold text-base
          ${isActive 
            ? "text-primary bg-gray-100 dark:bg-gray-800" 
            : "text-gray-700 hover:text-primary hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-800"}`}
      >
        <div className={`w-1.5 h-6 transition-all ${isActive ? "bg-primary" : "group-hover:bg-primary"}`} />
        <span className={isActive ? "text-primary" : ""}>{icon}</span>
        <span>{label}</span>
      </Link>
    </li>
  );
};