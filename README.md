# Data Fill

A Figma plugin for populating text nodes with realistic sample data. Useful for quickly filling UI mockups with domain-specific placeholder content without manually typing fake values.

## What it does

Select one or more text layers in Figma, choose a data category and property from the plugin panel, and click **Replace**. Each selected text node gets a randomly picked sample value from that property's data set.

### Data categories

| Category | Properties |
|---|---|
| **User** | First Name, Last Name, Status, Email, Phone, Role |
| **Device** | Name, Model, Serial Number, Status, Location, IP Address |
| **Detection Event** | Type, Timestamp, Severity, Description, Source |
| **Cardholder** | (cardholder-specific fields) |
| **Credential** | (credential-specific fields) |
| **Generic** | (general-purpose fields) |

## Development

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (bundled with Node.js)

### Install dependencies

```bash
npm install
```

### Build

Produces minified output in `build/`:

```bash
npm run build
```

### Watch mode

Rebuilds automatically on file changes during development:

```bash
npm run watch
```

## Loading the plugin in Figma

1. Run `npm run build` to produce `build/main.js` and `build/ui.js`.
2. Open Figma desktop app.
3. Go to **Plugins > Development > Import plugin from manifest...**.
4. Select the `manifest.json` file at the root of this repo.
5. The plugin will appear under **Plugins > Development > Data Fill**.

After any code change, run `npm run build` (or keep `npm run watch` running) and use **Plugins > Development > Data Fill > Run** to reload.

## Project structure

```
src/
  main.ts          # Plugin backend — handles text node replacement
  ui.tsx           # Plugin UI — rendered in the Figma plugin panel
  types.ts         # Shared TypeScript types
  components/
    Tree.tsx        # Collapsible category/property tree component
    Tree.module.css # Styles for the tree
  data/
    index.ts        # Exports all categories
    user.ts
    device.ts
    detection-event.ts
    cardholder.ts
    credential.ts
    generic.ts
manifest.json      # Figma plugin manifest
package.json
tsconfig.json
```

## Adding new data

To add a new category, create a file in `src/data/` following the existing pattern:

```ts
import type { Category } from '../types'

export const myCategory: Category = {
  id: 'my-category',
  label: 'My Category',
  properties: [
    {
      id: 'my-property',
      label: 'My Property',
      samples: ['Sample A', 'Sample B', 'Sample C'],
    },
  ],
}
```

Then import and add it to the `categories` array in `src/data/index.ts`.

## Tech stack

- [create-figma-plugin](https://yuanqing.github.io/create-figma-plugin/) — build tooling and UI component library
- [Preact](https://preactjs.com/) — lightweight UI rendering
- TypeScript
