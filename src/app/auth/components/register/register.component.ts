import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formData: any = {};


  constructor() { }

  ngOnInit(): void {
  }
           
  register(): void {
    console.log(this.formData);
  }
  reset() {
    this.formData.reset();

  }
}

