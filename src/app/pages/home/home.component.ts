import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from '../../components/search-bar/search-bar.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { NavComponent } from '../../components/nav/nav.component';
import { Vacancies } from '../../models/vacancies';
import { VacanciesApiService } from '../../services/vacancies-api.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, // necessario para utilizar map
    SearchBarComponent,
    NavComponent,
    CardsComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
vacancies: Vacancies[] = [];

constructor(private vacanciesService: VacanciesApiService) {}

ngOnInit(): void {
  this.vacanciesService.getAllVacancies().subscribe(data => {
    this.vacancies = data;
  });
}

}
