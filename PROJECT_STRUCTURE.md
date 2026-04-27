# Project Structure

```
varun-motion-portfolio/
├── public/
│   └── favicon.svg          # Custom SVG favicon
├── src/
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   ├── index.css            # Global styles and animations
│   └── utils/
│       └── cn.ts            # Class name utility
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── README.md               # Project documentation
└── PROJECT_STRUCTURE.md    # This file
```

## Key Files

### `src/App.tsx`
The main component containing:
- Hero section with animated text
- Showreel section with embedded video
- Projects grid with interactive cards
- About section with bio and tools
- Contact section with gradient cards
- Project modal for detailed views

### `src/index.css`
Custom styles including:
- Animation keyframes (fade-in, zoom-in, bounce, modal-in)
- Custom scrollbar styling
- Glass effect utilities
- Gradient text utilities
- Smooth scrolling behavior

### `index.html`
HTML template with:
- Updated title and meta tags
- Favicon reference
- Font preloading

## Design System

### Colors
- Background: `#0a0a0a` to `#111111` gradient
- Accent: Blue (`#3b82f6`) to Purple (`#8b5cf6`) gradient
- Text: White with gray variants for hierarchy
- Glass effects: Semi-transparent white/black with blur

### Typography
- Hero: 7xl-8xl bold with gradient text
- Section headers: 4xl-5xl bold
- Body text: Various sizes with gray colors
- Small text: 12px-14px for details

### Spacing
- 8px spacing system
- Section padding: 120px top/bottom
- Card padding: 24px
- Gap between elements: 24px
- Max width: 1200px centered

### Animations
- Hover transitions: 0.3s ease
- Click transitions: 0.4-0.5s ease
- Page load animations: 0.8-1s with delays
- Modal animation: 0.4s cubic-bezier

## Components

### Project Cards
- 3-column grid on desktop
- Hover: scale, lift, and border color change
- Click: Opens modal with project details
- Thumbnail with play button overlay
- Tools badges with gradient backgrounds

### Glass Panels
- Semi-transparent background with blur
- Gradient borders
- Soft shadows
- Rounded corners (20px)

### Modal
- Centered floating panel
- Backdrop blur effect
- Video player
- Project details and tools
- Smooth open/close animation

## Responsive Breakpoints
- Mobile: < 640px (1 column grid)
- Tablet: 640px - 1024px (2 column grid)
- Desktop: > 1024px (3 column grid)

## Performance Notes
- Images use Unsplash CDN for performance
- Videos are embedded via iframe (lazy loading)
- CSS animations use GPU acceleration
- Minimal JavaScript for interactions
- Optimized build with Vite