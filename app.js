/**
 * app.js — composition root
 * ------------------------------------------------------------------
 * No conoce el contenido (content.js) ni el diccionario (i18n.js) por
 * dentro: solo orquesta instancias a través de sus métodos públicos.
 * Cada controlador tiene una única responsabilidad y puede sustituirse
 * de forma independiente sin tocar el resto (Dependency Inversion /
 * Interface Segregation aplicados a nivel de módulos de UI).
 * ------------------------------------------------------------------
 */

/** Controla apertura/cierre del menú móvil. Nada más. */
class NavController {
  constructor(burgerSelector, linksSelector) {
    this.burger = document.querySelector(burgerSelector);
    this.links = document.querySelector(linksSelector);
    this._bind();
  }

  _bind() {
    if (!this.burger || !this.links) return;
    this.burger.addEventListener("click", () => this.toggle());
    this.links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => this.close())
    );
  }

  toggle() {
    const isOpen = this.links.classList.toggle("is-open");
    this.burger.setAttribute("aria-expanded", String(isOpen));
  }

  close() {
    this.links.classList.remove("is-open");
    this.burger.setAttribute("aria-expanded", "false");
  }
}

/** Controla el botón visual ES/EN y notifica el cambio hacia afuera. */
class LanguageSwitch {
  constructor(toggleSelector, onChange) {
    this.toggle = document.querySelector(toggleSelector);
    this.onChange = onChange;
    this.current = "es";
    this._bind();
  }

  _bind() {
    if (!this.toggle) return;
    this.toggle.addEventListener("click", () => {
      this.set(this.current === "es" ? "en" : "es");
    });
  }

  set(lang) {
    this.current = lang;
    this.toggle.querySelectorAll("[data-lang-opt]").forEach((el) => {
      el.classList.toggle("is-active", el.dataset.langOpt === lang);
    });
    this.onChange(lang);
  }
}

/** Revela secciones con una transición sutil al entrar en viewport. */
class ScrollReveal {
  constructor(selector) {
    this.targets = document.querySelectorAll(selector);
    this._observe();
  }

  _observe() {
    if (!("IntersectionObserver" in window) || this.targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "none";
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    this.targets.forEach((el) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      el.style.transition = "opacity .6s ease, transform .6s ease";
      observer.observe(el);
    });
  }
}

(function bootstrap() {
  const i18n = new I18n(TRANSLATIONS);
  const experience = new ExperienceRenderer(EXPERIENCE, "#changelog");
  const projects = new ProjectsRenderer(PROJECTS, "#projects-grid");

  const renderAll = (lang) => {
    i18n.apply(lang);
    experience.render(lang);
    projects.render(lang);
  };

  new NavController("#navBurger", "#navLinks");
  const langSwitch = new LanguageSwitch("#langToggle", renderAll);

  renderAll(langSwitch.current);

  new ScrollReveal(".strength, .stackgroup, .changelog__item, .edu, .contact__card");

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
