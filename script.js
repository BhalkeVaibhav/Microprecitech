/* =========================================================
   MICROPRECITECH ENGINEERING — SITE INTERACTIONS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = location.pathname.split("/").pop() || "index.html";

  // Highlight the current page in the navigation.
  document.querySelectorAll("[data-nav]").forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Mobile navigation toggle.
  const menuButton = document.querySelector(".menu");
  const navigation = document.querySelector(".links");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      navigation.classList.toggle("open");
    });
  }

  // Keep the copyright year current.
  const year = document.querySelector("[data-year]");

  if (year) {
    year.textContent = new Date().getFullYear();
  }

  // Keep the primary call and WhatsApp actions aligned across every page.
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

  // Send the enquiry through EmailJS without leaving the website.
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

  // Show the supplied media filename so every gallery item is identifiable.
  document.querySelectorAll(".gallery .item").forEach((item) => {
    const media = item.querySelector("img, video");
    const caption = item.querySelector(".caption");
    const source = media?.tagName === "VIDEO" ? media.querySelector("source") : media;

    if (source && caption) {
      const fileName = decodeURIComponent(new URL(source.src, document.baseURI).pathname.split("/").pop());
      caption.textContent = `${media.tagName === "VIDEO" ? "Video" : "Image"}: ${fileName}`;
    }
  });
});
