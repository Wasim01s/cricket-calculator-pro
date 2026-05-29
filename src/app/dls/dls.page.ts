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
  trophyOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-dls',
  templateUrl: './dls.page.html',
  styleUrls: ['./dls.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    CommonModule,
    FormsModule,
    RouterModule
  ]
})

export class DlsPage {

  totalOvers: number | null = null;

  team1Score: number | null = null;

  oversStart2: number | null = null;

  result: string = '0';

  showResult = false;

  innings1Rows = [
    {
      oversBowled: null,
      runsScored: null,
      wickets: null,
      oversLost: null
    }
  ];

  innings2Rows = [
    {
      oversBowled: null,
      runsScored: null,
      wickets: null,
      oversLost: null
    }
  ];

  constructor() {

    addIcons({
      'arrow-back-outline': arrowBackOutline,
      'trophy-outline': trophyOutline
    });

  }

  addRow1() {

    this.innings1Rows.push({
      oversBowled: null,
      runsScored: null,
      wickets: null,
      oversLost: null
    });

  }

  removeRow1(index: number) {

    this.innings1Rows.splice(index, 1);

  }

  addRow2() {

    this.innings2Rows.push({
      oversBowled: null,
      runsScored: null,
      wickets: null,
      oversLost: null
    });

  }

  removeRow2(index: number) {

    this.innings2Rows.splice(index, 1);

  }

  calculateDLS() {

    if (
      this.totalOvers === null ||
      this.team1Score === null ||
      this.team1Score <= 0
    ) {

      this.result = 'INVALID';

      this.showResult = true;

      return;

    }

    const originalOvers =
      Number(this.totalOvers);

    /* SECOND INNINGS OVERS */

    let revisedOvers =
      Number(this.oversStart2 || originalOvers);

    this.innings2Rows.forEach((row: any) => {

      revisedOvers -=
        Number(row.oversLost || 0);

    });

    if (revisedOvers <= 0) {

      this.result = 'INVALID';

      this.showResult = true;

      return;

    }

    /* WICKETS LOST */

    let wicketsLost = 0;

    this.innings2Rows.forEach((row: any) => {

      wicketsLost +=
        Number(row.wickets || 0);

    });

    /* ADVANCED RESOURCE PERCENT */

    const oversRatio =
      revisedOvers / originalOvers;

    /*
      Better T20 resource scaling
      closer to real DLS behavior
    */

    let resourcePercent =
      Math.pow(
        oversRatio,
        0.82
      ) * 100;

    /* wicket penalty */

    resourcePercent -=
      wicketsLost * 2.5;

    if (resourcePercent < 10) {

      resourcePercent = 10;

    }

    /* DLS TARGET */

    const parScore =
      (
        Number(this.team1Score)
        * resourcePercent
      ) / 100;

    const revisedTarget =
      Math.floor(parScore) + 1;

    this.result =
      revisedTarget.toString();

    this.showResult = true;

  }

}
