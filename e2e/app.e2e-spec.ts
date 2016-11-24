import { AchievementWizardPage } from './app.po';

describe('achievement-wizard App', function() {
  let page: AchievementWizardPage;

  beforeEach(() => {
    page = new AchievementWizardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
