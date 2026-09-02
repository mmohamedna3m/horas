import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function AdminLayout({ children }) {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const menuItems = [
    { label: 'المنتجات', href: '/admin/products' },
    { label: 'الصفحات', href: '/admin/pages' },
    { label: 'الإعدادات', href: '/admin/settings' },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white transition-all duration-300`}>
        <div className="p-4 border-b border-gray-700">
          <h1 className={`font-bold text-xl ${!sidebarOpen && 'text-center'}`}>Horas</h1>
        </div>
        <nav className="mt-8">
          {menuItems.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-3 hover:bg-gray-700 ${
                router.pathname === item.href ? 'bg-gray-700 border-l-4 border-blue-500' : ''
              }`}
            >
              {sidebarOpen ? item.label : '📄'}
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-white shadow p-4 flex justify-between items-center">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 hover:text-gray-900"
          >
            ☰
          </button>
          <div className="flex items-center gap-4">
            <span className="text-gray-600">مرحبا، المسؤول</span>
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              تسجيل الخروج
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
