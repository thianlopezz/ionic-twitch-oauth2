# IONIC REACT TWITCH OAUTH2 LOGIN
This is my humble project, integrating Ionic React App with OAuth2 protocol from scratch, Twitch API Login authorization.

## To Run this app
Make sure you have installed Ionic Framework v5

`npm install` 
 OR
 `yarn install` 

To run the Android App in livereload mode

`ionic cap run android -l --external`

## Road map choices
The first big choice was to choose between call authorization request through in app browser functionality or in user's device navigator, according to <a href="https://www.rfc-editor.org/rfc/rfc8252.txt">rfc8252</a> the most secure way to achieve this first step in OAuth2 protocol is to do this in user's device navigator, in that way I used a simple `window.open` to show the Twitch user login.

Because of the time I implemented the *OAuth Implicit Code Flow*, even the <a href="https://www.rfc-editor.org/rfc/rfc8252.txt">rfc8252</a> recomends for native apps or web clients to do *OAuth authorization code flow*, in this way I recommend to myself to consider this in the road map to finish this challenge.

Another condideration I know I ha have to implemet is *The Proof Key for Code Exchange (PKCE) protocol* that is a secure way to avoid other apps to intercept the callback authorization URL.

## Notes
I know it is not the project I had in mind to present, but I think it was complicated to do more because of my time, hope you like it.
