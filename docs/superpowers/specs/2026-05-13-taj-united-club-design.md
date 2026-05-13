---
name: taj-united-club-website
description: Design specification for the official website of The Taj United Club.
metadata:
  type: project
---

# Design Specification: The Taj United Club Official Website

## 1. Overview
The Taj United Club is a "Special Interest Group" focused on exploring non-veg food spots. The website serves as the official digital presence, emphasizing a "Neo-Bureaucracy" aesthetic—mixing formal, official structures with playful, quirky humor.

## 2. Visual Identity & Aesthetic
- **Style:** Neo-Bureaucracy (Modern Digital Dossier).
- **Vibe:** High-end corporate/government database meets a secret society of foodies.
- **Color Palette:**
  - Primary: Deep Charcoal / Slate (The "Official" feel).
  - Background: Cream/Off-white (The "Paper/Dossier" feel).
  - Accents: Saffron/Chili Red (The "Foodie/Urgency" feel).
- **Key Visual Elements:** Digital stamps, "Classified" watermarks, folder-based navigation, high-resolution non-veg food imagery, and "Top Secret" dossier layouts.

## 3. Core Features & Pages

### 3.1 The Landing Page ("The Entry Point")
- **Hero Section:** Animated "Classified" folder that opens to reveal the club name.
- **Mission Statement:** A formally worded, overly serious declaration of the club's intent to dominate the non-veg food scene.
- **Call to Action:** "Request Clearance" button leading to the application.

### 3.2 The Committee Registry ("The Hierarchy")
- **Layout:** A digital directory of members.
- **Interactions:** Member profiles are "files." Clicking a member opens a detailed dossier.
- **Roles & Badges:**
  - **The Divine:** Supreme clearance, gold glow/seal.
  - **Founding Member:** Architect badge, focus on origin story.
  - **Chief Operating Officer (COO):** Logistics badge, focus on coordination.
  - **Impact Player:** Specialist badge, focus on food discovery.
  - **Shadow Member:** Semi-transparent/glitchy profile effect.

### 3.3 The Food Archives ("The Hunt")
- **Layout:** A "Intel Report" style gallery of food spots.
- **Content:** High-res photos, "Taste Ratings," and "Strategic Notes" on why the spot is recommended.
- **Feature:** "Submit Intel" form for members to propose new spots.

### 3.4 The Recruitment Portal ("Join the Unit")
- **Concept:** "Membership Qualification Exam."
- **The Process:**
  1. Identity Verification (Basic info).
  2. Palate Assessment (Quirky, high-stakes food questions).
  3. Loyalty Pledge (Anti-vegetarian agreement).
  4. Submission: "REQUEST CLEARANCE" red stamp animation.
- **Post-Submission:** A "Pending Review" screen awaiting the "Divine's Decree."

## 4. Technical Architecture

### 4.1 Stack
- **Framework:** Next.js (App Router).
- **Styling:** Tailwind CSS.
- **Animations:** Framer Motion (Folder transitions, stamp effects, dossier sliding).
- **State Management:** React Context (User clearance: Guest vs Member).

### 4.2 Use-Case Handling
- **Admin Panel:** Secretly accessed area for the Committee to approve/reject applicants.
- **Supreme Decree:** A top-bar banner controllable by the Divine for urgent announcements.
- **Mobile Optimization:** Responsive "Mobile Dossier" view that retains the aesthetic but simplifies navigation.

## 5. Success Criteria
- Site feels "Official yet Absurd."
- Animations are smooth and "aesthetic" (no jank).
- The application process feels like an "exam" rather than a form.
- Committee roles are visually distinct and prestigious.
