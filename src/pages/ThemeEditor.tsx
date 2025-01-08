import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DashboardLayout } from '@/components/layouts/DashboardLayout';
import { ColorPicker } from '@/components/ColorPicker';
import PublicView from '@/pages/PublicPage';
import { useTheme } from '@/hooks/useTheme';

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

export function ThemeEditor() {
  const { theme, updateTheme, resetTheme } = useTheme();
  const [editedTheme, setEditedTheme] = useState<ThemeConfig>(theme);

  useEffect(() => {
    setEditedTheme(theme);
  }, [theme]);

  const handleColorChange = (key: keyof ThemeConfig, value: string) => {
    setEditedTheme((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = async () => {
    await updateTheme(editedTheme);
  };

  const handleReset = async () => {
    await resetTheme();
  };

  return (
    <DashboardLayout title="Theme Editor" preview={<PublicView />}>
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-2xl font-semibold text-foreground">
          Customize Theme
        </h1>
        <p className="text-muted-foreground mt-1">
          Modify colors and styles for your bio page
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Color Settings</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <ColorPicker
            label="Background Color"
            value={editedTheme.background}
            onChange={(value) => handleColorChange('background', value)}
          />

          <ColorPicker
            label="Text Color"
            value={editedTheme.text}
            onChange={(value) => handleColorChange('text', value)}
          />

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ColorPicker
                label="Link Colors"
                sublabel="Background"
                value={editedTheme.linkBackground}
                onChange={(value) => handleColorChange('linkBackground', value)}
              />
              <ColorPicker
                label="Link Colors"
                sublabel="Background Hover"
                value={editedTheme.linkBackgroundHover}
                onChange={(value) =>
                  handleColorChange('linkBackgroundHover', value)
                }
              />
              <ColorPicker
                label="Link Colors"
                sublabel="Text"
                value={editedTheme.linkForeground}
                onChange={(value) => handleColorChange('linkForeground', value)}
              />
              <ColorPicker
                label="Link Colors"
                sublabel="Text Hover"
                value={editedTheme.linkForegroundHover}
                onChange={(value) =>
                  handleColorChange('linkForegroundHover', value)
                }
              />
            </div>
          </div>

          <ColorPicker
            label="Social Icon Color"
            value={editedTheme.primary}
            onChange={(value) => handleColorChange('primary', value)}
          />

          <h3 className="text-lg font-medium">Footer</h3>

          <ColorPicker
            label="Footer Text Color"
            value={editedTheme.footerText}
            onChange={(value) => handleColorChange('footerText', value)}
          />

          <div className="flex justify-end gap-2 pt-4">
            <Button variant="outline" onClick={handleReset}>
              Reset to Default
            </Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
