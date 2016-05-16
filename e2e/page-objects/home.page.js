class HomePage {
  constructor() {
    this._title = element(by.css('title'));
    this._header = element(by.css('h1'));
  }
  
  load() {
    return browser.get('/');
  }
  
  getTitle() {
    return this._title.getInnerHtml();
  }
  
  getHeader() {
    return this._header.getInnerHtml();
  }
}

export default HomePage;