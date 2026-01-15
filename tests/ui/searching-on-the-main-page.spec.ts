import { expect } from "@playwright/test";
import { test } from "../../fixtures";

test.describe("Search on the main page", () => {
  let articleName: string;
  test.beforeEach(async ({ page }) => {
    await test.step("Open main page", async () => {
      await page.goto("https://news.ycombinator.com/newest");
    });
  });

  test("Verify search results on the main page", async ({
    mainPage,
    searchPage,
  }) => {
    await test.step("Verify Main page URL", async () => {
      const mainPageUrl = await mainPage.getMainPageUrl();
      expect(mainPageUrl).toBe("https://news.ycombinator.com/newest");
    });

    await test.step("Get article name in the list", async () => {
      articleName = await mainPage.getArticleNameInTheList(1);
    });

    await test.step("Perform search by article name", async () => {
      await mainPage.searchInput.pressSequentially(articleName, { delay: 50 });
      await mainPage.searchInput.press("Enter");
    });

    await test.step("Verify search results URL", async () => {
      const searchPageUrl = await searchPage.getSearchResultsUrl();
      expect(searchPageUrl).toContain("q=");
      expect(searchPageUrl).toContain("algolia.com");
    });

    await test.step("Verify that search results contain the article name", async () => {
      const searchResultsText = await searchPage.getSearchResults();
      const normalizedArticleName = normalizeText(articleName);
      const articleWords = normalizedArticleName
        .split(/\s+/)
        .filter((word) => word.length > 0);
      function normalizeText(text: string): string {
        return text
          .toLowerCase()
          .replace(/[^\w\s]/g, "")
          .trim();
      }
      // console.log(articleWords);
      for (const [index, resultText] of searchResultsText.entries()) {
        const normalizedResult = normalizeText(resultText);
        const hasMatchingWord = articleWords.some((word) =>
          normalizedResult.includes(word)
        );
        expect(
          hasMatchingWord,
          `Result ${index} should contain a word from articleName`
        ).toBe(true);
      }
    });
  });
});

// npx playwright test tests/ui/searching-on-the-main-page.spec.ts --ui
