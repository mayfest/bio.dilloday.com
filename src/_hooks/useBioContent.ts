import { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/app';
import { BioItem } from '@/types';
import { useAuth } from '@/_hooks/useAuth';
import { DropResult } from 'react-beautiful-dnd';
export const useBioContent = () => {
  const [bioContent, setBioContent] = useState<BioItem[]>([]);
  const { currUser } = useAuth();

  useEffect(() => {
    if (currUser) {
      const fetchContent = async () => {
        try {
          const docSnap = await getDoc(doc(db, 'bio', 'content'));
          if (docSnap.exists()) {
            console.log('Document data:', docSnap.data());
            const data = docSnap.data().links;
            console.log('data', data);
            setBioContent(data);
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching document:', error);
        }
      };
      fetchContent();
    }
  }, [currUser]);

  const updateBioContentInFirestore = async (updatedBioContent: BioItem[]) => {
    try {
      const docRef = doc(db, 'bio', 'content');
      await updateDoc(docRef, { links: updatedBioContent });
      setBioContent(updatedBioContent);
      window.location.reload();
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  const handleSaveLinkEdit = async (
    updatedLink: BioItem,
    selectedLink: BioItem
  ) => {
    console.log('saving link edit', updatedLink);
    const updatedBioContent = bioContent.map((item) =>
      item.title === selectedLink.title ? updatedLink : item
    );
    await updateBioContentInFirestore(updatedBioContent);
    console.log('updated bio content', updatedBioContent);
    window.location.reload();
  };

  const handleDeleteLink = async (linkToDelete: BioItem) => {
    const updatedBioContent = bioContent.filter(
      (item) => item.title !== linkToDelete.title
    );
    await updateBioContentInFirestore(updatedBioContent);
    window.location.reload();
  };

  const handleCreateLink = async (newLink: BioItem) => {
    const updatedBioContent = [...bioContent, newLink];
    await updateBioContentInFirestore(updatedBioContent);
    window.location.reload();
  };

  const handleOnDragEnd = async (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(bioContent);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    await updateBioContentInFirestore(items);
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
