import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useBioLinks } from '@/_hooks/useBioLinks';
import { ExternalLink } from 'lucide-react';

const LivePreview = () => {
  const { links, status } = useBioLinks();

  if (status) {
    return (
      <div className="flex items-center justify-center p-8">
        <p className="text-muted-foreground">{status}</p>
      </div>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-xl text-center">Live Preview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {links ? (
          links.map((link, index) => (
            <a
              key={`${link.title}-${index}`}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="transition-all hover:bg-accent">
                <CardContent className="flex items-center justify-between p-4">
                  <span className="font-medium">{link.title}</span>
                  <ExternalLink className="h-4 w-4 text-muted-foreground" />
                </CardContent>
              </Card>
            </a>
          ))
        ) : (
          <div className="text-center text-muted-foreground">
            No links available
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default LivePreview;
