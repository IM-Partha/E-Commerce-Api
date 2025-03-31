# E-Commerce API

This is a simple E-Commerce API built with **Node.js**, **Express.js**, and **MongoDB**. The API includes user authentication using **JWT**, user registration, login, and protected routes.

## Install Packages
Run the following command to install all dependencies:
```sh
npm install
```

## Start Server
To start the server, run:
```sh
npm start
```
The server will run on `http://localhost:5000`

## API Endpoints

### Authentication
#### **Register User**
**POST** `/auth/register`

#### **Login User**
**POST** `/auth/login`

### Protected Routes
#### **Get User Profile** (Requires JWT Token)
**GET** `/protected/profile`

## Environment Variables
Create a `.env` file and add the following variables:
```
PORT=5000
MONGO_URL=mongodb+srv://Partha:Partha@cluster0.35790yc.mongodb.net/
JWT_SECRET="Work Hard"
```



