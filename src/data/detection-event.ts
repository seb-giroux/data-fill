import type { Category } from '../types'

export const detectionEvent: Category = {
  id: 'detection-event',
  label: 'Detection Event',
  properties: [
    {
      id: 'type',
      label: 'Type',
      samples: [
        'Access Granted',
        'Access Denied',
        'Door Forced Open',
        'Door Held Open',
        'Tamper Detected',
        'Motion Detected',
      ],
    },
    {
      id: 'timestamp',
      label: 'Timestamp',
      samples: [
        '2024-01-15 09:23:45',
        '2024-03-08 14:32:11',
        '2024-06-22 07:55:03',
        '2024-11-30 22:10:58',
      ],
    },
    {
      id: 'severity',
      label: 'Severity',
      samples: ['Low', 'Medium', 'High', 'Critical'],
    },
    {
      id: 'description',
      label: 'Description',
      samples: [
        'Successful badge read at main entrance',
        'Invalid credential presented at server room',
        'Door held open beyond allowed duration',
        'Tamper alert triggered on parking gate',
      ],
    },
    {
      id: 'source',
      label: 'Source',
      samples: ['Door Controller 01', 'Main Entrance Reader', 'Parking Gate B', 'Lobby Turnstile'],
    },
  ],
}
