import { Component } from '@angular/core';

import {
  IonContent,
  IonIcon,
  IonMenu,
  MenuController
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { addIcons } from 'ionicons';

import {
  menuOutline,
  notificationsOutline,
  gridOutline,
  speedometerOutline,
  statsChartOutline,
  americanFootballOutline,
  tennisballOutline,
  podiumOutline,
  radioButtonOnOutline,
  trophyOutline,
  pieChartOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    IonMenu,
    CommonModule,
    RouterModule
  ]
})

export class HomePage {

  constructor(
    private menu: MenuController
  ) {

    addIcons({

      'menu-outline': menuOutline,

      'notifications-outline': notificationsOutline,

      'grid-outline': gridOutline,

      'speedometer-outline': speedometerOutline,

      'stats-chart-outline': statsChartOutline,

      'american-football-outline': americanFootballOutline,

      'tennisball-outline': tennisballOutline,

      'podium-outline': podiumOutline,

      'radio-button-on-outline': radioButtonOnOutline,

      'trophy-outline': trophyOutline,

      'pie-chart-outline': pieChartOutline

    });

  }

  openMenu() {

    this.menu.open();

  }

  scrollToQuick() {

    const element =
      document.getElementById(
        'quick-calculators'
      );

    element?.scrollIntoView({
      behavior: 'smooth'
    });

  }

  scrollToMoreTools() {

    const element =
      document.getElementById(
        'more-tools'
      );

    element?.scrollIntoView({
      behavior: 'smooth'
    });

  }

}
