// A classe Card é responsável por estruturar e manipular os elemementos do cartão antes de retornar o elemento para ser renderizado.
export default class Card {
  // O constructor recebe 2 parâmetros, o primeiro com 1 objeto com 2 valores e uma função de callback, e o segundo o seletor do elemento seção da galleria dos cartões.
  constructor(
    { image, title, description, links, githubLunk, handleCardClick },
    selectors
  ) {
    this._image = image;
    this._title = title;
    this._description = description;
    this._links = links;
    this._githubLink = githubLunk;
    this._handleCardClick = handleCardClick;
    this._selectors = selectors;
  }

  // O método público handleCardClick, passa como argumento o evento e as informações do cartão para o callback para verificar qual elemento foi clicado e qual função será ativada.
  handleButtonClick = (evt) => {
    this._handleCardClick(evt);
  };

  toggleDisplay = (element, displaySelector) => {
    element.classList.toggle(displaySelector);
  };

  // O método privado _setEventListeners() adiciona o ouvinte de evento de click ao cartão.
  _setEventListeners = () => {
    this._cardElement
      .querySelectorAll(this._selectors.toggleButton)
      .forEach((element) =>
        element.addEventListener("click", this.handleButtonClick)
      );
  };

  // O método público renderCard() estrutura o elemento do card template clonado antes de retornar para ser renderizado na página.
  renderCard = () => {
    this._cardTemplate = document.querySelector("#card-template").content;
    this._cardElement = this._cardTemplate.cloneNode(true);
    this._cardImageElement = this._cardElement.querySelector(".card__image");
    this._cardImageElement.src = this._image;
    this._cardImageElement.alt = `Captura de tela do projeto ${this._title}`;
    this._cardElement.querySelector(".card__title").textContent = this._title;
    this._cardElement.querySelector(this._selectors.onlineLink).href =
      this._links.onlineLink;
    this._cardElement.querySelector(this._selectors.githubLink).href =
      this._links.gitHubLink;
    this._setEventListeners();
    return this._cardElement;
  };
}
