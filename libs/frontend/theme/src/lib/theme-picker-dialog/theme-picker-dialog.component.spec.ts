import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThemePickerDialogComponent } from './theme-picker-dialog.component';

describe('ThemePickerDialogComponent', () => {
  let component: ThemePickerDialogComponent;
  let fixture: ComponentFixture<ThemePickerDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemePickerDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemePickerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
