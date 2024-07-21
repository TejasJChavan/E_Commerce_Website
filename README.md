# Vendora

## Description

Vendora is a basic e-commerce website designed to provide a simple online shopping experience. Users can browse products, manage a shopping cart, and log in to access their account. Built with React for the frontend and Node.js with PostgreSQL for the backend, Vendora is a straightforward platform that demonstrates core e-commerce functionalities.


## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Setup](#setup)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Product Browsing:** View a list of products with images and details.
- **Shopping Cart:** Add products to a cart, view cart contents, and manage items.
- **User Authentication:** Register and log in to your account.
- **Responsive Design:** Accessible on both desktop and mobile devices.
- **Basic Navigation:** Easy access to key sections including Home, Cart, and Login.
- **Error Handling:** User-friendly messages for login and registration errors.


## Technologies Used

- **Frontend:**
  - **React:** A popular JavaScript library for building user interfaces, ensuring a dynamic and responsive user experience.
  - **Tailwind CSS:** A utility-first CSS framework for creating modern, customizable designs with minimal effort.

- **Backend:**
  - **Node.js:** A powerful JavaScript runtime for server-side logic and handling HTTP requests.
  - **Express:** A minimalist web framework for Node.js, facilitating robust API development and routing.

- **Database:**
  - **PostgreSQL:** A powerful, open-source relational database for efficient data storage and management.

- **Authentication:**
  - **bcrypt:** A library for hashing passwords, ensuring secure user authentication.

- **Development Tools:**
  - **dotenv:** A module for managing environment variables, keeping sensitive information secure.
  - **CORS:** Middleware for enabling cross-origin requests, essential for frontend-backend communication.

- **Version Control:**
  - **Git:** A version control system for tracking changes and collaborating on code, integrated with GitHub for project management and code hosting.


## Getting Started

### Prerequisites
Installations of the following-
- Node.js
- PostgreSQL

### Setup
Clone using GitHub Desktop 
OR
1. **Clone the repository**

    ```bash
    git clone https://github.com/TejasJChavan/Vendora.git
    ```

2. **Navigate to the project directory**


3. **Install dependencies**

    Run 
    ```bash
    npm install
    ```
    in the frontend and backend folders.

4. **Edit the `.env` file**

5. **Start the server and app**
    In Vendora\frontend
    ```bash
    npm start
    ```
    And in Vendora\backend
    ```bash
    node server.js
    ```

    The server should now be running at `http://localhost:8080`.


