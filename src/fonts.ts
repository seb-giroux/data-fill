export function collectVisibleTextNodes(node: SceneNode): TextNode[] {
  if (!node.visible) return []
  if (node.type === 'TEXT') return [node]
  if (!('children' in node)) return []
  return node.children.flatMap(collectVisibleTextNodes)
}

export function preloadSelectionFonts(): void {
  const textNodes = figma.currentPage.selection.flatMap(collectVisibleTextNodes)
  loadFonts(textNodes)
}

function collectNodeFonts(node: TextNode): FontName[] {
  if (typeof node.fontName !== 'symbol') return [node.fontName]
  const fonts: FontName[] = []
  for (let i = 0; i < node.characters.length; i++) {
    const font = node.getRangeFontName(i, i + 1)
    if (typeof font !== 'symbol') fonts.push(font)
  }
  return fonts
}

export async function loadFonts(nodes: TextNode[]): Promise<void> {
  const seen = new Set<string>()
  const fonts: FontName[] = []
  for (const font of nodes.flatMap(collectNodeFonts)) {
    const key = JSON.stringify(font)
    if (!seen.has(key)) {
      seen.add(key)
      fonts.push(font)
    }
  }
  await Promise.all(fonts.map(f => figma.loadFontAsync(f)))
}
