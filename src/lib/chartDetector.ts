import type { VaultData } from '@/types/vault';

export type DataType = 'vault' | 'unknown';

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
    Array.isArray(obj.data) &&
    obj.data.length > 0 &&
    typeof (obj.data[0] as Record<string, unknown>)?.vaultPPS === 'number' &&
    typeof (obj.data[0] as Record<string, unknown>)?.timestamp === 'string'
  );
}

export function detectDataType(data: unknown): DetectionResult {
  if (isVaultData(data)) {
    return { type: 'vault', isValid: true };
  }

  return {
    type: 'unknown',
    isValid: false,
    error: 'Unknown data format. Expected vault data with vaultAddress, vaultName, vaultSymbol, and data array.',
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
