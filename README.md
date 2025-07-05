# CV – Angular Application

This is a personal resume (CV) web application built with [Angular](https://angular.io/).  
It showcases professional experience, skills, education, and projects, with support for **English** and **French** languages.

## 🌐 Features

- 💼 Resume presentation in a clean and modern layout  
- 🌍 Internationalization (i18n): available in **English** and **French**  
- ⚡ Built with Angular 17+ and SCSS

---

## 📦 Getting Started (Development)

### Clone the repository

```bash
git clone https://github.com/jbristhuille/cv.git
cd cv
```

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
ng serve
```

Then open your browser at [http://localhost:4200](http://localhost:4200)

---

## 🚀 Production Deployment (VPS + Docker)

This project is deployed on a VPS using Docker. The build and deployment process is fully automated via a GitHub Action.

### Docker-based production setup:

- The Dockerfile clones the repository inside the container
- Angular is built in production mode inside the container
- Output is served by Nginx

### Manual deployment (on VPS)

```bash
# Clone the Dockerfile only (no source code kept on the VPS)
git clone https://github.com/jbristhuille/cv.git /srv/docker-cv
cd /srv/docker-cv

# Build the Docker image
docker build -t jbristhuille/cv .

# Run the container
docker stop cv || true && docker rm cv || true
docker run -d --name cv --restart always -p 8080:80 jbristhuille/cv
```

### GitHub Action (automated deployment)

Each push to the `main` branch triggers:

- A connection to the VPS via SSH
- A Docker image rebuild using the updated codebase
- A container restart with the latest build

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
