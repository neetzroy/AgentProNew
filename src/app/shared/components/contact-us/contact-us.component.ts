import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  _location: any;
  constructor(private location: Location) { }

  back(): void {
    this.location.back()
  }
  ngOnInit(): void {
  }

}
