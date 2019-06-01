import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-handling',
  templateUrl: './data-handling.component.html',
  styleUrls: ['./data-handling.component.css']
})
export class DataHandlingComponent implements OnInit {
  title = 'Displaying Data and Handling Event';
  imgWidth = 100;
  // imgHeight = 100;
  rowSpan = 2;
  colSpan = 2;
  imgSrc = 'https://dummyimage.com/100x100/ba98ba/00076e.jpg&text=Dummy+Image';
  isValid = false;
  inputFieldValue = 'Angular';
  constructor() { }
  overHandler($event: Event) {
    console.log($event);
  }
  clickHandler($event: Event) {
    $event.stopPropagation();
    // console.log($event);
    const value = ($event.target as HTMLInputElement).value;
    console.log(value);
    console.log('event', $event);

    this.isValid = !this.isValid;
  }
  parentClick() {
    console.log('Parent is clicked');
  }
  getInput(ev) {
    console.log('event', ev);
    // if (ev.keyCode === 13) {
    console.log('value', ev.target.value);
    // }
  }
  getInput1(input: HTMLInputElement) {
    // console.log(input.getElementsByTagName('input')[0].value);
    // console.log('value', input.value);
    // this.inputFieldValue = input.value;
    console.log('value', this.inputFieldValue);
  }
  ngOnInit() {
    // setInterval(() => {
    //   this.isValid = !this.isValid;
    // }, 500);
  }

}
