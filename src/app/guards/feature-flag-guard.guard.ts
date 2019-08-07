import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class FeatureFlagGuardGuard implements CanActivate {

  constructor(private user: UserService) { }

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    return this.user.hasFlags(route.data.flags);
  }
}
