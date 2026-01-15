import { type Page, type Locator } from "@playwright/test";

export default class SearchPage {
  readonly page: Page;
  readonly searchResults: Locator;

  constructor(page: Page) {
    this.page = page;
    this.searchResults = this.page.locator("//em");
  }

  public async getSearchResultsUrl() {
    const searchResultsUrl = this.page.url();
    return searchResultsUrl;
  }

  public async getSearchResults() {
    const searchResults = await this.searchResults.allTextContents();
    return searchResults;
  }
}
