import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{ HighchartsChartModule } from 'highcharts-angular';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../user-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HighchartsChartModule, HeaderComponent, CommonModule],
  providers: [UserService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor( private uService: UserService) {}
  ngOnInit(): void {
    this.getUserLoggedin();
  }
  getUserLoggedin(){
    return this.uService.isLoggedIn();
  }
 
}