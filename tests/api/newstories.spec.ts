import { test, expect } from "@playwright/test";
import NewstoriesApiService from "../../pages-api/newstories.api";

test.describe("Newstories API tests", () => {
  let newstoriesApiService: NewstoriesApiService;

  test.beforeEach(async ({ request }) => {
    newstoriesApiService = new NewstoriesApiService(request);
  });

  test("Verify that last is really last and order correct for first 100", async () => {
    let first100Ids: number[] = [];

    await test.step("Get newstories list and verify response", async () => {
      const newstoriesResp = await newstoriesApiService.getNewstoriesList();
      expect(newstoriesResp.status()).toBe(200);
      const newstoriesIds: number[] = await newstoriesResp.json();
      // Index 0 = most recently posted ("last" story). Take the first 100 (newest).
      first100Ids = newstoriesIds.slice(0, 100);
      expect(first100Ids.length).toBe(100);
    });

    await test.step("Fetch item details and verify order from newest to 100th", async () => {
      const items: { id: number; time: number }[] = [];

      for (const id of first100Ids) {
        const itemResp = await newstoriesApiService.getItem(id);
        expect(itemResp.status()).toBe(200);
        const item = await itemResp.json();
        items.push({ id, time: item.time });
      }

      // Verify that index 0 is truly the most recent (highest timestamp)
      const maxTime = Math.max(...items.map((i) => i.time));
      expect(items[0].time).toBe(maxTime);

      // Verify descending order (newest → oldest) across all 100 items
      for (let i = 0; i < items.length - 1; i++) {
        expect(items[i].time).toBeGreaterThanOrEqual(items[i + 1].time);
      }
    });
  });
});

// npx playwright test newstories
// npx playwright test tests/api/newstories.spec.ts --ui
