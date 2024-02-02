class CloseModal {
  constructor() {
    this.hide();
  }

  private hide() {
    const overlay = document.querySelector<HTMLDivElement>('[data-overlay]')!;
    const form = document.querySelector<HTMLFormElement>('[data-form]')!;
    const successModal = document.querySelector<HTMLDivElement>('[data-success-modal]')!;

    overlay.addEventListener('click', (event) => {
      const target = event.target as Element;

      if (target.matches('[data-overlay]') || target.closest('[data-close-btn]')) {
        overlay.style.display = 'none';
        form.style.display = 'none';
        successModal.style.display = 'none';

        document.body.style.overflow = '';
      }
    });
  }
}

export { CloseModal };
