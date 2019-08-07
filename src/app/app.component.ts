import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test-feature-flags';
  username = '';

  constructor(private user: UserService) { }

  setUser(name: string): void {
    this.user.setUser(name);
  }
}
