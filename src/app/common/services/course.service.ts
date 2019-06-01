import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {
    courseList = [
        { id : 1, name: 'HTML'},
        { id : 23, name: 'CSS'},
        { id : 3, name: 'JavaScript'},
        { id : 4, name: 'TypeScript'},
        { id : 5, name: 'Angular'},
        { id : 6, name: 'NodeJS'},
        { id : 9, name: '.net'},
      ];
}
