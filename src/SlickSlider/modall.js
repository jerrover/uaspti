const showNotification = (message) => {
  const notificationElement = document.createElement("div");
  notificationElement.textContent = message;
  notificationElement.style.position = "fixed";
  notificationElement.style.top = "20px";
  notificationElement.style.left = "50%";
  notificationElement.style.transform = "translateX(-50%)";
  notificationElement.style.backgroundColor = "yellow";
  notificationElement.style.color = "black";
  notificationElement.style.padding = "10px 20px";
  notificationElement.style.borderRadius = "7px";
  notificationElement.style.zIndex = "1001";
  notificationElement.style.opacity = "0"; 
  notificationElement.style.transition = "opacity 0.5s"; 
  notificationElement.style.textAlign = "center"; 

  notificationElement.classList.add("fade-in");
  
  document.body.appendChild(notificationElement);

  setTimeout(() => {
    notificationElement.classList.remove("fade-in");
    notificationElement.classList.add("fade-out");
  }, 2500);

  setTimeout(() => {
    notificationElement.remove();
  }, 3000);
};

const showModal = (description, imageUrl) => {
  document.body.classList.add("modal-open");
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const modalText = document.createElement("p");
  modalText.innerHTML = description;
  modalContent.appendChild(modalText);

  const modalBackground = document.createElement("div");
  modalBackground.classList.add("modal-background");
  modalBackground.style.backgroundImage = `url(${imageUrl})`;

  modal.appendChild(modalBackground);
  modal.appendChild(modalContent);

  document.body.appendChild(overlay);
  document.body.appendChild(modal);

  showNotification("Click dimana saja untuk keluar");

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
  document.body.classList.remove("modal-open");
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
