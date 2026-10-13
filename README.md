# Portafolio Personal — Erin Nodarse

Portafolio web personal construido con Next.js, MDX y Tailwind CSS. Presenta mis proyectos de desarrollo backend, mi experiencia y un blog técnico.

**🌐 Sitio en vivo:** _[próximamente cuando lo despliegue]_

## 👋 Sobre mí

Soy **Backend Developer** radicado en Cuba, especializado en el diseño y construcción de APIs REST, modelos de datos y arquitecturas en capas.

- 🔭 Actualmente trabajando en sistemas backend con **Node.js**, **Express** y **PostgreSQL**.
- 🌱 Aprendiendo buenas prácticas de arquitectura, testing y despliegue.
- 💬 Pregúntame sobre **Node.js**, **PostgreSQL**, **JWT**, **arquitectura en capas** o **diseño de bases de datos**.
- 📫 Cómo contactarme: [nodarseerin1@gmail.com](mailto:nodarseerin1@gmail.com) · [LinkedIn](https://www.linkedin.com/in/erin-nodarse-gonzález-1266913ba) · [GitHub](https://github.com/erinnodarse23)

## 🚀 Proyectos destacados

### [Sistema de Control de Telefonía Móvil — ECASA S.A.](/work/ecasa-telefonia)

Sistema web full stack para la gestión de telefonía móvil corporativa. API REST en Node.js/Express con arquitectura en capas (17 controladores, 15 servicios, 11 repositorios), seguridad con JWT, y frontend en React 19 + Vite.

**Stack:** React 19 · Vite · Node.js 18 · Express 5 · PostgreSQL 14 · JWT · bcrypt · multer · xlsx · exceljs · pdfkit · Swagger

### [API REST para Gestión de Biblioteca — Node.js + Express + PostgreSQL](/work/biblioteca-santa-lucia)

Backend para la gestión de autores, géneros, libros, usuarios, préstamos y reseñas. Arquitectura en capas, SQL puro con el cliente oficial `pg`, Swagger UI y reglas de negocio complejas (máximo 5 préstamos simultáneos, bloqueo por morosidad, reseña única).

**Stack:** Node.js 18 · Express · PostgreSQL 14 · pg · express-validator · Swagger · nodemon

## 🛠️ Stack del portafolio

- **Framework:** Next.js 16 (App Router con Turbopack)
- **Lenguaje:** TypeScript
- **Contenido:** MDX (proyectos y blog)
- **UI:** Once UI + Tailwind CSS
- **Diseño personalizado:** Grid interactivo con canvas, tarjeta flotante con glassmorphism
- **Deploy:** Vercel

## 📂 Estructura del proyecto
mi-portafolio/
├── public/
│ └── images/ # Imágenes, avatar, OG images, capturas de proyectos
├── src/
│ ├── app/
│ │ ├── about/ # Página "Sobre mí"
│ │ ├── work/ # Proyectos (MDX)
│ │ ├── blog/ # Blog (MDX)
│ │ └── layout.tsx # Layout raíz
│ ├── components/ # Componentes reutilizables
│ ├── resources/ # Configuración, contenido, estilos
│ └── utils/ # Utilidades
├── package.json
└── next.config.mjs

text

## 💻 Correr el proyecto en local

```bash
# 1. Clonar el repositorio
git clone https://github.com/erinnodarse23/mi-portafolio.git
cd mi-portafolio

# 2. Instalar dependencias
npm install

# 3. Correr el servidor de desarrollo
npm run dev
Abre http://localhost:3000 en el navegador.

🚀 Deploy
Desplegado en Vercel. Cada push a main redespliega automáticamente.

📄 Licencia
Código personal. Las imágenes y capturas de proyectos son propiedad del autor.

Erin Nodarse — Backend Developer desde Cuba.