# Java-React Example Application

## Overview

This project demonstrates a simple yet effective integration between a Java backend server and a ReactJS frontend application. The Java server is designed with multi-threading capabilities to handle multiple tasks simultaneously, showcasing a basic example of concurrency in Java. The ReactJS frontend interacts with this server by displaying data fetched from a RESTful endpoint provided by the server.

## Components

### Java Server

- **Technology**: Spring Boot
- **Features**: Multi-threading, RESTful API
- **Functionality**: The server provides an endpoint (`/multithreaded`) that triggers multiple threads performing simulated tasks. After all tasks are completed, a confirmation message is sent back to the client.
- **CORS Configuration**: Includes CORS configuration to allow requests from the React frontend.

### ReactJS Frontend

- **Technology**: ReactJS (created using Create React App)
- **Functionality**: Makes a request to the Java server and displays the response.
- **Error Handling**: Implements basic error handling for the API request, including CORS errors and network issues.

## Getting Started

### Prerequisites

- Java JDK 11 or higher
- Maven (for Java backend)
- Node.js and npm (for React frontend)

### Running the Java Server

1. Navigate to the server directory.
2. Run `mvn spring-boot:run` to start the server.
3. The server will start on `http://localhost:8080`.

### Running the React Application

1. Navigate to the React app directory.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the app.
4. The app will be available on `http://localhost:3000`.

### Testing the Application

- Access the React application on `http://localhost:3000`.
- The application should display a message fetched from the Java server.
- Use tools like Postman to test the server endpoint directly.

## Notes

- The Java server is configured to allow CORS for `http://localhost:3000` to enable local development and testing.
- This project is intended for demonstration purposes and may need additional configurations and security enhancements for production use.

---
