import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.component.html',
  styleUrls: ['./livestream.component.scss']
})
export class LivestreamComponent {
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
