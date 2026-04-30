// nav.js - shared navigation & footer
(function(){
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  
  const navHTML = `
  <header class="topbar">
    <div class="container">
      <nav class="nav">
        <a href="index.html" class="nav-brand">
          <div class="nav-logo-mark">
            <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="20.5" stroke="#B8925A" stroke-width="1.4"/>
              <polygon points="22,8 32,28 12,28" fill="none" stroke="#1B3A2D" stroke-width="1.6" stroke-linejoin="round"/>
              <line x1="22" y1="8" x2="22" y2="36" stroke="#B8925A" stroke-width="1.2" opacity="0.5"/>
              <circle cx="22" cy="22" r="2.5" fill="#B8925A"/>
            </svg>
          </div>
          <div class="nav-brand-text">
            <div class="nav-brand-name">Nicola Bastasini</div>
            <div class="nav-brand-sub">Wellness · Mind · Nutrition</div>
          </div>
        </a>
        <div class="nav-links" id="navLinks">
          <a href="chi-sono.html">Chi sono</a>
          <a href="metodo.html">Metodo</a>
          <a href="osteopatia.html">Osteopatia</a>
          <a href="postura.html">Postura</a>
          <a href="psych-k.html">PSYCH-K</a>
          <a href="fitness.html">Fitness</a>
          <a href="corsi-live.html">Corsi Live</a>
          <a href="percorsi.html">Percorsi</a>
          <a href="abbonamenti.html">Abbonamenti</a>
          <a href="shop.html">Shop</a>
          <a href="blog.html">Blog</a>
        </div>
        <div class="nav-cta">
          <a href="contatti.html" class="btn btn-primary">Prenota</a>
        </div>
        <button class="nav-toggle" id="navToggle" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>
    </div>
  </header>
  <nav class="nav-mobile" id="navMobile">
    <a href="index.html">Home</a>
    <a href="chi-sono.html">Chi sono</a>
    <a href="metodo.html">Metodo</a>
    <a href="osteopatia.html">Osteopatia</a>
    <a href="postura.html">Postura & Mézières</a>
    <a href="psych-k.html">PSYCH-K</a>
    <a href="fitness.html">Fitness & Performance</a>
    <a href="corsi-live.html">Corsi Live</a>
    <a href="percorsi.html">Percorsi</a>
    <a href="abbonamenti.html">Abbonamenti</a>
    <a href="shop.html">Shop</a>
    <a href="blog.html">Blog</a>
    <a href="contatti.html">Contatti</a>
  </nav>`;

  const footerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="footer-brand-name">Nicola Bastasini</div>
          <div class="footer-brand-sub">Wellness · Mind · Nutrition</div>
          <p>Osteopatia, posturologia, Mézières, PSYCH-K, fitness e trasformazione personale. 26 anni di esperienza al servizio del tuo benessere integrato.</p>
          <div class="footer-socials">
            <a href="#" class="footer-social" aria-label="Instagram">📸</a>
            <a href="#" class="footer-social" aria-label="YouTube">▶</a>
            <a href="#" class="footer-social" aria-label="WhatsApp">💬</a>
          </div>
        </div>
        <div class="footer-col">
          <h5>Servizi</h5>
          <a href="osteopatia.html">Osteopatia</a>
          <a href="postura.html">Postura & Mézières</a>
          <a href="psych-k.html">PSYCH-K</a>
          <a href="fitness.html">Fitness & Performance</a>
          <a href="corsi-live.html">Corsi Live</a>
        </div>
        <div class="footer-col">
          <h5>Percorsi</h5>
          <a href="percorsi.html">Reset Corpo</a>
          <a href="percorsi.html">Postura Evolutiva</a>
          <a href="percorsi.html">Rinascita Consapevole</a>
          <a href="abbonamenti.html">Abbonamenti</a>
          <a href="shop.html">Shop</a>
        </div>
        <div class="footer-col">
          <h5>Info</h5>
          <a href="chi-sono.html">Chi sono</a>
          <a href="metodo.html">Il Metodo</a>
          <a href="blog.html">Blog</a>
          <a href="contatti.html">Contatti</a>
          <a href="contatti.html">Prenota</a>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© 2025 Nicola Bastasini · P.IVA in regime forfettario</span>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Termini e Condizioni</a>
        </div>
      </div>
    </div>
  </footer>
  <a href="https://wa.me/39ILTUONUMERO" class="wa-float" target="_blank" rel="noopener" aria-label="WhatsApp">💬</a>`;

  // Insert nav
  document.body.insertAdjacentHTML('afterbegin', navHTML);
  // Insert footer
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Set active links
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    if(a.getAttribute('href') === currentPage) a.classList.add('active');
  });

  // Mobile toggle
  const toggle = document.getElementById('navToggle');
  const mobile = document.getElementById('navMobile');
  if(toggle && mobile){
    toggle.addEventListener('click', () => {
      mobile.classList.toggle('open');
    });
  }

  // FAQ
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if(!wasOpen) item.classList.add('open');
    });
  });
})();
