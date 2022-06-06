# jwt-auth
Everything you need to learn about JWT auth. 


### What is JWT?

JSON Web Token*JWT) is open standard that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. It's digitally signed.

JWTs can be signed using a secret(with the HMAC algorithm) or a public/private key pair using RSA or ECDSA algorithms.

Signed tokens can verify the integrity of the claims contained within it.

When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.

# 

### When should you use JSON Web Tokes?

1. Authorization

    * Most common scenario 
    * Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token.
    * Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.

2. Information Exchange

    * Signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.
    * JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they ar