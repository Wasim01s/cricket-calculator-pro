import { Component } from '@angular/core';

import {
  CommonModule,
  Location
} from '@angular/common';

import { FormsModule } from '@angular/forms';

import {
  IonContent,
  IonIcon
} from '@ionic/angular/standalone';

import { RouterLink } from '@angular/router';

import { addIcons } from 'ionicons';

import {
  arrowBackOutline,
  tennisballOutline
} from 'ionicons/icons';

import { AdService } from '../services/ad.service';

@Component({
  selector: 'app-bowling-average',
  templateUrl: './bowling-average.page.html',
  styleUrls: ['./bowling-average.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    RouterLink,
    CommonModule,
    FormsModule
  ]
})

export class BowlingAveragePage {

  runs: any = '';
  wickets: any = '';

  result: string = '';
  showResult = false;

  constructor(
    public location: Location,
    private adService: AdService
  ) {

    addIcons({

      'arrow-back-outline': arrowBackOutline,

      'tennisball-outline': tennisballOutline

    });

  }

  goBack() {

    this.location.back();

  }

  calculateAverage() {

    if (!this.runs || !this.wickets || this.wickets <= 0) {

      this.result = 'INVALID';

      this.showResult = true;

      return;
    }

    const avg =
      Number(this.runs) /
      Number(this.wickets);

    this.result = avg.toFixed(2);

    this.showResult = true;

    this.adService.showInterstitialIfNeeded();

  }

}
