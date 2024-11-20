import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { Country } from "./entities/country.entity";
import { map, Observable } from "rxjs";
import { Axios, AxiosResponse } from "axios";
import { CountryPopulationInfo } from "./entities/country-population.entity";

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

    getCountryPopulationInfo(countryCode: string): Observable<AxiosResponse<CountryPopulationInfo>> {
        const countryCodeToUpperCase = String(countryCode).toUpperCase();
        const URL = `https://countriesnow.space/api/v0.1/countries/population`;
        const countryPopulationInfo = this.httpService.post(URL, {
            iso3: countryCodeToUpperCase
        }).pipe(map(response => response.data));
        return countryPopulationInfo;
    }

    async getCountryFlag(countryCode: string): Promise<Observable<AxiosResponse<any>>> {
        const countryCodeToUpperCase = String(countryCode).toUpperCase();
        const URL = 'https://countriesnow.space/api/v0.1/countries/flag/images';
        const countryFlag = await this.httpService.get(URL).pipe(map(response => {
            const country = response.data?.data?.find(countryByCode => countryByCode.iso2 === countryCodeToUpperCase);
            return country;
        }));
        return countryFlag;
    }

}