# 🧠 AI-powered Content Extractor

An AI-powered web application that allows users to extract content from public URLs, generating concise summaries and key points. The extracted data is displayed in a searchable and filterable table, providing an efficient way to manage and review web content.

---

## ✨ Features

- **URL Content Extraction**: Input any public URL to extract its main content.
- **AI-Powered Summarization**: Automatically generates a concise summary of the extracted content using OpenAI.
- **Key Point Identification**: Extracts and lists the most important key points from the content using OpenAI.
- **Global Search**: Search across all extracted data (URL, summary, key points) with a single search bar.
- **Column-Specific Filtering**: Filter results by URL, summary, or key points using dedicated input fields in the table headers.
- **Responsive Design**: Optimized for various screen sizes, from mobile to desktop.
- **Interactive UI**: Smooth animations and transitions powered by Framer Motion.
- **Modern UI Components**: Built with Shadcn UI and Tailwind CSS for a clean and user-friendly interface.

---

## 🚀 Technologies Used

### Frontend

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn UI](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide React](https://lucide.dev/)

### Backend

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- Middleware: `cors`, `body-parser`, `dotenv`, `express-rate-limit`
- Integration with **OpenAI API** for summarization and key point extraction

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
https://github.com/subash01/frontend.git
```
cd YOUR_REPO_NAME

### 2. Frontend
```
cd frontend
npm install
or
yarn install
```
To Run Frontend Code Use The Below Command
```
npm run dev
```

### 3. Backend
```
your-repo-name/
├── backend/
│   ├── app.js
│   ├── routes/
│   │   └── content.routes.js
│   ├── middlewares/
│   │   └── error.middleware.js
│   ├── .env
│   └── package.json
├── frontend/
│   ├── .env.local
│   ├── package.json
│   └── ...
└── README.md

cd backend
npm install
or
yarn install
```
To Run Backend Code Use The Below Command
```
npm run dev
```

### 4.  Configure Environment Variables
```
PORT=5000
OPENAI_API_KEY=YOUR_OPENAI_API_KEY_HERE
```
