import { type Page, type Locator } from "@playwright/test";

export default class LegalPage {
  readonly page: Page;
  readonly legalTabTitle: Locator;
  readonly legalPageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.legalTabTitle = this.page.locator("title");
    this.legalPageTitle = this.page.locator(`//h1[@class='ycdc-page-title']`);
  }

  public async getLegalTabTitle() {
    const allTitles = await this.legalTabTitle.allTextContents();
    const legalTabTitle = allTitles[0];
    return legalTabTitle;
  }

  public async getLegalPageUrl() {
    const listsPageUrl = this.page.url();
    return listsPageUrl;
  }

  public async getLegalPageTitle() {
    const legalPageTitle = await this.legalPageTitle.textContent();
    return legalPageTitle;
  }
}
