import { type Page, type Locator } from "@playwright/test";

export default class FaqPage {
  readonly page: Page;
  readonly faqTabTitle: Locator;
  readonly faqPageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.faqTabTitle = this.page.locator("title");
    this.faqPageTitle = this.page.locator(
      `//a[@href="http://www.ycombinator.com"]/following-sibling::b[1]`
    );
  }

  public async getFaqPageUrl() {
    const faqPageUrl = this.page.url();
    return faqPageUrl;
  }

  public async getFaqPageTitle() {
    const faqPageTitle = this.faqPageTitle.textContent();
    return faqPageTitle;
  }
}
