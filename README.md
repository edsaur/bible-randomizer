
# Bible Randomizer

A web application built with React and Vite that allows users to explore, read, and interact with Bible passages, take notes, and get random verses for inspiration or study. The app features user authentication, note-taking, and a clean, modern UI.

## Features

- 🔀 Get random Bible verses
- 📖 Browse books, chapters, and passages
- 📝 Take and manage personal notes
- 👤 User authentication (signup, login, profile)
- ⚡ Fast, modern UI with React + Vite
- 🗂️ Organized codebase with feature-based structure

## Project Structure

```
src/
  api/                # API utilities (Bible, Notes, Users, Supabase)
  features/           # Feature modules (authentication, bible, notes, profile, random-verses)
  pages/              # Route-based pages
  styles/             # Global styles
  ui/                 # Reusable UI components
  main.jsx            # App entry point
  App.jsx             # Main app component
public/               # Static assets
```

## Getting Started

1. **Install dependencies:**
	```
	npm install
	```

2. **Run the development server:**
	```
	npm run dev
	```

3. **Build for production:**
	```
	npm run build
	```

4. **Preview the production build:**
	```
	npm run preview
	```

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Supabase](https://supabase.com/) (for authentication and data)
- [ESLint](https://eslint.org/) (for code quality)

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
