import { Button, render } from '@create-figma-plugin/ui'
import { emit, on } from '@create-figma-plugin/utilities'
import { h } from 'preact'
import { useState } from 'preact/hooks'

import { Tree } from './components/Tree'
import type { ReplaceTextHandler, SelectionCountHandler, Selection } from './types'

function Plugin() {
  const [selected, setSelected] = useState<Selection | null>(null)
  const [textCount, setTextCount] = useState(0)

  on<SelectionCountHandler>('SELECTION_COUNT', setTextCount)

  function handleReplace() {
    if (!selected) return
    const samples = typeof selected.property.samples === 'function'
      ? selected.property.samples()
      : selected.property.samples
    emit<ReplaceTextHandler>('REPLACE_TEXT', samples)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: 1, overflowY: 'auto' }}>
        <Tree selected={selected} onSelect={setSelected} />
      </div>
      <div style={{ padding: '8px', borderTop: '1px solid var(--figma-color-border, #e6e6e6)' }}>
        <Button disabled={selected === null} fullWidth onClick={handleReplace}>
          Replace {textCount} {textCount === 1 ? 'text' : 'texts'}
        </Button>
      </div>
    </div>
  )
}

export default render(Plugin)
