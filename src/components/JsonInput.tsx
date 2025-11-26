import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { exampleVaultDataJson } from '@/data/exampleVaultData';

interface JsonInputProps {
  value: string;
  onChange: (value: string) => void;
  error: string | null;
  onReset: () => void;
}

export function JsonInput({ value, onChange, error, onReset }: JsonInputProps) {
  const isDefault = value === exampleVaultDataJson;

  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <CardHeader className="pb-2 flex-shrink-0">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle>JSON Input</CardTitle>
            <CardDescription className="mt-1">
              Paste your vault data JSON here
            </CardDescription>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={onReset}
            disabled={isDefault}
          >
            Reset to Example
          </Button>
        </div>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col gap-2 overflow-hidden min-h-0">
        <Textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Paste JSON here..."
          className={`flex-1 font-mono text-sm resize-none overflow-y-auto ${
            error ? 'border-red-500 focus-visible:ring-red-500' : ''
          }`}
        />
        {error && (
          <div className="text-sm text-red-500 bg-red-500/10 rounded-md p-3 flex-shrink-0">
            <span className="font-semibold">Error:</span> {error}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
