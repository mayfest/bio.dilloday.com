import { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/app';
import { BioItem } from '@/types';
import { useAuth } from '@/_hooks/useAuth';
import { DropResult } from 'react-beautiful-dnd';
import { useToast } from '@/hooks/use-toast';

export const useBioContent = () => {
  const [bioContent, setBioContent] = useState<BioItem[]>([]);
  const { currUser } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (currUser) {
      const fetchContent = async () => {
        try {
          const docSnap = await getDoc(doc(db, 'bio', 'content'));
          if (docSnap.exists()) {
            const data = docSnap.data().links;
            setBioContent(data);
          } else {
            toast({
              title: 'Error',
              description: 'No content found',
              variant: 'destructive',
              className: 'border-gray-200 text-left',
            });
          }
        } catch (error) {
          toast({
            title: 'Error',
            description: 'Failed to fetch content',
            variant: 'destructive',
            className: 'border-gray-200 text-left',
          });
          console.error('Error fetching document:', error);
        }
      };
      fetchContent();
    }
  }, [currUser, toast]);

  const updateBioContentInFirestore = async (updatedBioContent: BioItem[]) => {
    try {
      const docRef = doc(db, 'bio', 'content');
      await updateDoc(docRef, { links: updatedBioContent });
      setBioContent(updatedBioContent);
      return true;
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to update content',
        variant: 'destructive',
        className: 'border-gray-200 text-left',
      });
      console.error('Error updating document:', error);
      return false;
    }
  };

  const handleSaveLinkEdit = async (
    updatedLink: BioItem,
    selectedLink: BioItem
  ) => {
    const updatedBioContent = bioContent.map((item) =>
      item.title === selectedLink.title ? updatedLink : item
    );
    const success = await updateBioContentInFirestore(updatedBioContent);
    if (success) {
      toast({
        title: 'Success',
        description: 'Link updated successfully',
        className: 'border-gray-200 text-left',
      });
    }
  };

  const handleDeleteLink = async (linkToDelete: BioItem) => {
    const updatedBioContent = bioContent.filter(
      (item) => item.title !== linkToDelete.title
    );
    const success = await updateBioContentInFirestore(updatedBioContent);
    if (success) {
      toast({
        title: 'Success',
        description: `"${linkToDelete.title}" deleted successfully`,
        className: 'border-gray-200 text-left',
      });
    }
  };

  const handleCreateLink = async (newLink: BioItem) => {
    const updatedBioContent = [...bioContent, newLink];
    const success = await updateBioContentInFirestore(updatedBioContent);
    if (success) {
      toast({
        title: 'Success',
        description: `"${newLink.title}" created successfully`,
        className: 'border-gray-200 text-left',
      });
    }
  };

  const handleOnDragEnd = async (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(bioContent);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    const success = await updateBioContentInFirestore(items);
    if (success) {
      toast({
        title: 'Success',
        description: 'Links reordered successfully',
        className: 'border-gray-200 text-left',
      });
    }
  };

  return {
    bioContent,
    setBioContent,
    handleSaveLinkEdit,
    handleDeleteLink,
    handleCreateLink,
    handleOnDragEnd,
  };
};
