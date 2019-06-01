import { Component } from '@angular/core';

@Component({
    selector : 'app-course',
    // template : '<div>My course component: {{courseName}}</div><app-courses></app-courses>'
    // template : '<div>My course component:\
    // {{courseName}}</div><app-courses></app-courses>'
    // template : '<div>My course component:' +
    // '{{courseName}}</div><app-courses></app-courses>'
    template : `<div>
        My course component: {{courseName}}
        </div>
        <app-courses></app-courses>`

})
export class CourseComponent {
    courseName = 'Angular';
}
