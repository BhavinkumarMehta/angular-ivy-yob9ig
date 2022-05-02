import { Component, VERSION } from '@angular/core';
import { Customer } from '../Customer/customer.model';


@Component({
  selector: 'customer-app',
  templateUrl: './customer.view.html',
  styleUrls: ['../Customer/customer.component.css'],
})
export class CustomerComponent {
  title ="CustomerApplication";
  CustomerModel : Customer = new Customer();
}
