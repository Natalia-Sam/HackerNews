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
    return this.page.url();
  }

  public async getApiPageTitle() {
    // to do //title[text()='HackerNews/API: Documentation and Samples for the Official HN API']
    // use find or filter to get correct name
    const allPageTitles = await this.apiPageTitle.allTextContents();
    const apiPageTitleExample = allPageTitles.find((title) =>
      title.includes("HackerNews/API"),
    );
    console.log(apiPageTitleExample);
    // const apiPageTitle = allPageTitles[0];
    return allPageTitles[0];
  }
}
