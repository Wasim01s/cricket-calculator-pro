import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-over-run-rate',
  templateUrl: './over-run-rate.page.html',
  styleUrls: ['./over-run-rate.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class OverRunRatePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
