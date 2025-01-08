import { ReactNode, useState } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/AdminSidebar';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface DashboardLayoutProps {
  title: string;
  children: ReactNode;
  preview?: ReactNode;
}

export function DashboardLayout({
  title,
  children,
  preview,
}: DashboardLayoutProps) {
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen bg-background min-w-full">
        <AdminSidebar />

        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-30 flex h-16 items-center border-b border-border bg-background">
            <SidebarTrigger className="px-6" />
            <h1 className="text-xl font-semibold text-foreground">{title}</h1>
          </header>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr,320px] xl:grid-cols-[1fr,400px]">
            <main className="p-4 md:p-6 border-r border-border overflow-y-auto">
              {children}
            </main>

            {preview && (
              <>
                <aside className="hidden md:block relative border-l border-border">
                  <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
                    {preview}
                  </div>
                </aside>
                <div className="md:hidden fixed bottom-4 right-4 z-20">
                  <Button
                    onClick={() => setIsPreviewModalOpen(true)}
                    size="lg"
                    className="rounded-full shadow-lg"
                  >
                    Preview
                  </Button>
                </div>
              </>
            )}
          </div>
        </div>

        {preview && (
          <Dialog
            open={isPreviewModalOpen}
            onOpenChange={setIsPreviewModalOpen}
          >
            <DialogContent className="h-[90vh] w-full max-w-md mx-auto p-0">
              <DialogHeader className="px-6 py-4 border-b">
                <DialogTitle>Preview</DialogTitle>
              </DialogHeader>
              <div className="flex-1 overflow-y-auto">{preview}</div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </SidebarProvider>
  );
}
