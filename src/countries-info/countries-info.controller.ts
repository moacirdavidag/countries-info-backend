import { Controller, Get, HttpException, Param, Post } from '@nestjs/common';
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

  @Get('/flag/:code')
  async getCountryFlag(@Param('code') code: string) {
    try {
        return await this.countriesInfoService.getCountryFlag(code);
      } catch (error) {
        console.log(error);
        throw new HttpException(error.message, error.status);
      }
  }

  @Post('/population/:code')
  async getCountryPopulationInfo(@Param('code') code: string) {
    try {
        return await this.countriesInfoService.getCountryPopulationInfo(code);
      } catch (error) {
        console.log(error);
        throw new HttpException(error.message, error.status);
      }
  }

}
