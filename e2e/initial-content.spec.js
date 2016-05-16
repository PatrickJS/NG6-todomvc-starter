import HomePage from './pages/home';

describe('Initial content', () => {
  let homePage;
  
  beforeAll(async () => {
    homePage = new HomePage();
    
    console.log('Loading the Home page...');
    await homePage.load();
  });
  
  it('should load with correct title', async () => {    
    const actualTitle = await homePage.getTitle();
    expect(actualTitle).toEqual('TodoMVC based on NG6-starter by @AngularClass');
  });
  
  it('should load with correct header', async () => {    
    const actualHeader = await homePage.getHeader();
    expect(actualHeader).toEqual('todos');
  });
  
  describe('New item box', () => {
    it('should be visible', async () => {
      const isVisible = await homePage.newItemBox.isVisible();
      expect(isVisible).toEqual(true);
    });
    
    it('should have correct placeholder', async () => {
      const actualPlaceholderText = await homePage.newItemBox.getPlaceholderText();
      expect(actualPlaceholderText).toEqual('What needs to get done?');
    });
  });
  
  describe('Item list', () => {
    it('should be visible', async () => {
      const isVisible = await homePage.itemList.isVisible();
      expect(isVisible).toEqual(true);
    });
    
    it('should have zero items', async () => {
      const actualCount = await homePage.itemList.getCount();
      expect(actualCount).toEqual(0);
    });
  });    
});