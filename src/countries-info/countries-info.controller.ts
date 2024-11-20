import { Controller, Get, HttpException, Param } from '@nestjs/common';
import { CountriesInfoService } from './countries-info.service';

@Controller('countries')
export class CountriesInfoController {
  constructor(private countriesInfoService: CountriesInfoService) {}

  @Get()
  async getAllCountriesList() {
    try {
      return await this.countriesInfoService.getAllCountriesList();
    } catch (error) {
      console.log(error);
      throw new HttpException(error.message, error.status);
    }
  }

  @Get('/:code')
  async getCountryByCode(@Param('code') code: string) {
    try {
        return await this.countriesInfoService.getCountryByCode(code);
      } catch (error) {
        console.log(error);
        throw new HttpException(error.message, error.status);
      }
  }
}
