import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuthorised = false;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req, res, next) {
    const password = req.body["password"];
    if (password === "ILoveProgramming") {
      req.userIsAuthorized = true; // Attach authorization to the request object
    }
    next();
  }

app.use(passwordCheck);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    if (req.userIsAuthorized) {
      res.sendFile(__dirname + "/public/secret.html");
    } else {
      res.redirect("/"); // Redirect to the home page on failure
    }
  });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
