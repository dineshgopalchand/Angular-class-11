import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  contactOptions = [
    { id: 1, name: 'phone' },
    { id: 2, name: 'SMS' },
    { id: 3, name: 'Postal' },
    { id: 4, name: 'E-mail' },
    { id: 5, name: 'WhatsApp' },
    { id: 6, name: 'Social Media' }
  ];
  constructor() { }

  ngOnInit() {
  }

  inputLog(input: NgModel) {
    console.log(input);
  }
  submitFunction(form: NgForm) {
    console.log(form);
    // some http operation with argument of form.value
  }

}
