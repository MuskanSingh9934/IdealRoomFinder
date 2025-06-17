## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (latest LTS version recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```

### Running the Development Server
Start the local development server with:
```sh
npm run dev
```

The application should now be running at `http://localhost:5173/` (default port).

### Building for Production
To create a production-ready build, run:
```sh
npm run build
```

### Preview the Build
To preview the built application locally:
```sh
npm run preview
```

## Project Structure
```
├── public/        # Static assets
├── src/           # Source code
│   ├── assets/    # Images, icons, etc.
│   ├── components/# Reusable components
│   ├── pages/     # Page components (if applicable)
│   ├── App.jsx    # Main app file
│   ├── main.js    # Entry file
├── .gitignore     # Ignored files
├── index.html     # Main HTML file
├── vite.config.js # Vite configuration
├── package.json   # Dependencies and scripts
└── README.md      # Project documentation
```

