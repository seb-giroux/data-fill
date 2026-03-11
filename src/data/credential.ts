import type { Category } from '../types'

export const credential: Category = {
  id: 'credential',
  label: 'Credential',
  properties: [
    {
      id: 'type',
      label: 'Type',
      samples: ['RFID', 'PIN', 'Mobile', 'Biometric', 'Smart Card'],
    },
    {
      id: 'number',
      label: 'Number',
      samples: ['0A1B2C3D', '1234567890', 'AABBCCDD', '9876543210', 'F1E2D3C4'],
    },
    {
      id: 'status',
      label: 'Status',
      samples: ['Active', 'Expired', 'Revoked', 'Lost', 'Suspended'],
    },
    {
      id: 'issue-date',
      label: 'Issue Date',
      samples: ['2024-01-01', '2023-06-15', '2024-09-01', '2022-03-20'],
    },
    {
      id: 'expiry-date',
      label: 'Expiry Date',
      samples: ['2025-01-01', '2026-06-15', '2025-09-01', '2027-03-20'],
    },
    {
      id: 'facility-code',
      label: 'Facility Code',
      samples: ['FC-001', 'FC-002', 'FC-015', 'FC-099'],
    },
  ],
}
