export class ApiClient {
  constructor(
    private readonly baseUrl: string,
  ) {}

  async get<T>(path: string): Promise<T> {
    const response = await fetch(
      `${this.baseUrl}${path}`,
    );

    return response.json();
  }
}