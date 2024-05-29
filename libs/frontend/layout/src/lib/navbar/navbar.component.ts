import { ThemeToggleComponent } from '@angular-material-theming/theme';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-navbar',
  standalone: true,
  imports: [CommonModule, ThemeToggleComponent, NgOptimizedImage],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
