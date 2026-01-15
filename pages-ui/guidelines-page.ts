import { type Page, type Locator } from "@playwright/test";

export default class GuidelinesPage {
  readonly page: Page;
  readonly guidelinesTabTitle: Locator;
  readonly guidelinesPageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.guidelinesTabTitle = this.page.locator("title");
    this.guidelinesPageTitle = this.page.locator(
      `//a[@href="http://www.ycombinator.com"]/following-sibling::b[1]`
    );
  }

  // public async getGuidelinesTabTitle() {
  //     await this.guidelinesTabTitle.textContent();
  // }

  public async getGuidelinesPageUrl() {
    const guidelinesPageUrl = this.page.url();
    return guidelinesPageUrl;
  }

  public async getGuidelinesPageTitle() {
    const guidelinesPageTitle = this.guidelinesPageTitle.textContent();
    return guidelinesPageTitle;
  }
}
