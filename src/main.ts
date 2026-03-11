import { on, showUI } from '@create-figma-plugin/utilities'

import type { ReplaceTextHandler } from './types'

export default function () {
  on<ReplaceTextHandler>('REPLACE_TEXT', async (samples: string[]) => {
    const textNodes = figma.currentPage.selection.filter(
      (node): node is TextNode => node.type === 'TEXT'
    )
    if (textNodes.length === 0) return

    await Promise.all(
      textNodes.map(async node => {
        await loadNodeFonts(node)
        node.characters = samples[Math.floor(Math.random() * samples.length)]
      })
    )
  })

  showUI({ height: 420, width: 280 })
}

async function loadNodeFonts(node: TextNode): Promise<void> {
  const fonts = new Set<string>()

  if (typeof node.fontName !== 'symbol') {
    fonts.add(JSON.stringify(node.fontName))
  } else {
    for (let i = 0; i < node.characters.length; i++) {
      const font = node.getRangeFontName(i, i + 1)
      if (typeof font !== 'symbol') {
        fonts.add(JSON.stringify(font))
      }
    }
  }

  await Promise.all(Array.from(fonts).map(f => figma.loadFontAsync(JSON.parse(f) as FontName)))
}
