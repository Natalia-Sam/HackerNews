import { type Page, type Locator } from "@playwright/test";

export default class ApiPage {
  readonly page: Page;
  readonly apiTabTitle: Locator;
  readonly apiPageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.apiTabTitle = this.page.locator("title");
    this.apiPageTitle = this.page.getByRole("link", { name: "API" });
  }

  public async getApiPageUrl() {
    const apiPageUrl = this.page.url();
    return apiPageUrl;
  }

  public async getApiPageTitle() {
    const allPageTitles = await this.apiPageTitle.allTextContents();
    const apiPageTitle = allPageTitles[0];
    return apiPageTitle;
  }
}
