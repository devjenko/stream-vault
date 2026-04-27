# Stream Vault

Search, rate, and maintain a personal library of movies with Stream Vault, a React web application powered by The Movie Database API.

## Overview

Stream Vault is a web-based movie tracking application that lets you discover films through The Movie Database (TMDB) API, view detailed information about each movie, and build a personalized list of movies you've watched. Each movie in your list can be rated individually, and the app tracks both IMDB ratings and your personal ratings across your entire list.

The application is built with React and TypeScript, styled with Tailwind CSS, and optimized with Vite. Your watched movies are persisted to your browser's local storage, so your library is preserved between sessions. The interface features collapsible panels for searching and viewing movie details, making it easy to manage your collection on both desktop and mobile devices.

Stream Vault is ideal for anyone who wants to keep track of movies they've watched, maintain a personalized rating system, and discover new films through an intuitive, responsive interface.

## Installation

### Prerequisites

- Node.js 16+ (or compatible runtime)
- npm or pnpm package manager

### Setup

1. Clone or download the repository
2. Install dependencies:

```bash
npm install
```

Or with pnpm:

```bash
pnpm install
```

3. Create a `.env` file in the project root with your TMDB API key:

```
VITE_TMDB_API_KEY=your_api_key_here
```

To obtain a TMDB API key, visit [The Movie Database API documentation](https://www.themoviedb.org/settings/api).

4. Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Usage

### Searching for Movies

1. Use the search input in the top navigation bar to search for movies by title
2. Results appear in the left panel as a scrollable list of movie cards
3. Click any movie card to view its full details in the right panel

### Viewing Movie Details

When you select a movie, the right panel displays:

- Movie title and release year
- Plot summary
- Runtime and IMDB rating
- Your personal rating (if already in your list)
- An "Add to List" button to save the movie to your watched collection

### Rating and Saving Movies

1. Click on a movie card to view its details
2. Use the rating input to set your personal rating (0-10 scale)
3. Click "Add to List" to save the movie with your rating to your watched collection
4. The app will show a confirmation message

Movies are only added to your list if you provide a rating. Duplicate entries are prevented.

### Managing Your Watched List

Your watched movies appear in a collapsible panel on the right side of the screen. Each entry shows:

- Movie title and poster
- Your personal rating
- IMDB rating
- Runtime
- A remove button to delete from your list

The app displays summary statistics:

- Average IMDB rating across your watched movies
- Average of your personal ratings

Your watched list is automatically saved to your browser's local storage and persists between sessions.

### UI Navigation

- Use the collapse/expand buttons on each panel to show or hide the search results and details sections
- The layout is responsive and adapts to mobile and tablet screen sizes

## Configuration

Stream Vault uses environment variables to configure the TMDB API:

| Variable            | Required | Description                                             |
| ------------------- | -------- | ------------------------------------------------------- |
| `VITE_TMDB_API_KEY` | Yes      | API key for The Movie Database API. Set in `.env` file. |

Create a `.env` file in the project root with this variable. The app will not function without a valid API key.

## Development

Build scripts:

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Lint code
npm run lint

# Format code with Prettier
npm run format

# Preview production build
npm run preview
```

The project uses:

- **React 19** for UI components
- **TypeScript** for type safety
- **Tailwind CSS** with Vite plugin for styling
- **Vite** for fast build tooling and development
- **ESLint** and **Prettier** for code quality and formatting
