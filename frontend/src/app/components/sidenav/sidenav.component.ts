import {Component, Output, EventEmitter, OnInit, HostListener} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgClass, NgFor} from '@angular/common';
import { NgIf } from '@angular/common';
import { navbarData } from './data-data';

interface SideNavToggle {
    screenWidth: number;
    collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
    imports: [
        MatIcon,
        RouterLink,
        NgIf,
        NgFor,
        NgClass,
        RouterLinkActive
    ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})

export class SidenavComponent implements OnInit {

    @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
    collapsed = false;
    screenWidth= 0;
    navData = navbarData;

    @HostListener('window:resize', ['$event'])
    onResize() {
        this.screenWidth = window.innerWidth;
        if (window.innerWidth < 768) {
            this.collapsed = false;
            this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
        }
    }

    ngOnInit() {
        this.screenWidth = window.innerWidth;
    }

    toggleCollapse(): void {
        this.collapsed = !this.collapsed;
        this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }

    closeSidenav(): void {
        this.collapsed = false;
        this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }

}
