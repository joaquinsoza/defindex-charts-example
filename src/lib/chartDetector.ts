import type { VaultData } from '@/types/vault';
import type { UserPerformanceData } from '@/types/userPerformance';

export type DataType = 'vault' | 'user' | 'unknown';

export interface DetectionResult {
  type: DataType;
  isValid: boolean;
  error?: string;
}

function isVaultData(data: unknown): data is VaultData {
  if (typeof data !== 'object' || data === null) return false;

  const obj = data as Record<string, unknown>;

  return (
    typeof obj.vaultAddress === 'string' &&
    typeof obj.vaultName === 'string' &&
    typeof obj.vaultSymbol === 'string' &&
    typeof obj.accountAddress !== 'string' && // Not user data
    Array.isArray(obj.data) &&
    obj.data.length > 0 &&
    typeof (obj.data[0] as Record<string, unknown>)?.vaultPPS === 'number' &&
    typeof (obj.data[0] as Record<string, unknown>)?.timestamp === 'string'
  );
}

function isUserPerformanceData(data: unknown): data is UserPerformanceData {
  if (typeof data !== 'object' || data === null) return false;

  const obj = data as Record<string, unknown>;

  return (
    typeof obj.accountAddress === 'string' &&
    typeof obj.vaultAddress === 'string' &&
    typeof obj.vaultName === 'string' &&
    typeof obj.vaultSymbol === 'string' &&
    typeof obj.currentPosition === 'object' &&
    typeof obj.performance === 'object' &&
    Array.isArray(obj.data) &&
    obj.data.length > 0 &&
    typeof (obj.data[0] as Record<string, unknown>)?.positionValue === 'string' &&
    typeof (obj.data[0] as Record<string, unknown>)?.timestamp === 'string'
  );
}

export function detectDataType(data: unknown): DetectionResult {
  if (isUserPerformanceData(data)) {
    return { type: 'user', isValid: true };
  }

  if (isVaultData(data)) {
    return { type: 'vault', isValid: true };
  }

  return {
    type: 'unknown',
    isValid: false,
    error: 'Unknown data format. Expected vault or user performance data.',
  };
}

export function parseAndDetect(jsonString: string): {
  data: unknown | null;
  detection: DetectionResult;
  parseError?: string;
} {
  try {
    const data = JSON.parse(jsonString);
    const detection = detectDataType(data);
    return { data, detection };
  } catch (err) {
    return {
      data: null,
      detection: { type: 'unknown', isValid: false },
      parseError: err instanceof Error ? err.message : 'Invalid JSON',
    };
  }
}
