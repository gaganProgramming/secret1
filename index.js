import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// Configure dotenv to load environment variables from .env file
dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = process.env.PORT || 3000; // Use port from .env or default to 3000

// Middleware to parse URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Password check middleware
function passwordCheck(req, res, next) {
  const password = req.body["password"];
  const secretPassword = process.env.SECRET_PASSWORD || "defaultPassword"; // Load password from .env
  if (password === secretPassword) {
    req.userIsAuthorized = true; // Attach authorization to the request object
  }
  next();
}

app.use(passwordCheck);

// Route to serve the homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Route to check password and redirect based on authorization
app.post("/check", (req, res) => {
  if (req.userIsAuthorized) {
    res.sendFile(__dirname + "/public/secret.html"); // Serve secret page
  } else {
    res.redirect("/"); // Redirect to homepage if not authorized
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
