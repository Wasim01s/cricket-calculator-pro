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
  speedometerOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-run-rate-over',
  templateUrl: './run-rate-over.page.html',
  styleUrls: ['./run-rate-over.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    RouterLink,
    CommonModule,
    FormsModule
  ]
})

export class RunRateOverPage {

  runs: any = '';
  overs: any = '';

  result: string = '';
  showResult = false;

  constructor(
    public location: Location
  ) {

    addIcons({

      'arrow-back-outline': arrowBackOutline,

      'speedometer-outline': speedometerOutline

    });

  }

  goBack() {

    this.location.back();

  }

  calculateRunRate() {

    if (!this.runs || !this.overs || this.overs <= 0) {

      this.result = 'INVALID';

      this.showResult = true;

      return;
    }

    const rr =
      Number(this.runs) /
      Number(this.overs);

    this.result = rr.toFixed(2);

    this.showResult = true;
  }

}
