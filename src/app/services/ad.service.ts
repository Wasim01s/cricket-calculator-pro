import { Injectable } from '@angular/core';

import { AdMob } from '@capacitor-community/admob';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  private calculationCount = 0;

  async showInterstitialIfNeeded() {

    this.calculationCount++;

    if (this.calculationCount >= 5) {

      this.calculationCount = 0;

      await AdMob.prepareInterstitial({
        adId: 'ca-app-pub-2335259902861755/5101469811'
      });

      await AdMob.showInterstitial();

    }

  }

}
