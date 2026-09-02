import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function PagesAdmin() {
  const [pages, setPages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    content: '',
    theme: {
      primaryColor: '#3b82f6',
      secondaryColor: '#10b981',
      backgroundColor: '#ffffff',
      textColor: '#000000',
    },
    sections: [],
  });

  useEffect(() => {
    fetchPages();
  }, []);

  const fetchPages = async () => {
    try {
      const response = await axios.get('/api/pages');
      setPages(response.data);
    } catch (error) {
      toast.error('خطأ في تحميل الصفحات');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleThemeChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      theme: { ...prev.theme, [name]: value }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await axios.put(`/api/pages/${editingId}`, formData);
        toast.success('تم تحديث الصفحة');
      } else {
        await axios.post('/api/pages', formData);
        toast.success('تم إنشاء صفحة جديدة');
      }
      fetchPages();
      resetForm();
    } catch (error) {
      toast.error('خطأ في حفظ الصفحة');
    }
  };

  const handleEdit = (page) => {
    setFormData(page);
    setEditingId(page._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (confirm('هل تريد حذف هذه الصفحة؟')) {
      try {
        await axios.delete(`/api/pages/${id}`);
        toast.success('تم حذف الصفحة');
        fetchPages();
      } catch (error) {
        toast.error('خطأ في حذف الصفحة');
      }
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      content: '',
      theme: {
        primaryColor: '#3b82f6',
        secondaryColor: '#10b981',
        backgroundColor: '#ffffff',
        textColor: '#000000',
      },
      sections: [],
    });
    setEditingId(null);
    setShowForm(false);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">إدارة الصفحات</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {showForm ? 'إلغاء' : 'إنشاء صفحة جديدة'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded mb-6">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="title"
              placeholder="عنوان الصفحة"
              value={formData.title}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            />
            <input
              type="text"
              name="slug"
              placeholder="الرابط (slug)"
              value={formData.slug}
              onChange={handleChange}
              required
              className="p-2 border rounded"
            />
            <textarea
              name="content"
              placeholder="محتوى الصفحة"
              value={formData.content}
              onChange={handleChange}
              className="p-2 border rounded col-span-2"
            />
          </div>

          <h3 className="font-bold mt-4 mb-2">تخصيص الألوان</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label>اللون الأساسي</label>
              <input
                type="color"
                name="primaryColor"
                value={formData.theme.primaryColor}
                onChange={handleThemeChange}
                className="p-2 border rounded w-full"
              />
            </div>
            <div>
              <label>اللون الثانوي</label>
              <input
                type="color"
                name="secondaryColor"
                value={formData.theme.secondaryColor}
                onChange={handleThemeChange}
                className="p-2 border rounded w-full"
              />
            </div>
            <div>
              <label>لون الخلفية</label>
              <input
                type="color"
                name="backgroundColor"
                value={formData.theme.backgroundColor}
                onChange={handleThemeChange}
                className="p-2 border rounded w-full"
              />
            </div>
            <div>
              <label>لون النص</label>
              <input
                type="color"
                name="textColor"
                value={formData.theme.textColor}
                onChange={handleThemeChange}
                className="p-2 border rounded w-full"
              />
            </div>
          </div>

          <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600">
            {editingId ? 'تحديث' : 'إنشاء'}
          </button>
        </form>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {pages.map(page => (
          <div
            key={page._id}
            className="p-4 rounded shadow"
            style={{
              backgroundColor: page.theme?.backgroundColor,
              color: page.theme?.textColor,
            }}
          >
            <h3 className="font-bold text-lg">{page.title}</h3>
            <p className="text-sm mt-1">الرابط: /{page.slug}</p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleEdit(page)}
                className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
              >
                تعديل
              </button>
              <button
                onClick={() => handleDelete(page._id)}
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
