// A classe Section é responsável por iniciar a construção do card e renderizar à página.
export default class Section {
  // O constructor recebe 2 parâmetros, uma array de objeto com as informações do card e com uma função de callback e um seletor de classe do elemento do container onde será renderizado o card.
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerElement = document.querySelector(containerSelector);
  }

  // O método público renderer() incia a criação do card iterando os items da array e chamando a propriedade com a função de callback passando o objeto com as informações do card como argumento.
  renderer() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }

  // O método público addItem() renderiza à pagina o elemento do card recebido como parâmetro.
  addItem(element) {
    this._containerElement.prepend(element);
  }
}
