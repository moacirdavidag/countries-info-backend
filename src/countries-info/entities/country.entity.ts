export class Country {
  name: string;
  countryCode: string;
  commonName?: string;
  officialName?: string;
  region?: string;
  borders?: [{
    name: string;
    countryCode: string;
    commonName?: string;
    officialName?: string;
    region?: string;
    borders?: []
  }]
}
