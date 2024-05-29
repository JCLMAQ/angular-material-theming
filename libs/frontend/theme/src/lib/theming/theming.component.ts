import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'lib-theming',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theming.component.html',
  styleUrl: './theming.component.scss',
})
export class ThemingComponent {}
