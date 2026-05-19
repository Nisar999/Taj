# The Taj United Club - Neo-Bureaucratic Website

A sophisticated, animated website for The Taj United Club featuring a unique "Neo-Bureaucratic" design aesthetic with clearance-level based access control.

## Features

### Design Language
- **Color Palette**: Charcoal (#1a1a1a), Cream (#f5f1e8), Saffron (#d4a574), Chili Red (#c41e3a)
- **Neo-Bureaucratic Aesthetic**: Folder metaphors, file-like cards, classification stamps, and official document styling
- **Premium Typography**: Serif headings with elegant spacing and professional layout

### Interactive Features
- **Clearance Levels**: GUEST → MEMBER → DIVINE with dynamic content access
- **Animated Components**: Smooth transitions, folder-opening animations, stamp effects
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Context-Based Rendering**: Content visibility controlled by user's clearance level

## Pages

1. **Home** (`/`) - Hero folder with club introduction
2. **Committee Directory** (`/directory`) - Dossier-style member cards with clearance restrictions
3. **Food Archives** (`/food`) - Culinary venues with approval stamps
4. **Facilities** (`/facilities`) - World-class amenities display
5. **Events** (`/events`) - Timeline of upcoming exclusive gatherings
6. **Membership** (`/membership`) - Tiered membership plans with benefits

## Technology Stack

- **Framework**: Next.js 16 with TypeScript
- **Styling**: Tailwind CSS with custom Neo-Bureaucratic theme
- **Animations**: Framer Motion with custom keyframes
- **Icons**: Lucide React
- **State Management**: React Context API for clearance levels

## Key Components

- `HeroFolder` - Animated hero section with folder metaphor
- `Dossier` - Member profile cards with clearance badges
- `IntelReport` - Food/venue cards with approval stamps
- `ClearanceSelector` - Fixed control panel for testing different access levels
- `Navigation` - Responsive header with logo and menu
- `Stamp` - Decorative approval/classification stamps

## Color System

| Role | Color | HEX |
|------|-------|-----|
| Primary Background | Charcoal | #1a1a1a |
| Text/Light | Cream | #f5f1e8 |
| Accent Gold | Saffron | #d4a574 |
| Primary Red | Chili Red | #c41e3a |

## Animation Keyframes

- `folder-open` - 3D folder opening effect
- `file-wiggle` - Subtle file wiggle motion
- `stamp-slam` - Approval stamp slam animation
- `glow-pulse` - Red glow pulse for role indicators

## Mock Data

The site includes comprehensive mock data:
- 6 Committee Members with role-based clearance levels
- 6 Culinary Archives (dining venues)
- 6 World-class Facilities
- 4 Upcoming Events
- 3 Membership Plan Tiers

## Getting Started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` and use the clearance selector to explore different access levels.

## Deployment

Deploy to Vercel with a single command:
```bash
vercel
```

## Project Structure

```
├── app/
│   ├── layout.tsx           # Root layout with context provider
│   ├── page.tsx             # Home page
│   ├── directory/           # Committee directory page
│   ├── food/               # Food archives page
│   ├── facilities/         # Facilities page
│   ├── events/             # Events page
│   ├── membership/         # Membership page
│   ├── globals.css         # Global styles
│   └── context/
│       └── ClearanceContext.tsx  # Clearance state management
├── components/
│   ├── Navigation.tsx       # Header navigation
│   ├── HeroFolder.tsx      # Hero section
│   ├── Dossier.tsx         # Member card component
│   ├── IntelReport.tsx     # Venue card component
│   ├── Stamp.tsx           # Decorative stamp
│   └── ClearanceSelector.tsx # Clearance level control
├── lib/
│   └── data.ts             # Mock data
└── public/
    └── logo.png            # TUC Wax Seal logo
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

**Built with ❤️ for The Taj United Club**
