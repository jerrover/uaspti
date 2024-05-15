const showModal = (description) => {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalContent.innerHTML = `<p>${description}</p>`;
  modal.appendChild(modalContent);

  document.body.appendChild(overlay);
  document.body.appendChild(modal);

  overlay.addEventListener("click", closeModal);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  window.currentModal = modal;
  window.currentOverlay = overlay;
};

const closeModal = () => {
  const modal = window.currentModal;
  const overlay = window.currentOverlay;

  if (modal && overlay) {
    document.body.removeChild(modal);
    document.body.removeChild(overlay);
    overlay.removeEventListener("click", closeModal);

    delete window.currentModal;
    delete window.currentOverlay;
  }
};

export { showModal, closeModal };
