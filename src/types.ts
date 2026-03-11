import type { EventHandler } from '@create-figma-plugin/utilities'

export type Property = {
  id: string
  label: string
  samples: string[]
}

export type Category = {
  id: string
  label: string
  properties: Property[]
}

export type Selection = {
  categoryId: string
  property: Property
}

export interface ReplaceTextHandler extends EventHandler {
  name: 'REPLACE_TEXT'
  handler: (samples: string[]) => void
}
