import { Injectable , inject} from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
 import { UserService } from './user-service.service';
 
@Injectable({
    providedIn: 'root'
  })
  class PermissionsService {
  
    constructor(private router: Router, private uService: UserService) {}
  
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

        if(!this.uService.isLoggedIn()){
            this.router.navigate(['login']);
        }
        //handle when user logged in and try to navigate login page.
        return true;
    }
  }
  
  export const AuthGuard: CanActivateFn = (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    return inject(PermissionsService).canActivate(next, state);
  }