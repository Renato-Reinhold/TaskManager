import { Component } from '@angular/core';
import {BodyComponent} from "../../components/body/body.component";
import {SidenavComponent} from "../../components/sidenav/sidenav.component";

interface SideNavToggle {
    screenWidth: number;
    collapsed: boolean;
}

@Component({
  selector: 'app-home',
    imports: [
        BodyComponent,
        SidenavComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

    isSideNavCollapsed = false;
    screenWidth= 0;

    onToggleSideNav(data: SideNavToggle): void {
        this.isSideNavCollapsed = data.collapsed;
        this.screenWidth = data.screenWidth;
    }
}
