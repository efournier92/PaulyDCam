import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isSidenavVisible: boolean = false;

  constructor() {
    window.addEventListener("resize", () => {
      this.waitToShowSidenav(0.5);
    })
  }

  ngOnInit() {
    this.waitToShowSidenav(2);
  }

  toggleSidenav() {
    this.isSidenavVisible = !this.isSidenavVisible;
  }

  waitToShowSidenav(seconds: number) {
    setTimeout(() => {
      if (window.innerWidth > 620) {
        this.isSidenavVisible = true;
      } else {
        this.isSidenavVisible = false;
      }
    }, (seconds * 1000));
  }
}
