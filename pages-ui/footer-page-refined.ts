import { type Page, type Locator } from "@playwright/test";
import { PageType } from "./enums/data";

export default class FooterPageRefined {
  readonly page: Page;
  readonly guidelinesLink: Locator;
  readonly listsLink: Locator;
  readonly apiLink: Locator;
  readonly securityLink: Locator;
  readonly legalLink: Locator;
  readonly applyToYcLink: Locator;
  readonly faqLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.guidelinesLink = this.page.getByRole("link", {
      name: "Guidelines",
    });
    this.faqLink = this.page.getByRole("link", {
      name: "FAQ",
    });
    this.listsLink = this.page.locator("//a[@href='lists']");
    this.apiLink = this.page.locator("//a[text()='API']");
    this.securityLink = this.page.getByRole("link", {
      name: "Security",
    });
    this.legalLink = this.page.getByRole("link", {
      name: "Legal",
    });
    this.applyToYcLink = this.page.getByRole("link", {
      name: "Apply to YC",
    });
  }

  private getPageType(pageType: PageType) {
    const pageKeyType = {
      [PageType.GUIDELINES]: this.guidelinesLink,
      [PageType.FAQ]: this.faqLink,
      [PageType.LISTS]: this.listsLink,
      [PageType.API]: this.apiLink,
      [PageType.SECURITY]: this.securityLink,
      [PageType.APPLY_TO_YC]: this.applyToYcLink,
      [PageType.LEGAL]: this.legalLink,
    };
    return pageKeyType[pageType];
  }

  public async openPage(pageType: PageType) {
    const pageLink = this.getPageType(pageType);
    await pageLink.click();
  }

  // public async openGuidelinesPage() {
  //   await this.guidelinesLink.click();
  // }

  // public async openFaqPage() {
  //   await this.faqLink.click();
  // }

  // public async openListsPage() {
  //   await this.listsLink.click();
  // }

  // public async openApiPage() {
  //   await this.apiLink.click();
  // }

  // public async openSecurityPage() {
  //   await this.securityLink.click();
  // }

  // public async openLegalPage() {
  //   await this.legalLink.click();
  // }

  // public async openApplyToYcPage() {
  //   await this.applyToYcLink.click();
  // }
}
