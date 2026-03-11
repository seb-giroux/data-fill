import type { Category } from '../types'

export const user: Category = {
  id: 'user',
  label: 'User',
  properties: [
    {
      id: 'firstname',
      label: 'First Name',
      samples: ['Alice', 'Bob', 'Charlie', 'Diana', 'Ethan', 'Fiona'],
    },
    {
      id: 'lastname',
      label: 'Last Name',
      samples: ['Smith', 'Johnson', 'Williams', 'Brown', 'Davis', 'Martinez'],
    },
    {
      id: 'status',
      label: 'Status',
      samples: ['Active', 'Inactive', 'Suspended', 'Pending'],
    },
    {
      id: 'email',
      label: 'Email',
      samples: [
        'alice.smith@example.com',
        'bob.johnson@acme.corp',
        'charlie.w@test.org',
        'diana.b@company.io',
      ],
    },
    {
      id: 'phone',
      label: 'Phone',
      samples: ['+1 555-0101', '+1 555-0234', '+44 20 7946 0958', '+1 555-0387'],
    },
    {
      id: 'role',
      label: 'Role',
      samples: ['Administrator', 'Operator', 'Viewer', 'Security Officer', 'Supervisor'],
    },
  ],
}
