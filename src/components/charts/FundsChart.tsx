import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { DataPoint } from '@/types/vault';

interface FundsChartProps {
  data: DataPoint[];
}

function formatDate(timestamp: string): string {
  return new Date(timestamp).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

function formatFundsAxis(value: number): string {
  const dollars = value / 1e7;
  if (dollars >= 1e6) return `$${(dollars / 1e6).toFixed(1)}M`;
  if (dollars >= 1e3) return `$${(dollars / 1e3).toFixed(0)}K`;
  return `$${dollars.toFixed(0)}`;
}

function formatCurrency(value: number): string {
  const dollars = value / 1e7;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(dollars);
}

function formatNumber(value: number): string {
  const converted = value / 1e7;
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(converted);
}

interface TooltipPayloadItem {
  value: number;
  dataKey: string;
  payload: {
    timestamp: string;
    fundsValue: number;
    supplyValue: number;
  };
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;

  const data = payload[0].payload;

  return (
    <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
      <p className="text-sm text-muted-foreground mb-2">
        {new Date(data.timestamp).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </p>
      <div className="space-y-1">
        <p className="text-sm">
          <span className="text-muted-foreground">Total Funds: </span>
          <span className="font-semibold text-foreground">
            {formatCurrency(data.fundsValue)}
          </span>
        </p>
        <p className="text-sm">
          <span className="text-muted-foreground">Total Supply: </span>
          <span className="font-semibold text-foreground">
            {formatNumber(data.supplyValue)}
          </span>
        </p>
      </div>
    </div>
  );
}

export function FundsChart({ data }: FundsChartProps) {
  const chartData = data.map((point) => ({
    ...point,
    date: formatDate(point.timestamp),
    fundsValue: Number(point.totalManagedFunds),
    supplyValue: Number(point.totalSupply),
  }));

  const values = chartData.map((d) => d.fundsValue);
  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const padding = (maxValue - minValue) * 0.1;

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <defs>
            <linearGradient id="fundsGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12, fill: '#6b7280' }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            domain={[minValue - padding, maxValue + padding]}
            tickFormatter={formatFundsAxis}
            tick={{ fontSize: 12, fill: '#6b7280' }}
            tickLine={false}
            axisLine={false}
            width={60}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="fundsValue"
            stroke="#10b981"
            strokeWidth={2}
            fill="url(#fundsGradient)"
            activeDot={{ r: 6, fill: "#10b981" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
