import { httpService } from '../http-service/http.service'

class JsonPlaceholder {
  private getUri() {
    return 'https://jsonplaceholder.typicode.com/todos'
  }

  public getPlaceholder() {
    return httpService.get<JsonPlaceholder[]>(this.getUri())
  }
}

export const jsonPlaceholder = new JsonPlaceholder()
