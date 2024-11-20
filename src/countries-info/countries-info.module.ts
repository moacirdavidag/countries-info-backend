import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { CountriesInfoService } from "./countries-info.service";
import { CountriesInfoController } from "./countries-info.controller";

@Module({
    imports: [HttpModule],
    controllers: [CountriesInfoController],
    providers: [CountriesInfoService],
    exports: [CountriesInfoService]
})
export class CountriesInfoModule {}