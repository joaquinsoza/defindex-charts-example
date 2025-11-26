export interface StrategyAllocation {
  amount: string;
  paused: boolean;
  strategy_address: string;
}

export interface ManagedFund {
  asset: string;
  idle_amount: string;
  invested_amount: string;
  strategy_allocations: StrategyAllocation[];
  total_amount: string;
}

export interface Strategy {
  address: string;
  name: string;
  paused: boolean;
}

export interface Asset {
  address: string;
  strategies: Strategy[];
}

export interface CurrentState {
  totalSupply: string;
  totalManagedFunds: ManagedFund[];
  vaultPPS: number;
  assets: Asset[];
  lastUpdated: string;
}

export interface PeriodMetrics {
  apy: number;
  ppsChange: number;
  netDeposits: string;
  totalGains: string;
  totalFees: string;
}

export interface FullPeriodMetrics {
  days: number;
  totalReturn: number;
  annualizedReturn: number;
  totalGains: string;
  totalFees: string;
}

export interface Metrics {
  totalDeposits: string;
  totalWithdrawals: string;
  uniqueDepositors: string;
  totalTransactions: number;
  totalRebalances: number;
  period7d: PeriodMetrics;
  period30d: PeriodMetrics;
  fullPeriod: FullPeriodMetrics;
}

export interface DataPoint {
  timestamp: string;
  vaultPPS: number;
  totalSupply: string;
  totalManagedFunds: string;
  periodDeposits: string;
  periodWithdrawals: string;
  netDeposits: string;
  periodGains: string;
  periodFees: string;
  ppsChangeFromPrevious: number | null;
}

export interface VaultData {
  vaultAddress: string;
  vaultName: string;
  vaultSymbol: string;
  period: string;
  interval: string;
  currentState: CurrentState;
  metrics: Metrics;
  data: DataPoint[];
}
