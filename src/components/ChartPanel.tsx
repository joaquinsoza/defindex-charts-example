import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PPSChart } from '@/components/charts/PPSChart';
import { FundsChart } from '@/components/charts/FundsChart';
import { FlowChart } from '@/components/charts/FlowChart';
import type { VaultData } from '@/types/vault';

interface ChartPanelProps {
  data: VaultData;
}

function formatPercentage(value: number): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
}

export function ChartPanel({ data }: ChartPanelProps) {
  const { vaultName, vaultSymbol, period, metrics, data: chartData } = data;

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">{vaultName}</CardTitle>
            <CardDescription className="mt-1">
              {vaultSymbol} | {period} period
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-foreground">
              {metrics.period30d.apy.toFixed(2)}%
            </div>
            <div className="text-sm text-muted-foreground">30d APY</div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-border">
          <div>
            <div className="text-sm text-muted-foreground">7d Return</div>
            <div className={`font-semibold ${metrics.period7d.ppsChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {formatPercentage(metrics.period7d.ppsChange)}
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">30d Return</div>
            <div className={`font-semibold ${metrics.period30d.ppsChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
              {formatPercentage(metrics.period30d.ppsChange)}
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Depositors</div>
            <div className="font-semibold text-foreground">{metrics.uniqueDepositors}</div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 pt-4">
        <Tabs defaultValue="pps" className="h-full flex flex-col">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pps">Price Per Share</TabsTrigger>
            <TabsTrigger value="funds">Total Funds</TabsTrigger>
            <TabsTrigger value="flow">Fund Flow</TabsTrigger>
          </TabsList>

          <TabsContent value="pps" className="flex-1 mt-4">
            <PPSChart data={chartData} />
          </TabsContent>

          <TabsContent value="funds" className="flex-1 mt-4">
            <FundsChart data={chartData} />
          </TabsContent>

          <TabsContent value="flow" className="flex-1 mt-4">
            <FlowChart data={chartData} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
