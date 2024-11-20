import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Country } from "./entity/country.entity";
import { map, Observable } from "rxjs";
import { AxiosResponse } from "axios";

@Injectable()
export class CountriesInfoService {
    constructor(private readonly httpService: HttpService) {}

    getAllCountriesList(): Observable<AxiosResponse<Country[]>> {
        const URL = 'https://date.nager.at/api/v3/AvailableCountries';
        const countries = this.httpService.get(URL).pipe(
            map(response => response.data)
          );
        return countries;
    }

    getCountryByCode(countryCode: string): Observable<AxiosResponse<Country>> {
        const countryCodeToUpperCase = String(countryCode).toUpperCase();
        const URL = `https://date.nager.at/api/v3/CountryInfo/${countryCodeToUpperCase}`;
        const country = this.httpService.get(URL).pipe(map(response => response.data));
        return country;
    }
}