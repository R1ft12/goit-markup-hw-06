const mobileMenu = document.querySelector(".mobile-menu");
const openMenuButton = document.querySelector(".menu-open-btn");
const closeMenuButton = document.querySelector(".mobile-menu-close");
const mobileMenuLinks = document.querySelectorAll(".mobile-menu-link");
const modal = document.querySelector(".backdrop");
const openModalButton = document.querySelector(".hero-button");
const closeModalButton = document.querySelector(".modal-btn");

const toggleMobileMenu = () => {
  const isOpen = mobileMenu.classList.toggle("is-open");
  openMenuButton.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";
};

const toggleModal = () => {
  const isOpen = modal.classList.toggle("is-open");
  modal.setAttribute("aria-hidden", String(!isOpen));
  document.body.style.overflow = isOpen ? "hidden" : "";
};

openMenuButton.addEventListener("click", toggleMobileMenu);
closeMenuButton.addEventListener("click", toggleMobileMenu);
mobileMenuLinks.forEach((link) =>
  link.addEventListener("click", toggleMobileMenu),
);
openModalButton.addEventListener("click", toggleModal);
closeModalButton.addEventListener("click", toggleModal);

modal.addEventListener("click", (event) => {
  if (event.target === modal) toggleModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (mobileMenu.classList.contains("is-open")) toggleMobileMenu();
  if (modal.classList.contains("is-open")) toggleModal();
});
