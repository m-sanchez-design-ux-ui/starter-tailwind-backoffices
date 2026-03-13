import { Home, Package } from 'lucide-react';
import Breadcrumb, { BreadcrumbItem } from "@/components/Breadcrumb";

export default function DashboardPage() {

  const BREADCRUMB_CONFIG: BreadcrumbItem[] = [
    { 
      text: 'Dashboard', 
      href: '/dashboard', 
      icon: <Home className="size-4" /> 
    },
    { 
      text: 'Gestión de Productos', 
      href: '/dashboard/products', 
      icon: <Package className="size-4" /> 
    },
    { 
      text: 'Configuración de Stock', 
      href: '/dashboard/products/stock' 
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      
      {/*Breadcrumb */}
      <Breadcrumb items={BREADCRUMB_CONFIG} />

      {/* ROW: 4 Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-32 bg-gray-50 dark:bg-gray-900/50 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl"></div>
        ))}
      </div>

      {/* MIDDLE ROW: Main Content Block */}
      <div className="h-96 bg-gray-50 dark:bg-gray-900/50 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl flex items-center justify-center">
      </div>

      {/* BOTTOM ROW: 2 Column Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="h-64 bg-gray-50 dark:bg-gray-900/50 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl"></div>
        <div className="h-64 bg-gray-50 dark:bg-gray-900/50 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl"></div>
      </div>

      {/* MIDDLE ROW: Main Content Block */}
      <div className="h-96 bg-gray-50 dark:bg-gray-900/50 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl flex items-center justify-center">
      </div>

      {/* ROW: 4 Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-32 bg-gray-50 dark:bg-gray-900/50 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl"></div>
        ))}
      </div>
      
    </div>
  );
}