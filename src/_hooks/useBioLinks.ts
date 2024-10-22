import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../app';
import { LinkData } from '../types';

interface UseBioLinksResult {
  links: LinkData[] | null;
  status: string;
}

export const useBioLinks = (): UseBioLinksResult => {
  const [status, setStatus] = useState('');
  const [links, setLinks] = useState<LinkData[] | null>(null);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        const docRef = await getDoc(doc(db, 'bio', 'content'));
        if (docRef.exists()) {
          setLinks(docRef.data().links);
        }
      } catch (error) {
        setStatus(`Error getting links: ${error}`);
      }
    };

    fetchLinks();

    // no need to show loading status if load times are fast
    const timeout = setTimeout(() => {
      setStatus('Dilloading links...');
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return { links, status };
};
