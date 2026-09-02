import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [settings, setSettings] = useState({
    siteTitle: 'Horas',
    siteLogo: '',
    primaryColor: '#3b82f6',
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data.slice(0, 6));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold" style={{ color: settings.primaryColor }}>
            {settings.siteTitle}
          </h1>
          <div className="flex gap-6">
            <a href="/" className="text-gray-600 hover:text-gray-900">الرئيسية</a>
            <a href="/products" className="text-gray-600 hover:text-gray-900">المنتجات</a>
            <a href="/admin" className="text-gray-600 hover:text-gray-900">لوحة التحكم</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">مرحباً بك في Horas</h2>
          <p className="text-xl mb-8">اكتشف أفضل المنتجات بأسعار مميزة</p>
          <a href="/products" className="bg-white text-blue-600 px-8 py-3 rounded font-bold hover:bg-gray-100">
            تصفح المنتجات
          </a>
        </div>
      </section>

      {/* Products Preview */}
      <section className="max-w-7xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-12">أحدث المنتجات</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product._id} className="bg-white rounded shadow hover:shadow-lg transition">
              {product.image && (
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t" />
              )}
              <div className="p-4">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <p className="text-gray-600 text-sm mt-2">{product.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-green-600 font-bold text-lg">{product.price} جنيه</span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    أضف للسلة
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2024 {settings.siteTitle}. جميع الحقوق محفوظة.</p>
        </div>
      </footer>
    </div>
  );
}
