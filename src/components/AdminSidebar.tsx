import { Sidebar, SidebarContent } from '@/components/ui/sidebar';
import { Users, Settings, BarChart, FileText, Bell } from 'lucide-react';

export function AdminSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="px-3 py-4">
          <h2 className="mb-4 text-lg font-semibold">Admin Panel</h2>
          <nav className="space-y-2">
            <a
              href="/admin"
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
            >
              <BarChart className="w-5 h-5" />
              <span>Dashboard</span>
            </a>
            <a
              href="/admin/users"
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
            >
              <Users className="w-5 h-5" />
              <span>Users</span>
            </a>
            <a
              href="/admin/reports"
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
            >
              <FileText className="w-5 h-5" />
              <span>Reports</span>
            </a>
            <a
              href="/admin/notifications"
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
            >
              <Bell className="w-5 h-5" />
              <span>Notifications</span>
            </a>
            <a
              href="/admin/settings"
              className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded"
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </a>
          </nav>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
