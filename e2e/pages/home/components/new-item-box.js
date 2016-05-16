class NewItemBox {
  constructor(hostElement) {
    this._containerElement = hostElement.element(by.css('todo-text-input'));
    this._inputElement = this._containerElement.element(by.css('input.new-todo'));
  }
  
  getPlaceholderText() {
    return this._inputElement.getAttribute('placeholder');
  }
  
  isVisible() {
    return this._containerElement.isPresent();
  }
}

export default NewItemBox;