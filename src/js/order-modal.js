(() => {
    const refs = {
      openModalBtn: document.querySelector("[order-modal-open]"),
      closeModalBtn: document.querySelector("[order-modal-close]"),
      modal: document.querySelector("[order-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();