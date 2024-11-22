# Secret Project

A Node.js-based web application that implements a simple authentication mechanism to grant or restrict access to a secret page. The app uses **Express.js** for the backend and is easy to deploy and use.

---

## Features

- **Password-based Authentication**: Verifies user access with a predefined password.
- **Custom Middleware**: Middleware to check authentication before granting access to secure pages.
- **Static File Support**: Serves static files like HTML pages for user interaction.
- **Node.js & Express.js**: Lightweight and efficient backend framework.
- **Modular Design**: Easy-to-understand file structure for scalability and modification.

---

## Demo

[Deployed link](https://secret1-npau.onrender.com)

---

## Installation and Setup

Follow these steps to get the project up and running on your local machine:

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or above)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/secret-project.git
   cd secret-project
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Run the application:
   ```bash
   node index.js
   ```

4. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## Project Structure

```
secret-project/
│
├── public/
│   ├── index.html      # Main page with login form
│   ├── secret.html     # Secret page shown after authentication
│
├── index.js            # Main server file
├── package.json        # Project metadata and dependencies
└── README.md           # Project documentation
```

---

## How It Works

1. The user accesses the root route (`/`) which serves a login form (`index.html`).
2. The password entered in the form is sent to the server via a POST request.
3. The middleware function checks if the password matches the predefined one (`ILoveProgramming`):
   - **Correct Password**: Grants access to the secret page (`secret.html`).
   - **Incorrect Password**: Redirects back to the login page.

---

## Deployment

You can deploy this application on hosting platforms like **Render**, **Railway**, **Heroku**, or **Vercel**. See the [deployment guide](#) for details.

---

## Technologies Used

- **Node.js**: JavaScript runtime for the server.
- **Express.js**: Backend framework for routing and middleware.
- **HTML/CSS**: Static files for the frontend.
- **Body-Parser**: Middleware to parse form data.

---

## Contributing

Contributions are welcome! If you'd like to improve this project, feel free to:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push the branch (`git push origin feature-name`).
5. Open a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Author

**Gagan Suresh**  
[GitHub](https://github.com/gaganProgramming) | [LinkedIn](https://www.linkedin.com/in/gagan-suresh)

