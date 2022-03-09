import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-make-quote',
  templateUrl: './make-quote.component.html',
  styleUrls: ['./make-quote.component.scss']
})
export class MakeQuoteComponent implements OnInit {
  formData: any = {};
    _location: any;
  constructor(private location: Location) { }

  back(): void {
    this.location.back()
  }

  ngOnInit(): void {
  }
  reset() {
    this.formData.reset();
  }

}
