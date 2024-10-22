import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/AdminSidebar';

export function AdminDashboard() {
  console.log('AdminDashboard');
  return (
    <SidebarProvider>
      <div className="min-h-screen flex">
        <AdminSidebar />
        <main className="p4-4">
          <SidebarTrigger className="p4" />
          <div className="p-6">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <div className="mt-6 bg-white shadow-md rounded-lg p-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Welcome back, Admin
              </h2>
              <p className="text-gray-600">Here are some things you can do</p>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
