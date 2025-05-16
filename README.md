# Simple Express Server

A minimalist Express.js web server with basic routing.

## Description

This project is a simple Express.js server application that demonstrates basic routing functionality. It serves three pages: Home, About, and Contact.

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository or download the source code
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory
   ```
   cd expressjs-http-server
   ```

3. Install dependencies
   ```
   npm install
   ```

### Dependencies

- express: Fast, unopinionated, minimalist web framework for Node.js

## Usage

1. Start the server
   ```
   node server.js
   ```

2. The server will start running on port 3000
   ```
   Listening at port 3000...
   ```

3. Access the following routes in your browser:
   - Home page: `http://localhost:3000/`
   - About page: `http://localhost:3000/about`
   - Contact page: `http://localhost:3000/contact`

## Project Structure

```
expressjs-http-server/
│
├── server.js          # Main server file with Express configuration and routes
├── package.json       # Project metadata and dependencies
└── README.md          # Project documentation
```

