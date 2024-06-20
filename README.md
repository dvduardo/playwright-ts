# Playwright Schedule Tests

This project uses GitHub Actions to automate browser tests using Playwright on a scheduled basis. The tests are designed to ensure the reliability and performance of both web and API endpoints.

## Overview

The GitHub Actions workflow defined in `playwright.yml` is triggered by a cron schedule to run tests daily at 14:00 UTC. It includes jobs for testing web interfaces and API endpoints in an isolated, consistent environment.

### Features

- **Scheduled Testing**: Automated tests run daily to ensure ongoing reliability.
- **Docker Integration**: Uses Docker to manage dependencies and ensure a consistent testing environment.
- **Playwright for Browser and API Testing**: Leverages Playwright for end-to-end testing of web and backend applications.

## Getting Started

To get started with this project, you'll need to have Docker and Node.js installed on your system. The tests are run in a GitHub Actions workflow, which requires no additional setup for GitHub repositories.

### Prerequisites

- Docker
- Node.js (version 18 is specified in the workflow)

### Running Tests Locally

To run the tests locally, follow these steps:

1. **Install Dependencies and start app and database**: Execute de followed command inside *apps/api*
    ```sh
    npm install

    npm run db:init

    npm start   
2. **Install Dependencies and start web application**:Execute de followed command inside *apps/web*
    ```sh
    npm install

    npm start 
3. **Install Playwright Browsers**:Execute de followed command inside root project
    ```sh
    npx playwright install
4. **Execute tests**:
    ```sh
    npx playwright test
### Workflow Details
The GitHub Actions workflow consists of two main jobs:

- **test-web**: This job runs Playwright tests for the web interface.
- **test-api**: Intended for API testing (setup to be completed).

The app system wasn't developed by me. I used a basic project that I saw in a course on Udemy taught by [QAx](https://cursos.qaxperience.com/pt).

License
This project is open source and available under the MIT License.