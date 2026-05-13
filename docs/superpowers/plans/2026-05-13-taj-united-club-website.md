# Taj United Club Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a highly animated, "Neo-Bureaucratic" official website for The Taj United Club featuring a digital dossier system for the committee and a quirky recruitment exam.

**Architecture:** A Next.js application using a "Shell" pattern where the main layout mimics a digital workstation/folder system. State is managed via React Context for member clearance levels. Animations are handled by Framer Motion for high-aesthetic "folder" and "stamp" transitions.

**Tech Stack:** Next.js 14 (App Router), Tailwind CSS, Framer Motion, Lucide React (Icons).

---

## File Structure
- `app/layout.tsx` - Global shell, fonts, and state providers.
- `app/page.tsx` - The "Entry Point" landing page.
- `app/committee/page.tsx` - The Digital Directory.
- `app/committee/[id]/page.tsx` - Individual Member Dossiers.
- `app/archives/page.tsx` - The "Food Intel" gallery.
- `app/join/page.tsx` - The Recruitment Exam.
- `components/ui/Dossier.tsx` - Reusable folder/file UI component.
- `components/ui/Stamp.tsx` - Animated "Approved/Rejected" stamp.
- `components/CommitteeMember.tsx` - Card component for the directory.
- `lib/data.ts` - Mock data for members and food spots.
- `lib/store.ts` - Context for user clearance levels.

---

## Implementation Tasks

### Task 1: Environment Setup & Theme Configuration
**Files:**
- Create: `tailwind.config.ts`
- Create: `app/globals.css`

- [ ] **Step 1: Configure Tailwind colors for Neo-Bureaucracy**
```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      bureaucracy: {
        charcoal: '#1a1a1a',
        cream: '#fdfbf7',
        saffron: '#f4c430',
        chili: '#b22222',
      },
    },
  },
}
```
- [ ] **Step 2: Set up global CSS for a "paper" texture background**
```css
/* app/globals.css */
body {
  background-color: #fdfbf7;
  background-image: url("https://www.transparenttextures.com/patterns/paper.png");
  color: #1a1a1a;
}
```
- [ ] **Step 3: Commit**

### Task 2: The Global Shell & State Provider
**Files:**
- Create: `lib/store.ts`
- Modify: `app/layout.tsx`

- [ ] **Step 1: Create Clearance Context**
```typescript
// lib/store.ts
export type Clearance = 'GUEST' | 'MEMBER' | 'DIVINE';
// ... context provider logic to manage clearance state
```
- [ ] **Step 2: Wrap layout with Provider**
- [ ] **Step 3: Commit**

### Task 3: The Landing Page ("The Entry Point")
**Files:**
- Create: `app/page.tsx`
- Create: `components/ui/HeroFolder.tsx`

- [ ] **Step 1: Implement the "Classified" folder opening animation**
Use `framer-motion` to animate a folder icon expanding into the full page content.
- [ ] **Step 2: Write the "Overly Serious" Mission Statement**
Text focusing on "Strategic Non-Veg Domination."
- [ ] **Step 3: Add "Request Clearance" CTA**
- [ ] **Step 4: Commit**

### Task 4: Committee Directory & Dossier System
**Files:**
- Create: `lib/data.ts`
- Create: `app/committee/page.tsx`
- Create: `app/committee/[id]/page.tsx`
- Create: `components/CommitteeMember.tsx`

- [ ] **Step 1: Define the Committee Data Schema**
Include roles: The Divine, Founding Member, COO, Impact Player, Shadow Member.
- [ ] **Step 2: Build the Digital Directory Grid**
Hover effects that make files "wiggle" like real folders.
- [ ] **Step 3: Implement the Dossier Page**
Dynamic route that opens a "File" containing the member's photo, role, and "Food Persona."
- [ ] **Step 4: Add Role-specific visual effects** (e.g., Gold glow for The Divine, glitch for Shadow Member).
- [ ] **Step 5: Commit**

### Task 5: The Food Archives ("The Hunt")
**Files:**
- Create: `app/archives/page.tsx`
- Create: `components/ui/IntelReport.tsx`

- [ ] **Step 1: Create the "Intel Report" gallery**
Cards that look like government memos with "TOP SECRET" stamps.
- [ ] **Step 2: Implement "Strategic Notes" for each food spot**
(e.g., "Tandoori Chicken: High priority target. Recommended side: Garlic Naan.")
- [ ] **Step 3: Commit**

### Task 6: The Recruitment Exam ("Join the Unit")
**Files:**
- Create: `app/join/page.tsx`
- Create: `components/ui/Stamp.tsx`

- [ ] **Step 1: Build the multi-step "Qualification Exam"**
- [ ] **Step 2: Implement the "Loyalty Pledge" checkbox**
- [ ] **Step 3: Create the "REQUEST CLEARANCE" red stamp animation**
Using `framer-motion` to create a "slamming" effect when the button is clicked.
- [ ] **Step 4: Create the "Pending Divine's Decree" success screen**
- [ ] **Step 5: Commit**

### Task 7: Final Polish & Mobile Optimization
**Files:**
- Modify: `app/layout.tsx`
- Modify: All components

- [ ] **Step 1: Implement "Mobile Dossier" responsive views**
- [ ] **Step 2: Add "Supreme Decree" top-banner for global announcements**
- [ ] **Step 3: Final performance pass and animation smoothing**
- [ ] **Step 4: Final Commit**
