import { Component, effect, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, take, takeWhile } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isDarkMode = true;

  public isRouteAccount = signal(false);

  constructor(public router: Router)
  {
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(value => {
     this.isRouteAccount.update(oldValue => {
        return (value as NavigationEnd).url.includes('/account');;
     });
    });
  }

  public toggleTheme(): void {
    this.isDarkMode =  !this.isDarkMode;
  }

}
