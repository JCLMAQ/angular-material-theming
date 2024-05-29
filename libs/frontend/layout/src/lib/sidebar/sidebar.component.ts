import { Component, inject } from '@angular/core';
import { MatListItem, MatNavList } from "@angular/material/list";
import { MatSidenav } from '@angular/material/sidenav';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { QuicklinkDirective } from "ngx-quicklink";
import { SIDEBAR_LINKS } from './sidebar-options';

@Component({
  selector: 'lib-sidebar',
  standalone: true,
  imports: [
    MatNavList,
    MatListItem,
    RouterLink,
    RouterLinkActive,
    QuicklinkDirective
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  #sidenav = inject(MatSidenav);
  sidebarLinks = SIDEBAR_LINKS;

  closeSidenav() {
    if (this.#sidenav.mode === "over") {
      this.#sidenav.close();
    }
  }
}
