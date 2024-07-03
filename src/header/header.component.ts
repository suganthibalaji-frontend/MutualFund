import { Component } from '@angular/core';
import { RouterLink, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private router: Router) {}
  userLogout() {
    localStorage.setItem('userIn', 'false');
    this.router.navigate(['/', 'login']);
  }
}
