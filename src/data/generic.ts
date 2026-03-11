import type { Category } from '../types'

export const generic: Category = {
  id: 'generic',
  label: 'Generic',
  properties: [
    {
      id: 'date',
      label: 'Date',
      samples: ['2026-03-09', '2025-11-22', '2024-07-04', '2025-01-15', '2026-06-30'],
    },
    {
      id: 'date-text',
      label: 'Date (Text)',
      samples: ['Mar. 9, 2026', 'Nov. 22, 2025', 'Jul. 4, 2024', 'Jan. 15, 2025', 'Jun. 30, 2026'],
    },
    {
      id: 'date-time',
      label: 'Date and Time',
      samples: [
        '2026-03-09 6:57:32 AM',
        '2025-11-22 2:14:05 PM',
        '2024-07-04 11:30:00 AM',
        '2025-01-15 8:45:17 PM',
        '2026-06-30 3:22:59 AM',
      ],
    },
    {
      id: 'time',
      label: 'Time',
      samples: ['6:57:32 AM', '2:14:05 PM', '11:30:00 AM', '8:45:17 PM', '3:22:59 AM'],
    },
    {
      id: 'ipv4',
      label: 'IPv4',
      preview: '10.4.17.XXX',
      samples: () => Array.from({ length: 10 }, () =>
        `10.4.17.${Math.floor(Math.random() * 256)}`
      ),
    },
    {
      id: 'ipv6-short',
      label: 'IPv6 (Short)',
      samples: ['2001:db8::1', 'fe80::1', '::1', '2001:db8::ff00:42:8329', 'fe80::200:f8ff:fe21:67cf'],
    },
    {
      id: 'ipv6',
      label: 'IPv6',
      samples: [
        '2001:0db8:85a3:0000:0000:8a2e:0370:7334',
        'fe80:0000:0000:0000:0202:b3ff:fe1e:8329',
        '2001:0db8:0000:0042:0000:8a2e:0370:7334',
        '0000:0000:0000:0000:0000:0000:0000:0001',
        'fd00:0000:0000:0001:0000:0000:0000:0001',
      ],
    },
  ],
}
