import type { Category } from '../types'

export const device: Category = {
  id: 'device',
  label: 'Device',
  properties: [
    {
      id: 'name',
      label: 'Name',
      samples: [
        'Door Controller 01',
        'Main Entrance Reader',
        'Parking Gate B',
        'Server Room Panel',
        'Lobby Turnstile',
      ],
    },
    {
      id: 'model',
      label: 'Model',
      samples: ['ACM-2000', 'PRX-500', 'SCR-1000', 'GateX Pro', 'EdgeControl 4'],
    },
    {
      id: 'serial',
      label: 'Serial Number',
      samples: ['SN-12345678', 'SN-87654321', 'SN-11223344', 'SN-99887766'],
    },
    {
      id: 'status',
      label: 'Status',
      samples: ['Online', 'Offline', 'Maintenance', 'Tampered', 'Degraded'],
    },
    {
      id: 'location',
      label: 'Location',
      samples: ['Building A', 'Floor 2', 'North Wing', 'Main Lobby', 'Parking Level 1'],
    },
    {
      id: 'ip',
      label: 'IP Address',
      samples: ['192.168.1.100', '10.0.0.45', '172.16.0.22', '192.168.10.5'],
    },
  ],
}
