# DeFindex Vault Chart Viewer

An example application demonstrating how to display DeFindex vault charting data using [Recharts](https://recharts.org/).

## Features

- **Price Per Share (PPS) Chart** - Line chart showing vault share price over time
- **Total Funds Chart** - Area chart displaying total managed funds
- **Fund Flow Chart** - Bar chart visualizing deposits vs withdrawals
- **JSON Input** - Paste vault API response data to instantly visualize metrics
- **Real-time Validation** - JSON parsing with error feedback

## Tech Stack

- React 19 + TypeScript
- Vite
- Recharts (charting library)
- shadcn/ui + Tailwind CSS (UI components)

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Usage

1. The app loads with example vault data pre-populated
2. Paste your own DeFindex vault JSON response in the left panel
3. View the charts update in real-time on the right panel
4. Switch between PPS, Total Funds, and Fund Flow tabs

## Data Format

The app expects vault data in the following format:

```json
{
  "vaultAddress": "...",
  "vaultName": "...",
  "vaultSymbol": "...",
  "period": "30d",
  "interval": "daily",
  "metrics": {
    "period7d": { "apy": 14.82, "ppsChange": 0.21 },
    "period30d": { "apy": 18.13, "ppsChange": 1.32 }
  },
  "data": [
    {
      "timestamp": "2025-10-27T03:00:00.000Z",
      "vaultPPS": 1.0544,
      "totalSupply": "5433316671194",
      "totalManagedFunds": "5729316123057",
      "periodDeposits": "70000000000",
      "periodWithdrawals": "0"
    }
  ]
}
```
