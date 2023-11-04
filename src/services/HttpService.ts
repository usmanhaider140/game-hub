import ApiClient from "./api-client";
interface Entity {
  id: number;
}
class HttpService {
  endpoint: string;
  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }
  create<T>(entity: T) {
    return ApiClient.post(this.endpoint, entity);
  }
  getAll<T>() {
    const controller: AbortController = new AbortController();
    const request = ApiClient.get<T[]>(this.endpoint, {
      signal: controller.signal,
    });
    return { request, cancel: () => controller.abort() };
  }
  delete(id: number) {
    return ApiClient.delete(this.endpoint + "/" + id);
  }
  update<T extends Entity>(entity: T) {
    return ApiClient.put(this.endpoint + "/" + entity.id, entity);
  }
}

const createService = (endpoint: string) => new HttpService(endpoint);
export default createService;
