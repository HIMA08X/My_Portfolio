/* ==========================================================================
   MAIN
   Small site-wide behaviors that don't belong in a dedicated file.
   ========================================================================== */
(function () {
  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Contact form — currently opens the visitor's email client with the
  // message pre-filled. Replace this with a real form/API integration
  // (e.g. Formspree, a serverless function, or your own backend) when ready.
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = 'Please fill in every field before sending.';
      return;
    }

    // CONTACT EMAIL: replace with your actual professional email.
    const to = 'YOUR_EMAIL@example.com';
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    status.textContent = 'Opening your email client…';
  });
})();
