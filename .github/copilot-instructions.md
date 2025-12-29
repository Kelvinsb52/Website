# GitHub Copilot Instructions

## Interaction Preferences

When responding to questions or requests:

1. **First Response**: Provide reasoning and planning

   - Explain your understanding of the question/problem
   - Share your reasoning for the approach you'll take
   - Outline your implementation plan with clear steps

2. **Second Response**: Provide the code implementation
   - After the user acknowledges the plan, deliver the actual code
   - Keep reasoning and planning separate from code delivery

This two-step approach ensures alignment before implementation.

## Architecture

This is a single-page portfolio website built with React and Vite.

- **`src/main.jsx`**: The entry point of the application.
- **`src/App.jsx`**: The root component, which sets up the routing using `react-router-dom`.
- **`src/pages/`**: Contains the different pages of the website. `Home.jsx` is the main page, which is composed of multiple sections.
- **`src/components/`**: Contains reusable components that make up the pages. Each major section of the homepage (e.g., `HeroSection`, `ProjectsSection`, `SkillsSection`) is a component in this directory.
- **`src/components/ui/`**: Contains UI primitives, like `toast.jsx`, which are built using `radix-ui`.
- **Styling**: The project uses Tailwind CSS for styling. Utility classes are used directly in the JSX. The `tailwind.config.js` file is not present in the provided file tree, but it is a key part of the styling system. The `cn` utility from `lib/utils.js` is used for conditionally applying classes.
- **Data**: Project and skill data is currently hardcoded within the respective components (e.g., `ProjectsSection.jsx`).

## Developer Workflow

- To start the development server, run `npm run dev`.
- To build the project for production, run `npm run build`.
- To preview the production build, run `npm run preview`.
- Linting is set up with ESLint. Run `npm run lint` to check for linting errors.

## Conventions

- Components are functional components.
- Styling is done with Tailwind CSS utility classes.
- Icons are from `lucide-react`.
- Use the `cn` utility function from `src/lib/utils.js` for conditional class names.
- The project data is hardcoded in the components. When adding new projects or skills, you will need to modify the arrays in `src/components/ProjectsSection.jsx` and `src/components/SkillsSection.jsx`.
- The routing is handled by `react-router-dom`. The main page is composed of sections that are linked to from the `Navbar` using hash links (e.g., `/#projects`).

## External Dependencies

- `react-router-dom` for routing.
- `lucide-react` for icons.
- `@radix-ui/react-toast` for toast notifications.
- `tailwindcss` and related packages for styling.
- `vite` as the build tool.
