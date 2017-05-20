import { Ng4sandboxPage } from './app.po';

describe('ng4sandbox App', function() {
  let page: Ng4sandboxPage;

  beforeEach(() => {
    page = new Ng4sandboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
