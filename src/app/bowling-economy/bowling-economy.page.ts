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

@Component({
  selector: 'app-bowling-economy',
  templateUrl: './bowling-economy.page.html',
  styleUrls: ['./bowling-economy.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    RouterLink,
    CommonModule,
    FormsModule
  ]
})

export class BowlingEconomyPage {

  runs: any = '';
  overs: any = '';

  result: string = '';
  showResult = false;

  constructor(
    public location: Location
  ) {

    addIcons({

      'arrow-back-outline': arrowBackOutline,

      'tennisball-outline': tennisballOutline

    });

  }

  goBack() {

    this.location.back();

  }

  calculateEconomy() {

    if (!this.runs || !this.overs || this.overs <= 0) {

      this.result = 'INVALID';

      this.showResult = true;

      return;
    }

    const eco =
      Number(this.runs) /
      Number(this.overs);

    this.result = eco.toFixed(2);

    this.showResult = true;
  }

}
