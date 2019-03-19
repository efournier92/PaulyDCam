import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-livestream',
  templateUrl: './livestream.component.html',
  styleUrls: ['./livestream.component.scss']
})
export class LivestreamComponent {
  shouldShowSidenav: boolean = false;

  constructor() { }

  ngOnInit() { }

  toggleSidenav() {
    this.shouldShowSidenav = !this.shouldShowSidenav;
  }
}
