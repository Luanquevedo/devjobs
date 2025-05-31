import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs';
import { Vacanancies } from '../models/vacanancies';

@Injectable({
  providedIn: 'root'
})
export class VacananciesApiService {

  private vacanancies: Vacanancies[] = [
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

}


