import { Component } from '@angular/core';
import { AdBanner } from 'src/app/dinamic-components/AdBanner';
import { AdService } from './dinamic-components/ad.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  ads: AdBanner[];

  constructor(private adService: AdService) {}

  ngOnInit() {
    this.ads = this.adService.getAds();
  }
}
