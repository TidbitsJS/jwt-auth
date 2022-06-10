# jwt-auth

Everything you need to learn about JWT auth.

### Setup

Project requirements

- git
- NodeJS
- NPM
- nodemon

**nodemon** is a tool that helps develop node. js based applications by automatically restarting the node application when file changes in the directory are detected.

To verify the installation of above, you can run this:

```shell
  git --version
  node --version
  npm --version
  nodemon --version
```

After you've made sure to have the correct things installed, you should be able to just run a few commands to get set up:

1. Clone the repo

```shell
  git clone https://github.com/TidbitsJS/jwt-auth.git
  cd jwt-auth
```

2. Install node modules

```shell
  npm install
```

3. To run the app, run the command:

```shell
  npm run dev
```

4. Create a .env file and add the following lines:

```shell
  JWT_SECRET=<your-secret-here>
```

5. Local server will start running on the port 5000

```shell
http://localhost:5000
```

#

### What is JWT?

JSON Web Token\*JWT) is open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. It's digitally signed.

JWTs can be signed using a secret(with the HMAC algorithm) or a public/private key pair using RSA or ECDSA algorithms.

Signed tokens can verify the integrity of the claims contained within it.

When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.

#

### When should you use JSON Web Tokens?

1. Authorization

   - Most common scenario
   - Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token.
   - Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.

2. Information Exchange

   - Signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.
   - JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are.

#
