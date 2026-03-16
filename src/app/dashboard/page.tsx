import { Home, Package } from 'lucide-react';
import Breadcrumb, { BreadcrumbItem } from "@/components/Breadcrumb";

const GridBox = () => (
  <div className="border-2 border-dashed border-gray-300 rounded-lg dark:border-gray-600 min-h-32 md:min-h-48 transition-colors hover:border-primary/50" />
);

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
      <div className="flex flex-row flex-wrap justify-between items-center w-full mb-4 gap-4">
        <Breadcrumb items={BREADCRUMB_CONFIG} />
      </div>

      {/* Title Page Container */}
      <h3 className="text-xl 2xl:text-2xl text-gray-900 dark:text-gray-100 font-semibold w-full py-4">
        Grids
      </h3>

      {/* Grids Start */}

        {/* Full 5 col */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
          <GridBox />
          <GridBox />
          <GridBox />
          <GridBox />
          <GridBox />
        </div>

        {/* Full 4 col and 2 row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          <GridBox />
          <GridBox />
          <GridBox />
          <GridBox />
        </div>

        {/* Full 3 col and 2 row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          <GridBox />
          <GridBox />
          <GridBox />
          <GridBox />
          <GridBox />
          <GridBox />
        </div>

        {/* Full 2 col and 2 row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <GridBox />
          <GridBox />
          <GridBox />
          <GridBox />
        </div>

        {/* Full Row */}
        <div className="border-2 border-dashed rounded-lg border-gray-300 min-h-32 md:min-h-48 mb-4 dark:border-gray-600 transition-colors hover:border-primary/50" />

      {/* Grids End */}

    </div>
  );
}