import { test, expect } from "@playwright/test";
import NewstoriesApiService from "../../pages-api/newstories.api";

test.describe("Newstories API tests", () => {
  let newstoriesApiService: NewstoriesApiService;

  test.beforeEach(async ({ request }) => {
    newstoriesApiService = new NewstoriesApiService(request);
  });

  test("Verify that last is really last and order correct for last 100", async () => {
    await test.step("Get newstories list", async () => {
      const newstoriesResp = await newstoriesApiService.getNewstoriesList();
      const newstoriesIds: number[] = await newstoriesResp.json();
      const last100Ids = newstoriesIds.slice(-100);

      const items: { id: number; time: number }[] = [];
      for (const id of last100Ids) {
        const itemResp = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`,
        );
        const item = await itemResp.json();
        items.push({ id, time: item.time });

        for (let i = 0; i < items.length - 1; i++) {
          expect(items[i].time).toBeGreaterThan(items[i + 1].time);
        }
      }

      expect(items[items.length - 1].time).toBeLessThanOrEqual(items[0].time);
    });

    // await test.step("Verify that last is really last and order correct for last 100", async () => {
    //   const response = await newstoriesApiService.getNewstoriesList();
    //   expect(response.status()).toBe(200);
    //   const responseBody = await response.json();
    //   const last100Stories = responseBody.slice(0, 100);
    //   for (let i = 0; i < last100Stories.length - 1; i++) {
    //     expect(last100Stories[i]).toBeGreaterThan(last100Stories[i + 1]);
    //   }
    // });
  });
});

// npx playwright test newstories
// npx playwright test tests/api/newstories.spec.ts --ui
