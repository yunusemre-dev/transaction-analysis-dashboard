# Financial Transaction Analysis Dashboard

A React-based web application that provides an intuitive interface for analyzing financial transactions, visualizing spending patterns, and processing transaction data through CSV uploads.

## Features

### Transaction Analysis Dashboard

- Interactive visualization of merchant spending patterns
- Real-time transaction analysis results
- Normalized merchant name display
- Pattern detection across multiple transactions

### CSV Processing

- Drag-and-drop CSV file upload
- Progress tracking for bulk processing
- File validation feedback
- Error handling and user notifications

### User Interface

- Modern, responsive design
- Dark/light theme support
- Loading state indicators

## Tech Stack

- **Framework**: React
- **Language**: TypeScript
- **Styling**:
  - Tailwind CSS
  - shadcn/ui
- **File Processing**: Browser File API
- **State Management**: React Context
- **Build Tool**: Vite

## Prerequisites

- Node.js (v18 or later)
- pnpm
- Modern web browser

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yunusemre-dev/transaction-analysis-dashboard.git
   cd transaction-analysis-dashboard
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Configure environment variables:
   ```bash
   cp .env .env.local
   ```
   Edit `.env.local` with your API endpoint:
   ```
   VITE_API_ENDPOINT=http://localhost:3000
   ```

> This project is using [transaction-analysis-api](https://github.com/yunusemre-dev/transaction-analysis-api) as backend.

## Running the Application

### Development

```bash
pnpm dev
```

### Production Build

```bash
pnpm build
pnpm preview
```

## CSV Format Requirements

The application accepts CSV files with the following format:

```csv
date,description,amount
2024-01-01,AMAZON.COM,29.99
2024-01-02,NETFLIX.COM,14.99
```

Required columns:

- `date`: Transaction date (YYYY-MM-DD)
- `description`: Merchant description
- `amount`: Transaction amount
