AI-powered Content Extractor
An AI-powered web application that allows users to extract content from public URLs, generating concise summaries and key points. The extracted data is displayed in a searchable and filterable table, providing an efficient way to manage and review web content.

✨ Features
URL Content Extraction: Input any public URL to extract its main content.

AI-Powered Summarization: Automatically generates a concise summary of the extracted content using OpenAI.

Key Point Identification: Extracts and lists the most important key points from the content using OpenAI.

Global Search: Search across all extracted data (URL, summary, key points) with a single search bar.

Column-Specific Filtering: Filter results by URL, summary, or key points using dedicated input fields in the table headers.

Responsive Design: Optimized for various screen sizes, from mobile to desktop.

Interactive UI: Smooth animations and transitions powered by Framer Motion.

Modern UI Components: Built with Shadcn UI and Tailwind CSS for a clean and user-friendly interface.

🚀 Technologies Used
Frontend:

React

Next.js (for the framework)

Tailwind CSS (for styling)

Shadcn UI (for UI components like Input, Button, Card, Table)

Framer Motion (for animations)

Lucide React (for icons)

Backend:

Node.js (Runtime environment)

Express.js (Web framework)

cors, body-parser, dotenv, express-rate-limit (for middleware and environment variables)

Integration with OpenAI API for AI capabilities.

⚙️ Installation
To run this project locally, follow these steps:

1. Clone the repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

2. Install Frontend Dependencies
Navigate into the project directory and install the necessary npm packages:

npm install
# or
yarn install

3. Set up the Backend (Crucial)
This frontend application relies on a Node.js backend service to perform the actual content extraction and AI summarization. The backend code you've provided (app.js) sets up an Express server.

Backend Structure (Conceptual):

Your backend would typically have a structure similar to this:

your-repo-name/
├── backend/                  # Or directly in the root if it's a monorepo
│   ├── app.js                # Main Express application file
│   ├── routes/
│   │   └── content.routes.js # Contains the /extract endpoint logic
│   ├── middlewares/
│   │   └── error.middleware.js
│   ├── .env                  # For backend environment variables (e.g., OPENAI_API_KEY)
│   └── package.json          # Backend dependencies
├── frontend/                 # Your Next.js frontend
│   ├── .env.local            # For frontend environment variables (e.g., NEXT_PUBLIC_API_URL)
│   ├── package.json
│   └── ...
└── README.md

To run the backend:

Navigate to your backend directory (e.g., cd backend/ if it's in a subfolder, or stay in the root if app.js is there).

Install backend dependencies:

npm install
# or
yarn install

Ensure your content.routes.js file (or wherever your /extract logic resides) is implemented to:

Fetch content from the provided URL.

Process the content (e.g., extract main text).

Make API calls to OpenAI for summarization and key points.

Start the backend server:

npm run dev

The server should start on http://localhost:5000 (or your configured PORT).

4. Configure Environment Variables
Both the frontend and backend require environment variables.

Frontend (.env.local in frontend root):
This tells your frontend where to find the backend.

NEXT_PUBLIC_API_URL=http://localhost:5000

Replace http://localhost:5000 with your actual backend URL if it's different (e.g., if you deploy your backend separately).

Backend (.env in backend root):
This is where you'll store your OpenAI API key.

PORT=5000
OPENAI_API_KEY=YOUR_OPENAI_API_KEY_HERE

Important: Replace YOUR_OPENAI_API_KEY_HERE with your actual OpenAI API key. Never commit your API keys directly to your repository.

5. Run the Frontend Development Server
npm run dev
# or
yarn dev

The application will be accessible at http://localhost:3000.

🖥️ Usage
Enter URL: Type or paste a public URL into the input field at the top of the page.

Extract Content: Click the "Extract" button. The application will fetch content from the URL, process it via the backend, and display the summary and key points in the table.

Search: Use the global search bar (🔍 Search across all fields...) to find content matching your keywords across all columns.

Filter: Use the "Filter by..." input fields within each table header (URL, Summary, Key Points) to narrow down results for specific columns.

View Original URL: Click on the URL in the table to open the original page in a new tab.

🤝 Contributing
Contributions are welcome! If you have suggestions for improvements, new features, or bug fixes, please feel free to:

Fork the repository.

Create a new branch (git checkout -b feature/your-feature-name).

Make your changes.

Commit your changes (git commit -m 'Add new feature').

Push to the branch (git push origin feature/your-feature-name).

Create a new Pull Request.

📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
