import { NgProtoOnePage } from './app.po';

describe('ng-proto-one App', () => {
  let page: NgProtoOnePage;

  beforeEach(() => {
    page = new NgProtoOnePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
