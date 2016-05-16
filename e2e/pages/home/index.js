import NewItemBox from './components/new-item-box';

class HomePage {
  constructor() {
    this._titleElement = element(by.css('title'));
    
    this._containerElement = element(by.css('section.todoapp'));
    this._headerElement = this._containerElement.element(by.css('h1'));
    
    this._newItemBox = new NewItemBox(this._containerElement);
  }
  
  get newItemBox() {
    return this._newItemBox;
  }
  
  load() {
    return browser.get('/');
  }
  
  getTitle() {
    return this._titleElement.getInnerHtml();
  }
  
  getHeader() {
    return this._headerElement.getInnerHtml();
  }
}

export default HomePage;