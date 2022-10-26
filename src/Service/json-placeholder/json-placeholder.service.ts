import { httpService } from '../http-service/http.service'

class JsonPlaceholder {
  private getUri() {
    return 'https://jsonplaceholder.typicode.com/todos/1'
  }

  public getPlaceholder() {
    return httpService.get(this.getUri())
  }
}

export const jsonPlaceholder = new JsonPlaceholder()
