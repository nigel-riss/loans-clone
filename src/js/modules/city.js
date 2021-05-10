export class CitySelector {
  constructor () {
    this._cityButton = document.querySelector(`#city-button`);
    this._closeButton = document.querySelector(`#city-close`);
    this._okButton = document.querySelector(`#city-ok`);
    this._overlay = document.querySelector(`.city-select__overlay`);
    this._citySelector = document.querySelector(`.city-select`);

    this._cityButton?.addEventListener(`click`, (evt) => {
      this._toggleSelector();
    });

    this._closeButton?.addEventListener(`click`, () => {
      this._closeSelector();
    });

    this._okButton?.addEventListener(`click`, () => {
      this._closeSelector();
    });

    this._overlay?.addEventListener(`click`, () => {
      this._closeSelector();
    });
  }

  _toggleSelector() {
    this._citySelector?.classList.toggle(`open`);
  }
  
  _closeSelector() {
    this._citySelector?.classList.remove(`open`);
  }
}
