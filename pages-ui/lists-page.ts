import { type Page, type Locator } from "@playwright/test";

export default class ListsPage {
  readonly page: Page;
  readonly listsTabTitle: Locator;
  readonly listsPageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.listsTabTitle = this.page.locator("title");
    this.listsPageTitle = this.page.locator(`//font[@color='#FFFFFF']`);
  }

  public async getListsTabTitle() {
    const allTitles = await this.listsTabTitle.allTextContents();
    const listsTabTitle = allTitles[0];
    return listsTabTitle;
  }

  public async getListsPageUrl() {
    const listsPageUrl = this.page.url();
    return listsPageUrl;
  }

  public async getListsPageTitle() {
    const listsPageTitle = this.listsPageTitle.textContent();
    return listsPageTitle;
  }
}
