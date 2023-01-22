# Newsletter Signup Page
I wanted to gain some practice with the full HTTP request/response cycle and working with APIs, so I built a simple newsletter signup page. 

The app uses Node's built-in HTTPS package to send GET and POST requests to the server. The server then makes a POST request to the Mailchimp Marketing API to add the name and email address to a mailing list. The server will then send a response back to the client, which will display a success or failure page depending on the status code received from Mailchimp.

## Technologies Used
- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- Mailchimp Marketing API
- Bootstrap