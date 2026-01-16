# Monday.com Work Management - Figma Make Guidelines

Use this file to guide Figma Make in generating designs consistent with Monday.com's Work Management interface.

> **Tip**: These guidelines extract the exact design tokens and patterns from Monday.com's design system.

---

# General Guidelines

- Use responsive, well-structured layouts with flexbox and auto layout by default
- Only use absolute positioning when strictly necessary (overlays, floating panels)
- Follow the established spacing scale - never use arbitrary values
- Maintain consistent border-radius across similar elements
- Use semantic color tokens, not raw hex values
- All interactive elements must have hover states
- Row height in tables is always 36px
- The design follows a 4px/8px spacing grid

---

# Design System Guidelines

## Colors

### Primary Brand Colors

| Token                    | Value   | Usage                                                 |
| ------------------------ | ------- | ----------------------------------------------------- |
| `--color-brand`          | #0073ea | Primary buttons, active states, links, selected items |
| `--color-brand-hover`    | #0060b9 | Hover state for brand elements                        |
| `--color-brand-selected` | #cce4ff | Selected/active background tint                       |
| `--color-text-on-brand`  | #ffffff | Text on brand-colored backgrounds                     |

### Background Colors

| Token                  | Value                 | Usage                          |
| ---------------------- | --------------------- | ------------------------------ |
| `--color-bg-primary`   | #ffffff               | Main content background, cards |
| `--color-bg-secondary` | #ffffff               | Secondary surfaces             |
| `--color-bg-sidebar`   | #f6f7fb               | Sidebar, left navigation panel |
| `--color-bg-topbar`    | #292f4c               | Dark top navigation bar        |
| `--color-bg-hover`     | rgba(103,104,121,0.1) | Hover state backgrounds        |

### Text Colors

| Token                      | Value   | Usage                               |
| -------------------------- | ------- | ----------------------------------- |
| `--color-text-primary`     | #323338 | Primary text, headings, labels      |
| `--color-text-secondary`   | #676879 | Secondary text, placeholders, icons |
| `--color-text-on-inverted` | #ffffff | Text on dark backgrounds            |
| `--color-text-placeholder` | #676879 | Input placeholders                  |

### Border Colors

| Token                   | Value   | Usage                            |
| ----------------------- | ------- | -------------------------------- |
| `--color-border-layout` | #d0d4e4 | Layout dividers, section borders |
| `--color-border-ui`     | #c3c6d4 | Component borders, input borders |

### Status Colors (for cells/badges)

| Token                    | Value   | Usage                       |
| ------------------------ | ------- | --------------------------- |
| `--color-done-green`     | #00c875 | Done status, success states |
| `--color-working-orange` | #fdab3d | Working on it status        |
| `--color-stuck-red`      | #df2f4a | Stuck status, errors        |
| `--color-bright-blue`    | #579bfc | Ready to start, info states |
| `--color-purple`         | #9d50dd | High priority               |
| `--color-dark-purple`    | #784bd1 | Alternative purple          |
| `--color-lipstick`       | #ff5ac4 | Pink category               |
| `--color-sunset`         | #ff7575 | Light red category          |
| `--color-dark-orange`    | #ff6d3b | Orange category             |
| `--color-aquamarine`     | #4eccc6 | Teal category               |
| `--color-dark-blue`      | #007eb5 | Dark blue category          |
| `--color-egg-yolk`       | #ffcb00 | Yellow category             |

### Color Rules

- Status badges use full cell background color with white text
- Text on colored status cells is always #ffffff
- Hover states are 10% darker than default
- Use rgba(103,104,121,0.1) for subtle hover backgrounds

---

## Typography

### Font Families

| Token                   | Value               | Usage                      |
| ----------------------- | ------------------- | -------------------------- |
| `--font-family-default` | Figtree, sans-serif | All body text, UI elements |
| `--font-family-heading` | Poppins, sans-serif | Main titles, page headers  |

### Type Scale

| Level        | Font    | Size | Weight         | Line Height | Usage                                  |
| ------------ | ------- | ---- | -------------- | ----------- | -------------------------------------- |
| H2           | Poppins | 24px | 500 (Medium)   | 30px        | Page titles ("Elevate event planning") |
| Text1        | Figtree | 16px | 400 (Regular)  | 22px        | Large body text                        |
| Text2        | Figtree | 14px | 400 (Regular)  | 20px        | Default body text, table cells, labels |
| Text2 Medium | Figtree | 14px | 600 (SemiBold) | 20px        | Button labels, emphasized text         |
| Text3        | Figtree | 12px | 400 (Regular)  | 16px        | Small labels, captions                 |
| Text3 Medium | Figtree | 12px | 600 (SemiBold) | 16px        | Small emphasized text                  |

### Typography Rules

- Default UI text is Text2 (14px Figtree Regular)
- Never use font sizes smaller than 12px
- Page titles use Poppins Medium 24px with -0.5px letter-spacing
- Table headers use Text2 Medium (14px SemiBold)
- Group titles use Text2 Medium with bold weight

---

## Spacing

### Spacing Scale

| Token        | Value | Usage                                   |
| ------------ | ----- | --------------------------------------- |
| `--space-4`  | 4px   | Tight spacing, icon gaps, badge padding |
| `--space-8`  | 8px   | Related elements, small gaps            |
| `--space-12` | 12px  | Component internal padding              |
| `--space-16` | 16px  | Default component padding, section gaps |
| `--space-24` | 24px  | Large section separation                |

### Spacing Rules

- Base unit: 4px - all spacing should be multiples
- Table row height: 36px (fixed)
- Table header height: 36px (fixed)
- Sidebar width: 300px
- Top bar height: 48px
- Component internal padding: 8px-16px
- Gap between toolbar buttons: 8px

---

## Border Radius

| Token           | Value  | Usage                                 |
| --------------- | ------ | ------------------------------------- |
| `--radius-sm`   | 4px    | Buttons, inputs, badges, status pills |
| `--radius-md`   | 8px    | Cards, dropdown menus                 |
| `--radius-lg`   | 12px   | Large cards, modals                   |
| `--radius-full` | 9999px | Circular avatars, round icons         |

---

## Shadows

| Token               | Value                       | Usage                    |
| ------------------- | --------------------------- | ------------------------ |
| `--shadow-dropdown` | 0 4px 8px rgba(0,0,0,0.1)   | Dropdowns, menus         |
| `--shadow-card`     | 0 2px 4px rgba(0,0,0,0.05)  | Cards, floating elements |
| `--shadow-modal`    | 0 8px 24px rgba(0,0,0,0.15) | Modals, dialogs          |

---

# Component Guidelines

## Top Bar

### Specifications

| Property   | Value               |
| ---------- | ------------------- |
| Height     | 48px                |
| Background | #292f4c (dark navy) |
| Width      | 100% (full width)   |
| Padding    | 0 16px              |

### Content Structure

- **Left**: Logo + "monday" text + "Work Management" label
- **Right**: Icon buttons (notification, inbox, profile, search, help, grid, product logo)
- Icon size: 20px
- Icon color: #ffffff (white)
- Gap between right icons: 8px

---

## Left Sidebar

### Specifications

| Property   | Value              |
| ---------- | ------------------ |
| Width      | 300px              |
| Background | #f6f7fb            |
| Height     | calc(100vh - 48px) |
| Padding    | 12px               |

### Navigation Items

| Property         | Value                 |
| ---------------- | --------------------- |
| Height           | 32px                  |
| Padding          | 8px 12px              |
| Border Radius    | 4px                   |
| Icon Size        | 20px                  |
| Font             | Figtree Regular 14px  |
| Text Color       | #323338               |
| Hover Background | rgba(103,104,121,0.1) |

### Selected Item

| Property    | Value             |
| ----------- | ----------------- |
| Background  | #cce4ff           |
| Left Border | 3px solid #0073ea |
| Font Weight | 600               |

### Section Headers

- Text: "Favorites", "Workspaces" - Figtree SemiBold 12px, #676879
- Uppercase or sentence case depending on context
- Margin bottom: 8px

### Workspace Item

- Icon: Colored circle (18px) with letter
- Dropdown chevron on right
- "+" button appears on hover

---

## Board Header

### Specifications

| Property   | Value     |
| ---------- | --------- |
| Padding    | 16px 20px |
| Background | #ffffff   |

### Title Row

- Title: Poppins Medium 24px, #323338
- Dropdown chevron: 20px icon
- Right actions: "AI Sidekick", "Integrate", "Automate", "Invite" button, overflow menu

### Tab Row

| Property    | Value                         |
| ----------- | ----------------------------- |
| Tab Height  | 32px                          |
| Active Tab  | Blue underline (2px, #0073ea) |
| Tab Font    | Figtree Regular 14px          |
| Tab Padding | 8px 12px                      |

### Toolbar Row

| Property          | Value                                            |
| ----------------- | ------------------------------------------------ |
| Height            | 40px                                             |
| Gap               | 8px between items                                |
| "New Item" Button | Background #0073ea, text white, padding 8px 16px |
| Other Buttons     | Ghost style, icon + text                         |

---

## Task Table

### Table Structure

| Property      | Value                      |
| ------------- | -------------------------- |
| Row Height    | 36px                       |
| Header Height | 36px                       |
| Column Border | 1px solid #e6e9ef          |
| Row Border    | 1px solid #e6e9ef (bottom) |

### Column Widths (approximate)

| Column      | Width            |
| ----------- | ---------------- |
| Checkbox    | 32px             |
| Name        | 250px (flexible) |
| Description | 180px            |
| Status      | 100px            |
| Priority    | 100px            |
| Type        | 100px            |

### Group Title Row

| Property       | Value                            |
| -------------- | -------------------------------- |
| Height         | 36px                             |
| Left Indicator | 6px width, colored (cyan/purple) |
| Collapse Arrow | 16px icon                        |
| Title Font     | Figtree SemiBold 14px            |
| Title Color    | Matches indicator color          |

### Table Cells

| Cell Type    | Styling                                    |
| ------------ | ------------------------------------------ |
| Text         | Figtree Regular 14px, #323338              |
| Checkbox     | 16px square, 4px radius, #c3c6d4 border    |
| Status Badge | Full cell background, white text, centered |
| Description  | Truncated with ellipsis                    |

### Status Badge Specifications

| Property   | Value                    |
| ---------- | ------------------------ |
| Background | Full cell (status color) |
| Text Color | #ffffff                  |
| Font       | Figtree Regular 14px     |
| Text Align | Center                   |
| Padding    | 0 8px                    |

### Add Item Row

| Property | Value                                     |
| -------- | ----------------------------------------- |
| Height   | 36px                                      |
| Icon     | "+" 16px                                  |
| Text     | "Add item" Figtree Regular 14px, #676879  |
| Hover    | Full row background rgba(103,104,121,0.1) |

---

## Buttons

### Primary Button (New Item)

| Property         | Value                 |
| ---------------- | --------------------- |
| Background       | #0073ea               |
| Text Color       | #ffffff               |
| Font             | Figtree SemiBold 14px |
| Height           | 32px                  |
| Padding          | 8px 16px              |
| Border Radius    | 4px                   |
| Hover Background | #0060b9               |

### Secondary/Ghost Button

| Property         | Value                 |
| ---------------- | --------------------- |
| Background       | transparent           |
| Text Color       | #323338               |
| Font             | Figtree Regular 14px  |
| Height           | 32px                  |
| Padding          | 8px 12px              |
| Border Radius    | 4px                   |
| Hover Background | rgba(103,104,121,0.1) |

### Outlined Button (Invite)

| Property      | Value                |
| ------------- | -------------------- |
| Background    | transparent          |
| Border        | 1px solid #c3c6d4    |
| Text Color    | #323338              |
| Font          | Figtree Regular 14px |
| Height        | 32px                 |
| Padding       | 8px 16px             |
| Border Radius | 4px                  |

### Button Rules

| ✅ Do                                   | 🚫 Don't                                |
| --------------------------------------- | --------------------------------------- |
| Use primary button for main CTA only    | Use multiple primary buttons in toolbar |
| Include icon + text for toolbar buttons | Use icon-only without tooltip           |
| Show dropdown chevron for menus         | Forget hover states                     |

---

## Icons

### Icon Sizes

| Context          | Size |
| ---------------- | ---- |
| Navigation       | 20px |
| Toolbar buttons  | 20px |
| Table cells      | 16px |
| Small indicators | 14px |

### Icon Colors

| Context            | Color   |
| ------------------ | ------- |
| Default            | #676879 |
| On dark background | #ffffff |
| Active/Selected    | #0073ea |
| On status cells    | #ffffff |

---

# Layout Guidelines

## Main Layout Structure

```
┌─────────────────────────────────────────────────────┐
│ Top Bar (48px height, full width)                   │
├────────────┬────────────────────────────────────────┤
│            │ Board Header                           │
│  Sidebar   ├────────────────────────────────────────┤
│  (300px)   │ Toolbar                                │
│            ├────────────────────────────────────────┤
│            │ Task Tables (scrollable)               │
│            │                                        │
└────────────┴────────────────────────────────────────┘
```

## Auto Layout Rules

- Default gap between elements: 8px
- Container padding: 16px-24px
- Use "Fill" for main content areas
- Use "Hug" for buttons and badges
- Tables use horizontal auto layout for columns
- Task groups use vertical auto layout

## Responsive Notes

- Minimum supported width: 1280px
- Sidebar collapses to icons at 1024px
- Table columns can be resized (min-width enforced)

---

# Interaction Guidelines

## Hover States

- Buttons: Background color change (10% darker or rgba overlay)
- Table rows: Subtle background tint rgba(103,104,121,0.05)
- Navigation items: Background rgba(103,104,121,0.1)
- Links: Underline on hover

## Transitions

- Default duration: 150ms
- Easing: ease-out
- Apply to: background-color, border-color, transform, opacity

## Focus States

- Visible focus ring for accessibility
- Use #0073ea for focus outline
- Outline offset: 2px

---

# AI Sidekick Panel (Overlay)

## Panel Specifications

| Property      | Value                                         |
| ------------- | --------------------------------------------- |
| Width         | 400px                                         |
| Border Radius | 34px                                          |
| Background    | rgba(255,255,255,0.9) with backdrop-blur 40px |
| Shadow        | 0px 6px 20px rgba(0,0,0,0.2)                  |

## Glass Effect

- Background blur: 40px
- Base background: rgba(255,255,255,0.9)
- Bottom gradient: pink→purple→cyan blend

## Content Structure

1. **Header**: AI icon + "AI Sidekick" + Beta badge + action buttons
2. **Context**: Board breadcrumb
3. **Greeting**: Personalized "Hey [Name]," message
4. **Input**: Message field with send button
5. **Suggestions**: List of contextual action cards

## Suggestion Cards

| Property          | Value                         |
| ----------------- | ----------------------------- |
| Background        | rgba(255,255,255,0.6)         |
| Border            | 0.5px solid #c3c6d4           |
| Border Radius     | 8px                           |
| Padding           | 12px horizontal, 8px vertical |
| Gap between cards | 8px                           |

---

# Do's and Don'ts

| ✅ Do                                            | 🚫 Don't                       |
| ------------------------------------------------ | ------------------------------ |
| Use the exact color tokens provided              | Use arbitrary hex colors       |
| Maintain 36px row height in tables               | Vary row heights               |
| Use Figtree for body, Poppins for titles         | Mix other fonts                |
| Keep status badges full-cell width               | Make badges smaller pills      |
| Use 4px radius for small elements                | Use inconsistent border radius |
| Show colored left indicator for groups           | Forget group color coding      |
| Include hover states on all interactive elements | Skip interaction states        |