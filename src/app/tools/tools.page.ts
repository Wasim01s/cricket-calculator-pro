import { Component } from '@angular/core';

import {
  IonContent,
  IonIcon
} from '@ionic/angular/standalone';

import { CommonModule } from '@angular/common';

import { RouterLink } from '@angular/router';

import { addIcons } from 'ionicons';

import {
  arrowBackOutline,
  pulseOutline,
  chevronForwardOutline,
  tennisballOutline,
  podiumOutline,
  speedometerOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.page.html',
  styleUrls: ['./tools.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    RouterLink,
    CommonModule
  ]
})

export class ToolsPage {

  constructor() {

    addIcons({

      'arrow-back-outline': arrowBackOutline,

      'pulse-outline': pulseOutline,

      'chevron-forward-outline': chevronForwardOutline,

      'tennisball-outline': tennisballOutline,

      'podium-outline': podiumOutline,

      'speedometer-outline': speedometerOutline

    });

  }

}
