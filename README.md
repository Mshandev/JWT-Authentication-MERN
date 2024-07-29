# MERN Authentication with JWT

This repository hosts the source code for the MERN Authentication project, a robust authentication system built using the MERN Stack. It features secure user authentication and password management with JWT and Bcrypt.

## Demo

[https://jwt-authentication-mern.vercel.app/](https://jwt-authentication-mern.vercel.app/)

## Features

- Login & Signup Pages: Secure user authentication with email and password.
- Home Page: A user-friendly home page accessible after login.
- Password Hashing: Secure password storage using Bcrypt.
- JWT Authentication: User authentication with JSON Web Tokens (JWT), stored in local storage to keep users logged in.
- Logout: Option to log out and invalidate the session.

## Screenshots

![Login](https://i.ibb.co/f49ynKx/authentication-login.png)

![Signup](https://i.ibb.co/qjffkkJ/authentication-signup.png)

![Main](https://i.ibb.co/qm7WVyw/authentication-main.png)


## Run Locally

Clone the project

```bash
    git clone https://github.com/Mshandev/MERN-Authentication-JWT
```
Go to the project directory

```bash
    cd MERN-Authentication-JWT
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
* [React](https://reactjs.org/)
* [Node.js](https://nodejs.org/en)
* [Express.js](https://expressjs.com/)
* [Mongodb](https://www.mongodb.com/)

## Deployment

The application is deployed on Vercel.

## Contributing

Contributions are always welcome!
Just raise an issue, and we will discuss it.

## Feedback

If you have any feedback, please reach out to me [here](https://www.linkedin.com/in/muhammad-shan-full-stack-developer/)
