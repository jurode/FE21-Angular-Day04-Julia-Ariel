import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  contactMe = new FormGroup({
    name: new FormControl('', Validators.requiredTrue),
    mail: new FormControl(''),
    content: new FormControl('')
   });
   
  constructor() {  }

  ngOnInit(): void {
  }

}
