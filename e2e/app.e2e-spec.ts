import { ForumSystemPage } from './app.po';

describe('forum-system App', () => {
  let page: ForumSystemPage;

  beforeEach(() => {
    page = new ForumSystemPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
