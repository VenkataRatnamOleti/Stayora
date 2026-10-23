# 🏡 Stayora — Find Your Place, Feel at Home

<p align="center">
  <img src="https://img.shields.io/badge/Stayora-Accommodation%20Platform-2563EB?style=for-the-badge&logo=homeadvisor&logoColor=white" alt="Stayora"/>
  <img src="https://img.shields.io/badge/Node.js-22+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/Express.js-Backend-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js"/>
  <img src="https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
</p>

<p align="center">
  <strong>Discover stays. Explore places. Make yourself at home.</strong>
</p>

<p align="center">
  Stayora is a web-based accommodation listing platform designed to help users explore places to stay, discover properties, and manage accommodation listings through a clean and user-friendly interface.
</p>

<p align="center">
  <a href="https://stayora-y0zp.onrender.com/"><strong>🚀 Explore Live Demo</strong></a>
  &nbsp; • &nbsp;
  <a href="https://github.com/VenkataRatnamOleti/Stayora"><strong>📂 View Source Code</strong></a>
</p>

---

## 📌 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📸 Screenshots](#-screenshots)
- [📁 Project Structure](#-project-structure)
- [⚙️ Prerequisites](#️-prerequisites)
- [🚀 Getting Started](#-getting-started)
- [🔐 Environment Variables](#-environment-variables)
- [▶️ Running the Application](#️-running-the-application)
- [🧩 Application Architecture](#-application-architecture)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👨‍💻 Author](#-author)

---

## ✨ Features

Stayora brings together essential features for discovering and managing accommodation listings.

- 🏠 **Explore Listings** — Browse available accommodations and discover different places to stay.
- 🔍 **Listing Details** — View property information, descriptions, images, and other available details.
- ➕ **Listing Management** — Create and manage accommodation listings.
- 🔐 **User Authentication** — Support for user registration, login, and session-based authentication.
- 🖼️ **Image Uploads** — Cloudinary integration for storing and managing listing images.
- 🛡️ **Data Validation** — Validate user input with Joi to help prevent invalid submissions.
- 📱 **Responsive Interface** — Browse the application across supported desktop and mobile screen sizes.
- 🗺️ **Location Support** — Map-related integration for viewing property locations, where configured.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Node.js** | JavaScript runtime |
| **Express.js** | Web server and application routing |
| **MongoDB** | Database |
| **Mongoose** | Database modeling and queries |
| **EJS** | Dynamic server-rendered pages |
| **EJS-Mate** | Reusable layouts and templates |
| **Passport.js** | Authentication |
| **Cloudinary** | Cloud-based image storage |
| **Multer** | Handling file uploads |
| **Multer-Storage-Cloudinary** | Cloudinary upload integration |
| **Joi** | Input and data validation |
| **dotenv** | Environment configuration |
| **Bootstrap / Custom CSS** | User interface styling, depending on the implemented views |

---

## 📸 Screenshots

Explore the live application to see the current design and features.

<p align="center">
  <a href="https://stayora-y0zp.onrender.com/">
    <img src="https://res.cloudinary.com/kjowelao/image/upload/v1792678857/Screenshot_2026-10-22_171859.png" alt="Stayora application preview" width="90%"/>
  </a>
</p>

<p align="center">
  <em>Replace this placeholder with actual screenshots of your home page, listing details, and authentication pages.</em>
</p>

---

## 📁 Project Structure

```text
Stayora/
├── app.js                  # Application entry point
├── cloudConfig.js          # Cloudinary configuration
├── middleware.js           # Custom middleware
├── schema.js               # Joi validation schemas
├── controllers/            # Request handlers and business logic
├── init/                   # Database initialization and seed data
├── models/                 # Mongoose database models
├── routes/                 # Express application routes
├── utils/                  # Utility functions and error handling
├── public/                 # Static assets, stylesheets, and scripts
├── views/                  # EJS templates and layouts
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## ⚙️ Prerequisites

Before running Stayora locally, ensure you have the following installed:

- [Node.js](https://nodejs.org/) — version compatible with the project dependencies (Node.js 22+ is recommended).
- [npm](https://www.npmjs.com/) — normally included with Node.js.
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) or a local MongoDB instance.
- [Cloudinary](https://cloudinary.com/) account for image uploads.
- [Git](https://git-scm.com/) for cloning the repository.

---

## 🚀 Getting Started

Follow these steps to run Stayora on your local machine.

### 1. Clone the repository

```bash
git clone https://github.com/VenkataRatnamOleti/Stayora.git
```

### 2. Navigate to the project directory

```bash
cd Stayora
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the project's root directory. Add the required configuration using the template below.

```env
DB_URL=mongodb_connection_string
CLOUD_NAME=your_cloudinary_cloud_name
API_KEY=your_cloudinary_api_key
API_SECRET=your_cloudinary_api_secret
COOKIE_SECRET=your_session_secret
```

Replace the example values with your actual credentials. Keep your `.env` file private and never commit secrets to GitHub.

### 5. Start the application

If your `package.json` defines a `start` script:

```bash
npm start
```

Otherwise, run the application entry point directly:

```bash
node app.js
```

Open your browser and visit:

```text
http://localhost:3000
```

> **Note:** The port may differ depending on the configuration in `app.js`. Check your application's startup configuration if the URL does not work.

---

## 🔐 Environment Variables

| Variable | Description |
|---|---|
| `DB_URL` | MongoDB connection string |
| `CLOUD_NAME` | Cloudinary cloud name |
| `API_KEY` | Cloudinary API key |
| `API_SECRET` | Cloudinary API secret |
| `COOKIE_SECRET` | Secret used for session or cookie configuration, as implemented |

Make sure the variable names match the ones referenced in your source code. Never expose API secrets or production credentials in public repositories.

---

## ▶️ Running the Application

### Development

```bash
npm install
node app.js
```

If your project has a development script configured, you can use it instead.

### Production

```bash
npm start
```

The production command requires a matching `start` script in `package.json`.

Stayora is also deployed online:

**🌐 Live Application:** https://stayora-y0zp.onrender.com/

*Note: On Render's free hosting tier, the first request after a period of inactivity may take some time to load.*

---

## 🧩 Application Architecture

Stayora follows a modular Express.js architecture.

```text
             ┌─────────────────────┐
             │       Browser       │
             └──────────┬──────────┘
                        │ HTTP Requests
             ┌──────────▼──────────┐
             │    Express.js       │
             │ Routes & Middleware │
             └──────────┬──────────┘
                        │
             ┌──────────▼──────────┐
             │     Controllers     │
             │  Application Logic  │
             └──────┬────────┬─────┘
                    │        │
          ┌─────────▼───┐  ┌─▼──────────┐
          │  MongoDB    │  │ Cloudinary │
          │  Mongoose   │  │   Images   │
          └─────────────┘  └────────────┘
```

EJS templates render dynamic pages, while routes and controllers organize application behavior. MongoDB stores application data, and Cloudinary handles image storage.

---

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome!

To contribute:

1. **Fork** the repository.
2. Create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and test them locally.
4. Commit your changes:

   ```bash
   git add .
   git commit -m "feat: describe your changes"
   ```

5. Push your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

6. Open a Pull Request describing your improvements.

Please avoid committing credentials, generated files, or unrelated changes.

---

## 📄 License

This project is identified as using the **ISC License**. See the repository's `LICENSE` file for the complete license terms.

---

## 👨‍💻 Author

**Venkata Ratnam Oleti**

- GitHub: [@VenkataRatnamOleti](https://github.com/VenkataRatnamOleti)
- Project Repository: [Stayora](https://github.com/VenkataRatnamOleti/Stayora)
- Live Demo: [stayora-y0zp.onrender.com](https://stayora-y0zp.onrender.com/)

---

<p align="center">
  Made with ❤️ using Node.js, Express.js, MongoDB, and EJS.
</p>

<p align="center">
  <strong>Stayora — Your next stay starts here. 🏡</strong>
</p>
