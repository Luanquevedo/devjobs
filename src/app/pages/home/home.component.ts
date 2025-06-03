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
  isDarkMode = false;
  vacancies: Vacancies[] = [];
  filteredVacancies: Vacancies[] = [];

  constructor(private vacanciesService: VacanciesApiService) { }

  ngOnInit(): void {
    const theme = localStorage.getItem('theme');
    this.isDarkMode = theme === 'dark'
    this.upgradeTheme();
    this.vacanciesService.getAllVacancies().subscribe(data => {
      this.vacancies = data;
      this.filteredVacancies = data;
    });
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    const theme = this.isDarkMode ? '' : '';
    localStorage.setItem('theme', theme);
    this.upgradeTheme();
  }

  upgradeTheme() {
    const body = document.body;
    if (this.isDarkMode) {
      body.classList.add('dark-mode');
    } else {
      body.classList.remove('dark-mode');
    }
  }

  applyFilters(filters: {
    title: string;
    employer: string;
    location: string;
    model: boolean;
  }) {
    const filtered = this.vacancies.filter((vacancy) => {
      const titleMatch = vacancy.title.toLowerCase().includes(filters.title);
      const employerMatch = vacancy.employer.toLowerCase().includes(filters.employer);
      const locationMatch = vacancy.location.toLowerCase().includes(filters.location);
      const modelMatch = filters.model
        ? vacancy.model.toLowerCase() === 'full time'
        : true;

      return (titleMatch || employerMatch) && locationMatch && modelMatch;
    });

    // Se nada for digitado OU nada for encontrado, mostra tudo
    const isEverythingEmpty =
      !filters.title && !filters.employer && !filters.location && !filters.model;

    this.filteredVacancies = filtered.length > 0 || isEverythingEmpty
      ? filtered.length > 0 ? filtered : this.vacancies
      : this.vacancies;
  }
}
