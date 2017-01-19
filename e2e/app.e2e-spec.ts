import { TestCodePage } from './app.po';

describe('test-code App', function() {
  let page: TestCodePage;

  beforeEach(() => {
    page = new TestCodePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
