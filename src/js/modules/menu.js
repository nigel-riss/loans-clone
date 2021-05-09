export class Menu {
  constructor() {
    this._menuButton = document.querySelector(`#menu-button`);
    this._closeButton = document.querySelector(`#close-button`);
    this._mainNav = document.querySelector(`.header__logo-n-nav`);

    if (this._menuButton && this._closeButton) {
      this._menuButton.addEventListener(`click`, () => {
        this._toggleMenu();
      });
      this._closeButton.addEventListener(`click`, () => {
        this._toggleMenu();
      });
    }

    if (this._mainNav) {
      this._mainNav.addEventListener(`click`, (evt) => {
        if (evt.target.classList.contains(`main-nav__link`)) {
          this._closeMenu();
        }
      });
    }
  }

  _toggleMenu() {
    this._mainNav.classList.toggle(`open`);
  }

  _closeMenu() {
    this._mainNav.classList.remove(`open`);
  }
}
