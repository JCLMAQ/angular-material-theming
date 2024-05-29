import { NavbarComponent, SidebarComponent } from "@angular-material-theming/layout";
import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, inject } from "@angular/core";
import { toSignal } from "@angular/core/rxjs-interop";
import { MatButton, MatIconButton } from "@angular/material/button";
import { MatIcon } from "@angular/material/icon";
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from "@angular/material/sidenav";
import { MatToolbar } from "@angular/material/toolbar";
import { map, shareReplay } from "rxjs/operators";


@Component({
  selector: "lib-layout",
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.scss",
  standalone: true,
  imports: [
    MatToolbar,
    MatSidenavContainer,
    MatSidenavContent,
    MatSidenav,
    MatIcon,
    MatButton,
    MatIconButton,
    NavbarComponent,
    SidebarComponent,
  ],
})
export class LayoutComponent {
  #breakpointObserver = inject(BreakpointObserver);

  isMobile = toSignal(
    this.#breakpointObserver.observe("(max-width: 768px)").pipe(
      map((result) => result.matches),
      shareReplay()
    )
  );
}
