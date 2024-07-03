import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class UserService {
  isLoggedIn(): boolean {
    let userInfo =  localStorage.getItem('userIn');
    if(String(userInfo).toLowerCase() === 'true') {
        return true;
    }
    return false; // Switch to `false` to make OnlyLoggedInUsersGuard work
  }

}