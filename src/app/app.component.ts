import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  shouldShowSidenav: boolean = false;

  constructor() {
    window.addEventListener("resize", () => {
      this.waitToShowSidenav(0.5);
    })
  }

  ngOnInit() {
    this.waitToShowSidenav(2);
  }

  toggleSidenav() {
    this.shouldShowSidenav = !this.shouldShowSidenav;
  }

  waitToShowSidenav(seconds: number) {
    setTimeout(() => {
      if (window.innerWidth > 620) {
        this.shouldShowSidenav = true;
      } else {
        this.shouldShowSidenav = false;
      }
    }, (seconds * 1000));
  }
}
