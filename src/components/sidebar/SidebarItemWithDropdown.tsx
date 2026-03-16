"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

interface SubItem {
  label: string;
  href: string;
}

interface SidebarItemWithDropdownProps {
  icon: React.ReactNode;
  label: string;
  items: SubItem[];
  rootHref: string; 
}

export const SidebarItemWithDropdown = ({ 
  icon, 
  label, 
  items, 
  rootHref 
}: SidebarItemWithDropdownProps) => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(() => pathname.startsWith(rootHref));

  const isParentActive = pathname.startsWith(rootHref);

  return (
    <li>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full group relative flex items-center gap-1.5 py-3 transition-all duration-150 font-bold text-base
          ${isParentActive ? "text-primary bg-gray-50 dark:bg-gray-800/50" : "text-gray-700 hover:text-primary hover:bg-gray-100 dark:text-gray-500 dark:hover:bg-gray-800"}`}
      >
        <div className={`w-1.5 h-6 transition-all ${isParentActive ? "bg-primary" : "group-hover:bg-primary"}`} />
        <span className={isParentActive ? "text-primary" : "fill-current"}>{icon}</span>
        <span className="flex-1 text-left">{label}</span>
        <ChevronDown className={`mr-3 size-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Sublistado con animación */}
      <ul className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100 py-2 px-3" : "max-h-0 opacity-0"}`}>
        {items.map((item) => {
          const isSubActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`flex items-center w-full p-2 pl-8 transition-colors rounded-lg font-medium text-sm
                  ${isSubActive 
                    ? "text-primary bg-gray-100 dark:bg-gray-800" 
                    : "text-gray-600 hover:text-primary hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800/50"}`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
};