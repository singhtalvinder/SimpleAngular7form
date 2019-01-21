import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  messageForm: FormGroup;
  submitted = false; // for form submission
  success = false; // for values validation

  constructor(private formBuilder: FormBuilder) {
    this.messageForm = this.formBuilder.group({
      name: ['', Validators.required],
      message: ['', Validators.required]
    })
   }

  onSubmit() {
    this.submitted = true;

    if(this.messageForm.invalid) {
      return;
    }

    // TODO: Connect to a backend and submit the data for storage.
    this.success = true;
  }
  ngOnInit() {
  }

}
