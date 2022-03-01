import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  scrollTop = 0;
  hideNav = false;

  onScroll(event: any) {
    console.log('asd');
    console.log(event.target.scrollTop, this.scrollTop);
    this.hideNav = this.scrollTop < event.target.scrollTop;
    this.scrollTop = event.target.scrollTop;
  }
  ngOnInit(): void {}
}
