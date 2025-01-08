# Express Postgres Boilerplate

![Node.js](https://img.shields.io/badge/Node.js-v20.12.2-green)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.6.2-blue)

## Introduction

This project is a boilerplate with Node.js, Postgres and TypeScript, using Express to create versioned routes. It includes security middleware and environment configuration to ensure the application runs efficiently and securely.

## Features

- **Versioned Routes**: Supports multiple API versions.
- **Security**:
  - **Helmet**: Uses Helmet to protect the app from vulnerabilities.
  - **CORS**: Supports Cross-Origin Resource Sharing.
  - **Rate Limiting**: Limits the number of requests to prevent DDOS.
- **Session Management**: Manages user sessions.
- **Logging**: Logs request information.

## Instructions

### Requirements

- Node.js (>= 16.0.0)
- npm (>= 6.0.0)
- Prettier (Recommended)

### Install the Project

1. Clone the repository:

```bash
git clone https://github.com/EmonWeb-Agency-VN/express-postgres-boilerplate.git
cd express-postgres-boilerplate
```

2. Install dependencies:

```bash
npm install
```

3. Start to develop:

```bash
npm run dev
```

## Directory Structure

```plaintext
.
|
├── /src
│  ├── /configs          # App configuration for middleware and environment variables
│  ├── /controllers      # Business logic and request handling
│  ├── /DTOs             # Data Transfer Objects for type-safe data exchange
│  ├── /entities         # Database entities for ORM
│  ├── /helpers          # Utility functions to assist with common tasks
│  ├── /models           # Database models for ORM
│  ├── /routes           # Route definitions for different versions
│  ├── /types            # Type definitions for TypeScript
│  ├── /utils            # General utility functions
│  └── app.ts            # Application entry point
│
├── .env.local            # Environment variables for development
├── .env.production       # Environment variables for production
├── package.json          # Project information and dependencies
├── nodemon.json          # Nodemon configuration
├── tsconfig.json         # TypeScript configuration
├── LICENSE               # MIT license
└── README.md             # Documentation
```

You can remove others that is not mentioned above. If you need any more adjustments or information, just let us know!

## Contributing

We welcome contributions from the community! If you'd like to contribute, please follow these steps:

1. Fork this repository.
2. Create a new branch (git checkout -b feature/YourFeature).
3. Commit your changes (git commit -m 'feat(directory): Add/Update feature').
4. Push to the branch (git push origin feature/YourFeature).
5. Create a Pull Request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

# Contact

If you have any questions, feel free to reach out via email: [hello@emonweb.biz](mailto:hello@emonweb.biz).

Thank you for checking out my project!
