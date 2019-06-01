import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-show',
  templateUrl: './pipe-show.component.html',
  styleUrls: ['./pipe-show.component.css'],
  styles: [`
  table,tr,td{
    border: 1px solid #d4d4d4;
}
  `]
})
export class PipeShowComponent implements OnInit {

  course = {
    title: 'Angular Course',
    rating: 4.75232,
    rating1: 4,
    students: 2000,
    price: 10000,
    releaseDate: new Date(2019, 19, 10),
    todayDate: new Date()
  };
  hightlightPram = 'Lorem';
  description = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quasi odit, itaque autem consequuntur
  incidunt quisquam sed nam nobis unde!
  Lorem ipsum dolor, sit amet consectetur
   adipisicing elit. Praesentium quasi odit, itaque autem consequuntur incidunt quisquam sed nam nobis unde!
  Lorem ipsum dolor, sit amet consectetur
   adipisicing elit. Praesentium quasi odit,
    itaque autem consequuntur incidunt quisquam sed nam nobis unde!
  Lorem ipsum dolor, sit amet consectetur
   adipisicing elit. Praesentium quasi odit,
   itaque autem consequuntur incidunt quisquam sed nam nobis unde!
  Lorem ipsum dolor, sit amet consectetur
  adipisicing elit. Praesentium quasi odit, itaque autem consequuntur incidunt quisquam sed nam nobis unde!
  Lorem ipsum dolor, sit amet consectetur
  adipisicing elit. Praesentium quasi odit, itaque autem consequuntur incidunt quisquam sed nam nobis unde!
  `;

  data = {
    country: 'IN',
    details: [
      {
        state: 'KA',
        details: [
          {
            institute: 'SMRIT',
            students: [
              {
                name: 'Dinesh'
              }
            ]

          }
        ]
      }
    ]
  };



  // course1 = [
  //   { key: 'title', value: 'Angular Course' },
  //   { key: 'rating', value: '4.723' },
  // ];


  currencyType = 'INR';
  constructor() {
    // for (const key in this.course) {
    //   if (this.course.hasOwnProperty(key)) {
    //     console.log(key, ' : ', this.course[key]);
    //   }
    // }
  }

  ngOnInit() {
  }

}
