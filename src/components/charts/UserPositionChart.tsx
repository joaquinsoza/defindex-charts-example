import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { UserDataPoint } from '@/types/userPerformance';

interface UserPositionChartProps {
  data: UserDataPoint[];
}

function formatDate(timestamp: string): string {
  return new Date(timestamp).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

function formatValueAxis(value: number): string {
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
    positionVal: number;
    sharesVal: number;
    netDepositsVal: number;
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
          <span className="text-muted-foreground">Position Value: </span>
          <span className="font-semibold text-foreground">
            {formatCurrency(data.positionVal)}
          </span>
        </p>
        <p className="text-sm">
          <span className="text-muted-foreground">Shares: </span>
          <span className="font-semibold text-foreground">
            {formatNumber(data.sharesVal)}
          </span>
        </p>
        <p className="text-sm">
          <span className="text-muted-foreground">Net Deposits: </span>
          <span className="font-semibold text-foreground">
            {formatCurrency(data.netDepositsVal)}
          </span>
        </p>
      </div>
    </div>
  );
}

export function UserPositionChart({ data }: UserPositionChartProps) {
  const chartData = data.map((point) => ({
    ...point,
    date: formatDate(point.timestamp),
    positionVal: Number(point.positionValue),
    sharesVal: Number(point.shares),
    netDepositsVal: Number(point.netDeposits),
  }));

  const values = chartData.map((d) => d.positionVal);
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
            <linearGradient id="positionGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
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
            tickFormatter={formatValueAxis}
            tick={{ fontSize: 12, fill: '#6b7280' }}
            tickLine={false}
            axisLine={false}
            width={70}
          />
          <Tooltip content={<CustomTooltip />} />
          <Area
            type="monotone"
            dataKey="positionVal"
            stroke="#8b5cf6"
            strokeWidth={2}
            fill="url(#positionGradient)"
            activeDot={{ r: 6, fill: "#8b5cf6" }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
