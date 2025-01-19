# Ultimate Dad Joke Generator

Welcome to the **Ultimate Dad Joke Generator**! This web app delivers an endless supply of dad jokes, perfect for lightening the mood or sharing a laugh with friends and family. Built with Next.js, Tailwind CSS, and powered by a humor API, this app ensures you never run out of witty punchlines.

## Features

- **Dynamic Joke Generation**: Fetch new dad jokes instantly.
- **Copy to Clipboard**: Easily share your favorite jokes with friends.
- **Responsive Design**: Optimized for devices of all sizes.
- **API-Driven**: Jokes fetched dynamically from a humor API.

## Tech Stack

- **Framework**: [Next.js 15.1.5](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Dependencies**:
  - React and React DOM for UI rendering.
- **Development Tools**:
  - TypeScript for type safety.
  - ESLint for linting and code quality.
- **Hosting**: Deployed on [Netlify](https://netlify.com).

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

1. Clone the repository:

```bash
git clone https://github.com/sanjeevmalagi1/dad-jokes-generator.git
cd dad-jokes-generator
```

2. Install dependencies:
```bash
npm install
```

3. Create an `.env.local` file and configure the following environment variable:
```bash
API_BASE_URL=<your_api_base_url>
```

4. Run the development server:
```bash
npm run dev
```

5. Open http://localhost:3000 in your browser to see the app.


### Deployment
To deploy the app, build it using:

```bash
npm run build
```
Deploy the generated .next folder and static assets to your hosting provider.

# License
This project is licensed under the MIT License. See the LICENSE file for details.
