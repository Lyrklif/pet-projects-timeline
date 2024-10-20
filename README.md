# Pet Projects Timeline

**Pet Projects Timeline** is a web application that helps you track and showcase your pet projects over time. It displays a timeline of your personal projects, allowing you to filter and view details of each project. The app is built with SvelteKit and hosted on GitHub Pages.

![Project Screenshot](TODO add screenshot)

## Features

- **Timeline of Projects:** View a chronological list of your pet projects.
- **Filters:** Filter projects by topic.
- **GitHub Integration:** Projects are fetched directly from GitHub repositories.
- **Responsive Design:** Works well on both desktop and mobile devices.
- **Static Hosting:** Deployed using GitHub Pages.

## Demo

Check out the live demo: [Pet Projects Timeline](https://lyrklif.github.io/pet-projects-timeline/)

## Installation

To run the project locally, follow these steps:

1. Clone the repository:
```bash
git clone https://github.com/lyrklif/pet-projects-timeline.git
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory based on the `.env.example` file:

```bash
cp .env.example .env
```

Fill in the following values in the `.env` file:

```bash
VITE_USER_NAME=<Your GitHub username>
VITE_GITHUB_LINK=<Your GitHub profile link>
VITE_API=<GitHub API URL, e.g., https://api.github.com>
```

4. Run the development server:

```bash
npm run dev
```

5. Open your browser and go to `http://localhost:5173`.

## Deployment

This project is set up for deployment to GitHub Pages using the `@sveltejs/adapter-static`. To deploy it, simply run:

```bash
npm run deploy
```

Make sure that the base path is set correctly in the `svelte.config.js` file:

```js
paths: {
  base: '<repository-name>'
}
```

And `static/404.html`

```js
window.location.href = '/<repository-name>/#' + pathname;
```

## Tech Stack

- **Framework:** SvelteKit
- **Hosting:** GitHub Pages
- **CSS Framework:** Flowbite-Svelte
- **Data Fetching:** Svelte Query
- **Markdown Parsing:** Marked.js

## Environment Variables

The project requires the following environment variables to be set in a `.env` file:

- `VITE_USER_NAME` - Your GitHub username.
- `VITE_GITHUB_LINK` - The link to your GitHub profile.
- `VITE_API` - The GitHub API URL, e.g., `https://api.github.com`.

An example of these variables can be found in the `.env.sample` file.

## Contributions

Contributions are welcome! If you have suggestions for improving the project or want to report an issue, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
