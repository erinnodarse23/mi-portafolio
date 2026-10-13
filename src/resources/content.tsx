import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Erin",
  lastName: "Nodarse Gonzalez",
  name: `Erin Nodarse`,
  role: "Desarrollador Backend",
  avatar: "/images/avatar.jpg",
  email: "nodarseerin1@gmail.com",
  location: "America/Havana", // Zona horaria de Cuba
  languages: ["Español (nativo)", "Inglés (básico)"],
  locale: "es", // Español para el atributo lang del HTML
};

const newsletter: Newsletter = {
  display: false, // Desactivado por ahora
  title: <>Suscríbete al newsletter de {person.firstName}</>,
  description: <>Novedades sobre desarrollo web y proyectos</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/erinnodarse23",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/erin-nodarse-gonzález-1266913ba",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `https://mail.google.com/mail/?view=cm&fs=1&to=${person.email}`,
    essential: true,
  },
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://wa.me/5359794572",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Inicio",
  title: `${person.name} – Desarrollador Backend | Node.js · PostgreSQL`,
  description: `Portafolio de ${person.name}, Desarrollador Backend especializado en Node.js, PostgreSQL y arquitectura de APIs REST.`,
  headline: <>Desarrollador Backend · Node.js · PostgreSQL</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Proyecto destacado</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          ECASA Telefonía
        </Text>
      </Row>
    ),
    href: "/work/ecasa-telefonia",
  },
  subline: (
    <>
      Construyo sistemas backend robustos, desde el modelo de datos hasta la API.
      Experiencia en <Text as="span" weight="strong">arquitectura en capas</Text>,
      seguridad con JWT y testing estructurado. Busco oportunidades remotas.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre mí",
  title: `Sobre mí – ${person.name}`,
  description: `Conoce a ${person.name}, ${person.role} desde Cuba`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introducción",
    description: (
      <>
        Soy desarrollador backend radicado en Cuba. Me especializo en diseñar y
        construir APIs REST, modelos de datos y arquitecturas en capas. He diseñado
        la arquitectura de software del sistema de gestión de telefonía móvil para
        ECASA S.A. y del sistema de gestión para la Biblioteca Santa Lucía, este
        último como proyecto académico enfocado exclusivamente en backend. En ambos
        aprendí a valorar la seguridad, el testing y la separación clara de
        responsabilidades. Busco oportunidades remotas donde pueda aportar mi
        experiencia en backend y seguir creciendo. Estoy mejorando mi inglés
        técnico para trabajar con equipos internacionales; mi español es nativo.
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiencia",
    experiences: [
      {
        company: "ECASA S.A.",
        timeframe: "2025 – 2026",
        role: "Arquitecto backend y desarrollador principal",
        achievements: [
          <>
            Diseñé y construí la API REST en Node.js/Express con arquitectura en capas
            (17 controladores, 15 servicios, 11 repositorios) para la gestión de
            telefonía móvil corporativa.
          </>,
          <>
            Implementé seguridad con JWT (blacklist de tokens invalidados), bcrypt,
            rate limiting y sanitización XSS con DOMPurify.
          </>,
          <>
            Diseñé el modelo de datos en PostgreSQL (10 tablas) con índices parciales
            y restricciones de exclusión para impedir solapamiento de asignaciones.
          </>,
          <>
            Desarrollé el módulo de carga masiva desde Excel con validación multi-criterio
            y UPSERT para idempotencia.
          </>,
        ],
        images: [],
      },
      {
        company: "Biblioteca Santa Lucía",
        timeframe: "Proyecto de curso, 2026",
        role: "Arquitecto backend y desarrollador principal",
        achievements: [
          <>
            Diseñé el modelo entidad-relación y lo normalicé hasta la Forma Normal de
            Boyce-Codd (FNBC) con justificación formal del proceso.
          </>,
          <>
            Construí una API REST con Node.js + Express y PostgreSQL, aplicando reglas
            de negocio complejas (máximo 5 préstamos simultáneos, bloqueo por morosidad,
            reseña única).
          </>,
          <>
            Implementé consultas en SQL puro con el cliente oficial pg para cálculo de
            calificación promedio, disponibilidad de ejemplares y usuarios vencidos.
          </>,
          <>
            Documenté la API con Swagger UI para que cualquiera pueda probarla sin
            necesidad de Postman.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Estudios",
    institutions: [
      {
        name: "Universidad Agraria de La Habana",
        description: <>Ingeniería Informática. En curso.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Habilidades técnicas",
    skills: [
      {
        title: "Backend",
        description: (
          <>APIs REST con arquitectura en capas, seguridad con JWT y persistencia con PostgreSQL.</>
        ),
        tags: [
          { name: "Node.js", icon: "nodejs" },
          { name: "Express", icon: "express" },
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "JWT", icon: "jwt" },
          { name: "Swagger", icon: "swagger" },
        ],
        images: [],
      },
      {
        title: "Herramientas",
        description: (
          <>Control de versiones, testing y despliegue de aplicaciones backend.</>
        ),
        tags: [
          { name: "Git", icon: "git" },
          { name: "GitHub", icon: "github" },
          { name: "Docker", icon: "docker" },
          { name: "Postman", icon: "postman" },
        ],
        images: [],
      },
      {
        title: "Frontend",
        description: (
          <>Conocimientos de React y Next.js para construir interfaces que consumen mis APIs.</>
        ),
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Tailwind", icon: "tailwind" },
          { name: "TypeScript", icon: "typescript" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Escribo sobre desarrollo web y proyectos",
  description: `Lee lo que ${person.name} ha estado haciendo recientemente`,
};

const work: Work = {
  path: "/work",
  label: "Proyectos",
  title: `Proyectos – ${person.name}`,
  description: `Proyectos de desarrollo de ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galería",
  title: `Galería – ${person.name}`,
  description: `Colección de imágenes de ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };