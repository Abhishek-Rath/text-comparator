# Text Comparator

## 1. Introduction

The Text Comparator is a web application that allows users to compare two text inputs and visualize the differences between them using a side-by-side view. This project is implemented with React for the frontend and Node.js for the backend. Docker is utilized for containerization, making it easy to set up.

## 2. Setting Up the Project

### 2.1 Local Setup Without Docker

To run the project locally without Docker, follow these steps:

#### Frontend (React)

1. Navigate to the `frontend` directory.
   ```bash
   cd text-comparator-client
   ```
2. Install dependencies.
    ```bash
    npm install
    ```
3. Start the development server.
    ```bash
    npm start
    ```

#### Backend (Node)
1. Navigate to the `backend` directory
    ```bash
    cd text-comparator-server   
    ```
2. Install dependencies.
    ```bash
    npm install
    ```
3. Start the server.
    ```bash
    node index.js
    ```

### 2.2 Local Setup With Docker

To run the project locally with Docker, follow these steps:

1. Build the Docker images.
    ```bash
    docker-compose build
    ```
2. Start the Docker containers.
    ```bash
    docker-compose up
    ```
3. Access the application in your browser at http://localhost:3000.

4. To stop the containers, use the following command.
    ```bash
    docker-compose down
    ```

## 3. Additional Information
### 3.1 API Endpoint
The backend API for text comparison is accessible at http://localhost:3001/compare.

### 3.2 Resetting Comparison
The differences highlighted in the frontend will persist until a new comparison is initiated. Click the "Compare" button again to reset and compare new texts.


