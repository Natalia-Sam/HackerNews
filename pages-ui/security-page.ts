import { type Page, type Locator } from "@playwright/test";

export default class SecurityPage {
  readonly page: Page;
  readonly securityTabTitle: Locator;
  readonly securityPageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.securityTabTitle = this.page.locator("title");
    this.securityPageTitle = this.page.locator(
      `//a[@href="http://www.ycombinator.com"]/following-sibling::b[1]`
    );
  }

  public async getSecurityPageUrl() {
    const securityPageUrl = this.page.url();
    return securityPageUrl;
  }

  public async getSecurityPageTitle() {
    const securityPageTitle = this.securityPageTitle.textContent();
    return securityPageTitle;
  }
}
