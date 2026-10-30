// BAGIAN ANGGOTA 4: Interaksi navigasi mobile dan tahun footer.
// Anggota 4 ikut membuat kode JavaScript, bukan hanya mengambil screenshot.

const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const currentYear = document.getElementById("currentYear");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute(
    "aria-label",
    isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
  );
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Buka menu navigasi");
  });
});

currentYear.textContent = new Date().getFullYear();