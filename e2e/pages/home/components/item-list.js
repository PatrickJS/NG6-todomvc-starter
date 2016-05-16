class ItemList {
  constructor(hostElement) {
    this._containerElement = hostElement.element(by.css('div.todo-list'));
    this._itemElements = this._containerElement.all(by.css('todo-item'));
    this._itemTextElements = this._itemElements.all(by.css('label.todo-text'));
  }
  
  isVisible() {
    return this._containerElement.isPresent();
  }
  
  getCount() {
    return this._itemElements.count();
  }
  
  async containsItem(itemText) {
    const matchingTextElements = this._itemTextElements.filter(async (textElement) => {
      const text = await textElement.getInnerHtml();
      return text === itemText;
    });
    
    const matchingCount = await matchingTextElements.count();
    
    return matchingCount !== 0;
  }
}

export default ItemList;