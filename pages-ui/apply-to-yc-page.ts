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
    const applyToYcTabTitle = allTitles[0];
    return applyToYcTabTitle;
  }

  public async getApplyToYcPageUrl() {
    const applyToYcPageUrl = await this.page.url();
    return applyToYcPageUrl;
  }

  public async getApplyToYcPageTitle() {
    const applyToYcPageTitle = await this.applyToYcPageTitle.textContent();
    return applyToYcPageTitle;
  }
}
