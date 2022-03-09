import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formData: any = {};
  constructor() { }

  ngOnInit() {
  }
 login(): void {
    console.log(this.formData);
  }
 
}
