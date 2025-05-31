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
      icon: '',
      timestamp: 5
    },
    {
      id: 2,
      employer: 'Scoot',
      title: 'Senior Software Engineer',
      model: 'Full Time',
      location: 'United Kingdom',
      icon: '',
      timestamp: 5
    },
    {
      id: 3,
      employer: 'Scoot',
      title: 'Senior Software Engineer',
      model: 'Full Time',
      location: 'United Kingdom',
      icon: '',
      timestamp: 5
    },
    {
      id: 4,
      employer: 'Scoot',
      title: 'Senior Software Engineer',
      model: 'Full Time',
      location: 'United Kingdom',
      icon: '',
      timestamp: 5
    },
    {
      id: 5,
      employer: 'Scoot',
      title: 'Senior Software Engineer',
      model: 'Full Time',
      location: 'United Kingdom',
      icon: '',
      timestamp: 5
    },
    {
      id: 6,
      employer: 'Scoot',
      title: 'Senior Software Engineer',
      model: 'Full Time',
      location: 'United Kingdom',
      icon: '',
      timestamp: 5
    },
    {
      id: 7,
      employer: 'Scoot',
      title: 'Senior Software Engineer',
      model: 'Full Time',
      location: 'United Kingdom',
      icon: '',
      timestamp: 5
    },
    {
      id: 8,
      employer: 'Scoot',
      title: 'Senior Software Engineer',
      model: 'Full Time',
      location: 'United Kingdom',
      icon: '',
      timestamp: 5
    },
    {
      id: 9,
      employer: 'Scoot',
      title: 'Senior Software Engineer',
      model: 'Full Time',
      location: 'United Kingdom',
      icon: '',
      timestamp: 5
    },
    {
      id: 10,
      employer: 'Scoot',
      title: 'Senior Software Engineer',
      model: 'Full Time',
      location: 'United Kingdom',
      icon: '',
      timestamp: 5
    },
    {
      id: 11,
      employer: 'Scoot',
      title: 'Senior Software Engineer',
      model: 'Full Time',
      location: 'United Kingdom',
      icon: '',
      timestamp: 5
    },
    {
      id: 12,
      employer: 'Scoot',
      title: 'Senior Software Engineer',
      model: 'Full Time',
      location: 'United Kingdom',
      icon: '',
      timestamp: 5
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


