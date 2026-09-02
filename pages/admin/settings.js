import React from 'react';
import AdminLayout from '@/components/AdminLayout';
import toast from 'react-hot-toast';

export default function Settings() {
  const [settings, setSettings] = React.useState({
    siteTitle: 'Horas',
    siteLogo: '',
    primaryColor: '#3b82f6',
    secondaryColor: '#10b981',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    localStorage.setItem('horasSettings', JSON.stringify(settings));
    toast.success('تم حفظ الإعدادات');
  };

  return (
    <AdminLayout>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">إعدادات الموقع</h1>
        <div className="bg-white p-6 rounded shadow max-w-md">
          <div className="mb-4">
            <label className="block font-bold mb-2">عنوان الموقع</label>
            <input
              type="text"
              name="siteTitle"
              value={settings.siteTitle}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">شعار الموقع (رابط الصورة)</label>
            <input
              type="text"
              name="siteLogo"
              value={settings.siteLogo}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">اللون الأساسي</label>
            <input
              type="color"
              name="primaryColor"
              value={settings.primaryColor}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">اللون الثانوي</label>
            <input
              type="color"
              name="secondaryColor"
              value={settings.secondaryColor}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <button
            onClick={handleSave}
            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 font-bold"
          >
            حفظ الإعدادات
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
