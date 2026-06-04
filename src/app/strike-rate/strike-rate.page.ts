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
  speedometerOutline,
  arrowUpOutline,
  arrowDownOutline
} from 'ionicons/icons';

import { AdService } from '../services/ad.service';

@Component({
  selector: 'app-strike-rate',
  templateUrl: './strike-rate.page.html',
  styleUrls: ['./strike-rate.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    CommonModule,
    FormsModule,
    RouterModule
  ]
})

export class StrikeRatePage {

  runs: number | null = null;

  balls: number | null = null;

  strikeRate: string = '0.00';

  battingGrade: string = '';

  gradeIcon: string = 'arrow-up-outline';

  showResult = false;

  constructor(
    private adService: AdService
  ) {

    addIcons({
      'arrow-back-outline': arrowBackOutline,
      'speedometer-outline': speedometerOutline,
      'arrow-up-outline': arrowUpOutline,
      'arrow-down-outline': arrowDownOutline
    });

  }

  calculateStrikeRate() {

    if (
      this.runs === null ||
      this.balls === null ||
      this.balls <= 0
    ) {

      this.strikeRate = 'INVALID';

      this.battingGrade = 'Invalid Input';

      this.gradeIcon = 'arrow-down-outline';

      this.showResult = true;

      return;
    }

    const result =
      (this.runs / this.balls) * 100;

    this.strikeRate =
      result.toFixed(2);

    /* GRADES */

    if (result < 80) {

      this.battingGrade = 'Poor Batting';

      this.gradeIcon = 'arrow-down-outline';

    }

    else if (result < 120) {

      this.battingGrade = 'Good Batting';

      this.gradeIcon = 'arrow-up-outline';

    }

    else if (result < 160) {

      this.battingGrade = 'Very Good Batting';

      this.gradeIcon = 'arrow-up-outline';

    }

    else {

      this.battingGrade = 'Excellent Batting';

      this.gradeIcon = 'arrow-up-outline';

    }

    this.showResult = true;

    this.adService.showInterstitialIfNeeded();

  }

}
