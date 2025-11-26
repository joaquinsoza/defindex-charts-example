import type { VaultData } from '@/types/vault';

export const exampleVaultData: VaultData = {
  vaultAddress: "CBNKCU3HGFKHFOF7JTGXQCNKE3G3DXS5RDBQUKQMIIECYKXPIOUGB2S3",
  vaultName: "DeFindex-Vault-BeansUsdcVault",
  vaultSymbol: "BNSUSDC",
  period: "30d",
  interval: "daily",
  currentState: {
    totalSupply: "6275593540014",
    totalManagedFunds: [
      {
        asset: "CCW67TSZV3SSS2HXMBQ5JFGCKJNXKZM7UQUWUZPUTHXSTZLEO7SJMI75",
        idle_amount: "0",
        invested_amount: "6708622487735",
        strategy_allocations: [
          {
            amount: "0",
            paused: false,
            strategy_address: "CDB2WMKQQNVZMEBY7Q7GZ5C7E7IAFSNMZ7GGVD6WKTCEWK7XOIAVZSAP"
          },
          {
            amount: "6708622487735",
            paused: false,
            strategy_address: "CCSRX5E4337QMCMC3KO3RDFYI57T5NZV5XB3W3TWE4USCASKGL5URKJL"
          }
        ],
        total_amount: "6708622487735"
      }
    ],
    vaultPPS: 1.0690020704750796,
    assets: [
      {
        address: "CCW67TSZV3SSS2HXMBQ5JFGCKJNXKZM7UQUWUZPUTHXSTZLEO7SJMI75",
        strategies: [
          {
            address: "CDB2WMKQQNVZMEBY7Q7GZ5C7E7IAFSNMZ7GGVD6WKTCEWK7XOIAVZSAP",
            name: "usdc_blend_autocompound_fixed",
            paused: false
          },
          {
            address: "CCSRX5E4337QMCMC3KO3RDFYI57T5NZV5XB3W3TWE4USCASKGL5URKJL",
            name: "usdc_blend_autocompound_yieldblox",
            paused: false
          }
        ]
      }
    ],
    lastUpdated: "2025-11-26T18:45:06.714Z"
  },
  metrics: {
    totalDeposits: "14568336292394",
    totalWithdrawals: "8109369921150",
    uniqueDepositors: "371",
    totalTransactions: 2156,
    totalRebalances: 1,
    period7d: {
      apy: 14.82,
      ppsChange: 0.21674799961521884,
      netDeposits: "160628384223",
      totalGains: "0",
      totalFees: "0"
    },
    period30d: {
      apy: 18.13,
      ppsChange: 1.3211575774965567,
      netDeposits: "968883532494",
      totalGains: "0",
      totalFees: "0"
    },
    fullPeriod: {
      days: 30,
      totalReturn: 1.3747541601247804,
      annualizedReturn: 18.071769172275687,
      totalGains: "-1",
      totalFees: "0"
    }
  },
  data: [
    {
      timestamp: "2025-10-27T03:00:00.000Z",
      vaultPPS: 1.054478593790108,
      totalSupply: "5433316671194",
      totalManagedFunds: "5729316123057",
      periodDeposits: "70000000000",
      periodWithdrawals: "0",
      netDeposits: "70000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: null
    },
    {
      timestamp: "2025-10-28T03:00:00.000Z",
      vaultPPS: 1.0550630253680648,
      totalSupply: "5409493360344",
      totalManagedFunds: "5707356430473",
      periodDeposits: "120403629561",
      periodWithdrawals: "75539584670",
      netDeposits: "44864044891",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.008260827196804321
    },
    {
      timestamp: "2025-10-29T03:00:00.000Z",
      vaultPPS: 1.0555129414429623,
      totalSupply: "5365488528653",
      totalManagedFunds: "5663342579157",
      periodDeposits: "152381101113",
      periodWithdrawals: "153968964918",
      netDeposits: "-1587863805",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.00006673012484803564
    },
    {
      timestamp: "2025-10-30T03:00:00.000Z",
      vaultPPS: 1.0560439700088442,
      totalSupply: "5328596591888",
      totalManagedFunds: "5627232299473",
      periodDeposits: "157671981669",
      periodWithdrawals: "198219212179",
      netDeposits: "-40547230510",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0019223163181480984
    },
    {
      timestamp: "2025-10-31T03:00:00.000Z",
      vaultPPS: 1.0563691283362284,
      totalSupply: "5370837123437",
      totalManagedFunds: "5673586530521",
      periodDeposits: "207376346078",
      periodWithdrawals: "203301752479",
      netDeposits: "4074593599",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0005981967245993758
    },
    {
      timestamp: "2025-11-01T03:00:00.000Z",
      vaultPPS: 1.0569320597529221,
      totalSupply: "5308752353431",
      totalManagedFunds: "5610990559630",
      periodDeposits: "216225103995",
      periodWithdrawals: "277760782524",
      netDeposits: "-61535678529",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0021551279563158943
    },
    {
      timestamp: "2025-11-02T03:00:00.000Z",
      vaultPPS: 1.057328082963866,
      totalSupply: "5273628253461",
      totalManagedFunds: "5575955251496",
      periodDeposits: "269661108627",
      periodWithdrawals: "368326753197",
      netDeposits: "-98665644570",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0030173607436845273
    },
    {
      timestamp: "2025-11-03T03:00:00.000Z",
      vaultPPS: 1.0578945123,
      totalSupply: "5312456789012",
      totalManagedFunds: "5620123456789",
      periodDeposits: "180000000000",
      periodWithdrawals: "120000000000",
      netDeposits: "60000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0043521456789
    },
    {
      timestamp: "2025-11-04T03:00:00.000Z",
      vaultPPS: 1.058523456789,
      totalSupply: "5356789012345",
      totalManagedFunds: "5668234567890",
      periodDeposits: "210000000000",
      periodWithdrawals: "150000000000",
      netDeposits: "60000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0048234567890
    },
    {
      timestamp: "2025-11-05T03:00:00.000Z",
      vaultPPS: 1.0591567890,
      totalSupply: "5398765432109",
      totalManagedFunds: "5712345678901",
      periodDeposits: "190000000000",
      periodWithdrawals: "130000000000",
      netDeposits: "60000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0052345678901
    },
    {
      timestamp: "2025-11-06T03:00:00.000Z",
      vaultPPS: 1.0597890123,
      totalSupply: "5432109876543",
      totalManagedFunds: "5756789012345",
      periodDeposits: "220000000000",
      periodWithdrawals: "175000000000",
      netDeposits: "45000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0056789012345
    },
    {
      timestamp: "2025-11-07T03:00:00.000Z",
      vaultPPS: 1.0604123456,
      totalSupply: "5478901234567",
      totalManagedFunds: "5810123456789",
      periodDeposits: "250000000000",
      periodWithdrawals: "185000000000",
      netDeposits: "65000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0061234567890
    },
    {
      timestamp: "2025-11-08T03:00:00.000Z",
      vaultPPS: 1.0611567890,
      totalSupply: "5523456789012",
      totalManagedFunds: "5862345678901",
      periodDeposits: "230000000000",
      periodWithdrawals: "165000000000",
      netDeposits: "65000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0065678901234
    },
    {
      timestamp: "2025-11-09T03:00:00.000Z",
      vaultPPS: 1.0618234567,
      totalSupply: "5567890123456",
      totalManagedFunds: "5912345678901",
      periodDeposits: "200000000000",
      periodWithdrawals: "140000000000",
      netDeposits: "60000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0070123456789
    },
    {
      timestamp: "2025-11-10T03:00:00.000Z",
      vaultPPS: 1.0625123456,
      totalSupply: "5612345678901",
      totalManagedFunds: "5962345678901",
      periodDeposits: "215000000000",
      periodWithdrawals: "160000000000",
      netDeposits: "55000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0074567890123
    },
    {
      timestamp: "2025-11-11T03:00:00.000Z",
      vaultPPS: 1.0632456789,
      totalSupply: "5656789012345",
      totalManagedFunds: "6012345678901",
      periodDeposits: "240000000000",
      periodWithdrawals: "180000000000",
      netDeposits: "60000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0079012345678
    },
    {
      timestamp: "2025-11-12T03:00:00.000Z",
      vaultPPS: 1.0639890123,
      totalSupply: "5698765432109",
      totalManagedFunds: "6062345678901",
      periodDeposits: "225000000000",
      periodWithdrawals: "170000000000",
      netDeposits: "55000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0083456789012
    },
    {
      timestamp: "2025-11-13T03:00:00.000Z",
      vaultPPS: 1.0647345678,
      totalSupply: "5743210987654",
      totalManagedFunds: "6112345678901",
      periodDeposits: "235000000000",
      periodWithdrawals: "175000000000",
      netDeposits: "60000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0087890123456
    },
    {
      timestamp: "2025-11-14T03:00:00.000Z",
      vaultPPS: 1.0654890123,
      totalSupply: "5789012345678",
      totalManagedFunds: "6165432109876",
      periodDeposits: "245000000000",
      periodWithdrawals: "185000000000",
      netDeposits: "60000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0092345678901
    },
    {
      timestamp: "2025-11-15T03:00:00.000Z",
      vaultPPS: 1.0662456789,
      totalSupply: "5832109876543",
      totalManagedFunds: "6218765432109",
      periodDeposits: "260000000000",
      periodWithdrawals: "200000000000",
      netDeposits: "60000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0096789012345
    },
    {
      timestamp: "2025-11-16T03:00:00.000Z",
      vaultPPS: 1.0670123456,
      totalSupply: "5878901234567",
      totalManagedFunds: "6272109876543",
      periodDeposits: "275000000000",
      periodWithdrawals: "215000000000",
      netDeposits: "60000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0101234567890
    },
    {
      timestamp: "2025-11-17T03:00:00.000Z",
      vaultPPS: 1.0677890123,
      totalSupply: "5923456789012",
      totalManagedFunds: "6325432109876",
      periodDeposits: "290000000000",
      periodWithdrawals: "230000000000",
      netDeposits: "60000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0105678901234
    },
    {
      timestamp: "2025-11-18T03:00:00.000Z",
      vaultPPS: 1.0685678901,
      totalSupply: "5967890123456",
      totalManagedFunds: "6378765432109",
      periodDeposits: "305000000000",
      periodWithdrawals: "245000000000",
      netDeposits: "60000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0110123456789
    },
    {
      timestamp: "2025-11-19T03:00:00.000Z",
      vaultPPS: 1.0690020704750796,
      totalSupply: "6012345678901",
      totalManagedFunds: "6432109876543",
      periodDeposits: "320000000000",
      periodWithdrawals: "260000000000",
      netDeposits: "60000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0114567890123
    },
    {
      timestamp: "2025-11-20T03:00:00.000Z",
      vaultPPS: 1.0695234567,
      totalSupply: "6056789012345",
      totalManagedFunds: "6485432109876",
      periodDeposits: "310000000000",
      periodWithdrawals: "250000000000",
      netDeposits: "60000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0048765432109
    },
    {
      timestamp: "2025-11-21T03:00:00.000Z",
      vaultPPS: 1.0700567890,
      totalSupply: "6098765432109",
      totalManagedFunds: "6538765432109",
      periodDeposits: "295000000000",
      periodWithdrawals: "235000000000",
      netDeposits: "60000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0049876543210
    },
    {
      timestamp: "2025-11-22T03:00:00.000Z",
      vaultPPS: 1.0705890123,
      totalSupply: "6143210987654",
      totalManagedFunds: "6592109876543",
      periodDeposits: "280000000000",
      periodWithdrawals: "220000000000",
      netDeposits: "60000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0049765432109
    },
    {
      timestamp: "2025-11-23T03:00:00.000Z",
      vaultPPS: 1.0711234567,
      totalSupply: "6189012345678",
      totalManagedFunds: "6645432109876",
      periodDeposits: "265000000000",
      periodWithdrawals: "205000000000",
      netDeposits: "60000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0049876543210
    },
    {
      timestamp: "2025-11-24T03:00:00.000Z",
      vaultPPS: 1.0716567890,
      totalSupply: "6232109876543",
      totalManagedFunds: "6698765432109",
      periodDeposits: "255000000000",
      periodWithdrawals: "195000000000",
      netDeposits: "60000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0049765432109
    },
    {
      timestamp: "2025-11-25T03:00:00.000Z",
      vaultPPS: 1.0721890123,
      totalSupply: "6275593540014",
      totalManagedFunds: "6708622487735",
      periodDeposits: "248000000000",
      periodWithdrawals: "188000000000",
      netDeposits: "60000000000",
      periodGains: "0",
      periodFees: "0",
      ppsChangeFromPrevious: 0.0049654321098
    }
  ]
};

export const exampleVaultDataJson = JSON.stringify(exampleVaultData, null, 2);
