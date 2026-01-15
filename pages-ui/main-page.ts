import { type Page, type Locator } from "@playwright/test";

export default class MainPage {
  readonly page: Page;
  readonly articlesOnThePage: Locator;
  readonly searchInput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.articlesOnThePage = this.page.locator("//a[@rel='nofollow']");
    this.searchInput = this.page.locator("//input[@type='text']");
  }

  public async getMainPageUrl() {
    const mainPageUrl = this.page.url();
    return mainPageUrl;
  }

  public async getArticleNameInTheList(numberOfArticleInTheList: number) {
    const articleLocator = this.articlesOnThePage.nth(numberOfArticleInTheList);
    await articleLocator.waitFor({ state: "visible" });
    const articleName = await articleLocator.textContent();
    return articleName?.trim() ?? "Article not found";
  }

  public async enterTextInSearchInput(textToSearch: string) {
    await this.searchInput.fill(textToSearch);
  }

  public async clickSearchInput() {
    await this.searchInput.click();
  }
}
