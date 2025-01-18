import { Component } from '@angular/core';
import {SidenavComponent} from './components/sidenav/sidenav.component';
import {BodyComponent} from './components/body/body.component';

interface SideNavToggle {
    screenWidth: number;
    collapsed: boolean;
}

@Component({
  selector: 'app-root',
    imports: [SidenavComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Task Manager';

  isSideNavCollapsed = false;
  screenWidth= 0;

  onToggleSideNav(data: SideNavToggle): void {
      this.isSideNavCollapsed = data.collapsed;
      this.screenWidth = data.screenWidth;
  }
}
