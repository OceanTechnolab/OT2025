
# Ocean Technolab Website

This repository contains the source code for Ocean Technolab's official website, built using **ReactJS** and **Next.js 13**. Follow the steps below to set up, develop, and deploy the project.

---

## Prerequisites
Ensure your system meets the following requirements:

- **Node.js**: Download and install [Node.js](https://nodejs.org/).
- **Yarn** (or NPM): Install Yarn by following [this guide](https://classic.yarnpkg.com/en/docs/install/). NPM comes bundled with Node.js.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install required packages:
   ```bash
   yarn install
   # Or, if using npm
   npm install
   ```

---

## Development

### Start Development Server
Run the following command to start the development server:
```bash
npm run dev
```
Navigate to [http://localhost:3000/](http://localhost:3000/) in your browser. The app will automatically reload when source files are modified.

---

## Build

To build the project for production, run:
```bash
npm run build
```
The production-ready build artifacts will be generated in the `.next/` directory.

---

## Deployment

After building the project, the `.next/` directory contains the deployable output. Deploy this directory to your hosting provider or platform of choice.

---

## 1. Initialize Git (If Not Already Initialized)
   If your project is not yet a Git repository, initialize it by running:
   ```bash
   git init
   ```

---

## 2. Copy the README File
   Move or copy the `README.md` file to the root of your project directory.

---

## 3. Add the README File to Git
   Stage the `README.md` file by running:
   ```bash
   git add README.md
   ```

---

## 4. Commit the Changes
   Commit the file to your repository:
   ```bash
   git commit -m "Add README file"
   ```

---

## 5. Push to GitHub
   - If the repository is already linked to a GitHub remote, push the changes:
     ```bash
     git push origin main
     ```

   - If not, link your GitHub repository and push using the following commands:
     ```bash
     git remote add origin <your-repository-url>
     git branch -M main
     git push -u origin main
     ```

---

## 6. Verify on GitHub
   Go to your GitHub repository in your browser. The `README.md` file should be displayed on the main page.

---

**Note:** Replace `<your-repository-url>` with the URL of your GitHub repository.


**Happy Coding!**
Ocean Technolab

