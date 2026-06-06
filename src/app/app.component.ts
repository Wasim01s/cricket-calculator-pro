import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet, Platform } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {

  private platform = inject(Platform);
  private router = inject(Router);

  constructor() {

    this.platform.ready().then(() => {

      this.platform.backButton.subscribeWithPriority(10, async () => {

        const url = this.router.url;

        // 👉 HOME PAGE CASE
        if (url === '/home' || url === '/') {

          // Check scroll position
          const content = document.querySelector('ion-content');
          const scrollTop = await (content as any)?.getScrollElement?.()
            ?.then((el: any) => el.scrollTop) || 0;

          // If scrolled → go top first
          if (scrollTop > 50) {

            (content as any)?.scrollToTop?.(300);

            return;

          }

          // If not scrolled → exit app
          App.exitApp();
          return;
        }

        // 👉 ALL OTHER PAGES → NORMAL BACK NAVIGATION
        window.history.back();

      });

    });

  }
}
