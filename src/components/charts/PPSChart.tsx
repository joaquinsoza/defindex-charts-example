import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import type { DataPoint } from '@/types/vault';

interface PPSChartProps {
  data: DataPoint[];
}

function formatDate(timestamp: string): string {
  return new Date(timestamp).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

function formatPPS(value: number): string {
  return value.toFixed(4);
}

interface TooltipPayloadItem {
  value: number;
  dataKey: string;
  payload: DataPoint;
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: TooltipPayloadItem[];
  label?: string;
}

function CustomTooltip({ active, payload }: CustomTooltipProps) {
  if (!active || !payload || payload.length === 0) return null;

  const data = payload[0].payload;
  const ppsChange = data.ppsChangeFromPrevious;

  return (
    <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
      <p className="text-sm text-muted-foreground mb-1">
        {new Date(data.timestamp).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </p>
      <p className="text-lg font-semibold text-foreground">
        PPS: {formatPPS(data.vaultPPS)}
      </p>
      {ppsChange !== null && (
        <p className={`text-sm ${ppsChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {ppsChange >= 0 ? '+' : ''}{(ppsChange * 100).toFixed(4)}% from previous
        </p>
      )}
    </div>
  );
}

export function PPSChart({ data }: PPSChartProps) {
  const chartData = data.map((point) => ({
    ...point,
    date: formatDate(point.timestamp),
  }));

  const minPPS = Math.min(...data.map((d) => d.vaultPPS));
  const maxPPS = Math.max(...data.map((d) => d.vaultPPS));
  const padding = (maxPPS - minPPS) * 0.1;

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12, fill: '#6b7280' }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            domain={[minPPS - padding, maxPPS + padding]}
            tickFormatter={formatPPS}
            tick={{ fontSize: 12, fill: '#6b7280' }}
            tickLine={false}
            axisLine={false}
            width={70}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="vaultPPS"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6, fill: "#3b82f6" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
