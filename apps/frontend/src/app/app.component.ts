import { LayoutComponent } from '@angular-material-theming/layout';
import { ThemeService } from "@angular-material-theming/theme";
import { DOCUMENT } from '@angular/common';
import { Component, Renderer2, effect, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [LayoutComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'frontend';
  #themeService = inject(ThemeService);
  #document = inject(DOCUMENT);
  #renderer = inject(Renderer2);

  constructor() {
    effect(() => {
      this.#renderer.setAttribute(this.#document.documentElement, "class", this.#themeService.theme());
    });
  }
}
