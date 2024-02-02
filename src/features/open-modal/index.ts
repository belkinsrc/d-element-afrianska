class OpenModal {
  constructor() {
    this.open();
  }

  private open() {
    const openBtn = document.querySelector<HTMLButtonElement>('[data-open-form-btn]');

    if (openBtn) {
      openBtn.addEventListener('click', () => {
        const overlay = document.querySelector<HTMLDivElement>('[data-overlay]')!;
        const form = document.querySelector<HTMLFormElement>('[data-form]')!;

        overlay.style.display = 'flex';
        form.style.display = 'flex';

        document.body.style.overflow = 'hidden';
      });
    }
  }
}

export { OpenModal };
