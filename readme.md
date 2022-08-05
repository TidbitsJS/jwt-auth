# JWT Auth

A complete auth application created using the MERN stack. This application has a JWT auth system that allows users to login and logout. It also has a user management system that allows users to register accounts. Along with that, application uses node-mailer to send emails to users.

### Application Features

1. JWT Auth
2. User Management
3. Admin Management
4. Email Verification
5. Password Reset
6. Authorization

### Client Technologies

1. React
2. Context API
3. Styled Components

   code: [client](./client)

### Server Technologies

1. Node
2. Express
3. MongoDB
4. JWT
5. Node-Mailer

   code: [server](./server)


## Setup

Project requirements

- git
- NodeJS
- NPM

To verify the installation of above, you can run this:

```shell
  git --version
  node --version
  npm --version
```

After you've made sure to have the correct things installed, you should be able to just run a few commands to get set up:

1. Clone the repo

```shell
  https://github.com/TidbitsJS/jwt-auth.git
  cd jwt-auth
```

2. Install node modules 

```shell
  cd client
  npm install
  
  cd server
  npm install
```

3. Setup a new project on [MongoDB](https://www.mongodb.com/) platform
4. Store the MonoDB URL in env file of server folder

```text
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.eqcqa.mongodb.net/plants?retryWrites=true&w=majority
```


## Run

To run the server:

```shell
  cd server
  npm run dev
```

To run the client:

```shell
  cd client
  npm start
```

Server will start on port 5000 while client will on port 3000

