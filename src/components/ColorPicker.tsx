import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  sublabel?: string;
}

export function ColorPicker({
  label,
  value,
  onChange,
  sublabel,
}: ColorPickerProps) {
  return (
    <div className="space-y-4">
      <div className="min-h-[3rem]">
        <Label>{label}</Label>{' '}
        {sublabel && <Label className="text-sm">{sublabel}</Label>}
        <div className="flex gap-2">
          <Input
            type="color"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-12 h-12 p-1"
          />
          <Input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
}
