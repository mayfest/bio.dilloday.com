import { useState } from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/AdminSidebar';
import { useBioContent } from '@/_hooks/useBioContent';
import { Pencil, Trash2, GripVertical, ExternalLink, Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import PublicView from '@/pages/PublicPage';

interface BioItem {
  title: string;
  url: string;
}

export function AdminDashboard() {
  const {
    bioContent,
    handleSaveLinkEdit,
    handleDeleteLink,
    handleCreateLink,
    handleOnDragEnd,
  } = useBioContent();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedLink, setSelectedLink] = useState<BioItem | null>(null);
  const [editedLink, setEditedLink] = useState<BioItem>({ title: '', url: '' });
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  const handleEditClick = (link: BioItem) => {
    setSelectedLink(link);
    setEditedLink(link);
    setIsEditModalOpen(true);
  };

  const handleEditSave = () => {
    if (selectedLink) {
      handleSaveLinkEdit(editedLink, selectedLink);
      setIsEditModalOpen(false);
    }
  };

  const handleCreateNew = () => {
    handleCreateLink(editedLink);
    setIsCreateModalOpen(false);
    setEditedLink({ title: '', url: '' });
  };

  return (
    <SidebarProvider defaultOpen>
      <div className="flex min-h-screen bg-background w-screen">
        <AdminSidebar />

        <div className="flex-1 flex flex-col min-w-0">
          <header className="sticky top-0 z-30 flex h-16 items-center border-b border-border bg-background">
            <SidebarTrigger className="px-6" />
            <h1 className="text-xl font-semibold text-foreground">
              Link Manager
            </h1>
          </header>
          <div className="flex-1 grid grid-cols-1 md:grid-cols-[1fr,320px] xl:grid-cols-[1fr,400px] gap-6">
            <main className="p-4 md:p-6 border-r border-border overflow-y-auto">
              <div className="flex flex-col items-center text-center mb-8">
                <h1 className="text-2xl font-semibold text-foreground">
                  Manage Links
                </h1>
                <p className="text-muted-foreground mt-1">
                  Drag and drop to reorder your links, or edit them directly.
                </p>
              </div>

              <div className="max-w-3xl mx-auto space-y-4">
                <Button
                  onClick={() => {
                    setEditedLink({ title: '', url: '' });
                    setIsCreateModalOpen(true);
                  }}
                  variant="secondary"
                  className="w-full h-14"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add New Link
                </Button>

                <DragDropContext onDragEnd={handleOnDragEnd}>
                  <Droppable droppableId="links">
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="space-y-2"
                      >
                        {bioContent.map((link, index) => (
                          <Draggable
                            key={link.title}
                            draggableId={link.title}
                            index={index}
                          >
                            {(provided) => (
                              <Card
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                className="bg-card hover:bg-accent/50 transition-colors"
                              >
                                <CardContent className="flex items-center p-4">
                                  <div
                                    {...provided.dragHandleProps}
                                    className="mr-4 cursor-grab"
                                  >
                                    <GripVertical className="h-5 w-5 text-muted-foreground" />
                                  </div>
                                  <div className="flex-1 min-w-0 mr-4">
                                    <h3 className="text-card-foreground font-medium">
                                      {link.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground truncate">
                                      {link.url}
                                    </p>
                                  </div>
                                  <div className="flex gap-2">
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleEditClick(link)}
                                    >
                                      <Pencil className="h-4 w-4" />
                                    </Button>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => handleDeleteLink(link)}
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                    <Button variant="ghost" size="icon" asChild>
                                      <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <ExternalLink className="h-4 w-4" />
                                      </a>
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              </div>
            </main>
            <aside className="hidden md:block relative border-2 border-border">
              <div className="sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto">
                <PublicView />
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
          </div>
        </div>

        <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Link</DialogTitle>
              <DialogDescription>
                Make changes to your link here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={editedLink.title}
                  onChange={(e) =>
                    setEditedLink({ ...editedLink, title: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="url">URL</Label>
                <Input
                  id="url"
                  value={editedLink.url}
                  onChange={(e) =>
                    setEditedLink({ ...editedLink, url: e.target.value })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsEditModalOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleEditSave}>Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Link</DialogTitle>
              <DialogDescription>
                Add a new link to your collection.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="new-title">Title</Label>
                <Input
                  id="new-title"
                  value={editedLink.title}
                  onChange={(e) =>
                    setEditedLink({ ...editedLink, title: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-url">URL</Label>
                <Input
                  id="new-url"
                  value={editedLink.url}
                  onChange={(e) =>
                    setEditedLink({ ...editedLink, url: e.target.value })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button
                variant="outline"
                onClick={() => setIsCreateModalOpen(false)}
              >
                Cancel
              </Button>
              <Button onClick={handleCreateNew}>Create Link</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={isPreviewModalOpen} onOpenChange={setIsPreviewModalOpen}>
          <DialogContent className="h-[90vh] w-full max-w-md mx-auto p-0">
            <DialogHeader className="px-6 py-4 border-b">
              <DialogTitle>Links in Bio Preview</DialogTitle>
            </DialogHeader>
            <div className="flex-1 overflow-y-auto">
              <PublicView />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </SidebarProvider>
  );
}
