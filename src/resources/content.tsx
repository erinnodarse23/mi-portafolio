import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Erin",
  lastName: "Nodarse Gonzalez",
  name: `Erin Nodarse`,
  role: "Ingeniero de Software | Backend Java",
  avatar: "/images/avatar.jpg",
  email: "nodarseerin1@gmail.com",
  location: "America/Havana",
  languages: ["Español (nativo)", "Inglés (básico)"],
  locale: "es",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Suscríbete al newsletter de {person.firstName}</>,
  description: <>Novedades sobre desarrollo backend</>,
};

const social: Social = [
  { name: "GitHub", icon: "github", link: "https://github.com/erinnodarse23", essential: true },
  { name: "LinkedIn", icon: "linkedin", link: "https://www.linkedin.com/in/erin-nodarse-gonzález-1266913ba", essential: true },
  { name: "Email", icon: "email", link: `https://mail.google.com/mail/?view=cm&fs=1&to=${person.email}`, essential: true },
  { name: "WhatsApp", icon: "whatsapp", link: "https://wa.me/5359794572", essential: true },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Inicio",
  title: `${person.name} – Ingeniero de Software | Backend Java · Spring Boot`,
  description: `Portafolio de ${person.name}, Ingeniero de Software especializado en backend con Java, Spring Boot y PostgreSQL.`,
  headline: <>Ingeniero de Software · Backend Java · Spring Boot</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Proyecto destacado</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Sistema de Telefonía ECASA
        </Text>
      </Row>
    ),
    href: "/work/ecasa-telefonia",
  },
  subline: (
    <>
      Construyo APIs REST robustas con <Text as="span" weight="strong">arquitectura en capas</Text>, 
      seguridad con Spring Security y persistencia con Spring JDBC y JPA. 
      Especializado en Java 17, Spring Boot 3 y PostgreSQL. Busco oportunidades de trabajo de forma remota.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "Sobre mí",
  title: `Sobre mí – ${person.name}`,
  description: `Conoce a ${person.name}, Ingeniero de Software especializado en Backend Java desde Cuba`,
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
        <Text>
          Soy Ingeniero de Software radicado en Cuba, próximo a graduarme como <strong>Ingeniero Informático</strong>. 
          Mi formación universitaria y mayor experiencia técnica está en el ecosistema <strong>Java + Spring Boot</strong>.
        </Text>
        <Text>
          Me especializo en diseñar APIs REST, modelos de datos relacionales y arquitecturas en capas con separación clara de responsabilidades. 
          He construido sistemas backend para clientes reales como ECASA S.A., aplicando seguridad con Spring Security, testing con JUnit y Mockito, y despliegue con Docker.
        </Text>
        <Text>
          Busco oportunidades de trabajo de forma remota donde pueda aportar mi experiencia en backend y seguir creciendo profesionalmente. 
          Estoy trabajando activamente en mejorar mi inglés técnico para colaborar en equipos internacionales; mi español es nativo.
        </Text>
      </>
    ),
  },
  work: {
    display: true,
    title: "Experiencia",
    experiences: [
      {
        company: "Sistema de Control de Telefonía — ECASA S.A.",
        timeframe: "2025 – 2026",
        role: "Arquitecto backend y desarrollador principal",
        achievements: [
          <>
            Diseñé y construí la API REST con <strong>Java 17 + Spring Boot</strong> y 
            arquitectura en capas, manejando 14 controladores y más de 20 servicios.
          </>,
          <>
            Implementé seguridad robusta con Spring Security: JWT, captcha, 
            rate limiting en 4 niveles y sanitización XSS.
          </>,
          <>
            Utilicé <strong>JdbcTemplate</strong> para queries complejas de dashboard, 
            priorizando rendimiento sobre ORM, y PostgreSQL 16 para persistencia.
          </>,
          <>
            Desarrollé 92 tests automatizados (JUnit + Mockito + Vitest) 
            y documenté la API con Swagger/OpenAPI 3.
          </>,
          <>
            🚀 Proyecto desplegado en producción:{" "}
            <a href="https://ctm-ecasa.onrender.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
              ctm-ecasa.onrender.com
            </a>
          </>,
        ],
        images: [],
      },
      {
        company: "Biblioteca Santa Lucía",
        timeframe: "Proyecto de curso, 2025",
        role: "Arquitecto de datos y desarrollador backend",
        achievements: [
          <>
            Diseñé el modelo entidad-relación y lo normalicé hasta la Forma Normal de
            Boyce-Codd (FNBC) con justificación formal del proceso.
          </>,
          <>
            Construí una API REST con <strong>Java y Spring Boot</strong> aplicando reglas
            de negocio complejas (máximo 5 préstamos simultáneos, bloqueo por morosidad,
            reseña única).
          </>,
          <>
            Implementé consultas personalizadas con JPQL y SQL nativo para cálculo de
            calificación promedio, disponibilidad de ejemplares y usuarios vencidos.
          </>,
          <>
            Utilicé Spring Data JPA, DTOs con Java Records, Bean Validation y manejo global de errores.
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
        description: <>Ingeniería Informática. Graduación prevista: 2026.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Habilidades técnicas",
    skills: [
      {
        title: "Lenguajes",
        description: <>Lenguajes con los que trabajo habitualmente en backend.</>,
        tags: [
          { name: "Java", icon: "java" },
          { name: "SQL", icon: "postgresql" },
          { name: "TypeScript", icon: "typescript" },
        ],
        images: [],
      },
      {
        title: "Backend & Frameworks",
        description: <>APIs REST con arquitectura en capas y seguridad enterprise.</>,
        tags: [
          { name: "Spring Boot", icon: "spring" },
          { name: "Spring Security", icon: "spring" },
          { name: "Spring Data JPA", icon: "spring" },
          { name: "Hibernate", icon: "hibernate" },
          { name: "Spring JDBC", icon: "spring" },
        ],
        images: [],
      },
      {
        title: "Bases de datos & Herramientas",
        description: <>Gestión de datos, testing y control de versiones.</>,
        tags: [
          { name: "PostgreSQL", icon: "postgresql" },
          { name: "JWT", icon: "jwt" },
          { name: "Swagger", icon: "swagger" },
          { name: "JUnit", icon: "junit" },
          { name: "Git", icon: "git" },
          { name: "Docker", icon: "docker" },
          { name: "Maven", icon: "maven" },
        ],
        images: [],
      },
      {
        title: "Frontend (conocimientos)",
        description: <>Interfaces que consumen mis APIs.</>,
        tags: [
          { name: "React", icon: "react" },
          { name: "Next.js", icon: "nextjs" },
          { name: "Tailwind", icon: "tailwind" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Escribo sobre arquitectura backend y Java",
  description: `Artículos técnicos sobre Java, Spring Boot, bases de datos y decisiones de arquitectura por ${person.name}`,
};

const work: Work = {
  path: "/work",
  label: "Proyectos",
  title: `Proyectos – ${person.name}`,
  description: `Proyectos de desarrollo backend de ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Galería",
  title: `Galería – ${person.name}`,
  description: `Colección de imágenes de ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };