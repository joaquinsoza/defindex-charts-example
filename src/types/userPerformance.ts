export interface UserAsset {
  tokenAddress: string;
  symbol: string;
  name: string;
  decimals: number;
  amount: string;
  estimatedValue: string;
}

export interface CurrentPosition {
  shares: string;
  estimatedValue: string;
  assets: UserAsset[];
  lastUpdated: string;
}

export interface PeriodPerformance {
  apy: number;
  interestEarned: string;
  deposits: string;
  withdrawals: string;
}

export interface SinceInceptionPerformance {
  days: number;
  apy: number;
  totalReturn: number;
  interestEarned: string;
}

export interface UserPerformanceMetrics {
  roi: number;
  totalInterestEarned: string;
  netDeposits: string;
  period24h: PeriodPerformance;
  period7d: PeriodPerformance;
  period30d: PeriodPerformance;
  sinceInception: SinceInceptionPerformance;
}

export interface UserDataPoint {
  timestamp: string;
  shares: string;
  positionValue: string;
  vaultPPS: number;
  netDeposits: string;
  interestEarned: string;
  interestEarnedPeriod: string;
  changeSinceInception: number;
  changeFromPrevious: number | null;
}

export interface UserPerformanceData {
  accountAddress: string;
  vaultAddress: string;
  vaultName: string;
  vaultSymbol: string;
  interval: string;
  currentPosition: CurrentPosition;
  performance: UserPerformanceMetrics;
  data: UserDataPoint[];
}
