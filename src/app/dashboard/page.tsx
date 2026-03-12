export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      
      {/* Título y Breadcrumb Mock */}
      <div className="space-y-2 mb-2">
        <div className="w-40 h-3 bg-gray-100 dark:bg-gray-800 rounded"></div>
        <div className="w-60 h-8 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
      </div>

      {/* TOP ROW: 4 KPI Blocks */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="h-32 bg-gray-50 dark:bg-gray-900/50 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl"></div>
        ))}
      </div>

      {/* MIDDLE ROW: Main Content Block */}
      <div className="h-96 bg-gray-50 dark:bg-gray-900/50 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl flex items-center justify-center">
        <div className="text-gray-300 dark:text-gray-700 font-medium">Main Dashboard Area</div>
      </div>

      {/* BOTTOM ROW: 2 Column Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="h-64 bg-gray-50 dark:bg-gray-900/50 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl"></div>
        <div className="h-64 bg-gray-50 dark:bg-gray-900/50 border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl"></div>
      </div>

    </div>
  );
}