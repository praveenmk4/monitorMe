import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'corona-monitor';
  showFiller = false;
  sideMenuList = [{
    title: "Dashboard",
    icon: 'dashboard',
    component: 'dashboard'
  }, {
    title: "User Profile",
    icon: "person",
    component: 'userProfile'
  }, {
    title: "Table List",
    icon: "content_paste",
    component: 'tabList'
  }, {
    title: "Notifications",
    icon: "notifications",
    component: 'notifications'
  }, {
    title: "Maps",
    icon: "location_on", component: 'maps'
  }
  ];
}
