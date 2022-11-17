import { httpService } from '../http-service/http.service'
import { Country } from './country.class'
import { environmentConfig } from '@config'

class CountryService {
  private getUri() {
    return environmentConfig.backendApi
  }

  public getCountries() {
    return httpService.get<Country[]>(this.getUri(), 'country')
  }
}

export const countryService = new CountryService()
