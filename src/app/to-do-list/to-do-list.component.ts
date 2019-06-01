import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  form = new FormGroup({
    topics: new FormArray([])
  });

  constructor() { }
  addTopic(newTopic: HTMLInputElement) {
    console.log(newTopic.value);
    (this.topics as FormArray).push(new FormControl(newTopic.value));
    newTopic.value = '';
  }
  ngOnInit() {
  }
  get topics(): FormArray {
    // console.log(this.form.get('topics'));
    return this.form.get('topics') as FormArray;
  }
  deleteTopic(item: FormControl) {
    const indexVal = this.topics.controls.indexOf(item);
    // this.topics.splice(indexVal, 1);
    this.topics.removeAt(indexVal);
  }

}
