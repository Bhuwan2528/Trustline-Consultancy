
(function() {
  // ===============================
  // 1️⃣ Reveal on Scroll
  // ===============================
  const reveals = document.querySelectorAll('.reveal');
  const gridItems = document.querySelectorAll('.reveal-grid > *');

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  reveals.forEach(el => io.observe(el));
  gridItems.forEach(el => io.observe(el));

  // ===============================
  // 2️⃣ Navbar Shadow on Scroll
  // ===============================
  const nav = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });

  // ===============================
  // 3️⃣ Sidebar + Dropdown Toggle
  // ===============================
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");
  const closeSidebar = document.getElementById("closeSidebar");
  const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

  // Sidebar open/close
  hamburger?.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  closeSidebar?.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  });

  // Dropdown toggle (mobile only)
  dropdownToggles.forEach(toggle => {
    toggle.addEventListener("click", e => {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        toggle.parentElement.classList.toggle("active");
      }
    });
  });

  // ===============================
  // 4️⃣ Dropdown hover for desktop
  // ===============================
  const dropdowns = document.querySelectorAll(".dropdown");
  dropdowns.forEach(drop => {
    drop.addEventListener("mouseenter", () => {
      if (window.innerWidth > 768) drop.classList.add("active");
    });
    drop.addEventListener("mouseleave", () => {
      if (window.innerWidth > 768) drop.classList.remove("active");
    });
  });
})();
