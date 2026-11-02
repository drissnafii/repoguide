# RepoGuide 🧭

> Explain any public GitHub repository in plain English, powered by the **Mozilla Otari AI Gateway**.

Built for the **Mozilla Otari Hackathon 2026** (Nov 2 – Nov 10, 2026).

---

## 🌟 Overview

Understanding a new open-source codebase often takes hours of manual digging through dense documentation, scattered directories, and undocumented conventions. 

**RepoGuide** solves this by turning any public GitHub repository into a clear, digestible developer guide in seconds. Using the **Mozilla Otari AI Gateway**, RepoGuide leverages leading open-weight LLMs to break down repositories into plain English, highlight architectural structure, and allow side-by-side model comparison.

---

## ✨ Key Features

- **🔍 One-Click Repository Analysis**: Paste any public GitHub repository URL to receive an instant breakdown:
  - **What it does**: High-level problem statement and core functionality.
  - **How to run it**: Practical setup, prerequisites, and execution commands.
  - **Architecture & Directory Map**: Explanation of primary directories and key entry points.
- **⚖️ Open-Weight Model Comparison**:
  - Run analysis across multiple open-weight models (e.g., Llama 3, Mistral, Qwen).
  - Side-by-side comparison mode to evaluate differences in reasoning, detail, and prompt adherence.
- **🛡️ Secure Gateway Proxying**:
  - All communication with Otari is routed through Next.js server-side API endpoints (`Otari-Key`), keeping credentials secure.
- **⚡ Zero Friction**:
  - No database, no user accounts, and no authentication walls. Paste and inspect.
- **📊 Otari Gateway Capabilities**:
  - Usage tracking, latency/budget monitoring, and unified routing across open-weight models.

---

## 🛠️ Architecture & Tech Stack

```
[ User Browser ]
       │
       ▼  (Repo URL & Model Selection)
[ Next.js App Router (Vercel) ]
       │
       ├──► [ GitHub REST API ] (README & Tree metadata)
       │
       └──► [ Otari AI Gateway ] (Header: Otari-Key)
                  │
                  ├──► Open-Weight Model A (e.g., Llama 3)
                  └──► Open-Weight Model B (e.g., Mistral)
```

- **Frontend & Backend**: [Next.js](https://nextjs.org/) (App Router, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Data Source**: [GitHub REST API](https://docs.github.com/en/rest)
- **AI Gateway**: [Mozilla Otari](https://otari.ai/)
- **Deployment**: [Vercel](https://vercel.com/)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.17+ or v20+)
- **npm**, **pnpm**, or **yarn**
- An **Otari API Key** (from [otari.ai](https://otari.ai/))
- *(Optional)* A **GitHub Personal Access Token** (for higher GitHub API rate limits)

### 1. Clone the repository

```bash
git clone https://github.com/dendo/repoguide.git
cd repoguide
git checkout devs-wilding
```

### 2. Configure environment variables

Copy the example environment file and add your credentials:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# Mozilla Otari API Key (Required)
OTARI_API_KEY=your_otari_api_key_here

# Optional: GitHub token to increase API rate limits (5,000 req/hr vs 60 req/hr)
GITHUB_TOKEN=your_optional_github_token_here
```

> **Security Note:** Never commit `.env` or `.env.local` to git. Keep API keys confidential.

### 3. Install dependencies & run development server

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to test RepoGuide.

---

## 📋 Hackathon Rubric & Alignment

| Category | Points | RepoGuide Implementation |
| :--- | :---: | :--- |
| **Open-Weight Models** | **30 pts** | Integrates at least two open-weight models (e.g., Llama 3, Mistral) with side-by-side comparison mode. |
| **Otari Features** | **60 pts** | Leverages Otari Gateway API routing, model switching, error handling, and usage tracking. |
| **Project & Demo** | **10 pts** | Clean, intuitive web interface, comprehensive documentation, and 3-5 min demo video. |
| **Total** | **100 pts** | |

---

## 📂 Project Structure (Planned)

```text
repoguide/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── analyze/route.ts      # Server-side proxy to Otari Gateway
│   │   │   └── github/route.ts       # GitHub repo metadata & tree fetcher
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Main RepoGuide UI & comparison view
│   ├── components/
│   │   ├── RepoInput.tsx             # Repository URL input & validator
│   │   ├── ModelSelector.tsx         # Open-weight model selector & toggle
│   │   ├── ComparisonView.tsx        # Side-by-side model comparison cards
│   │   └── MarkdownViewer.tsx        # Formatted markdown renderer
│   ├── lib/
│   │   ├── github.ts                 # GitHub REST client
│   │   └── otari.ts                  # Otari Gateway client wrapper
│   └── types/
│       └── index.ts                  # TypeScript definitions
├── public/                           # Static assets & screenshots
├── .env.example                      # Template for required environment variables
├── .gitignore                        # Git ignore rules (protecting secrets)
├── package.json                      # Project dependencies & scripts
└── README.md                         # Project documentation
```

---

## 🎥 Demo Video & Submission

- **Live URL**: *(To be added upon Vercel deployment)*
- **Demo Video (3–5 min)**: *(Link to public/unlisted video)*
- **Feedback Recording**: *(Link to 3–5 min feedback screen recording)*
- **First Otari Gateway Commit**: *(Commit SHA to be linked)*

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).