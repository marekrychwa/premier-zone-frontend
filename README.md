# PremierZone Frontend ⚽

Frontend application for browsing Premier League players and teams.

This project is part of a full-stack application and communicates with a Spring Boot backend via a REST API.
This repository contains only the frontend layer built with React.

---

## Tech Stack

- React
- TypeScript
- Vite
- CSS (custom styling with Tailwind base)
- Git & GitHub

---

## Features

- Display list of Premier League players
- Fetch real data from Spring Boot REST API
- Player cards with detailed statistics (goals, assists, matches)
- Search players by name
- Responsive grid layout
- Clean, component-based architecture

---

## Project Structure

```text
premier-zone-frontend
│
├── src
│   ├── components
│   │   ├── Navbar.tsx
│   │   ├── PlayerCard.tsx
│   │   ├── PlayerSearch.tsx
│   │   └── PlayersList.tsx
│   │
│   ├── pages
│   │   ├── PlayersPage.tsx
│   │   └── TeamsPage.tsx
│   │
│   ├── services
│   │   └── api.ts
│   │
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
│
├── public
├── package.json
└── README.md
