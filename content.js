/**
 * content.js
 * ------------------------------------------------------------------
 * Responsabilidad única: describir la experiencia laboral y los
 * proyectos como datos, y saber cómo convertirlos en markup. Esta
 * información se mantiene sincronizada con el CV descargable
 * (cv/Jose_ManriqueCruz_CV_ES.pdf / _EN.pdf).
 * ------------------------------------------------------------------
 */

const PROJECTS = [
  {
    name: "Unisabana RESTful",
    url: "https://github.com/jmanriquecruz/Unisabana-RESTful-github.io",
    desc: {
      es: "Herramienta para diseñar y validar endpoints REST siguiendo buenas prácticas, desarrollada durante el Diplomado en Arquitectura de Software (Universidad de La Sabana, 2026).",
      en: "A tool to design and validate REST endpoints following best practices, built during the Software Architecture Diploma (Universidad de La Sabana, 2026)."
    },
    tags: ["REST", "API Design", "Diplomado"]
  },
  {
    name: "Design Patterns · Arquitectura de Software",
    url: "https://github.com/jmanriquecruz/Unisabana-DesignPatterns",
    desc: {
      es: "Implementación práctica de patrones de diseño como parte del curso de Arquitectura de Software del diplomado.",
      en: "Hands-on implementation of design patterns as part of the diploma's Software Architecture course."
    },
    tags: ["Design Patterns", "Diplomado"]
  }
];

const EXPERIENCE = [
  {
    version: "v5.0.0",
    current: true,
    role: { es: "Tech Lead / Senior Backend Engineer", en: "Tech Lead / Senior Backend Engineer" },
    company: "Sistran Andina",
    dates: { es: "ene 2025 — actualidad", en: "Jan 2025 — present" },
    bullets: {
      es: [
        "Diseño y evolución de arquitecturas backend para sistemas de seguros, aplicando Clean Architecture, separación de responsabilidades y patrones de diseño.",
        "Liderazgo técnico: definición de estándares, revisión de código y mentoría a desarrolladores para soluciones mantenibles y escalables.",
        "Participación activa en decisiones técnicas de arquitectura junto a stakeholders del negocio.",
        "Trabajo con .NET, C#, SQL Server y sistemas de integración en entornos de alta criticidad funcional."
      ],
      en: [
        "Design and evolution of backend architectures for insurance systems, applying Clean Architecture, separation of concerns and design patterns.",
        "Technical leadership: defining standards, code review and mentoring developers toward maintainable, scalable solutions.",
        "Active participation in architectural technical decisions alongside business stakeholders.",
        "Worked with .NET, C#, SQL Server and integration systems in functionally high-criticality environments."
      ]
    }
  },
  {
    version: "v4.0.0",
    current: false,
    role: { es: "Backend Developer", en: "Backend Developer" },
    company: "Aranda Software",
    dates: { es: "jul 2021 — ene 2025", en: "Jul 2021 — Jan 2025" },
    bullets: {
      es: [
        "Implementación de descubrimiento SNMP: agente para descubrimiento de dispositivos por SNMP v2/v3, SSH, ICMP y NetBIOS.",
        "Integración del SDK de Oesis Client y creación de una librería propia sobre el framework.",
        "API de monitoreo con Prometheus (configuración global, targets y alertas) e integración con AlertManager.",
        "Desarrollo de la aplicación Mib Browser, integración de descubrimiento en el producto ADM, y pipelines de compilación y entrega de artefactos en Azure DevOps."
      ],
      en: [
        "Implemented SNMP discovery: built an agent for device discovery using SNMP v2/v3, SSH, ICMP and NetBIOS.",
        "Integrated the Oesis Client SDK and built a custom library on top of the framework.",
        "Prometheus monitoring API (global config, targets and alerts) integrated with AlertManager.",
        "Built the Mib Browser application, integrated discovery into the ADM product, and set up CI/CD pipelines for artifact delivery on Azure DevOps."
      ]
    }
  },
  {
    version: "v3.0.0",
    current: false,
    role: { es: "Ingeniero de Desarrollo Senior", en: "Senior Backend Engineer" },
    company: "Sistran Andina",
    dates: { es: "feb 2017 — jun 2021", en: "Feb 2017 — Jun 2021" },
    bullets: {
      es: [
        "Migración e integración de módulos de siniestros, pagos y reaseguros (SISS ETL con SQL Server 2008/2016, C#, RabbitMQ).",
        "Módulos de cargue masivo de pólizas Autos para AXA Colpatria y Previsora, y módulo de emisión de Hogar y RC para AXA Colpatria.",
        "Implementación de reaseguros y siniestros para Seguros del Estado.",
        "Coordinación de actividades de desarrollo y seguimiento de requerimientos con el equipo."
      ],
      en: [
        "Migrated and integrated claims, payments and reinsurance modules (SISS ETL with SQL Server 2008/2016, C#, RabbitMQ).",
        "Bulk auto-policy upload modules for AXA Colpatria and Previsora, plus a Home & Liability issuance module for AXA Colpatria.",
        "Implemented reinsurance and claims processes for Seguros del Estado.",
        "Coordinated development activities and requirement tracking with the team."
      ]
    }
  },
  {
    version: "v2.0.0",
    current: false,
    role: { es: "Coordinador de Desarrollo", en: "Development Coordinator" },
    company: "Infoguia.com — Caracas, VEN",
    dates: { es: "jun 2015 — oct 2015", en: "Jun 2015 — Oct 2015" },
    bullets: {
      es: [
        "Coordinación del proyecto del sistema de publicidad y ventas.",
        "Migración de base de datos de SQL Server a PostgreSQL.",
        "Reuniones de levantamiento de información con mercadeo y asignación de tareas al equipo. Tecnologías: PHP, Framework YII."
      ],
      en: [
        "Coordinated the advertising and sales system project.",
        "Migrated the database from SQL Server to PostgreSQL.",
        "Led information-gathering meetings with marketing and assigned tasks to the team. Technologies: PHP, YII Framework."
      ]
    }
  },
  {
    version: "v1.0.0",
    current: false,
    role: { es: "Analista Junior → Ingeniero de Desarrollo Senior → Coordinador de Desarrollo", en: "Junior Analyst → Senior Development Engineer → Development Coordinator" },
    company: "Medinet Consultores — Caracas, VEN",
    dates: { es: "feb 2012 — may 2015", en: "Feb 2012 — May 2015" },
    bullets: {
      es: [
        "Progresión de 3 años dentro de la empresa: de desarrollador junior a coordinador de desarrollo.",
        "Proyectos: sistema administrativo del Colegio Santiago León de Caracas, sitio de Bancaribe Curazao, interfaz con SINCRO, y SGC/CEL de Telefónica Venezuela.",
        "Migración de bases de datos SQL Server → PostgreSQL; packages y stored procedures en Oracle.",
        "Como coordinador: planificación de entregables, asignación de tareas, despliegue y soporte post-producción."
      ],
      en: [
        "3-year progression within the company: from junior developer to development coordinator.",
        "Projects: administrative system for Colegio Santiago León de Caracas, Bancaribe Curaçao website, SINCRO system interface, and Telefónica Venezuela's SGC/CEL.",
        "Migrated databases from SQL Server to PostgreSQL; built packages and stored procedures in Oracle.",
        "As coordinator: deliverable planning, task assignment, deployment and post-production support."
      ]
    }
  }
];

class ProjectsRenderer {
  constructor(data, mountSelector) {
    this.data = data;
    this.mount = document.querySelector(mountSelector);
  }

  render(lang) {
    if (!this.mount) return;
    this.mount.innerHTML = this.data.map((p) => this._cardTemplate(p, lang)).join("");
  }

  _cardTemplate(project, lang) {
    const tags = project.tags.map((t) => `<span>${t}</span>`).join("");
    return `
      <a class="project" href="${project.url}" target="_blank" rel="noopener">
        <div class="project__head">
          <span class="project__name">${project.name}</span>
          <span class="project__arrow">↗</span>
        </div>
        <p class="project__desc">${project.desc[lang]}</p>
        <div class="project__tags">${tags}</div>
      </a>
    `;
  }
}

class ExperienceRenderer {
  constructor(data, mountSelector) {
    this.data = data;
    this.mount = document.querySelector(mountSelector);
  }

  render(lang) {
    if (!this.mount) return;
    this.mount.innerHTML = this.data.map((item) => this._itemTemplate(item, lang)).join("");
  }

  _itemTemplate(item, lang) {
    const bullets = item.bullets[lang].map((b) => `<li>${b}</li>`).join("");
    return `
      <li class="changelog__item${item.current ? " is-current" : ""}">
        <div class="changelog__head">
          <span class="changelog__version">${item.version}</span>
          <span class="changelog__role">${item.role[lang]}</span>
          <span class="changelog__dates">${item.dates[lang]}</span>
        </div>
        <p class="changelog__company"><b>${item.company}</b></p>
        <ul class="changelog__list">${bullets}</ul>
      </li>
    `;
  }
}
