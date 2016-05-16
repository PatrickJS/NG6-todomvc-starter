class NewItemBox {
  constructor(hostElement) {
    this._containerElement = hostElement.element(by.css('todo-text-input'));
    this._inputElement = this._containerElement.element(by.css('input.new-todo'));
  }  
  
  getPlaceholderText() {
    return this._inputElement.getAttribute('placeholder');
  }
  
  async isEmpty() {
    const value = await this._inputElement.getAttribute('value');
    return value === ''; 
  }
  
  isVisible() {
    return this._containerElement.isPresent();
  }
  
  type(itemText) {
    return this._inputElement.sendKeys(itemText);
  }
  
  typeEnter() {
    return this._inputElement.sendKeys(protractor.Key.ENTER);
  }
}

export default NewItemBox;