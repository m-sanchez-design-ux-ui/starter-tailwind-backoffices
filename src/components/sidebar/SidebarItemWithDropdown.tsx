"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

export const SidebarItemWithDropdown = ({ label, icon, items, rootHref }: any) => {
  const pathname = usePathname();
  
  // El padre está activo si el pathname actual coincide con alguno de los href de sus items
  const isAnyChildActive = items.some((item: any) => pathname === item.href);
  
  const [isOpen, setIsOpen] = useState(isAnyChildActive);

  // Mantenemos el dropdown abierto si navegamos a un hijo
  useEffect(() => {
    if (isAnyChildActive) setIsOpen(true);
  }, [isAnyChildActive]);

  return (
    <li>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center justify-between w-full py-3 transition-all font-bold text-base
          ${isAnyChildActive 
            ? "text-primary bg-gray-50 dark:bg-gray-800/50" 
            : "text-gray-700 hover:text-primary hover:bg-gray-50 dark:text-gray-500 dark:hover:bg-gray-800"}`}
      >
        <div className="flex items-center gap-1.5 flex-1">
          <div className={`w-1.5 h-6 transition-all ${isAnyChildActive ? "bg-primary" : "bg-transparent group-hover:bg-primary"}`} />
          <span className={`shrink-0 ${isAnyChildActive ? "text-primary" : "text-gray-400 group-hover:text-primary"}`}>
            {icon}
          </span>
          <span>{label}</span>
        </div>
        <ChevronDown className={`size-4 mr-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <ul className="mt-3 ml-6 mr-3 space-y-1">
          {items.map((item: any) => {
            const isChildActive = pathname === item.href;
            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={`block py-2 px-4 text-sm font-semibold transition-colors rounded-md
                    ${isChildActive 
                      ? "text-primary bg-primary/5 " 
                      : "text-gray-500 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"}`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};