import { Component, Input, input } from '@angular/core';
import { Vacancies } from '../../models/vacancies';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() vacancy!: Vacancies;
}
