import { MySitePage } from './app.po';

describe('my-site App', function() {
  let page: MySitePage;

  beforeEach(() => {
    page = new MySitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
