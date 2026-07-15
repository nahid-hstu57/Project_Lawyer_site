# ⚖️ Law.BD

**Law.BD** is a frontend web application where people can browse verified lawyers and book legal appointments online. Built as a first React project, it focuses on clean UI, appointment booking flow, and a simple booking management dashboard.

🔗 **Live Demo:** [https://nahid-hstu57.github.io/Project_Lawyer_site/](https://nahid-hstu57.github.io/Project_Lawyer_site/)

## ✨ Features

- **Home Page** — Hero banner introducing the platform, and a listing of top-rated lawyers with specialty, experience, license number, and availability status.
- **Lawyer Profile Page** — Detailed profile for each lawyer including specialization, license number, weekly availability, and consultation fee, with a "Book an Appointment" section.
- **My-Bookings Page** — A visual comparison chart of appointment fees across booked lawyers, plus a list of today's appointments with the option to cancel.
- **Blogs Page** — A mini knowledge base covering core React concepts (useState, JSX, Components, Props) with Q&A style cards.
- **Contact Us Page** — Simple contact section for user inquiries.
- Fully responsive UI built with **Tailwind CSS** and **DaisyUI** components.

## 🛠️ Tech Stack

- **React** (frontend framework)
- **Tailwind CSS** — utility-first styling
- **DaisyUI** — Tailwind component library
- Charting library for the fee comparison graph on My-Bookings page

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/nahid-hstu57/Project_Lawyer_site.git
cd Project_Lawyer_site
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The app should now be running locally (check your terminal for the local URL).

## 🌐 Deployment

This project is deployed to **GitHub Pages** using the `gh-pages` package. Deployment is **manual** — pushing to `main` only updates the source code, it does not update the live site.

To publish changes:

```bash
git add .
git commit -m "your changes"
git push origin main       # backs up source code
npm run deploy              # builds and publishes the live site
```

## 📸 Screenshots

> Add screenshots to a `/screenshots` folder in the repo and reference them below.

| Home | Lawyer Listing |
|------|----------------|
| ![Home](./screenshots/home.png) | ![Lawyers](./screenshots/lawyers.png) |

| Lawyer Profile | My Bookings |
|----------------|-------------|
| ![Profile](./screenshots/profile.png) | ![Bookings](./screenshots/bookings.png) |

| Blogs |
|-------|
| ![Blogs](./screenshots/blogs.png) |

## 🚀 Roadmap / Future Improvements

- Backend integration (Node/Express + MongoDB) for real bookings and authentication
- Real-time lawyer availability updates
- Payment integration for consultation fees
- Search and filter lawyers by specialty/location

## 👤 Author

**Nahid Hasan**
GitHub: [@nahid-hstu57](https://github.com/nahid-hstu57)