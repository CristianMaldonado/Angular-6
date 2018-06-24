import { Component, OnInit } from '@angular/core';
import { CountryService } from './country.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {
  
  country: any;

  fieldToView: string = ''

  filteredCountries: any[];

  countries: any[]

  constructor(private countryService: CountryService) { }

  
  ngOnInit(): void {
    this.fieldToView = 'name'
    this.countryService.getCountries().then(countries => {
      this.countries =  countries
  });
  }

  filterCountrySingle(event) {
      let query = event.query;
      this.filteredCountries = this.filterCountry(query, this.countries);
      
  }

  filterCountry(query, countries: any[]):any[] {      
      let filtered : any[] = [];
      for(let i = 0; i < countries.length; i++) {
          let country = countries[i];
          if(country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
              filtered.push(country);
          }
      }
      return filtered;
  }

}
