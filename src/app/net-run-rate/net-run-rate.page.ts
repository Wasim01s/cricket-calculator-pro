import { Component } from '@angular/core';

import {
  IonContent,
  IonIcon
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';

import { addIcons } from 'ionicons';

import {
  arrowBackOutline,
  statsChartOutline,
  arrowUpOutline
} from 'ionicons/icons';

import { AdService } from '../services/ad.service';

@Component({
  selector: 'app-net-run-rate',
  templateUrl: './net-run-rate.page.html',
  styleUrls: ['./net-run-rate.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    CommonModule,
    FormsModule,
    RouterModule
  ]
})

export class NetRunRatePage {

  runsScored: any = '';

  oversFaced: any = '';

  runsConceded: any = '';

  oversBowled: any = '';

  netRunRate: string = '';

  showResult = false;

  constructor(
    private adService: AdService
  ) {

    addIcons({
      'arrow-back-outline': arrowBackOutline,
      'stats-chart-outline': statsChartOutline,
      'arrow-up-outline': arrowUpOutline
    });

  }

  calculateNRR() {

    if (
      this.runsScored === '' ||
      this.oversFaced === '' ||
      this.runsConceded === '' ||
      this.oversBowled === '' ||
      Number(this.oversFaced) <= 0 ||
      Number(this.oversBowled) <= 0
    ) {

      this.netRunRate = 'INVALID';

      this.showResult = true;

      return;
    }

    const scoredRate =
      Number(this.runsScored) /
      Number(this.oversFaced);

    const concededRate =
      Number(this.runsConceded) /
      Number(this.oversBowled);

    const result =
      scoredRate - concededRate;

    this.netRunRate =
      result.toFixed(2);

    this.showResult = true;

    this.adService.showInterstitialIfNeeded();

  }

}
