import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function DynamicPage() {
  const router = useRouter();
  const { slug } = router.query;
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchPage();
    }
  }, [slug]);

  const fetchPage = async () => {
    try {
      const response = await axios.get('/api/pages');
      const foundPage = response.data.find(p => p.slug === slug);
      setPage(foundPage);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-12">جاري التحميل...</div>;
  if (!page) return <div className="text-center py-12">لم يتم العثور على الصفحة</div>;

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: page.theme?.backgroundColor,
        color: page.theme?.textColor,
      }}
    >
      {/* Navigation */}
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Horas</h1>
          <div className="flex gap-6">
            <a href="/" className="text-gray-600 hover:text-gray-900">الرئيسية</a>
            <a href="/products" className="text-gray-600 hover:text-gray-900">المنتجات</a>
            <a href="/admin" className="text-gray-600 hover:text-gray-900">لوحة التحكم</a>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">{page.title}</h1>
        <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: page.content }}></div>
      </div>
    </div>
  );
}
