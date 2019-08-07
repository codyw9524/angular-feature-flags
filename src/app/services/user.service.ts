import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];
  user: User;
  userSource: BehaviorSubject<User> = new BehaviorSubject(null);
  user$: Observable<User> = this.userSource.asObservable();

  constructor() {
    const names = ['Jim', 'Sarah', 'Carl'];
    const featureFlagA = { a: true, b: false, c: false };
    const featureFlagB = { a: false, b: true, c: false };
    const featureFlagC = { a: true, b: true, c: true };
    const featureFlags = [featureFlagA, featureFlagB, featureFlagC];
    for(let i = 0; i < names.length; i++) {
      this.users.push(new User({
        name: names[i],
        featureFlags: featureFlags[i]
      }));
    }
  }

  hasFlags(flags: string | string[]) {
    if (this.user) {
      return this.user.hasFlags(flags);
    }
    return false;
  }

  getUser(name: string) {
    const user = this.users.find(x => x.name === name);
    return user ? user : null;
  }

  setUser(name: string) {
    const user = this.getUser(name);
    this.user = user;
    this.userSource.next(this.user);
  }

}
