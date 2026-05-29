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
  statsChartOutline,
  arrowUpOutline,
  arrowDownOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-boundary-percentage',
  templateUrl: './boundary-percentage.page.html',
  styleUrls: ['./boundary-percentage.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    CommonModule,
    FormsModule,
    RouterLink
  ]
})

export class BoundaryPercentagePage {

  totalRuns: any = '';
  boundaryRuns: any = '';

  result: string = '';
  showResult = false;

  constructor(
    public location: Location
  ) {

    addIcons({
      'arrow-back-outline': arrowBackOutline,
      'stats-chart-outline': statsChartOutline,
      'arrow-up-outline': arrowUpOutline,
      'arrow-down-outline': arrowDownOutline
    });

  }

  goBack() {

    this.location.back();

  }

  calculateBoundaryPercentage() {

    if (
      !this.totalRuns ||
      !this.boundaryRuns ||
      Number(this.totalRuns) <= 0
    ) {

      this.result = 'INVALID';

      this.showResult = true;

      return;
    }

    const percentage =
      (Number(this.boundaryRuns) / Number(this.totalRuns)) * 100;

    this.result = percentage.toFixed(2);

    this.showResult = true;
  }

}
