import { Component, OnInit, ViewChild } from '@angular/core';

import {
  IonContent,
  IonIcon,
  IonMenu,
  MenuController,
  Platform
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

import {
  AdMob,
  BannerAdPosition,
  BannerAdSize
} from '@capacitor-community/admob';

import { App } from '@capacitor/app';

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

export class HomePage implements OnInit {

  @ViewChild('homeContent', { static: false })
  homeContent!: IonContent;

  constructor(
    private menu: MenuController,
    private platform: Platform
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

  async ngOnInit() {

    await AdMob.initialize();

    await AdMob.showBanner({
      adId: 'ca-app-pub-2335259902861755/5252678904',
      adSize: BannerAdSize.BANNER,
      position: BannerAdPosition.BOTTOM_CENTER,
      margin: 0
    });

    this.platform.backButton.subscribeWithPriority(
      9999,
      async () => {

        const scrollElement =
          await this.homeContent.getScrollElement();

        const currentScroll =
          scrollElement.scrollTop;

        if (currentScroll > 50) {

          this.homeContent.scrollToTop(300);

        } else {

          App.exitApp();

        }

      }
    );

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
