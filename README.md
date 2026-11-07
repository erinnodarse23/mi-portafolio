# Portafolio Personal — Erin Nodarse

Portafolio web personal construido con Next.js, MDX y Tailwind CSS. Presenta mis proyectos de desarrollo backend, mi experiencia y mi stack tecnológico.

**🌐 Sitio en vivo:** [https://erinnodarse.vercel.app](https://erinnodarse.vercel.app)

## 👋 Sobre mí

Soy **Ingeniero de Software | Backend Java** radicado en Cuba, próximo a graduarme como Ingeniero Informático. Me especializo en el diseño y construcción de APIs REST, modelos de datos y arquitecturas en capas.

- 🔭 Actualmente construyendo sistemas backend con **Java 17**, **Spring Boot 3** y **PostgreSQL**.
- 🌱 Aprendiendo buenas prácticas de arquitectura, testing (JUnit + Mockito) y despliegue con Docker.
- 💬 Pregúntame sobre **Java**, **Spring Boot**, **Spring Security**, **PostgreSQL**, **arquitectura en capas** o **diseño de bases de datos**.
- 📫 Cómo contactarme: [nodarseerin1@gmail.com](mailto:nodarseerin1@gmail.com) · [LinkedIn](https://www.linkedin.com/in/erin-nodarse-gonzález-1266913ba) · [GitHub](https://github.com/erinnodarse23)

## 🚀 Proyectos destacados

### [Sistema de Control de Telefonía Móvil — ECASA S.A.](/work/ecasa-telefonia)

Sistema empresarial full stack para la gestión de telefonía móvil corporativa. API REST en Java/Spring Boot con arquitectura en capas (14 controladores, 20+ servicios), seguridad con Spring Security y JWT, frontend en React 19 + Vite, y 92 tests automatizados.

**Stack:** Java 17 · Spring Boot 3 · Spring Security · Spring JDBC · PostgreSQL 16 · React 19 · Vite · JUnit · Mockito · Docker

### [API REST para Gestión de Biblioteca — Java + Spring Boot](/work/biblioteca-santa-lucia)

Backend para la gestión de autores, géneros, libros, usuarios, préstamos y reseñas. Arquitectura en capas, normalización hasta FNBC, Spring Data JPA, Swagger UI y reglas de negocio complejas (máximo 5 préstamos simultáneos, bloqueo por morosidad, reseña única).

**Stack:** Java 17 · Spring Boot 3 · Spring Data JPA · Hibernate · PostgreSQL 14 · Maven · Lombok · Swagger

## 🛠️ Stack del portafolio

- **Framework:** Next.js 16 (App Router con Turbopack)
- **Lenguaje:** TypeScript
- **Contenido:** MDX (proyectos)
- **UI:** Once UI + Tailwind CSS
- **Diseño personalizado:** Grid interactivo con canvas, tarjeta flotante con glassmorphism
- **Deploy:** Vercel

## 📂 Estructura del proyecto
```text
mi-portafolio/
├── public/
│   └── images/          # Imágenes, avatar, OG images, capturas de proyectos
├── src/
│   ├── app/
│   │   ├── about/       # Página "Sobre mí"
│   │   ├── work/        # Proyectos (MDX)
│   │   └── layout.tsx   # Layout raíz
│   ├── components/      # Componentes reutilizables
│   ├── resources/       # Configuración, contenido, estilos
│   └── utils/           # Utilidades
├── package.json
└── next.config.mjs