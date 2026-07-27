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
  constructor(burgerSelector, linksSelector, navSelector) {
    this.burger = document.querySelector(burgerSelector);
    this.links = document.querySelector(linksSelector);
    this.nav = document.querySelector(navSelector);
    this._bind();
    this._bindScrollShadow();
  }

  _bind() {
    if (!this.burger || !this.links) return;
    this.burger.addEventListener("click", () => this.toggle());
    this.links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => this.close())
    );
  }

  _bindScrollShadow() {
    if (!this.nav) return;
    const onScroll = () => {
      this.nav.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
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

/** Detecta el idioma del navegador y expone un idioma soportado por defecto. */
class LocaleDetector {
  constructor(supported, fallback) {
    this.supported = supported;
    this.fallback = fallback;
  }

  detect() {
    const langs = navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language || this.fallback];

    for (const raw of langs) {
      const code = raw.slice(0, 2).toLowerCase();
      if (this.supported.includes(code)) return code;
    }
    return this.fallback;
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
    this.toggle?.querySelectorAll("[data-lang-opt]").forEach((el) => {
      el.classList.toggle("is-active", el.dataset.langOpt === lang);
    });
    this.onChange(lang);
  }
}

/** Actualiza el enlace de descarga de CV según el idioma activo. */
class CvLinkController {
  constructor(selector) {
    this.el = document.querySelector(selector);
  }

  update(lang) {
    if (!this.el) return;
    const file = lang === "en" ? "Jose_ManriqueCruz_CV_EN.pdf" : "Jose_ManriqueCruz_CV_ES.pdf";
    this.el.setAttribute("href", `cv/${file}`);
  }
}

/** Revela elementos con una transición al entrar en viewport, con stagger por grupo. */
class ScrollReveal {
  constructor(groupSelector, itemSelector) {
    this.groups = document.querySelectorAll(groupSelector);
    this._observe(itemSelector);
  }

  _observe(itemSelector) {
    if (!("IntersectionObserver" in window)) return;

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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    this.groups.forEach((group) => {
      const items = itemSelector ? group.querySelectorAll(itemSelector) : [group];
      items.forEach((el, i) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = `opacity .55s ease ${i * 70}ms, transform .55s ease ${i * 70}ms`;
        observer.observe(el);
      });
    });
  }
}

/** Barra fina de progreso de lectura en la parte superior de la página. */
class ScrollProgress {
  constructor(selector) {
    this.el = document.querySelector(selector);
    if (!this.el) return;
    window.addEventListener("scroll", () => this._update(), { passive: true });
    this._update();
  }

  _update() {
    const doc = document.documentElement;
    const scrolled = doc.scrollTop;
    const max = doc.scrollHeight - doc.clientHeight;
    const pct = max > 0 ? (scrolled / max) * 100 : 0;
    this.el.style.width = pct + "%";
  }
}

(function bootstrap() {
  const i18n = new I18n(TRANSLATIONS);
  const experience = new ExperienceRenderer(EXPERIENCE, "#changelog");
  const projects = new ProjectsRenderer(PROJECTS, "#projects-grid");
  const cvLink = new CvLinkController("#cvDownload");

  const renderAll = (lang) => {
    i18n.apply(lang);
    experience.render(lang);
    projects.render(lang);
    cvLink.update(lang);
  };

  new NavController("#navBurger", "#navLinks", "#nav");
  const langSwitch = new LanguageSwitch("#langToggle", renderAll);

  const detector = new LocaleDetector(["es", "en"], "es");
  langSwitch.set(detector.detect());

  new ScrollProgress("#scrollProgress");

  new ScrollReveal(".strengths", ".strength");
  new ScrollReveal(".stackgrid", ".stackgroup");
  new ScrollReveal(".projects", ".project");
  new ScrollReveal(".changelog", ".changelog__item");
  new ScrollReveal(".edugrid", ".edu, .certs");
  new ScrollReveal(".contact__grid", ".contact__card");

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
