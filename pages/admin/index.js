import AdminLayout from '@/components/AdminLayout';
import ProductsAdmin from './products';

export default function AdminDashboard() {
  return (
    <AdminLayout>
      <ProductsAdmin />
    </AdminLayout>
  );
}
