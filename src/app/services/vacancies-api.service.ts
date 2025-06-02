import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs';
import { Vacancies } from '../models/vacancies';

@Injectable({
  providedIn: 'root'
})
export class VacanciesApiService {

  private vacancies: Vacancies[] = [
    {
      id: 1,
      employer: 'Scoot',
      title: 'Senior Software Engineer',
      model: 'Full Time',
      location: 'United Kingdom',
      icon: '/img/scoot.png',
      timestamp: '5h'
    },
    {
      id: 2,
      employer: 'Blogr',
      title: 'Haskell and PureScript Dev',
      model: 'Part Time',
      location: 'United States',
      icon: '/img/blogr.png',
      timestamp: '20h'
    },
    {
      id: 3,
      employer: 'Vector',
      title: 'Midlevel Back End Engineer ',
      model: 'Part Time',
      location: 'Russia',
      icon: '/img/vector.png',
      timestamp: '1d'
    },
    {
      id: 4,
      employer: 'Office Lite',
      title: 'Senior Application Engineer',
      model: 'Full Time',
      location: 'Japan',
      icon: '/img/office Lite.png',
      timestamp: '2d'
    },
    {
      id: 5,
      employer: 'Pod',
      title: 'Remote DevOps Engineer',
      model: 'Part Time',
      location: 'Thailand',
      icon: '/img/pod.png',
      timestamp: '2d'
    },
    {
      id: 6,
      employer: 'Creative',
      title: 'Desktop Support Manager',
      model: 'Part Time ',
      location: 'Germany',
      icon: '/img/creative.png',
      timestamp: '4d'
    },
    {
      id: 7,
      employer: 'Pomodoro',
      title: 'iOS Engineer',
      model: 'Full Time',
      location: 'United States',
      icon: '/img/pomodoro.png',
      timestamp: '1w'
    },
    {
      id: 8,
      employer: 'Maker',
      title: 'Senior EJB Developer',
      model: 'Full Time',
      location: 'United Kingdom',
      icon: '/img/maker.png',
      timestamp: '1w'
    },
    {
      id: 9,
      employer: 'Coffeeroasters',
      title: 'Senior Frontend Developer',
      model: 'Part Time',
      location: 'Singapore',
      icon: '/img/coffeeroasters.png',
      timestamp: '1w'
    },
    {
      id: 10,
      employer: 'Mastercraft',
      title: 'App & Website Designer',
      model: 'Full Time',
      location: 'United States',
      icon: '/img/mastercraft.png',
      timestamp: '1w'
    },
    {
      id: 11,
      employer: 'Crowdfund',
      title: 'Fullstack Developer',
      model: 'Part Time',
      location: 'New Zealand',
      icon: '/img/crowdfund.png',
      timestamp: '1mo'
    },
    {
      id: 12,
      employer: 'Typemaster',
      title: 'Technical Lead Engineer',
      model: 'Part Time',
      location: 'United Kingdom',
      icon: '/img/typemaster.png',
      timestamp: '4d'
    },
  ];

  getAllVacancies(): Observable<Vacancies[]> {
    return of(this.vacancies).pipe(delay(500)); //get
  }

  getVacanciesById(id: number): Observable<Vacancies> {
    const vacancies = this.vacancies.find(v => v.id === id);
    return vacancies
    ? of(vacancies).pipe(delay(300))
    : throwError(() => new Error("Usuario nao localizado"));
  }

  createVacancies(data: Omit<Vacancies, 'id'>): Observable<Vacancies> {
    const newVacancies: Vacancies = {
      id: Math.max(...this.vacancies.map(v => v.id)) + 1,
      ...data
    };

    this.vacancies.push(newVacancies);
    return of(newVacancies).pipe(delay(300)); //POST
  }

  deleteVacancies(id: number): Observable<boolean> {
    const index = this.vacancies.findIndex(v => v.id === id);
    if (index > -1) {
      this.vacancies.splice(index, 1);
      return of(true).pipe(delay(300)); // DELETE
    }
    return throwError(() => new Error('usuario nao localizado'));
  }

}


