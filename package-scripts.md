# Development Scripts

## Available Scripts

### `npm run dev`
Starts the development server with hot reload.
- Opens at: http://localhost:5173
- Features: Fast refresh, TypeScript checking

### `npm run build`
Builds the app for production.
- Output: `dist/` folder
- Optimized for performance
- Minified files
- Tree-shaking enabled

### `npm run preview`
Preview the production build locally.
- Serves the `dist/` folder
- Useful for testing before deployment

## Development Notes

### Animation Timing
- Intro sequence: 3.5 seconds total
- Text stagger: 0.7s between lines
- Hover transitions: 0.3s ease
- Click transitions: 0.4-0.5s ease
- Modal animations: 0.5s cubic-bezier

### Color Palette
- Background: #0a0a0a → #111111 gradient
- Accent: Blue (#3b82f6) to Purple (#8b5cf6)
- Text: White with gradient effects
- Glass panels: rgba(17, 17, 17, 0.7) with blur

### Spacing System
Based on 8px increments:
- Section padding: 120px (15 × 8px)
- Card padding: 24px (3 × 8px)
- Element gaps: 24px (3 × 8px)
- Max width: 1200px centered

### Performance Tips
1. Use CSS animations over JavaScript
2. Optimize images with lazy loading
3. Minimize re-renders with React.memo
4. Use Tailwind's purge in production
5. Implement virtual scrolling for large lists

### Browser Support
- Modern browsers (Chrome 90+, Firefox 88+, Safari 14+)
- Responsive design down to 320px width
- Touch-friendly interactions
- Reduced motion preferences respected

### Deployment
The build output is a single HTML file with inlined CSS and JS, making it easy to deploy to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

### Customization
To modify the portfolio:
1. Update project data in `src/App.tsx`
2. Change colors in `src/index.css`
3. Adjust animations in CSS keyframes
4. Replace video URLs with actual content
5. Update contact information

### Testing
- Test on multiple screen sizes
- Check animation performance
- Verify accessibility (contrast, keyboard nav)
- Test modal interactions
- Validate form submissions (if any)