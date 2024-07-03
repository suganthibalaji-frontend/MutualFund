import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
@Component({
  selector: 'app-myaccounts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './myaccounts.component.html',
  styleUrl: './myaccounts.component.css',
})
export class MyaccountsComponent {
  constructor(private router: Router) {}
  createFund() {
    this.router.navigate(['create-fund']);
  }
}
