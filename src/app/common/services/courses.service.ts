import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courseList = [
    { id: 1, name: 'HTML' },
    { id: 23, name: 'CSS' },
    { id: 3, name: 'JavaScript' },
    { id: 4, name: 'TypeScript' },
    { id: 5, name: 'Angular' },
    { id: 6, name: 'NodeJS' },
    { id: 10, name: '.net' },
  ];


  // menu=[
  //   {name:'home',url:''},
  //   {name:'contact',url:'/contact'}
  // ]
  constructor(private http: HttpClient) {
  }
}
