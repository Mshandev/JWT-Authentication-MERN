# MERN Authentication with JWT

This repository hosts the source code for the MERN Authentication project, a robust authentication system built using the MERN Stack. It features secure user authentication and password management with JWT and Bcrypt.

## Demo

[https://jwt-authentication-mern.vercel.app/](https://jwt-authentication-mern.vercel.app/)

## Features

- User Signup API: Allows new users to register by creating an account.
- User Login API: Authenticates users and generates a JWT token for secure access.
- JWT Authentication: Secures APIs by requiring a valid token for protected routes.
- Password Hashing with Bcrypt: Ensures that passwords are securely stored in the database.

## Run Locally

Clone the project

```bash
    git clone https://github.com/Mshandev/Login-Signup-APIs
```
Go to the project directory

```bash
    cd Login-Signup-APIs-main
```
Install dependencies

```bash
    npm install
```
Setup Environment Vaiables

```Make .env file and store environment Variables
  SALT=10
  JWTPRIVATEKEY=PRIVATE_KEY
  DB=YOUR-DB-URL
 ``` 
Start the server

```bash
    npm start
```
## Tech Stack
* [Node.js](https://nodejs.org/en)
* [Express.js](https://expressjs.com/)
* [Mongodb](https://www.mongodb.com/)

## Contributing

Contributions are always welcome!
Just raise an issue, and we will discuss it.

## Feedback

If you have any feedback, please reach out to me [here](https://www.linkedin.com/in/muhammad-shan-full-stack-developer/)
