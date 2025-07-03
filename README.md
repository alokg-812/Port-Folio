# 💼 Alok’s Developer Portfolio — Project Documentation

## 🧾 Table of Contents

1. [Overview](#overview)
2. [Live Link](#live-link)
3. [Tech Stack](#tech-stack)
4. [Features](#features)
5. [Folder Structure](#folder-structure)
6. [Getting Started](#getting-started)
7. [Customization Guide](#customization-guide)
8. [Deployment (Vercel)](#deployment-vercel)
9. [Screenshots](#screenshots)
10. [Future Enhancements](#future-enhancements)
11. [Credits](#credits)
12. [License](#license)

---

## 📌 Overview

This is the official portfolio website of **Alok G**, a Data Science and Analytics undergraduate at **IIT Madras**. It showcases Alok’s technical skills, academic journey, projects, certifications, and contact details in a clean, modern, and mobile-responsive layout. The website also serves as a personal brand and public résumé.

---

## 🔗 Live Link

🌐 **Hosted on Vercel:**
[https://alok-me.vercel.app](https://alok-me.vercel.app)

---

## 🛠️ Tech Stack

| Category        | Technology                |
| --------------- | ------------------------- |
| Frontend        | **React.js** with Vite    |
| Styling         | **Tailwind CSS**          |
| Deployment      | **Vercel**                |
| Icons & Fonts   | React Icons, Google Fonts |
| Package Manager | npm                       |
| Meta Tags       | `react-helmet` (if used)  |

---

## ✨ Features

* ⚡ **Fast Loading** (Vite + Tailwind)
* 📱 **Fully Responsive** design (mobile, tablet, desktop)
* 🧑‍💼 **About Me** section with intro and goals
* 🛠️ **Projects Showcase** with GitHub/Live links
* 🧾 **Certifications** and relevant course completions
* 🧑‍💻 **Skills Section** categorized into languages, tools, and frameworks
* 📚 **Resume View/Download** support
* 📬 **Contact Me** form with email link or direct message
* 🌙 Dark mode support (optional for future)

---

## 📁 Folder Structure

```
alok-portfolio/
│
├── public/                # Static assets (favicon, resume.pdf)
│
├── src/
│   ├── assets/            # Images, icons, and personal photos
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProjectCard.jsx
│   │   └── ...
│   ├── pages/             # Sections of the site
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── ...
│   ├── App.jsx            # App root layout
│   ├── main.jsx           # React DOM entry point
│   └── index.css          # Tailwind and custom CSS
│
├── tailwind.config.js     # Tailwind customization
├── package.json           # Dependencies and scripts
├── README.md              # Project documentation
└── vite.config.js         # Vite configuration
```

---

## 🚀 Getting Started

To run this project locally:

### 1. **Clone the Repo**

```bash
git clone https://github.com/alokg-812/your-repo-name.git
cd your-repo-name
```

### 2. **Install Dependencies**

```bash
npm install
```

### 3. **Run the Development Server**

```bash
npm run dev
```

> Open [http://localhost:5173](http://localhost:5173) in your browser to see the website.

---

## 🎨 Customization Guide

You can update the site easily by editing these files:

| Update Item    | File to Edit                                   |
| -------------- | ---------------------------------------------- |
| Personal Info  | `About.jsx` or constants file (if any)         |
| Resume Link    | `public/resume.pdf` or in `Contact.jsx`        |
| Projects       | `Projects.jsx` or a `projectData.js` file      |
| Skills         | `Skills.jsx`                                   |
| Contact Email  | `Contact.jsx`                                  |
| Social Links   | `Footer.jsx` or `Navbar.jsx`                   |
| Styling/Colors | `tailwind.config.js` and `index.css`           |
| SEO Title/Meta | Add `react-helmet` or manually in `index.html` |

---

## 🌍 Deployment (Vercel)

To deploy the project on [Vercel](https://vercel.com):

1. **Push your code to GitHub.**
2. Go to [vercel.com](https://vercel.com) and login with GitHub.
3. Click on **“Add New Project”**.
4. Import your GitHub repo.
5. Use default settings (Vite is auto-detected).
6. Click **“Deploy”**.

🔁 Auto-deploy on every push to main branch!

---

## 🖼️ Screenshots

### 🏠 Homepage

![Home](https://via.placeholder.com/1000x500?text=Homepage+Screenshot)

### 🛠️ Projects

![Projects](https://via.placeholder.com/1000x500?text=Projects+Section)

### 📞 Contact

![Contact](https://via.placeholder.com/1000x500?text=Contact+Section)

(*Replace these with real screenshots later*)

---

## 📈 Future Enhancements

Here are some ideas for future updates:

* 🌙 **Dark Mode Toggle**
* 🧩 **Blog Section** using Markdown or CMS (e.g., Notion, Sanity)
* 🧠 **AI Resume Analyzer** integration
* 🌐 **Multi-language Support**
* 🎯 **Analytics** with Google Analytics or Plausible
* 🔒 **Form Validation** and CAPTCHA for Contact Form
* 🛠️ **Project Filtering by Tech Stack**

---

## 👨‍🔧 Credits

* Designed & Developed by **Alok G**
* Inspiration from modern portfolio templates and personal UX/UI sense

---
