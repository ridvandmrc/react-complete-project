import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

class HttpService {
  constructor() {
    axios.interceptors.request.use((config) => {
      config.headers = {
        Authorization: 'barrer Ridvan',
      }
      return config
    })
    
  }

  public get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return axios.get<T>(url, config).then()
  }
}

export const httpService = new HttpService()
