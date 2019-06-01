import { Component, OnInit } from '@angular/core';
// import { CourseService } from '../common/services/course.service';
import { CoursesService } from '../common/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  courseTitle = 'Course Name :';
  courseList = [];
  constructor(private courseObject: CoursesService) {
    // const courseObject = new CourseService();
    this.courseList = this.courseObject.courseList;
  }

  ngOnInit() {
  }

}
