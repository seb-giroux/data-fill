import { emit, on, showUI } from '@create-figma-plugin/utilities'

import { collectVisibleTextNodes, loadFonts, preloadSelectionFonts } from './fonts'
import type { ReplaceTextHandler, SelectionCountHandler } from './types'

export default function () {
  on<ReplaceTextHandler>('REPLACE_TEXT', handleReplaceText)

  showUI({ height: 420, width: 280 })

  figma.on('selectionchange', onSelectionChange)
  onSelectionChange()
}

function onSelectionChange(): void {
  preloadSelectionFonts()
  const count = figma.currentPage.selection.flatMap(collectVisibleTextNodes).length
  emit<SelectionCountHandler>('SELECTION_COUNT', count)
}

// ─── Handlers ────────────────────────────────────────────────────────────────

async function handleReplaceText(samples: string[]): Promise<void> {
  const textNodes = figma.currentPage.selection.flatMap(collectVisibleTextNodes)

  await loadFonts(textNodes)

  for (const node of textNodes) {
    node.characters = samples[Math.floor(Math.random() * samples.length)]
  }

  const count = textNodes.length
  figma.notify(`Replaced ${count} ${count === 1 ? 'text' : 'texts'}`)
}

