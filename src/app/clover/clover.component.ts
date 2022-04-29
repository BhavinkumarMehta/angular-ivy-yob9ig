import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clover',
  templateUrl: './clover.component.html',
  styleUrls: ['./clover.component.css'],
})
export class cloverComponent {
  CloverEmployees = [
    { fname: 'Bhavin', lname: 'Mehta' },
    { fname: 'Sandesh', lname: 'Lohot' },
    { fname: 'Rajan', lname: 'Dhulap' },
  ];
}
