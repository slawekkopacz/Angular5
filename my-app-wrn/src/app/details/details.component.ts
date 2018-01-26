import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  details = 'Password=tuna';
  showDetails = false;
  clicks = [];

  constructor() { }

  ngOnInit() {
  }

  onShowDetails() {
    this.showDetails = !this.showDetails;

    this.clicks.push('click');
  }

}
