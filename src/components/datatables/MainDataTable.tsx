"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Edit3, Trash2 } from 'lucide-react';

interface TableItem {
  id: number;
  nombre: string;
  sucursal: string;
  precio: string;
  activo: boolean;
  imagen: string;
}

const initialData: TableItem[] = [
  { id: 1, nombre: "Combo Light", sucursal: "Recoleta", precio: "$2.100", activo: false, imagen: "S" },
  { id: 2, nombre: "Combo Premium", sucursal: "Puerto Madero", precio: "$5.500", activo: true, imagen: "S" },
  { id: 3, nombre: "Combo Tradicional", sucursal: "Villa Urquiza", precio: "$2.600", activo: true, imagen: "S" },
  { id: 4, nombre: "Combo Vegano", sucursal: "San Telmo", precio: "$2.900", activo: false, imagen: "S" },
  { id: 5, nombre: "Combo Clásico", sucursal: "Palermo", precio: "$2.500", activo: true, imagen: "S" },
  { id: 6, nombre: "Combo Ejecutivo", sucursal: "Belgrano", precio: "$3.100", activo: true, imagen: "S" },
  { id: 7, nombre: "Combo Especial", sucursal: "Barracas", precio: "$3.800", activo: false, imagen: "S" },
  { id: 8, nombre: "Combo Express", sucursal: "Microcentro", precio: "$1.300", activo: true, imagen: "S" },
  { id: 9, nombre: "Combo Familiar", sucursal: "Caballito", precio: "$4.800", activo: true, imagen: "S" },
  { id: 10, nombre: "Combo Infantil", sucursal: "Almagro", precio: "$1.800", activo: false, imagen: "S" },
  { id: 11, nombre: "Combo Gourmet", sucursal: "Colegiales", precio: "$5.200", activo: true, imagen: "S" },
  { id: 12, nombre: "Combo Fitness", sucursal: "Nuñez", precio: "$3.400", activo: true, imagen: "S" },
  { id: 13, nombre: "Combo Parrillero", sucursal: "Mataderos", precio: "$6.500", activo: false, imagen: "S" },
  { id: 14, nombre: "Combo Porteño", sucursal: "Boedo", precio: "$2.700", activo: true, imagen: "S" },
  { id: 15, nombre: "Combo Deluxe", sucursal: "Retiro", precio: "$7.200", activo: true, imagen: "S" },
];

export default function MainDataTable() {
  const [data, setData] = useState(initialData);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleAll = () => {
    if (selectedItems.length === data.length) setSelectedItems([]);
    else setSelectedItems(data.map(item => item.id));
  };

  const toggleItem = (id: number) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleStatusChange = (id: number) => {
    setData(prev => prev.map(item => 
      item.id === id ? { ...item, activo: !item.activo } : item
    ));
  };

  return (
    <div className="relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg border border-gray-200 dark:border-gray-700">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700  dark:text-gray-400 border-b border-gray-200 dark:border-gray-600">
            <tr>
              <th scope="col" className="p-4">
                <input 
                  type="checkbox" 
                  checked={selectedItems.length === data.length}
                  onChange={toggleAll}
                  className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary_dark dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" 
                />
              </th>
              <th scope="col" className="px-4 py-3 text-center">Imagen</th>
              <th scope="col" className="px-4 py-3">Nombre</th>
              <th scope="col" className="px-4 py-3">Sucursal</th>
              <th scope="col" className="px-4 py-3 text-center">Precio</th>
              <th scope="col" className="px-4 py-3 text-center">Estado</th>
              <th scope="col" className="px-4 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr 
                key={item.id} 
                className={`border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors ${selectedItems.includes(item.id) ? 'bg-blue-50/50 dark:bg-primary/10' : ''}`}
              >
                <td className="w-4 p-4">
                  <input 
                    type="checkbox" 
                    checked={selectedItems.includes(item.id)}
                    onChange={() => toggleItem(item.id)}
                    className="w-4 h-4 text-primary bg-gray-100 border-gray-300 rounded focus:ring-primary dark:focus:ring-primary_dark dark:bg-gray-700" 
                  />
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="flex justify-center">
                    <div className="size-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary dark:text-primary_dark font-bold text-xs border border-blue-200 dark:border-primary/20">
                      {item.imagen}
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.nombre}
                </td>
                <td className="px-4 py-3">{item.sucursal}</td>
                <td className="px-4 py-3 text-center font-semibold">{item.precio}</td>
                
                {/* Toggle + Badge Col */}
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-3">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={item.activo} 
                        onChange={() => handleStatusChange(item.id)}
                        className="sr-only peer" 
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors duration-300 ${
                      item.activo 
                      ? 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300 dark:border-green-800' 
                      : 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800'
                    }`}>
                      {item.activo ? 'Activo' : 'Inactivo'}
                    </span>
                  </div>
                </td>

                {/* Acciones con Tooltips */}
                <td className="px-4 py-3">
                  <div className="flex items-center justify-center gap-2">
                    <ActionButton icon="eye" tooltip="Ver detalle" />
                    <ActionButton icon="edit" tooltip="Editar" />
                    <ActionButton icon="trash" tooltip="Borrar" variant="danger" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      <nav className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0 border-t border-gray-200 dark:border-gray-700" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Mostrando <span className="font-semibold text-gray-900 dark:text-white">1-10</span> de <span className="font-semibold text-gray-900 dark:text-white">100</span>
        </span>
        <ul className="inline-flex items-stretch -space-x-px">
          <li>
            <button className="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
            </button>
          </li>
          <li><button className="px-3 py-2 leading-tight text-white bg-primary border border-primary dark:bg-primary_dark">1</button></li>
          <li><button className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400">2</button></li>
          <li>
            <button className="flex items-center justify-center h-full py-1.5 px-3 text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );

}
type IconType = 'eye' | 'edit' | 'trash';

// Subcomponente para botones con Tooltip
function ActionButton({ icon, tooltip, variant = 'default', onClick }: { icon: IconType; tooltip: string; variant?: 'default' | 'danger'; onClick?: () => void; }) {
  const [showTooltip, setShowTooltip] = useState(false);


    const icons: Record<IconType, React.ReactNode> = {
        eye: <Eye size={18} strokeWidth={2} />,
        edit: <Edit3 size={18} strokeWidth={2} />,
        trash: <Trash2 size={18} strokeWidth={2} />,
    };

  const colors = variant === 'danger' 
    ? 'text-red-500 hover:bg-red-100 dark:hover:bg-red-900/20' 
    : 'text-primary hover:bg-gray-200 dark:text-primary_dark dark:hover:bg-gray-700';

  return (
    <div className="relative flex flex-col items-center">
      <button 
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`hover:cursor-pointer p-1.5 rounded-lg transition-colors duration-200 ${colors}`}
      >
        {icons[icon]}
      </button>
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute bottom-full mb-2 px-2 py-1 text-xs font-medium text-gray-700 bg-white rounded-md shadow-sm whitespace-nowrap z-50 pointer-events-none"
          >
            {tooltip}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}