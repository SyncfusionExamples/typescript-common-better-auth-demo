# Better Auth Demo - Setup Guide

## Prerequisites

- Node.js 18+
- npm

## Installation

```bash
npm install
```

## Setup Database

```bash
npx drizzle-kit push
```

Press `y` when prompted to create the SQLite database and tables.

## Run

```bash
npm run dev
```

## Check Output

Open your browser and go to:

```
http://localhost:3000
```

You should see the landing page. Click "Sign Up" to create an account and test the authentication flow.

- **Sign Up**: http://localhost:3000/signup
- **Dashboard** (after login): http://localhost:3000/dashboard

Visit `http://localhost:3000/signup`, create an account, and you'll be redirected to the dashboard. The session persists across page refreshes via HttpOnly cookies.
