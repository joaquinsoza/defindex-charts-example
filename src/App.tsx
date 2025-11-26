import { useState, useCallback } from 'react';
import { JsonInput } from '@/components/JsonInput';
import { ChartPanel } from '@/components/ChartPanel';
import { UserChartPanel } from '@/components/UserChartPanel';
import { exampleVaultDataJson, exampleVaultData } from '@/data/exampleVaultData';
import { exampleUserDataJson, exampleUserData } from '@/data/exampleUserData';
import { parseAndDetect } from '@/lib/chartDetector';
import type { VaultData } from '@/types/vault';
import type { UserPerformanceData } from '@/types/userPerformance';

function App() {
  // Vault data state
  const [vaultJsonValue, setVaultJsonValue] = useState(exampleVaultDataJson);
  const [vaultData, setVaultData] = useState<VaultData | null>(exampleVaultData);
  const [vaultError, setVaultError] = useState<string | null>(null);

  // User data state
  const [userJsonValue, setUserJsonValue] = useState(exampleUserDataJson);
  const [userData, setUserData] = useState<UserPerformanceData | null>(exampleUserData);
  const [userError, setUserError] = useState<string | null>(null);

  const handleVaultJsonChange = useCallback((value: string) => {
    setVaultJsonValue(value);

    if (!value.trim()) {
      setVaultData(null);
      setVaultError(null);
      return;
    }

    const result = parseAndDetect(value);

    if (result.parseError) {
      setVaultError(result.parseError);
      setVaultData(null);
      return;
    }

    if (!result.detection.isValid || result.detection.type !== 'vault') {
      setVaultError(result.detection.error ?? 'Expected vault data format');
      setVaultData(null);
      return;
    }

    setVaultError(null);
    setVaultData(result.data as VaultData);
  }, []);

  const handleUserJsonChange = useCallback((value: string) => {
    setUserJsonValue(value);

    if (!value.trim()) {
      setUserData(null);
      setUserError(null);
      return;
    }

    const result = parseAndDetect(value);

    if (result.parseError) {
      setUserError(result.parseError);
      setUserData(null);
      return;
    }

    if (!result.detection.isValid || result.detection.type !== 'user') {
      setUserError(result.detection.error ?? 'Expected user performance data format');
      setUserData(null);
      return;
    }

    setUserError(null);
    setUserData(result.data as UserPerformanceData);
  }, []);

  const handleVaultReset = useCallback(() => {
    setVaultJsonValue(exampleVaultDataJson);
    setVaultData(exampleVaultData);
    setVaultError(null);
  }, []);

  const handleUserReset = useCallback(() => {
    setUserJsonValue(exampleUserDataJson);
    setUserData(exampleUserData);
    setUserError(null);
  }, []);

  return (
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">DeFindex Chart Viewer</h1>
        <p className="text-muted-foreground mt-1">
          Paste your vault or user performance JSON data to visualize metrics
        </p>
      </header>

      {/* Vault Performance Section */}
      <section className="mb-12">
        <h2 className="text-lg font-semibold text-foreground mb-4">Vault Performance</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative min-h-[400px]">
            <div className="absolute inset-0">
              <JsonInput
                value={vaultJsonValue}
                onChange={handleVaultJsonChange}
                error={vaultError}
                onReset={handleVaultReset}
                title="Vault JSON"
                description="Paste your vault data JSON here"
              />
            </div>
          </div>

          <div>
            {vaultData ? (
              <ChartPanel data={vaultData} />
            ) : (
              <div className="flex items-center justify-center border border-dashed border-border rounded-lg h-full min-h-[400px]">
                <p className="text-muted-foreground">
                  {vaultError ? 'Fix the JSON errors to see charts' : 'Paste valid vault JSON to see charts'}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* User Performance Section */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold text-foreground mb-4">User Performance</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="relative min-h-[400px]">
            <div className="absolute inset-0">
              <JsonInput
                value={userJsonValue}
                onChange={handleUserJsonChange}
                error={userError}
                onReset={handleUserReset}
                title="User JSON"
                description="Paste your user performance data JSON here"
              />
            </div>
          </div>

          <div>
            {userData ? (
              <UserChartPanel data={userData} />
            ) : (
              <div className="flex items-center justify-center border border-dashed border-border rounded-lg h-full min-h-[400px]">
                <p className="text-muted-foreground">
                  {userError ? 'Fix the JSON errors to see charts' : 'Paste valid user JSON to see charts'}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
