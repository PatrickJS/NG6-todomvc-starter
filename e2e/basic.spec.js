import HomePage from './page-objects/home.page';

describe('Basic layout', () => {
  let homePage;
  
  beforeAll(async () => {
    homePage = new HomePage();
    
    console.log('Loading the Home page...');
    await homePage.load();
  });
  
  it('should load with correct title', async () => {    
    const actualTitle = await homePage.getTitle();
    expect(actualTitle).toEqual('TodoMVC based on NG6-starter by @AngularClass');
  })
  
  it('should load with correct header', async () => {    
    const actualHeader = await homePage.getHeader();
    expect(actualHeader).toEqual('todos');
  })  
});