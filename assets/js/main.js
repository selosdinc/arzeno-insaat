(() => {
  "use strict";

  const header = document.querySelector(".site-header");
  const nav = document.querySelector(".site-nav");
  const menuButton = document.querySelector(".menu-toggle");
  const backdrop = document.querySelector(".menu-backdrop");
  const navLinks = document.querySelectorAll(".site-nav a");

  const setMenu = (open) => {
    if (!nav || !menuButton || !backdrop) return;
    nav.classList.toggle("is-open", open);
    backdrop.classList.toggle("is-visible", open);
    document.body.classList.toggle("menu-open", open);
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Menüyü kapat" : "Menüyü aç");
  };

  menuButton?.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenu(!isOpen);
  });

  backdrop?.addEventListener("click", () => setMenu(false));
  navLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) setMenu(false);
  });

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });


  document.querySelectorAll("img[data-fallback]").forEach((image) => {
    const useFallback = () => {
      const fallback = image.dataset.fallback;
      if (!fallback) return;
      const fallbackUrl = new URL(fallback, document.baseURI).href;
      if (image.currentSrc === fallbackUrl || image.src === fallbackUrl) return;
      const fallbackAlt = image.dataset.fallbackAlt;
      image.removeAttribute("data-fallback");
      image.removeAttribute("data-fallback-alt");
      if (fallbackAlt) image.alt = fallbackAlt;
      image.closest(".experience-card")?.querySelector(".experience-credit")?.setAttribute("hidden", "");
      image.src = fallbackUrl;
    };

    image.addEventListener("error", useFallback, { once: true });

    // Ağ veya harici görsel sunucusu yanıt vermediğinde kartı boş bırakma.
    window.setTimeout(() => {
      if (!image.complete || image.naturalWidth === 0) useFallback();
    }, 5000);
  });

  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const revealNodes = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );
    revealNodes.forEach((node) => observer.observe(node));
  } else {
    revealNodes.forEach((node) => node.classList.add("is-visible"));
  }

  const briefForm = document.querySelector("[data-brief-form]");
  if (briefForm) {
    const buildMessage = () => {
      const data = new FormData(briefForm);
      const value = (key) => String(data.get(key) || "Belirtilmedi").trim() || "Belirtilmedi";
      return [
        "Merhaba Arzeno,",
        "",
        "Projem için ön değerlendirme talep ediyorum.",
        "",
        `Ad Soyad: ${value("name")}`,
        `Firma: ${value("company")}`,
        `İletişim: ${value("contact")}`,
        `İhtiyaç: ${value("service")}`,
        `Proje aşaması: ${value("phase")}`,
        "",
        "Kısa açıklama:",
        value("message"),
        "",
        "Uygun olduğunuzda geri dönüş rica ederim."
      ].join("\n");
    };

    briefForm.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!briefForm.reportValidity()) return;
      const subject = "Arzeno | Proje Kontrol Ön Değerlendirme Talebi";
      window.location.href = `mailto:arzenoinsaat@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessage())}`;
    });

    const whatsappButton = briefForm.querySelector("[data-whatsapp-brief]");
    whatsappButton?.addEventListener("click", () => {
      if (!briefForm.reportValidity()) return;
      const url = `https://wa.me/905541825137?text=${encodeURIComponent(buildMessage())}`;
      window.open(url, "_blank", "noopener,noreferrer");
    });
  }
})();
