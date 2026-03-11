import { h } from 'preact'
import { useState } from 'preact/hooks'

import { categories } from '../data'
import type { Category, Property, Selection } from '../types'
import styles from './Tree.module.css'

type Props = {
  selected: Selection | null
  onSelect: (selection: Selection | null) => void
}

export function Tree({ selected, onSelect }: Props) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set())

  function toggle(categoryId: string) {
    setExpanded(prev => {
      const next = new Set(prev)
      if (next.has(categoryId)) {
        next.delete(categoryId)
      } else {
        next.add(categoryId)
      }
      return next
    })
  }

  function handlePropertyClick(category: Category, property: Property) {
    const isAlreadySelected =
      selected?.categoryId === category.id && selected?.property.id === property.id
    onSelect(isAlreadySelected ? null : { categoryId: category.id, property })
  }

  return (
    <div class={styles.tree}>
      {categories.map(category => (
        <div key={category.id}>
          <div class={styles.categoryRow} onClick={() => toggle(category.id)}>
            <span class={styles.chevron}>{expanded.has(category.id) ? '▼' : '▶'}</span>
            {category.label}
          </div>
          {expanded.has(category.id) && (
            <div class={styles.properties}>
              {category.properties.map(property => {
                const isSelected =
                  selected?.categoryId === category.id && selected?.property.id === property.id
                return (
                  <div
                    key={property.id}
                    class={`${styles.propertyRow}${isSelected ? ` ${styles.selected}` : ''}`}
                    onClick={() => handlePropertyClick(category, property)}
                  >
                    {property.label}
                    {property.samples[0] && (
                      <span class={styles.sample}> ({property.samples[0]})</span>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
