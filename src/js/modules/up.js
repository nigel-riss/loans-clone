export class UpButton {
  constructor() {
    this._upButton = document.querySelector(`#up-button`);

    window.addEventListener(`scroll`, () => {
      if (window.scrollY > window.innerHeight) {
        this._upButton?.classList.add(`shown`);
      } else {
        this._upButton?.classList.remove(`shown`);
      }
    })
  }
}
