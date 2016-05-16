class ItemList {
  constructor(hostElement) {
    this._containerElement = hostElement.element(by.css('div.todo-list'));
    this._itemElements = this._containerElement.all(by.css('todo-item'));
  }
  
  isVisible() {
    return this._containerElement.isPresent();
  }
  
  getCount() {
    return this._itemElements.count();
  }
}

export default ItemList;