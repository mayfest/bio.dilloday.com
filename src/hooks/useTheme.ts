import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '@/app';
import { useToast } from '@/hooks/use-toast';

interface ThemeConfig {
  background: string;
  text: string;
  linkBackground: string;
  linkBackgroundHover: string;
  linkForeground: string;
  linkForegroundHover: string;
  footerText: string;
  primary: string;
}

const defaultTheme: ThemeConfig = {
  background: '#ffffff',
  text: '#000000',
  linkBackground: '#f0f0f0',
  linkBackgroundHover: '#e0e0e0',
  linkForeground: '#000000',
  linkForegroundHover: '#000000',
  footerText: '#666666',
  primary: '#000000',
};

export function useTheme() {
  const [theme, setTheme] = useState<ThemeConfig>(defaultTheme);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const fetchTheme = async () => {
      try {
        const themeDoc = await getDoc(doc(db, 'bio', 'theme'));
        if (themeDoc.exists()) {
          setTheme(themeDoc.data() as ThemeConfig);
        } else {
          await setDoc(doc(db, 'bio', 'theme'), defaultTheme);
          setTheme(defaultTheme);
          toast({
            title: 'Info',
            description: 'Using default theme',
            className: 'border-gray-200 text-left',
          });
        }
      } catch (err) {
        console.error('Error fetching theme:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch theme');
        setTheme(defaultTheme);
        toast({
          title: 'Error',
          description: 'Failed to fetch theme. Using default theme.',
          variant: 'destructive',
          className: 'border-gray-200 text-left',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTheme();
  }, [toast]);

  const updateTheme = async (newTheme: ThemeConfig) => {
    try {
      await setDoc(doc(db, 'bio', 'theme'), newTheme);
      setTheme(newTheme);
      toast({
        title: 'Success',
        description: 'Theme updated successfully',
        className: 'border-gray-200 text-left',
      });
    } catch (err) {
      console.error('Error updating theme:', err);
      setError(err instanceof Error ? err.message : 'Failed to update theme');
      toast({
        title: 'Error',
        description: 'Failed to update theme',
        variant: 'destructive',
        className: 'border-gray-200 text-left',
      });
      throw err;
    }
  };

  const resetTheme = async () => {
    try {
      await setDoc(doc(db, 'bio', 'theme'), defaultTheme);
      setTheme(defaultTheme);
      toast({
        title: 'Success',
        description: 'Theme reset to default',
        className: 'border-gray-200 text-left',
      });
    } catch (err) {
      console.error('Error resetting theme:', err);
      setError(err instanceof Error ? err.message : 'Failed to reset theme');
      toast({
        title: 'Error',
        description: 'Failed to reset theme',
        variant: 'destructive',
        className: 'border-gray-200 text-left',
      });
      throw err;
    }
  };

  return {
    theme,
    loading,
    error,
    updateTheme,
    resetTheme,
  };
}
