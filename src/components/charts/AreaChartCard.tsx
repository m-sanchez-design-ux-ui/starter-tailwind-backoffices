"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Link from "next/link";

// Importación dinámica de ApexCharts para evitar errores de SSR
const Chart = dynamic(() => import("react-apexcharts"), { 
  ssr: false,
  loading: () => <div className="w-full h-73 animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg" />
});

export const AreaChartCard = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const chartOptions: ApexCharts.ApexOptions = {
    chart: {
      height: 292,
      type: "area",
      fontFamily: "Montserrat, sans-serif",
      dropShadow: { enabled: false },
      toolbar: { show: false },
    },
    tooltip: {
      enabled: true,
      x: { show: false },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "var(--color-primary)",
        gradientToColors: ["var(--color-primary)"],
      },
    },
    dataLabels: { enabled: false },
    stroke: {
      width: 6,
      curve: "smooth",
    },
    grid: {
      show: false,
      padding: { left: 2, right: 2, top: 0 },
    },
    series: [
      {
        name: "Cantidad",
        data: [6500, 6418, 6456, 6526, 6356, 6456, 6500],
        color: "var(--color-primary)",
      },
    ],
    xaxis: {
      categories: ['01 Dic', '02 Dic', '03 Dic', '04 Dic', '05 Dic', '06 Dic', '07 Dic'],
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: { show: false },
  };

  // Estado de carga inicial (Skeleton)
  if (!hasMounted) {
    return (
      <div className="w-full bg-white border border-gray-200 rounded-lg p-4 md:p-6 min-h-124.5 dark:bg-gray-800 dark:border-gray-700">
        <div className="animate-pulse flex flex-col justify-between h-full">
          <div>
            <div className="h-8 w-32 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
            <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded"></div>
          </div>
          <div className="h-70 w-full bg-gray-200 dark:bg-gray-700 rounded-lg my-6"></div>
          <div className="h-10 w-full bg-gray-200 dark:bg-gray-700 rounded border-t border-gray-100 dark:border-gray-600 pt-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow-sm p-4 md:p-6 min-h-124.5 max-h-124.5 dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between">
      {/* Header del Card */}
      <div className="flex justify-between">
        <div>
          <h5 className="leading-none text-3xl font-bold text-gray-900 pb-2 dark:text-gray-100">45.212</h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">Cantidad total</p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-emerald-500 dark:text-emerald-400 text-center">
          <span>15%</span>
          <svg className="w-3 h-3 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
          </svg>
        </div>
      </div>

      {/* Gráfico principal */}
      <div className="w-full mt-4">
        <Chart options={chartOptions} series={chartOptions.series} type="area" height={280} />
      </div>

      {/* Footer con acciones */}
      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700">
        <div className="flex justify-between items-center pt-5">
          <button className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 inline-flex items-center">
            Últimos 7 días
            <svg className="w-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          
          <Link 
            href="/dashboard"
            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-primary hover:text-blue-700 dark:text-primary_dark dark:hover:text-blue-400 px-3 py-2"
          >
            Reporte
            <svg className="w-2.5 h-2.5 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};