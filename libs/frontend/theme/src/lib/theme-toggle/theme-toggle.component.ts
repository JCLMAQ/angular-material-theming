import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconButton } from "@angular/material/button";
import { MatDialog } from '@angular/material/dialog';
import { MatIcon } from "@angular/material/icon";
import { MatTooltip } from "@angular/material/tooltip";
import { ThemePickerDialogComponent } from '../theme-picker-dialog/theme-picker-dialog.component';

@Component({
  selector: 'lib-theme-toggle',
  standalone: true,
  imports: [CommonModule, MatIcon, MatIconButton, MatTooltip],
  templateUrl: './theme-toggle.component.html',
  styleUrl: './theme-toggle.component.scss',
})
export class ThemeToggleComponent {
  #dialog = inject(MatDialog);

  openThemePicker() {
    this.#dialog.open(ThemePickerDialogComponent);
  }
}
