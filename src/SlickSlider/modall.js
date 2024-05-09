const showModal = (description) => {
  // Buat elemen overlay
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  // Buat elemen modal
  const modal = document.createElement("div");
  modal.classList.add("modal");

  // Tambahkan konten deskripsi ke dalam modal
  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");
  modalContent.innerHTML = `<p>${description}</p>`;
  modal.appendChild(modalContent);

  // Tambahkan modal dan overlay ke dalam dokumen
  document.body.appendChild(overlay);
  document.body.appendChild(modal);

  // Tambahkan event listener untuk menutup modal saat di luar area modal diklik
  overlay.addEventListener("click", closeModal);

  // Tambahkan modifikasi ke dalam event listener agar bisa menutup modal dengan mengklik area modal sendiri
  modal.addEventListener("click", (event) => {
    // Cek apakah yang diklik adalah area modal (bukan anak dari modal)
    if (event.target === modal) {
      closeModal();
    }
  });

  // Tambahkan properti modal dan overlay ke dalam window object
  window.currentModal = modal;
  window.currentOverlay = overlay;
};

const closeModal = () => {
  const modal = window.currentModal;
  const overlay = window.currentOverlay;

  // Periksa apakah elemen modal dan overlay ada sebelum menghapusnya
  if (modal && overlay) {
    document.body.removeChild(modal);
    document.body.removeChild(overlay);
    overlay.removeEventListener("click", closeModal);

    // Hapus properti modal dan overlay dari window object
    delete window.currentModal;
    delete window.currentOverlay;
  }
};

export { showModal, closeModal };
