import { Component, OnInit } from '@angular/core';
import { NavRoutes } from '../../interfaces/navRoutes';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navRoutes:NavRoutes[] = [
    {
      link: 'Home',
      path: '/dashboard/home'
    },
    {
      link: 'My Events',
      path: '/myevents/home'
    },
    {
      link: 'Search Events',
      path: ''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
