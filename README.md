# React Router Advanced

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![React](https://img.shields.io/badge/React-v19-blue)
![React Router](https://img.shields.io/badge/React_Router-v7-green)
![Node.js](https://img.shields.io/badge/Node.js-v22.14.0-brightgreen)
![Express](https://img.shields.io/badge/Express-4.18.1-%23404d59)

An advanced React application demonstrating the capabilities of React Router v7 and modern React features, including nested routes, data loading, and error boundaries.

## 🚀 Features & Learnings

While building this project, I learned and applied:

- **Configure routes**: Set up client-side routes for all pages.
- **Set up layouts**: Use layout components to maintain consistent UI structure.
- **Handle error responses**: Implement error boundaries to gracefully display errors.
- **Nested routes**: Structure pages hierarchically with nested routing.
- **Data fetching and submission**: Use loaders and actions to fetch and submit data.
- **Advanced data fetching without navigation**: Use `useFetcher` for background data updates.
- **Deferred data fetching**: Implement `<Suspense>` and `<Await>` for loading data asynchronously without blocking the UI.

## 📂 Project Structure

```plaintext
react-router-advanced/
├── backend/         # Backend API (e.g., Express server)
│   ├── app.js
│   └── package.json
├── frontend/        # React frontend application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   └── package.json
└── README.md        # Project README
```

## 🛠️ Technologies Used

- **Frontend**:
  - React v19
  - React Router v7
  - CSS Modules
  - Create React App (CRA)
- **Backend**:
  - Node.js
  - Express.js

## 📦 Installation & Frontend Setup

#### 1. Clone the repository

```bash
git clone https://github.com/Maryam-as/react-router-advanced.git
```

#### 2. Navigate to the frontend folder

```bash
cd react-router-advanced/frontend
```

#### 3. Install dependencies

```bash
npm install
```

#### 4. Start the frontend development server

```bash
npm start
```

## ⚙️ Backend Setup

#### 1. Navigate to the backend folder

```bash
cd ../backend
```

#### 2. Install backend dependencies

```bash
npm install
```

#### 3. Start the backend server

```bash
npm start
```

## 📚 Learning Resources

- **[React - The Complete Guide 2025 (including Next.js & Redux)](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)** course on Udemy, taught by **Maximilian Schwarzmüller**.

## 📜 License

MIT License
