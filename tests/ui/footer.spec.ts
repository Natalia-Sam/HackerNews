import { expect } from "@playwright/test";
import { test } from "../../fixtures";
import { Gunzip } from "node:zlib";
import GuidelinesPage from "../../pages-ui/guidelines-page";

test.describe("Verify elements in the footer", () => {
  test.beforeEach(async ({ page }) => {
    await test.step("Open main page", async () => {
      await page.goto("https://news.ycombinator.com/newest");
    });
  });

  test("Verify elements on the Guidelines page", async ({
    footerPage,
    guidelinesPage,
  }) => {
    await test.step("Verify Guidelines tab title", async () => {
      await footerPage.openGuidelinesPage();
      const tabTitle = await guidelinesPage.guidelinesTabTitle.textContent();
      expect(tabTitle).toBe("Hacker News Guidelines");
    });

    await test.step("Verify Guidelines page URL", async () => {
      const guidelinesPageUrl = await guidelinesPage.getGuidelinesPageUrl();
      expect(guidelinesPageUrl).toBe(
        "https://news.ycombinator.com/newsguidelines.html"
      );
    });

    await test.step("Verify Guidelines page Title", async () => {
      const guidelinesPageTitle = await guidelinesPage.getGuidelinesPageTitle();
      expect(guidelinesPageTitle).toBe("Hacker News Guidelines");
    });
  });

  test("Verify elements on the FAQ page", async ({ footerPage, faqPage }) => {
    await test.step("Verify FAQ tab title", async () => {
      await footerPage.openFaqPage();
      const tabTitle = await faqPage.faqTabTitle.textContent();
      expect(tabTitle).toBe("Hacker News FAQ");
    });

    await test.step("Verify FAQ page URL", async () => {
      const faqPageUrl = await faqPage.getFaqPageUrl();
      expect(faqPageUrl).toBe("https://news.ycombinator.com/newsfaq.html");
    });

    await test.step("Verify FAQ page Title", async () => {
      const faqPageTitle = await faqPage.getFaqPageTitle();
      expect(faqPageTitle).toBe("Hacker News FAQ");
    });
  });

  test("Verify elements on the Lists page", async ({
    footerPage,
    listsPage,
  }) => {
    await test.step("Verify Lists tab title", async () => {
      await footerPage.openListsPage();
      const tabTitle = await listsPage.getListsTabTitle();
      expect(tabTitle).toBe("Lists | Hacker News");
    });

    await test.step("Verify Lists page URL", async () => {
      const listsPageUrl = await listsPage.getListsPageUrl();
      expect(listsPageUrl).toBe("https://news.ycombinator.com/lists");
    });

    await test.step("Verify Lists page Title", async () => {
      const listsPageTitle = await listsPage.getListsPageTitle();
      expect(listsPageTitle).toBe("lists");
    });
  });

  test("Verify elements on the API page", async ({ footerPage, apiPage }) => {
    await test.step("Verify API tab title", async () => {
      await footerPage.openApiPage();
      const tabTitle = await apiPage.apiTabTitle.textContent();
      expect(tabTitle).toBe(
        "GitHub - HackerNews/API: Documentation and Samples for the Official HN API"
      );
    });

    await test.step("Verify API page URL", async () => {
      const apiPageUrl = await apiPage.getApiPageUrl();
      expect(apiPageUrl).toBe("https://github.com/HackerNews/API");
    });

    await test.step("Verify API page Title", async () => {
      const apiPageTitle = await apiPage.getApiPageTitle();
      expect(apiPageTitle).toBe("API");
    });
  });

  test("Verify elements on the Security page", async ({
    footerPage,
    securityPage,
  }) => {
    await test.step("Verify Security tab title", async () => {
      await footerPage.openSecurityPage();
      const tabTitle = await securityPage.securityTabTitle.textContent();
      expect(tabTitle).toBe("Hacker News Security");
    });

    await test.step("Verify Security page URL", async () => {
      const securityPageUrl = await securityPage.getSecurityPageUrl();
      expect(securityPageUrl).toBe(
        "https://news.ycombinator.com/security.html"
      );
    });

    await test.step("Verify Security page Title", async () => {
      const securityPageTitle = await securityPage.getSecurityPageTitle();
      expect(securityPageTitle).toBe("Hacker News Security");
    });
  });

  test("Verify elements on the Legal page", async ({
    footerPage,
    legalPage,
  }) => {
    await test.step("Verify Legal tab title", async () => {
      await footerPage.openLegalPage();
      const tabTitle = await legalPage.getLegalTabTitle();
      expect(tabTitle).toBe("Legal | Y Combinator");
    });

    await test.step("Verify Legal page URL", async () => {
      const legalPageUrl = await legalPage.getLegalPageUrl();
      expect(legalPageUrl).toBe("https://www.ycombinator.com/legal/");
    });

    await test.step("Verify Legal page Title", async () => {
      const legalPageTitle = await legalPage.getLegalPageTitle();
      expect(legalPageTitle).toBe("Legal");
    });
  });

  test("Verify elements on the Apply to Y Combinator page", async ({
    footerPage,
    applyToYcPage,
  }) => {
    await test.step("Verify Apply to Y Combinator tab title", async () => {
      await footerPage.openApplyToYcPage();
      const tabTitle = await applyToYcPage.getApplyToYcTabTitle();
      expect(tabTitle).toBe("Apply to Y Combinator | Y Combinator");
    });

    await test.step("Verify Apply to Y Combinator page URL", async () => {
      const applyToYcPageUrl = await applyToYcPage.getApplyToYcPageUrl();
      expect(applyToYcPageUrl).toBe("https://www.ycombinator.com/apply/");
    });

    await test.step("Verify Apply to Y Combinator page Title", async () => {
      const applyToYcPageTitle = await applyToYcPage.getApplyToYcPageTitle();
      expect(applyToYcPageTitle).toBe("Apply to Y Combinator");
    });
  });
});

// npx playwright test footer
// npx playwright test tests/ui/footer.spec.ts --ui
