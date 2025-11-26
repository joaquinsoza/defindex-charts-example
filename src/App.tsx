import { useState, useCallback } from 'react';
import { JsonInput } from '@/components/JsonInput';
import { ChartPanel } from '@/components/ChartPanel';
import { exampleVaultDataJson, exampleVaultData } from '@/data/exampleVaultData';
import { parseAndDetect } from '@/lib/chartDetector';
import type { VaultData } from '@/types/vault';

function App() {
  const [jsonValue, setJsonValue] = useState(exampleVaultDataJson);
  const [parsedData, setParsedData] = useState<VaultData | null>(exampleVaultData);
  const [error, setError] = useState<string | null>(null);

  const handleJsonChange = useCallback((value: string) => {
    setJsonValue(value);

    if (!value.trim()) {
      setParsedData(null);
      setError(null);
      return;
    }

    const result = parseAndDetect(value);

    if (result.parseError) {
      setError(result.parseError);
      setParsedData(null);
      return;
    }

    if (!result.detection.isValid) {
      setError(result.detection.error ?? 'Invalid data format');
      setParsedData(null);
      return;
    }

    setError(null);
    setParsedData(result.data as VaultData);
  }, []);

  const handleReset = useCallback(() => {
    setJsonValue(exampleVaultDataJson);
    setParsedData(exampleVaultData);
    setError(null);
  }, []);

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">DeFindex Vault Chart Viewer</h1>
        <p className="text-muted-foreground mt-1">
          Paste your vault JSON data to visualize metrics
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[calc(100vh-140px)]">
        <JsonInput
          value={jsonValue}
          onChange={handleJsonChange}
          error={error}
          onReset={handleReset}
        />

        {parsedData ? (
          <ChartPanel data={parsedData} />
        ) : (
          <div className="flex items-center justify-center border border-dashed border-border rounded-lg">
            <p className="text-muted-foreground">
              {error ? 'Fix the JSON errors to see charts' : 'Paste valid JSON to see charts'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
