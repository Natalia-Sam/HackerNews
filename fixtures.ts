import { test as base } from "@playwright/test";
import FooterPage from "./pages-ui/footer-page";
import GuidelinesPage from "./pages-ui/guidelines-page";
import FaqPage from "./pages-ui/faq-page";
import ApiPage from "./pages-ui/api-page";
import SecurityPage from "./pages-ui/security-page";
import ListsPage from "./pages-ui/lists-page";
import LegalPage from "./pages-ui/legal-page";
import ApplyToYcPage from "./pages-ui/apply-to-yc-page";
import MainPage from "./pages-ui/main-page";
import SearchPage from "./pages-ui/search-page";

export const test = base.extend<{
  footerPage: FooterPage;
  guidelinesPage: GuidelinesPage;
  faqPage: FaqPage;
  listsPage: ListsPage;
  apiPage: ApiPage;
  securityPage: SecurityPage;
  legalPage: LegalPage;
  applyToYcPage: ApplyToYcPage;
  mainPage: MainPage;
  searchPage: SearchPage;
}>({
  /** @type { FooterPage } */
  footerPage: async ({ page }, use) => {
    await use(new FooterPage(page));
  },
  /** @type { GuidelinesPage } */
  guidelinesPage: async ({ page }, use) => {
    await use(new GuidelinesPage(page));
  },
  /** @type { FaqPage } */
  faqPage: async ({ page }, use) => {
    await use(new FaqPage(page));
  },
  /** @type { ListsPage } */
  listsPage: async ({ page }, use) => {
    await use(new ListsPage(page));
  },
  /** @type { ApiPage } */
  apiPage: async ({ page }, use) => {
    await use(new ApiPage(page));
  },
  /** @type { SecurityPage } */
  securityPage: async ({ page }, use) => {
    await use(new SecurityPage(page));
  },
  //** @type { LegalPage } */
  legalPage: async ({ page }, use) => {
    await use(new LegalPage(page));
  },
  //** @type { ApplyToYcPage } */
  applyToYcPage: async ({ page }, use) => {
    await use(new ApplyToYcPage(page));
  },
  /** @type { MainPage } */
  mainPage: async ({ page }, use) => {
    await use(new MainPage(page));
  },
  /** @type { SearchPage } */
  searchPage: async ({ page }, use) => {
    await use(new SearchPage(page));
  },
});
