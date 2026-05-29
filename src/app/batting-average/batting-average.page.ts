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
  trophyOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-batting-average',
  templateUrl: './batting-average.page.html',
  styleUrls: ['./batting-average.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    RouterLink,
    CommonModule,
    FormsModule
  ]
})

export class BattingAveragePage {

  runs: any = '';
  outs: any = '';

  result: string = '';
  showResult = false;

  constructor(
    public location: Location
  ) {

    addIcons({

      'arrow-back-outline': arrowBackOutline,

      'trophy-outline': trophyOutline

    });

  }

  goBack() {

    this.location.back();

  }

  calculateAverage() {

    if (!this.runs || !this.outs || this.outs <= 0) {

      this.result = 'INVALID';

      this.showResult = true;

      return;
    }

    const avg = Number(this.runs) / Number(this.outs);

    this.result = avg.toFixed(2);

    this.showResult = true;
  }

}
