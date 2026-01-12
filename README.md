# premier-zone-frontend


PremierZone Frontend
Frontend application for browsing Premier League players and teams.

This project is part of a full‑stack application and communicates with a Spring Boot backend via a REST API.
This repository contains only the frontend layer built with React.

TECH STACK
React
TypeScript
Vite
CSS (custom styling with Tailwind base)
Git & GitHub

FEATURES
• Display a list of Premier League players
• Fetch real data from a Spring Boot REST API
• Player cards with detailed statistics
– goals
– assists
– matches played
• Search players by name
• Responsive grid layout
• Clean, component‑based architecture

PROJECT STRUCTURE
src
components

Navbar.tsx
PlayerCard.tsx
PlayerSearch.tsx
PlayersList.tsx
pages

PlayersPage.tsx
TeamsPage.tsx
services

api.ts
App.tsx
main.tsx
index.css

BACKEND
The frontend communicates with a Spring Boot REST API.

Example endpoint:
http://localhost:8081/api/v1/player

Backend repository:
(to be added later)

RUNNING THE PROJECT LOCALLY
Clone the repository:
git clone https://github.com/YOUR_USERNAME/premier-zone-frontend.git
cd premier-zone-frontend

Install dependencies:
npm install

Start development server:
npm run dev

The application will be available at:
http://localhost:5173

Important:
Make sure the backend is running on port 8081.

PROJECT STATUS
Work in progress.

Planned features:
• Teams page with team cards
• Team logos
• Routing for players and teams
• Filtering players by team and position
• Further UI improvements and animations

WHAT I LEARNED
• Connecting a React frontend to a real backend API
• Working with useState and useEffect in a real application
• Building reusable UI components
• Debugging real‑world frontend issues
• Managing project history with Git and commits



GitHub:
https://github.com/marekrychwa
