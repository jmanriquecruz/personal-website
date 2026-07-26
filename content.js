/**
 * content.js
 * ------------------------------------------------------------------
 * Responsabilidad única: describir la experiencia laboral como datos,
 * y saber cómo convertir esos datos en el markup del "changelog".
 * Separa el CONTENIDO (qué se muestra) de la PRESENTACIÓN (i18n.js /
 * styles.css) y del COMPORTAMIENTO (app.js).
 * ------------------------------------------------------------------
 */

const EXPERIENCE = [
  {
    version: "v6.0.0",
    current: true,
    role: { es: "Tech Lead / Senior Backend Engineer", en: "Tech Lead / Senior Backend Engineer" },
    company: "Sistran Informática",
    dates: { es: "ene 2025 — presente", en: "Jan 2025 — present" },
    bullets: {
      es: [
        "Diseño y evolución de arquitecturas backend para sistemas de seguros, aplicando Clean Architecture y separación de responsabilidades.",
        "Definición de estándares técnicos, revisión de código y acompañamiento cercano a desarrolladores, con foco en su crecimiento.",
        "Trabajo con .NET, C# y SQL Server en entornos de alta criticidad funcional."
      ],
      en: [
        "Design and evolution of backend architectures for insurance systems, applying Clean Architecture and separation of concerns.",
        "Defined technical standards, led code reviews and provided close support to developers, focused on their growth.",
        "Worked with .NET, C# and SQL Server in functionally critical environments."
      ]
    }
  },
  {
    version: "v5.0.0",
    current: false,
    role: { es: "Backend Developer", en: "Backend Developer" },
    company: "Aranda Software",
    dates: { es: "jul 2021 — dic 2025", en: "Jul 2021 — Dec 2025" },
    bullets: {
      es: [
        "Desarrollo del agente de descubrimiento SNMP (v2, v3, SSH, ICMP, NetBIOS) para el producto ADM.",
        "Integración del SDK de Oesis Client y creación de una librería propia sobre el framework.",
        "API de monitoreo con Prometheus (configuración global, targets y alertas) e integración con AlertManager.",
        "Desarrollo de la aplicación Mib Browser y de pipelines de compilación y entrega de artefactos."
      ],
      en: [
        "Built the SNMP discovery agent (v2, v3, SSH, ICMP, NetBIOS) for the ADM product.",
        "Integrated the Oesis Client SDK and built a custom library on top of the framework.",
        "Prometheus monitoring API (global config, targets and alerts) integrated with AlertManager.",
        "Built the Mib Browser application and CI/CD pipelines for artifact delivery."
      ]
    }
  },
  {
    version: "v4.0.0",
    current: false,
    role: { es: "Ingeniero de Desarrollo Senior", en: "Senior Development Engineer" },
    company: "Sistran / Sistran Andina",
    dates: { es: "nov 2015 — jun 2021", en: "Nov 2015 — Jun 2021" },
    bullets: {
      es: [
        "Lideré el equipo de desarrollo durante más de 4 años: coordinación de requerimientos con el negocio, distribución de trabajo y acompañamiento técnico.",
        "Migración e integración de módulos de siniestros, pagos y reaseguros (ETL con SSIS y SQL Server).",
        "Módulos de cargue masivo de pólizas para AXA Colpatria y Previsora, y módulo de Hogar y RC para AXA Colpatria.",
        "Implementación de reaseguros y siniestros para Seguros del Estado."
      ],
      en: [
        "Led the development team for 4+ years: coordinated requirements with the business, distributed work and provided technical guidance.",
        "Migrated and integrated claims, payments and reinsurance modules (ETL with SSIS and SQL Server).",
        "Bulk policy upload modules for AXA Colpatria and Previsora, plus a Home & Liability module for AXA Colpatria.",
        "Implemented reinsurance and claims processes for Seguros del Estado."
      ]
    }
  },
  {
    version: "v3.0.0",
    current: false,
    role: { es: "Coordinador de Desarrollo", en: "Development Coordinator" },
    company: "Infoguia.com — Caracas, VEN",
    dates: { es: "2015 (8 meses)", en: "2015 (8 months)" },
    bullets: {
      es: [
        "Coordinación del proyecto del sistema de publicidad y ventas.",
        "Migración de base de datos de SQL Server a PostgreSQL.",
        "Desarrollo en PHP con el framework YII y asignación de tareas al equipo."
      ],
      en: [
        "Coordinated the advertising and sales system project.",
        "Migrated the database from SQL Server to PostgreSQL.",
        "Developed with PHP and the YII framework, and assigned tasks to the team."
      ]
    }
  },
  {
    version: "v2.0.0",
    current: false,
    role: { es: "Coordinador de Desarrollo / Analista de Proyecto", en: "Development Coordinator / Project Analyst" },
    company: "Medinet Consultores — Caracas, VEN",
    dates: { es: "feb 2011 — may 2015", en: "Feb 2011 — May 2015" },
    bullets: {
      es: [
        "Sistema administrativo para el Colegio Santiago León de Caracas.",
        "Sitio web e interfaz con el sistema SINCRO para Bancaribe Curazao.",
        "Desarrollo de IPR y stored procedures para SGC/CEL de Telefónica Venezuela.",
        "Gestión de personal, levantamiento de requerimientos y soporte post-producción."
      ],
      en: [
        "Administrative system for Colegio Santiago León de Caracas.",
        "Website and interface with the SINCRO system for Bancaribe Curaçao.",
        "Built IPR features and stored procedures for Telefónica Venezuela's SGC/CEL systems.",
        "Team management, requirements gathering and post-production support."
      ]
    }
  },
  {
    version: "v1.0.0",
    current: false,
    role: { es: "Desarrollador", en: "Developer" },
    company: "Lotería del Táchira",
    dates: { es: "nov 2010 — jun 2011", en: "Nov 2010 — Jun 2011" },
    bullets: {
      es: ["Sistema de correspondencia interna con firma electrónica, usando GNUPG y PHP."],
      en: ["Internal correspondence system with electronic signature, using GNUPG and PHP."]
    }
  }
];

const PROJECTS = [
  {
    name: "Unisabana RESTful",
    url: "https://github.com/jmanriquecruz/Unisabana-RESTful-github.io",
    desc: {
      es: "Herramienta para diseñar y validar endpoints REST siguiendo buenas prácticas, desarrollada durante el diplomado de Arquitectura de Software (Universidad de La Sabana, 2026).",
      en: "A tool to design and validate REST endpoints following best practices, built during the Software Architecture diploma (Universidad de La Sabana, 2026)."
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

    this.mount.innerHTML = this.data
      .map((item) => this._itemTemplate(item, lang))
      .join("");
  }

  _itemTemplate(item, lang) {
    const bullets = item.bullets[lang]
      .map((b) => `<li>${b}</li>`)
      .join("");

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
