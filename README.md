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

### JSON Web Token structure

In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:

- Header
- Payload
- Signature

Therefore, a JWT typically looks like the following.

```shell
xxxxx.yyyyy.zzzzz
```

1. Header

   A JSON object that contains information about the token.

   Always the first part of the JWT.

   Consists of two parts:

   1. type of token ( jwt )

   2. signing algorithm ( HMAC SHA256 or rsa )

   For example:

   ```json
   {
     "alg": "HS256",
     "typ": "JWT"
   }
   ```

   Then, this JSON is Base64Url encoded to form the first part of the JWT.

2. Paylod

   Contains the claims of the token. Claims are statements about an entity (typically, the user) and additional data.

   Three types of claims:

   1. Registered claims

      Set of predefined claims which are not mandatory but recommended, to provide a set of useful, interoperable claims.

      Some of them are: iss(issuer), exp(expiration time), sub(subject), aud(audience)

   2. Public claims

      These can be defined at will by those using JWTs

      To avoid collisions they should be defined in the IANA JSON Web Token Registry or be defined as a URI that contains a collision resistant namespace.

   3. Private claims

      Custom claims created to share information between parties that agree on using them and are neither registered or public claims.

For example:

```json
{
  "sub": "1234567890",
  "name": "John Doe",
  "admin": true
}
```

3. Signature

   To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

   For example if you want to use the HMAC SHA256 algorithm, the signature will be created in the following way:

   ```javascript
   HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret);
   ```

   Used to verify the message wasn't changed along the way

   In the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is.
