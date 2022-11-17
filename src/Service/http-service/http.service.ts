import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

class HttpService {
  constructor() {
    axios.interceptors.request.use((config) => {
      config.headers = {
        Authorization: 'barrer Ridvan',
        'Access-Control-Allow-Origin': 'http://localhost:3000',
      }
      return config
    })
  }

  public get<T>(
    url: string,
    path: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return axios.get<T>(`${url}/${path}`, config).then()
  }
}

export const httpService = new HttpService()
