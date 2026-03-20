"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Edit3, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface TableItem {
  id: number;
  nombre: string;
  sucursal: string;
  precio: string;
  activo: boolean;
  imagen: string;
}

const initialData: TableItem[] = Array.from({ length: 500 }, (_, i) => {
  const id = i + 1;
  const barrios = [
    "Palermo", "Recoleta", "Belgrano", "Puerto Madero", "Caballito", "Villa Urquiza", 
    "San Telmo", "Almagro", "Colegiales", "Nuñez", "Flores", "Barracas", "Devoto", 
    "Saavedra", "Balvanera", "Monserrat", "Retiro", "Chacarita", "Villa Crespo", "Liniers"
  ];
  const tipos = ["Combo", "Menú", "Promoción", "Pack", "Set"];
  const categorias = ["Light", "Premium", "Tradicional", "Vegano", "Clásico", "Ejecutivo", "Gourmet", "Fitness", "Deluxe", "Express"];
  
  const nombreAleatorio = `${tipos[id % tipos.length]} ${categorias[id % categorias.length]} #${id}`;
  const sucursalAleatoria = barrios[id % barrios.length];
  const precioAleatorio = `$${(Math.floor(Math.random() * (8000 - 1200 + 1)) + 1200).toLocaleString('es-AR')}`;
  const activoAleatorio = Math.random() > 0.3;

  return {
    id: id,
    nombre: nombreAleatorio,
    sucursal: sucursalAleatoria,
    precio: precioAleatorio,
    activo: activoAleatorio,
    imagen: '/images/cover/cover-default.svg'
  };
});

export default function MainDataTable() {
  const [data, setData] = useState(initialData);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 

  // Lógica de Paginado
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  // Generar rango de páginas con elipsis
  const getPageRange = () => {
    const range: (number | string)[] = [];
    const delta = 1; 

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      } else if (i === currentPage - delta - 1 || i === currentPage + delta + 1) {
        range.push("...");
      }
    }
    return range.filter((item, pos, self) => self.indexOf(item) === pos);
  };

  const toggleAllCurrentPage = () => {
    const currentPageIds = currentItems.map(item => item.id);
    const allSelected = currentPageIds.every(id => selectedItems.includes(id));

    if (allSelected) {
      setSelectedItems(prev => prev.filter(id => !currentPageIds.includes(id)));
    } else {
      setSelectedItems(prev => [...new Set([...prev, ...currentPageIds])]);
    }
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
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600">
            <tr>
              <th scope="col" className="p-4">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    checked={currentItems.length > 0 && currentItems.every(item => selectedItems.includes(item.id))}
                    onChange={toggleAllCurrentPage}
                    className="appearance-none w-4 h-4 border border-gray-300 rounded-sm bg-white focus:ring-2 focus:ring-primary/30 checked:bg-primary checked:border-primary transition-all duration-200 cursor-pointer"
                  />
                </div>
              </th>
              <th scope="col" className="px-4 py-3 text-center">Imagen</th>
              <th scope="col" className="px-4 py-3">Nombre</th>
              <th scope="col" className="px-4 py-3">Sucursal</th>
              <th scope="col" className="px-4 py-3 text-center">Precio</th>
              <th scope="col" className="px-4 py-3">Estado</th>
              <th scope="col" className="px-4 py-3 text-center">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr 
                key={item.id} 
                className={`border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors ${selectedItems.includes(item.id) ? 'bg-blue-50/50 dark:bg-primary/10' : ''}`}
              >
                <td className="w-4 p-4">
                  <input 
                    type="checkbox" 
                    checked={selectedItems.includes(item.id)}
                    onChange={() => toggleItem(item.id)}
                    className="appearance-none w-4 h-4 border border-gray-300 rounded-sm bg-white focus:ring-2 focus:ring-primary/30 checked:bg-primary checked:border-primary transition-all duration-200 cursor-pointer"
                  />
                </td>
                <td className="px-4 py-3 text-center">
                  <div className="flex items-center justify-center">
                    <Image
                      src={item.imagen} 
                      alt={item.nombre}
                      width={40}
                      height={40}
                      className="object-cover w-10 h-10 rounded-lg bg-gray-100 border border-gray-200"
                    />
                  </div>
                </td>
                <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.nombre}
                </td>
                <td className="px-4 py-3">{item.sucursal}</td>
                <td className="px-4 py-3 text-center font-semibold">{item.precio}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        checked={item.activo} 
                        onChange={() => handleStatusChange(item.id)}
                        className="sr-only peer" 
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                      item.activo 
                      ? 'bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-300' 
                      : 'bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300'
                    }`}>
                      {item.activo ? 'Activo' : 'Inactivo'}
                    </span>
                  </div>
                </td>
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
      <nav className="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0 border-t border-gray-200 dark:border-gray-700">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Mostrando <span className="font-semibold text-gray-900 dark:text-white">{indexOfFirstItem + 1}-{Math.min(indexOfLastItem, data.length)}</span> de <span className="font-semibold text-gray-900 dark:text-white">{data.length}</span>
        </span>
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <button 
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="flex items-center justify-center h-9 px-3 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
          </li>
          
          {getPageRange().map((page, index) => (
            <li key={index}>
              {page === "..." ? (
                <span className="flex items-center justify-center h-9 px-3 leading-tight text-gray-500 bg-white border border-gray-300 dark:bg-gray-800 dark:border-gray-700">...</span>
              ) : (
                <button 
                  onClick={() => setCurrentPage(Number(page))}
                  className={`flex items-center justify-center h-9 px-3 leading-tight border transition-colors cursor-pointer ${
                    currentPage === page 
                    ? 'text-white bg-blue-600 border-blue-600 z-10' 
                    : 'text-gray-500 bg-white border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700'
                  }`}
                >
                  {page}
                </button>
              )}
            </li>
          ))}

          <li>
            <button 
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="flex items-center justify-center h-9 px-3 text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

// ActionButton Component
type IconType = 'eye' | 'edit' | 'trash';

function ActionButton({ icon, tooltip, variant = 'default', onClick }: { icon: IconType; tooltip: string; variant?: 'default' | 'danger'; onClick?: () => void; }) {
  const [showTooltip, setShowTooltip] = useState(false);

  const icons: Record<IconType, React.ReactNode> = {
    eye: <Eye size={18} />,
    edit: <Edit3 size={18} />,
    trash: <Trash2 size={18} />,
  };

  const colors = variant === 'danger' 
    ? 'text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20' 
    : 'text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-900/20';

  return (
    <div className="relative flex flex-col items-center">
      <button 
        onClick={onClick}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className={`p-1.5 rounded-lg transition-colors duration-200 cursor-pointer ${colors}`}
      >
        {icons[icon]}
      </button>
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className="absolute bottom-full mb-2 px-2 py-1 text-[10px] font-bold text-white bg-gray-900 rounded shadow-sm whitespace-nowrap z-50 pointer-events-none"
          >
            {tooltip}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}