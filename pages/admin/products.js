import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function ProductsAdmin() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    category: '',
    stock: '',
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      toast.error('خطأ في تحميل المنتجات');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`/api/products/${editingId}`, formData);
        toast.success('تم تحديث المنتج');
      } else {
        await axios.post('/api/products', formData);
        toast.success('تم إضافة المنتج');
      }
      fetchProducts();
      resetForm();
    } catch (error) {
      toast.error('خطأ في حفظ المنتج');
    }
  };

  const handleEdit = (product) => {
    setFormData(product);
    setEditingId(product._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm('هل تريد حذف هذا المنتج؟')) {
      try {
        await axios.delete(`/api/products/${id}`);
        toast.success('تم حذف المنتج');
        fetchProducts();
      } catch (error) {
        toast.error('خطأ في حذف المنتج');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      image: '',
      category: '',
      stock: '',
    });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">إدارة المنتجات</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {showForm ? 'إلغاء' : 'إضافة منتج جديد'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded mb-6">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="اسم المنتج"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            />
            <input
              type="number"
              name="price"
              placeholder="السعر"
              value={formData.price}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            />
            <textarea
              name="description"
              placeholder="الوصف"
              value={formData.description}
              onChange={handleChange}
              className="p-2 border rounded col-span-2"
            />
            <input
              type="text"
              name="image"
              placeholder="رابط الصورة"
              value={formData.image}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="category"
              placeholder="الفئة"
              value={formData.category}
              onChange={handleChange}
              className="p-2 border rounded"
            />
            <input
              type="number"
              name="stock"
              placeholder="المخزون"
              value={formData.stock}
              onChange={handleChange}
              className="p-2 border rounded"
            />
          </div>
          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600">
            {editingId ? 'تحديث' : 'حفظ'}
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product._id} className="bg-white p-4 rounded shadow">
            {product.image && <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />}
            <h3 className="font-bold mt-2">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
            <p className="text-lg font-bold text-green-600 mt-2">{product.price} جنيه</p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleEdit(product)}
                className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
              >
                تعديل
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
              >
                حذف
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
