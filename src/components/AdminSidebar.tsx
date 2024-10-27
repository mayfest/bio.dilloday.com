import { Sidebar, SidebarContent } from '@/components/ui/sidebar';
import { Users, Unlink2, Paintbrush } from 'lucide-react';

const sidebarItems = [
  {
    title: 'Links',
    icon: Unlink2,
    href: '/admin',
  },
  {
    title: 'Bio Theme',
    icon: Paintbrush,
    href: '/admin/theme',
  },
  {
    title: 'Users',
    icon: Users,
    href: '/admin/users',
  },
];

export function AdminSidebar() {
  return (
    <Sidebar className="border-r border-border">
      <SidebarContent>
        <div className="px-3 py-4">
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Dillo Day Bio Admin
          </h2>
          <nav className="space-y-2">
            {sidebarItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-center justify-start gap-2 px-4 py-2 rounded-md hover:bg-primary hover:text-white transition-colors duration-200"
              >
                <item.icon size={20} />
                <span>{item.title}</span>
              </a>
            ))}
          </nav>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
