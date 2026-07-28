/**
 * i18n.js
 * ------------------------------------------------------------------
 * Responsabilidad única: mantener el diccionario de textos estáticos
 * y aplicar un idioma al DOM. No sabe nada de navegación, botones ni
 * de cómo se dispara el cambio de idioma (Open/Closed: añadir un
 * idioma nuevo solo requiere agregar una clave al diccionario).
 * ------------------------------------------------------------------
 */

const TRANSLATIONS = {
  es: {
    "nav.about": "Sobre mí",
    "nav.stack": "Stack",
    "nav.projects": "Proyectos",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",

    "hero.status": "status: abierto a nuevas oportunidades",
    "hero.role": "Tech Lead / Senior Backend Engineer",
    "hero.location": "Bogotá, Colombia",
    "hero.exp": "10+ años de experiencia",
    "hero.remote": "Abierto a remoto internacional",

    "stats.years": "años de experiencia",
    "stats.leading": "años liderando equipos",
    "stats.industries": "industrias distintas",
    "stats.countries": "países",
    "hero.pitch": "Soy una persona dedicada y curiosa, en aprendizaje constante. Llevo más de 4 años liderando equipos de desarrollo, escuchando tanto al negocio como al equipo técnico y tomando decisiones claras incluso bajo presión — aplicando SOLID y Clean Architecture sin perder de vista a las personas detrás del resultado. Hoy también estoy fortaleciendo mi inglés en un instituto, camino a nuevos retos internacionales.",
    "hero.ctaEmail": "Escribirme",
    "hero.ctaCv": "Descargar CV ↓",
    "hero.badge": "Tech Lead · .NET / C# · Java",

    "about.eyebrow": "// sobre-mí",
    "about.title": "Extracto",
    "about.text": "Ingeniero de sistemas con más de 10 años de experiencia en desarrollo de software usando .NET y C#. He trabajado en proyectos para bancos, colegios, la industria de alimentos, aseguradoras y empresas de gestión de TI. Más allá de la tecnología, soy una persona dedicada que disfruta aprender constantemente y construir junto a otros — promoviendo calidad de código y entregas incrementales de valor dentro de un equipo.",
    "about.s1t": "Arquitectura & diseño",
    "about.s1d": "APIs y servicios backend robustos y mantenibles, aplicando SOLID, Clean Architecture y patrones de diseño.",
    "about.s2t": "Rendimiento & escalabilidad",
    "about.s2d": "Optimización de sistemas de alta demanda y diseño de arquitecturas distribuidas orientadas a microservicios.",
    "about.s3t": "Liderazgo & mentoría",
    "about.s3d": "4+ años acompañando equipos de desarrollo: invierto tiempo en dar retroalimentación honesta y en ver crecer a las personas con las que trabajo.",
    "about.s4t": "Comunicación & decisiones",
    "about.s4d": "Traduzco entre negocio y equipo técnico, y tomo decisiones claras incluso bajo presión, sin perder de vista ni el resultado ni a las personas.",
    "about.s5t": "Adaptabilidad multi-stack",
    "about.s5d": "Aunque .NET/C# es mi stack principal, entrego soluciones funcionales en Java/Spring Boot y otros lenguajes apoyándome en aprendizaje rápido y herramientas de IA.",
    "about.s6t": "Empatía & manejo de conflictos",
    "about.s6d": "Prefiero resolver la fricción hablando directamente y buscando el punto en común, manteniendo la confianza del equipo incluso en momentos difíciles.",

    "stack.eyebrow": "// stack-técnico",
    "stack.title": "Tecnologías",
    "stack.g1": "Lenguajes & Frameworks",
    "stack.g2": "Datos & Infraestructura",
    "stack.g3": "Arquitectura & Prácticas",
    "stack.g4": "Seguridad & Autenticación",
    "stack.g5": "Automatización & Datos",
    "stack.g6": "Contenedores & Orquestación",
    "stack.g7": "CI/CD & DevOps",
    "stack.java": "Java / Spring Boot · adaptable",
    "stack.ai": "Desarrollo asistido por IA",
    "stack.microservices": "Microservicios",
    "stack.distributed": "Arquitecturas distribuidas",

    "projects.eyebrow": "// proyectos",
    "projects.title": "Proyectos",
    "projects.subtitle": "Porque la curiosidad no se queda solo en el trabajo — código público que construí para seguir aprendiendo.",

    "exp.eyebrow": "// historial-laboral",
    "exp.title": "Experiencia",
    "exp.subtitle": "Un changelog de una carrera construida versión sobre versión.",

    "edu.eyebrow": "// formación",
    "edu.title": "Educación & certificaciones",
    "edu.degree": "Ingeniería en Informática",
    "edu.c0": "Cloud101 (jul. 2026)",
    "edu.c1": "Diplomado en Arquitectura de Software — Universidad de La Sabana (feb. 2026)",
    "edu.c3": "Introducción a la Ingeniería del Software (edX)",
    "edu.c4": "Diplomado en Ingeniería de Software",
    "edu.c8": "CCNA Cisco Networking Level 1 (UNET)",
    "edu.langEs": "Español — Nativo",
    "edu.langEn": "Inglés — Intermedio (B1), en formación activa",
    "edu.note": "Actualmente en programa de inglés — ETS Academy, Nashville, Tennessee.",

    "contact.eyebrow": "// contacto",
    "contact.title": "Hablemos",
    "contact.text": "Soy una persona dedicada, que disfruta aprender y construir junto a otros. Si buscas a alguien así para tu equipo — como Backend Developer o Tech Lead, en Colombia, LatAm o remoto internacional — hablemos.",
    "contact.email": "Email",
    "contact.phone": "Teléfono",
    "contact.location": "Ubicación",
    "contact.copy": "Copiar",
    "contact.copied": "¡Copiado!",

    "footer.rights": "Todos los derechos reservados.",

    "meta.title": "José Manrique Cruz — Tech Lead / Senior Backend Engineer",
    "html.lang": "es"
  },

  en: {
    "nav.about": "About",
    "nav.stack": "Stack",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.contact": "Contact",

    "hero.status": "status: open to new opportunities",
    "hero.role": "Tech Lead / Senior Backend Engineer",
    "hero.location": "Bogotá, Colombia",
    "hero.exp": "10+ years of experience",
    "hero.remote": "Open to international remote",

    "stats.years": "years of experience",
    "stats.leading": "years leading teams",
    "stats.industries": "industries",
    "stats.countries": "countries",
    "hero.pitch": "I'm a dedicated, curious person who's always learning. I've spent 4+ years leading development teams, listening to both the business and the technical side, and making clear decisions even under pressure — applying SOLID and Clean Architecture without losing sight of the people behind the result. I'm also currently strengthening my English at a language institute, on my way to new international challenges.",
    "hero.ctaEmail": "Get in touch",
    "hero.ctaCv": "Download CV ↓",
    "hero.badge": "Tech Lead · .NET / C# · Java",

    "about.eyebrow": "// about-me",
    "about.title": "Summary",
    "about.text": "Systems engineer with 10+ years of experience building software with .NET and C#. He has worked on projects for banks, schools, the food industry, insurance companies and IT management services. Beyond the technology, he's a dedicated person who enjoys learning constantly and building alongside others — promoting code quality and incremental delivery of value within a team.",
    "about.s1t": "Architecture & design",
    "about.s1d": "Robust, maintainable backend APIs and services, applying SOLID, Clean Architecture and design patterns.",
    "about.s2t": "Performance & scalability",
    "about.s2d": "Optimization of high-demand systems and design of distributed, microservice-oriented architectures.",
    "about.s3t": "Leadership & mentoring",
    "about.s3d": "4+ years supporting development teams: I invest time in giving honest feedback and watching the people I work with grow.",
    "about.s4t": "Communication & decisions",
    "about.s4d": "I translate between business and the technical team, and make clear decisions even under pressure, without losing sight of the outcome or the people involved.",
    "about.s5t": "Multi-stack adaptability",
    "about.s5d": "While .NET/C# is my main stack, I ship working solutions in Java/Spring Boot and other languages by learning fast and leaning on AI tooling.",
    "about.s6t": "Empathy & conflict management",
    "about.s6d": "I'd rather resolve friction by talking directly and finding common ground, keeping the team's trust intact even in difficult moments.",

    "stack.eyebrow": "// tech-stack",
    "stack.title": "Technologies",
    "stack.g1": "Languages & Frameworks",
    "stack.g2": "Data & Infrastructure",
    "stack.g3": "Architecture & Practices",
    "stack.g4": "Security & Authentication",
    "stack.g5": "Automation & Data",
    "stack.g6": "Containers & Orchestration",
    "stack.g7": "CI/CD & DevOps",
    "stack.java": "Java / Spring Boot · adaptable",
    "stack.ai": "AI-assisted development",
    "stack.microservices": "Microservices",
    "stack.distributed": "Distributed architectures",

    "projects.eyebrow": "// projects",
    "projects.title": "Projects",
    "projects.subtitle": "Because curiosity doesn't stay at work — public code I built to keep learning.",

    "exp.eyebrow": "// work-history",
    "exp.title": "Experience",
    "exp.subtitle": "A changelog of a career built release by release.",

    "edu.eyebrow": "// education",
    "edu.title": "Education & certifications",
    "edu.degree": "B.Eng. in Computer Science",
    "edu.c0": "Cloud101 (Jul 2026)",
    "edu.c1": "Diploma in Software Architecture — Universidad de La Sabana (Feb 2026)",
    "edu.c3": "Introduction to Software Engineering (edX)",
    "edu.c4": "Diploma in Software Engineering",
    "edu.c8": "CCNA Cisco Networking Level 1 (UNET)",
    "edu.langEs": "Spanish — Native",
    "edu.langEn": "English — Intermediate (B1), actively improving",
    "edu.note": "Currently enrolled in an English program — ETS Academy, Nashville, Tennessee.",

    "contact.eyebrow": "// contact",
    "contact.title": "Let's talk",
    "contact.text": "I'm a dedicated person who enjoys learning and building alongside others. If that's who you're looking for on your team — as a Backend Developer or Tech Lead, in Colombia, LatAm, or international remote — let's talk.",
    "contact.email": "Email",
    "contact.phone": "Phone",
    "contact.location": "Location",
    "contact.copy": "Copy",
    "contact.copied": "Copied!",

    "footer.rights": "All rights reserved.",

    "meta.title": "José Manrique Cruz — Tech Lead / Senior Backend Engineer",
    "html.lang": "en"
  }
};

class I18n {
  constructor(dictionary) {
    this.dictionary = dictionary;
  }

  apply(lang) {
    const dict = this.dictionary[lang];
    if (!dict) return;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.textContent = dict[key];
    });

    document.title = dict["meta.title"];
    document.documentElement.setAttribute("lang", dict["html.lang"]);
  }

  translate(lang, key) {
    return this.dictionary[lang]?.[key] ?? key;
  }
}
