import { APIRequestContext } from "@playwright/test";

export default class NewstoriesApiService {
  private baseUrl: string = "https://hacker-news.firebaseio.com";
  private request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async getNewstoriesList() {
    const newstoriesList = await this.request.get(
      `${this.baseUrl}/v0/newstories.json`,
      {
        headers: { "Content-Type": "application/json" },
      },
    );
    return newstoriesList;
  }

  async getItem(id: number) {
    const item = await this.request.get(
      `${this.baseUrl}/v0/item/${id}.json`,
      {
        headers: { "Content-Type": "application/json" },
      },
    );
    return item;
  }
}
