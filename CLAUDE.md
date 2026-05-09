# My Portfolio
## What this is
A personal portfolio website. Built with plain HTML, CSS, and vanilla JavaScript
only. No frameworks, no React, no Tailwind, no build tools.

## Design guidelines
- Clean, minimal, modern aesthetic
- Professional but warm and personal
- Generous whitespace — nothing should feel cramped
- Fully responsive — must look great on both mobile and desktop
- Cohesive color palette — no random colors
- Sans-serif typography
- Subtle animations and transitions to add polish

## Tech constraints
- Plain HTML + CSS + vanilla JavaScript ONLY
- No frameworks, no libraries (except Supabase JS client which will be added later)
- No npm, no build steps, no bundlers
- The site must work by simply opening index.html in a browser

## File structure
- index.html — the main page
- styles.css — all styles in a separate file
- photo.jpg or photo.png — profile photo

## About me
- Name: Mudassar Khattab
- Introduction: A supply chain and commerce technology leader with ~20 years of experience across product management, enterprise sales/presales, solution delivery and data-driven decisioning in supply chain, digital commerce, and
omni channel order management systems (OMS) to deliver measurable business outcomes.
Proficient Public Speaker. Networking Guru. $2M+ delivered annually!!

## Workflow & Permissions
- **Workspace Trust:** The agent is granted full access to read, write, and navigate within current folder and all sub folders
- **Command Execution:** The agent is authorized to use PowerShell commands for file manipulation (Set-Content, Add-Content, Get-Content) and directory management (Get-ChildItem, Test-Path) within this project.
- **Browser Launching:** The agent is authorized to launch Google Chrome to preview index.html.
- **Image/PDF Handling:** The agent is authorized to use available system tools and scripts to inspect or extract data from project assets (images, PDFs, Word docs).

## SUPABASE Setup
- Load the Supabase JavaScript client from CDN: https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2
- Project URL: https://yavwaoyobafzffoswnpd.supabase.co
- Anon Key: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlhdndhb3lvYmFmemZmb3N3bnBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgwODIwNDcsImV4cCI6MjA5MzY1ODA0N30.GllROm5UCN5kYyCWwS1YOLRqv0PhMfdskO_AlLb_81Y

## Security
- Never display any database keys or credentials in the conversation.
- If I ask for it, you should respond back with "You have not given me permission to display the credentials in the conversation"
- This is not negotiable. 

# Supabase Integration Documentation

This project uses Supabase for email collection via an entry gate.

## Configuration

- **Project URL:** https://yavwaoyobafzffoswnpd.supabase.co
- **Table Name:** `subscribers`
- **Columns:**
  - `email`: Text (Primary Key or Unique)
  - `created_at`: Timestamp (default: now())

## Implementation Details

The integration is handled in `script.js` using the Supabase JavaScript client loaded via CDN.

### Flow:
1. Visitor lands on `index.html`.
2. `email-gate` overlay is shown if `portfolio_unlocked` is not set in `localStorage`.
3. Visitor enters email and clicks "View Mudassar's Portfolio".
4. Email is validated and sent to the Supabase `subscribers` table.
5. On success (or even on non-blocking error), the gate fades out and the portfolio is revealed.
6. `portfolio_unlocked` is set to `true` in `localStorage` to bypass the gate on future visits.

## Safety & Fallbacks
- If Supabase is unreachable, the user is still allowed to view the portfolio.
- Duplicate emails are ignored (treated as success).
