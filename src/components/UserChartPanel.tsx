import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserPositionChart } from '@/components/charts/UserPositionChart';
import { UserInterestChart } from '@/components/charts/UserInterestChart';
import type { UserPerformanceData } from '@/types/userPerformance';

interface UserChartPanelProps {
  data: UserPerformanceData;
}

function formatCurrency(value: string): string {
  const dollars = Number(value) / 1e7;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(dollars);
}

function formatPercentage(value: number): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
}

function truncateAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function UserChartPanel({ data }: UserChartPanelProps) {
  const { accountAddress, vaultSymbol, currentPosition, performance, data: chartData } = data;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">User Performance</CardTitle>
            <CardDescription className="mt-1">
              {truncateAddress(accountAddress)} | {vaultSymbol}
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-foreground">
              {formatCurrency(currentPosition.estimatedValue)}
            </div>
            <div className="text-sm text-muted-foreground">Current Value</div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mt-4 pt-4 border-t border-border">
          <div>
            <div className="text-sm text-muted-foreground">ROI</div>
            <div className={`font-semibold ${performance.roi >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {formatPercentage(performance.roi)}
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Interest Earned</div>
            <div className="font-semibold text-green-500">
              {formatCurrency(performance.totalInterestEarned)}
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">30d APY</div>
            <div className="font-semibold text-foreground">
              {performance.period30d.apy.toFixed(2)}%
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Days Active</div>
            <div className="font-semibold text-foreground">
              {performance.sinceInception.days}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 pt-4">
        <Tabs defaultValue="position" className="h-full flex flex-col">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="position">Position Value</TabsTrigger>
            <TabsTrigger value="interest">Interest Earned</TabsTrigger>
          </TabsList>

          <TabsContent value="position" className="flex-1 mt-4">
            <UserPositionChart data={chartData} />
          </TabsContent>

          <TabsContent value="interest" className="flex-1 mt-4">
            <UserInterestChart data={chartData} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
