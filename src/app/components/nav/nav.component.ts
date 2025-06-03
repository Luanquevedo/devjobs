import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  @Input() isDarkMode!: boolean;
  @Output() toggleTheme = new EventEmitter<void>();

  onToggleTheme() {
    this.toggleTheme.emit();
  }
}
