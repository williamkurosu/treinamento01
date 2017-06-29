import { Treinamento01Page } from './app.po';

describe('treinamento01 App', () => {
  let page: Treinamento01Page;

  beforeEach(() => {
    page = new Treinamento01Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
