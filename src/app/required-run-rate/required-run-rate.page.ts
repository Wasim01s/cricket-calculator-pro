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
  arrowUpOutline,
  arrowDownOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-required-run-rate',
  templateUrl: './required-run-rate.page.html',
  styleUrls: ['./required-run-rate.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    CommonModule,
    FormsModule,
    RouterLink
  ]
})

export class RequiredRunRatePage {

  target: any = '';
  current: any = '';
  oversLeft: any = '';

  result: string = '';
  showResult = false;

  constructor(
    public location: Location
  ) {

    addIcons({
      'arrow-back-outline': arrowBackOutline,
      'arrow-up-outline': arrowUpOutline,
      'arrow-down-outline': arrowDownOutline
    });

  }

  goBack() {

    this.location.back();

  }

  calculateRRR() {

    if (
      !this.target ||
      this.current === '' ||
      !this.oversLeft ||
      Number(this.oversLeft) <= 0
    ) {

      this.result = 'INVALID';

      this.showResult = true;

      return;
    }

    const runsNeeded =
      Number(this.target) - Number(this.current);

    const rrr =
      runsNeeded / Number(this.oversLeft);

    this.result = rrr.toFixed(2);

    this.showResult = true;
  }

}
