import type { Category } from '../types'

export const cardholder: Category = {
  id: 'cardholder',
  label: 'Cardholder',
  properties: [
    {
      id: 'firstname',
      label: 'First Name',
      samples: ['James', 'Maria', 'David', 'Sarah', 'Kevin', 'Linda'],
    },
    {
      id: 'lastname',
      label: 'Last Name',
      samples: ['Anderson', 'Garcia', 'Wilson', 'Taylor', 'Thomas', 'White'],
    },
    {
      id: 'employee-id',
      label: 'Employee ID',
      samples: ['EMP-00123', 'EMP-00456', 'EMP-00789', 'EMP-01024', 'EMP-01337'],
    },
    {
      id: 'department',
      label: 'Department',
      samples: ['Engineering', 'Security', 'Human Resources', 'Finance', 'Operations', 'IT'],
    },
    {
      id: 'access-level',
      label: 'Access Level',
      samples: ['Standard', 'Elevated', 'VIP', 'Restricted', 'All Areas'],
    },
    {
      id: 'badge-number',
      label: 'Badge Number',
      samples: ['B-001234', 'B-002345', 'B-003456', 'B-004567', 'B-005678'],
    },
  ],
}
