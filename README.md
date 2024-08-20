# AutoComplete Component

## How to Run the Project

1. **Clone the repository:**
   ```sh
   git clone https://github.com/Emiliooo90/pagerduty_dashboard_frontend
   cd pagerduty_dashboard_frontend
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Start the development server:**
   ```sh
   npm start
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Project Structure

- `src/components/AutoComplete/`: Contains the AutoComplete component and its styles.
- `src/services/`: Contains the API service for fetching suggestions.
- `src/utils/`: Contains utility types.
- `src/hooks/`: Contains custom hooks.

## Key Considerations

- The component is built with performance in mind.
- No third-party libraries are used.
- Proper TypeScript interfaces are provided.
- The filtering is asynchronous.
- The user experience is enhanced with CSS.
- Functional components and hooks are used.

## Additional Information

### Styling

The project uses CSS for styling. Here are some key files:
- Global styles: `src/App.css` (startLine: 1, endLine: 138)
- AutoComplete component styles: `src/components/AutoComplete/AutoComplete.css` (startLine: 1, endLine: 93)
- Footer component styles: `src/components/Footer/Footer.css` (startLine: 1, endLine: 62)

### TypeScript Configuration

The project is configured to use TypeScript. Key configuration settings can be found in `tsconfig.json`:

### API Service

The API service for fetching suggestions is defined in `src/services/api.ts`:

### Custom Hooks

A custom hook for debouncing is available in `src/hooks/useDebounce.ts`:

### Deployed Webpage

The project is deployed on Netlify and can be accessed at:
[https://pagerdutydashboardfrontend.netlify.app/](https://pagerdutydashboardfrontend.netlify.app/)