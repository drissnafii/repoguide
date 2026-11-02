# RepoGuide

> Explain any public GitHub repository in plain English, powered by the Mozilla Otari AI Gateway.

Built for the **Mozilla Otari Hackathon 2026** (Nov 2 – Nov 10, 2026).

---

## Overview

Understanding a new open-source codebase often requires hours of manual exploration through dense documentation, complex directory hierarchies, and undocumented conventions.

**RepoGuide** resolves this friction by translating any public GitHub repository into a structured, readable technical guide within seconds. Utilizing the **Mozilla Otari AI Gateway**, RepoGuide coordinates open-weight large language models to break down system objectives, setup procedures, and directory architectures, while offering side-by-side model comparison capabilities.

---

## Key Features

- **Automated Repository Analysis**: Input any public GitHub repository URL to receive a structured breakdown:
  - **Purpose and Scope**: Problem definition, target domain, and core functionality.
  - **Getting Started**: System prerequisites, installation commands, and execution steps.
  - **Architecture Overview**: Purpose and contents of primary directories and key entry points.
- **Open-Weight Model Comparison**:
  - Execute analyses across distinct open-weight models (such as DeepSeek, Meta, and NVIDIA).
  - Side-by-side comparative mode to assess differences in reasoning depth, formatting, and structural quality.
- **Secure Gateway Integration**:
  - All calls to the Otari gateway are proxied via server-side Next.js route handlers (`Otari-Key`), ensuring credentials are never exposed to the client.
- **Zero Friction**:
  - Pure web-based analysis without accounts, databases, or third-party tracking.
- **Gateway Metrics**:
  - Visibility into latency, token consumption, and execution costs via Otari response metadata.

---

## Architecture & Technology Stack

```
[ Client Browser ]
        │
        ▼  (Repository URL & Model Selection)
[ Next.js Application (Vercel) ]
        │
        ├──► [ GitHub REST API ] (README & Tree Metadata)
        │
        └──► [ Otari AI Gateway ] (Header: Otari-Key)
                   │
                   ├──► Open-Weight Model A (e.g., DeepSeek V4.1)
                   └──► Open-Weight Model B (e.g., Meta Muse Spark)
```

- **Framework**: [Next.js](https://nextjs.org/) (App Router, TypeScript)
- **Runtime & Package Manager**: [Bun](https://bun.sh/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **External Data**: [GitHub REST API](https://docs.github.com/en/rest)
- **AI Gateway**: [Mozilla Otari](https://otari.ai/)
- **Hosting**: [Vercel](https://vercel.com/)

---

## Getting Started

### Prerequisites

- **Bun** (v1.1+ recommended) or **Node.js** (v18.17+)
- An **Otari API Key** (from [otari.ai](https://otari.ai/))
- *(Optional)* A **GitHub Personal Access Token** (increases GitHub API rate limits from 60 to 5,000 req/hr)

### 1. Clone the repository

```bash
git clone https://github.com/drissnafii/repoguide.git
cd repoguide
git checkout devs-wilding
```

### 2. Configure environment variables

Copy the example configuration file:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
# Mozilla Otari API Key (Required)
OTARI_API_KEY=your_otari_api_key_here
OTARI_BASE_URL=https://otari.ai/api/v1

# Optional: GitHub token for higher rate limits
GITHUB_TOKEN=your_optional_github_token_here
```

> **Security Notice:** Do not commit `.env` or `.env.local` files to version control.

### 3. Install dependencies and start development server

```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Hackathon Rubric Alignment

| Evaluation Criteria | Weight | Implementation Details |
| :--- | :---: | :--- |
| **Open-Weight Models** | **30 pts** | Integration of at least two open-weight models (DeepSeek, Meta) with side-by-side output evaluation. |
| **Otari Features** | **60 pts** | Implementation of Otari API routing, model switching, error resilience, and token/cost telemetry. |
| **Project & Demonstration** | **10 pts** | Production-ready web interface, comprehensive documentation, and video demonstration. |
| **Total** | **100 pts** | |

---

## Project Structure

```text
repoguide/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── analyze/route.ts      # Server-side proxy to Otari Gateway
│   │   │   └── github/route.ts       # GitHub repository metadata and tree fetcher
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Primary application interface and comparison view
│   ├── components/
│   │   ├── RepoInput.tsx             # Repository URL validation and input
│   │   ├── ModelSelector.tsx         # Open-weight model selector and configuration
│   │   ├── ComparisonView.tsx        # Comparative side-by-side report layout
│   │   └── MarkdownViewer.tsx        # Structured markdown renderer
│   ├── lib/
│   │   ├── github.ts                 # GitHub REST API client
│   │   └── otari.ts                  # Otari Gateway client wrapper
│   └── types/
│       └── index.ts                  # Shared TypeScript interfaces
├── public/                           # Static assets
├── .env.example                      # Template for required environment variables
├── .gitignore                        # Git exclusion rules
├── package.json                      # Project dependencies and scripts
└── README.md                         # Technical documentation
```

---

## Demonstration & Submission Deliverables

- **Deployment URL**: *(To be updated upon Vercel production deployment)*
- **Walkthrough Video (3–5 min)**: *(Unlisted / Public video link)*
- **Feedback Video (3–5 min)**: *(Developer feedback recording)*
- **First Gateway Commit**: `33911c5`

---

## License

This project is licensed under the [MIT License](LICENSE).