# Quiz App (Astro + React + Tailwind)

This is a lightweight, responsive quiz web app built using **Astro**, **React**, and **Tailwind CSS**. It supports multiple quizzes like _Time Management_, _Productivity_, and _Sleep Management_, each with its own landing page and a separate quiz flow.

The app stores answers in `localStorage`, uses mock data, and focuses on clean structure, scalability, and simplicity – making it easy to expand or adapt in the future.

**App is hosted on Vercel, URL found in About section.**

## Running Locally

Make sure you have [Node.js](https://nodejs.org/) installed.

```
# 1. Clone the repo
git clone <repo-name>

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

## Project Goals

- Build a smooth and responsive quiz experience.
- Use **Astro** for fast, modern frontend architecture.
- Style with **Tailwind CSS** for rapid and maintainable UI.
- Keep everything modular and scalable so we can easily support 100+ quizzes.
- Focus more on learning and good structure than on pixel-perfect visuals or full edge case coverage.

## Tech Stack

- **Astro** - for fast rendering and flexible component architecture.
- **React** - handles interactive quiz logic and UI.
- **Tailwind CSS** - utility-first styling for speed and consistency.
- **Vercel** - for hosting.
- **React Icons** - for icons.

## Structure & Scalability

Each quiz includes:

- A landing page at `/quiz-name` (e.g., `/time-management`) using shared layout components.
- A quiz flow managed by React that renders questions, collects answers, and displays results.

## Can it scale to 100+ quizzes?

Yes – and it already does. The current setup includes:

- A central `quizContent.ts` file that holds all quiz content in one place.
- A dynamic `quiz/[quizId].astro` route that loads the correct quiz based on the URL slug.
- Shared layout and logic components (`QuizLandingLayout`, `QuestionBlock`, etc.) that dynamically adapt to the quiz data.

This means adding a new quiz is as easy as updating the quiz content file - no need to duplicate routes or logic. The architecture is already optimized for scalability and reusability.

## Reusability & Replication

The current structure already avoids duplication:

- Shared UI components (buttons, cards, etc.).
- Shared React logic to manage question flow and result calculation.

## Features Implemented

- ✅ Three quizzes with unique landing pages
- ✅ Fully responsive layout using Tailwind
- ✅ Answer storage in `localStorage` - past questions saved and reflected so they show when user goes backward
- ✅ Modular file structure with reusable components

## Room for Improvement

- **External Data**: Move from mock data to CMS or API-based structure. Save quiz data to db or send to analytics or 3rd party CRM.
- **Better State Management**: For more complex logic, consider Zustand or similar.
- **Deeper Result Logic**: Right now, results are static – these could be personalized.
- **A11y & Transitions**: Add animations and improve accessibility for keyboard/screen reader use.
