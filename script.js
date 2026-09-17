/* =========================================================
   MICROPRECITECH ENGINEERING — SITE INTERACTIONS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = location.pathname.split("/").pop() || "index.html";

  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  const menuButton = document.querySelector(".menu");
  const navigation = document.querySelector(".links");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      navigation.classList.toggle("open");
    });
  }

  const year = document.querySelector("[data-year]");
  if (year) {
    year.textContent = new Date().getFullYear();
  }

  const callAction = document.querySelector(".floatbtn.call");
  const whatsappAction = document.querySelector(".floatbtn.wa");

  if (callAction) {
    callAction.href = "tel:+917767969592";
    callAction.setAttribute("aria-label", "Call +91 7767969592");
  }

  if (whatsappAction) {
    whatsappAction.href = "https://wa.me/917767969592";
    whatsappAction.setAttribute("aria-label", "WhatsApp +91 7767969592");
  }

  const photoItems = [
    "Media/WhatsApp Image 2026-09-15 at 5.39.44 PM.jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.48 PM (1).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.48 PM.jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.49 PM (1).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.49 PM.jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.50 PM (1).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.50 PM.jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.51 PM (1).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.51 PM.jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.52 PM.jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.53 PM (1).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.53 PM.jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.54 PM (1).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.54 PM.jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.55 PM.jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.56 PM.jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.57 PM (1).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.57 PM.jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.58 PM (1).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.58 PM (2).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.58 PM (3).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.58 PM.jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.39.59 PM.jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.40.00 PM.jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.40.01 PM (1).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.40.01 PM (2).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.40.01 PM.jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.40.03 PM (1).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.40.03 PM (2).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.40.03 PM.jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.40.04 PM (1).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.40.04 PM (2).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.40.04 PM.jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.40.05 PM (1).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.40.05 PM (2).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.40.05 PM (3).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.40.05 PM.jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.40.06 PM (1).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.40.06 PM.jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.40.07 PM (1).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.40.07 PM (2).jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.40.07 PM.jpeg",
    "Media/WhatsApp Image 2026-09-15 at 5.40.08 PM.jpeg"
  ];

  const videoItems = [
    "Media/WhatsApp Video 2026-09-15 at 5.39.56 PM.mp4",
    "Media/WhatsApp Video 2026-09-15 at 5.39.59 PM (1).mp4",
    "Media/WhatsApp Video 2026-09-15 at 5.40.02 PM (1).mp4"
  ];

  const buildGallery = (rootId, items) => {
    const root = document.getElementById(rootId);
    if (!root) return;

    root.innerHTML = items.map((item) => `
      <figure class="gallery-item">
        <img src="${item}" alt="Manufacturing component" loading="eager" decoding="async" onerror="this.closest('.gallery-item')?.remove()">
      </figure>
    `).join("");
  };

  const buildVideoGallery = (rootId, items) => {
    const root = document.getElementById(rootId);
    if (!root) return;

    root.innerHTML = items.map((item) => `
      <figure class="gallery-item video-item">
        <video controls playsinline preload="metadata" muted>
          <source src="${item}" type="video/mp4">
        </video>
      </figure>
    `).join("");
  };

  buildGallery("photoGallery", [...new Set(photoItems)]);
  buildVideoGallery("videoGallery", videoItems);

  const revealItems = document.querySelectorAll(
    ".section, .darkband, .pagehero .container, .footergrid, .copyright"
  );

  revealItems.forEach((item) => item.classList.add("reveal"));

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  }

  const enquiryForm = document.querySelector("#quote");
  const formStatus = document.querySelector("[data-form-status]");

  if (enquiryForm && formStatus) {
    window.emailjs?.init({
      publicKey: enquiryForm.dataset.emailjsPublicKey
    });

    enquiryForm.addEventListener("submit", async (event) => {
      event.preventDefault();
      formStatus.hidden = true;
      formStatus.classList.remove("error");

      const submitButton = enquiryForm.querySelector("button[type=submit]");
      const originalButtonText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";

      try {
        const serviceId = enquiryForm.dataset.emailjsServiceId;
        const templateId = enquiryForm.dataset.emailjsTemplateId;

        if (!window.emailjs || serviceId.startsWith("YOUR_") || templateId.startsWith("YOUR_")) {
          throw new Error("EmailJS is not configured yet.");
        }

        const fields = new FormData(enquiryForm);
        const templateParams = {
          name: fields.get("name"),
          company: fields.get("company") || "Not provided",
          email: fields.get("email"),
          phone: fields.get("phone") || "Not provided",
          message: fields.get("message"),
          reply_to: fields.get("email")
        };

        await window.emailjs.send(serviceId, templateId, templateParams);
        formStatus.textContent = "Your enquiry has been submitted successfully. Our team will get in touch with you shortly.";
        formStatus.hidden = false;
        enquiryForm.reset();
      } catch (error) {
        console.error("EmailJS enquiry failed:", error);
        formStatus.textContent = error?.text
          ? `We could not send your enquiry: ${error.text}`
          : "We could not send your enquiry right now. Please try again or contact us by phone or WhatsApp.";
        formStatus.classList.add("error");
        formStatus.hidden = false;
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    });
  }

});
