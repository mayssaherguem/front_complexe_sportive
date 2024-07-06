import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  list_data= ["Nombre Adhérents", "Nombre Coach", "", "Revenues"]
  constructor() { }

  ngOnInit(): void {
  }

}
