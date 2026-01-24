import { type Page, type Locator } from "@playwright/test";

export default class ApplyToYcPage {
  readonly page: Page;
  readonly applyToYcTabTitle: Locator;
  readonly applyToYcPageTitle: Locator;

  constructor(page: Page) {
    this.page = page;
    this.applyToYcTabTitle = this.page.locator("title");
    this.applyToYcPageTitle = this.page.getByRole("heading", {
      name: "Apply to Y Combinator",
    });
  }

  public async getApplyToYcTabTitle() {
    const allTitles = await this.applyToYcTabTitle.allTextContents();
    return allTitles[0];
  }

  public async getApplyToYcPageUrl() {
    return this.page.url();
  }

  public async getApplyToYcPageTitle() {
    return this.applyToYcPageTitle.textContent();
  }
}
