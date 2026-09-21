# E-Commerce Web Application

A full-stack e-commerce application built with **Java, Spring Boot, React JS, MySQL and REST APIs**.

## Features
- Product listing and product details
- User registration and login
- Shopping cart
- Order creation and order history
- Product CRUD APIs
- MySQL persistence
- React JS frontend
- Spring Boot REST backend

## Technology Stack
- Java 17
- Spring Boot 3
- Spring Data JPA
- MySQL
- React JS
- JavaScript
- HTML5 / CSS3
- REST API
- Maven

## Project Structure
```text
ecommerce-web-application/
├── backend/
├── frontend/
├── database/
└── README.md
```

## Database
Create a MySQL database named `ecommerce_db`, then run:
`database/schema.sql`

Update the database username/password in:
`backend/src/main/resources/application.properties`

## Run Backend
```bash
cd backend
mvn spring-boot:run
```

Backend runs on `http://localhost:8080`

## Run Frontend
```bash
cd frontend
npm install
npm start
```

Frontend runs on `http://localhost:3000`

## API Endpoints
- `GET /api/products`
- `GET /api/products/{id}`
- `POST /api/products`
- `PUT /api/products/{id}`
- `DELETE /api/products/{id}`
- `GET /api/users`
- `POST /api/users`
- `POST /api/orders`
- `GET /api/orders/user/{userId}`

## Resume Description
Developed a full-stack e-commerce web application using Java, Spring Boot, React JS and MySQL, implementing product management, user registration, shopping cart and order management through REST APIs.
