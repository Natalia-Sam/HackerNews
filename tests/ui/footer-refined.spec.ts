import { expect } from "@playwright/test";
import { test } from "../../fixtures";
import { PageType } from "../../pages-ui/enums/data";
import GuidelinesPage from "../../pages-ui/guidelines-page";
import FaqPage from "../../pages-ui/faq-page";
import ListsPage from "../../pages-ui/lists-page";

let guidelinesPage: GuidelinesPage;
let faqPage: FaqPage;
let listsPage: ListsPage;

const pageParameters = [
  {
    pageType: PageType.GUIDELINES,
    tabTitle: "Hacker News Guidelines",
    pageLink: "https://news.ycombinator.com/newsguidelines.html",
    pageTitle: "Hacker News Guidelines",
    getActualTabTitle: async () => {
      return guidelinesPage.guidelinesTabTitle.textContent();
    },
    getActualURL: async () => {
      return guidelinesPage.getGuidelinesPageUrl();
    },
    getActualPageTitle: async () => {
      return guidelinesPage.getGuidelinesPageTitle();
    },
  },
  {
    pageType: PageType.FAQ,
    tabTitle: "Hacker News FAQ",
    pageLink: "https://news.ycombinator.com/newsfaq.html",
    pageTitle: "Hacker News FAQ",
    getActualTabTitle: async () => {
      return faqPage.faqTabTitle.textContent();
    },
    getActualURL: async () => {
      return faqPage.getFaqPageUrl();
    },
    getActualPageTitle: async () => {
      return faqPage.getFaqPageTitle();
    },
  },
  {
    pageType: PageType.LISTS,
    tabTitle: "Lists | Hacker News",
    pageLink: "https://news.ycombinator.com/lists",
    pageTitle: "lists",
    getActualTabTitle: async () => {
      return listsPage.getListsTabTitle();
    },
    getActualURL: async () => {
      return listsPage.getListsPageUrl();
    },
    getActualPageTitle: async () => {
      return listsPage.getListsPageTitle();
    },
  },
];

test.describe("Verify elements in the footer", () => {
  test.beforeEach(async ({ page }) => {
    guidelinesPage = new GuidelinesPage(page);
    faqPage = new FaqPage(page);
    listsPage = new ListsPage(page);

    await test.step("Open main page", async () => {
      await page.goto("https://news.ycombinator.com/newest");
    });
  });

  pageParameters.forEach(
    ({
      pageType,
      tabTitle,
      pageLink,
      pageTitle,
      getActualTabTitle,
      getActualURL,
      getActualPageTitle,
    }) => {
      test(`Verify elements on the ${pageType}`, async ({
        footerPageRefined,
      }) => {
        await test.step(`Verify ${pageType} tab title`, async () => {
          await footerPageRefined.openPage(pageType);
          const title = await getActualTabTitle();
          expect(title).toBe(tabTitle);
        });
        await test.step(`Verify ${pageType} page URL`, async () => {
          const guidelinesPageUrl = await getActualURL();
          expect(guidelinesPageUrl).toBe(pageLink);
        });

        await test.step(`Verify ${pageType} page Title`, async () => {
          const guidelinesPageTitle = await getActualPageTitle();
          expect(guidelinesPageTitle).toBe(pageTitle);
        });
      });
    },
  );
});

// npx playwright test tests/ui/footer-refined.spec.ts --ui
