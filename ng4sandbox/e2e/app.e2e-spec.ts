import { Ng4SandboxPage } from './app.po';

describe('ng4-sandbox App', () => {
  let page: Ng4SandboxPage;

  beforeEach(() => {
    page = new Ng4SandboxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
