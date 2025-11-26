import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine,
} from 'recharts';
import type { DataPoint } from '@/types/vault';

interface FlowChartProps {
  data: DataPoint[];
}

function formatDate(timestamp: string): string {
  return new Date(timestamp).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

function formatValue(value: number): string {
  const absValue = Math.abs(value);
  if (absValue >= 1e12) return `${(value / 1e12).toFixed(1)}T`;
  if (absValue >= 1e9) return `${(value / 1e9).toFixed(1)}B`;
  if (absValue >= 1e6) return `${(value / 1e6).toFixed(1)}M`;
  if (absValue >= 1e3) return `${(value / 1e3).toFixed(1)}K`;
  return value.toFixed(0);
}

function formatFullNumber(value: number): string {
  return (value / 1e7).toFixed(7);
}

interface TooltipPayloadItem {
  value: number;
  dataKey: string;
  color: string;
  name: string;
  payload: {
    timestamp: string;
    deposits: number;
    withdrawals: number;
    netFlow: number;
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
          <span className="inline-block w-3 h-3 rounded mr-2" style={{ backgroundColor: '#22c55e' }} />
          <span className="text-muted-foreground">Deposits: </span>
          <span className="font-semibold text-green-500">
            +{formatFullNumber(data.deposits)}
          </span>
        </p>
        <p className="text-sm">
          <span className="inline-block w-3 h-3 rounded mr-2" style={{ backgroundColor: '#ef4444' }} />
          <span className="text-muted-foreground">Withdrawals: </span>
          <span className="font-semibold text-red-500">
            -{formatFullNumber(Math.abs(data.withdrawals))}
          </span>
        </p>
        <div className="border-t border-border pt-1 mt-1">
          <p className="text-sm">
            <span className="text-muted-foreground">Net Flow: </span>
            <span className={`font-semibold ${data.netFlow >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {data.netFlow >= 0 ? '+' : ''}{formatFullNumber(data.netFlow)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export function FlowChart({ data }: FlowChartProps) {
  const chartData = data.map((point) => ({
    ...point,
    date: formatDate(point.timestamp),
    deposits: Number(point.periodDeposits),
    withdrawals: -Number(point.periodWithdrawals),
    netFlow: Number(point.netDeposits),
  }));

  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          stackOffset="sign"
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12, fill: '#6b7280' }}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            tickFormatter={formatValue}
            tick={{ fontSize: 12, fill: '#6b7280' }}
            tickLine={false}
            axisLine={false}
            width={60}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            wrapperStyle={{ paddingTop: '20px' }}
            formatter={(value: string) => (
              <span className="text-sm text-muted-foreground">{value}</span>
            )}
          />
          <ReferenceLine y={0} stroke="#d1d5db" />
          <Bar
            dataKey="deposits"
            name="Deposits"
            fill="#22c55e"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="withdrawals"
            name="Withdrawals"
            fill="#ef4444"
            radius={[0, 0, 4, 4]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
