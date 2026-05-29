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
  podiumOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-bowling-strike-rate',
  templateUrl: './bowling-strike-rate.page.html',
  styleUrls: ['./bowling-strike-rate.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    RouterLink,
    CommonModule,
    FormsModule
  ]
})

export class BowlingStrikeRatePage {

  balls: any = '';
  wickets: any = '';

  result: string = '';
  showResult = false;

  constructor(
    public location: Location
  ) {

    addIcons({

      'arrow-back-outline': arrowBackOutline,

      'podium-outline': podiumOutline

    });

  }

  goBack() {

    this.location.back();

  }

  calculateStrikeRate() {

    if (!this.balls || !this.wickets || this.wickets <= 0) {

      this.result = 'INVALID';

      this.showResult = true;

      return;
    }

    const sr =
      Number(this.balls) /
      Number(this.wickets);

    this.result = sr.toFixed(2);

    this.showResult = true;
  }

}
